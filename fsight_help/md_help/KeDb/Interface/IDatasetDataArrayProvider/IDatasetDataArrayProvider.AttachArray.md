# IDatasetDataArrayProvider.AttachArray

IDatasetDataArrayProvider.AttachArray
-


# IDatasetDataArrayProvider.AttachArray


## Синтаксис


AttachArray(Value: Array);


## Параметры


Value. Массив, из которого будут загружены данные.


## Описание


Метод AttachArray загружает данные из массива в источник данных.


## Комментарии


Размерность массива должна соответствовать количеству и размеру полей, которые созданы в источнике данных.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных временных рядов с идентификатором «FC». В данной базе создан атрибут, ссылающийся на справочник НСИ с идентификатором «COUNTRY». Справочник создан в репозитории НСИ с идентификатором «RDS». В справочнике НСИ создан дополнительный целочисленный атрибут Code. Также в справочнике НСИ созданы элементы со следующими значениями атрибутов:


-
Code - 1; Name - "Россия".


-
Code - 2; Name - "США".


В справочнике единиц измерения создан элемент с ключом «69». В базе данных временных рядов используется годовая динамика.


Function OpenArrayProvider: IDatasetDataArrayProvider;


	Function OpenArrayProvider: IDatasetDataArrayProvider;

	Var

	    ArrayProvider: IDatasetDataArrayProvider;

	    Arr: Array Of Variant;

	    TField: ITableField;

	    Row: Integer = 1000; //Количество строк с данными

	Begin

	    Arr := New Variant[Row, 5];

	    Arr[0, 0] := 1; Arr[0, 1] := "Россия"; Arr[0, 2] := 69; Arr[0, 3] := "1997A1"; Arr[0, 4] := 11.178;

	    Arr[1, 0] := 1; Arr[1, 1] := "Россия"; Arr[1, 2] := 69; Arr[1, 3] := "1998A1"; Arr[1, 4] := 20.123;

	    Arr[2, 0] := 1; Arr[2, 1] := "Россия"; Arr[2, 2] := 69; Arr[2, 3] := "1999A1"; Arr[2, 4] := 21.67;

	    Arr[3, 0] := 1; Arr[3, 1] := "Россия"; Arr[3, 2] := 69; Arr[3, 3] := "2000A1"; Arr[3, 4] := 22.458;

	    Arr[4, 0] := 1; Arr[4, 1] := "Россия"; Arr[4, 2] := 69; Arr[4, 3] := "2001A1"; Arr[4, 4] := 23.178;

	    Arr[5, 0] := 2; Arr[5, 1] := "США"; Arr[5, 2] := 69; Arr[5, 3] := "1997A1"; Arr[5, 4] := 22.167;

	    Arr[6, 0] := 2; Arr[6, 1] := "США"; Arr[6, 2] := 69; Arr[6, 3] := "1998A1"; Arr[6, 4] := 25.12;

	    //Остальные данные...

	    ArrayProvider := New DatasetDataArrayProvider.Create;

	    ArrayProvider.AddField("Code", DbDataType.Integer);

	    ArrayProvider.AddField("Country", DbDataType.String);

	    ArrayProvider.AddField("Units", DbDataType.Integer);

	    ArrayProvider.AddField("Year", DbDataType.String);

	    ArrayProvider.AddField("Value", DbDataType.Float);

	    ArrayProvider.AttachArray(Arr);

	    Return ArrayProvider;

	End Function OpenArrayProvider;


Sub LoadDataFromArray;

Var

    Mb: IMetabase;

    RubDesc, NSIDesc: IMetabaseObjectDescriptor;

    CubeMetaLoader: ICubeMetaLoader;

    CrInfo: IMetabaseObjectCreateInfo;

    Obj: IMetabaseObject;

    ObjDesc: IMetabaseObjectDescriptor;

    Bindings: ICubeMetaLoaderBindings;

    Binding: ICubeMetaLoaderBinding;

Begin

    Mb := MetabaseClass.Active;

    RubDesc := Mb.ItemById("FC");

    NSIDesc := Mb.ItemById("RDS");


    // Объект импорта
    CrInfo := Mb.CreateCreateInfo;

    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_CUBEMETALOADER;

    CrInfo.Id := "CUBEMETALOADER";

    CrInfo.Permanent := False;

    CrInfo.Parent := RubDesc;

    ObjDesc := Mb.CreateObject(CrInfo);

    Obj := ObjDesc.Edit;

    CubeMetaLoader := Obj As ICubeMetaLoader;


    //Привязка атрибутов
    Bindings := CubeMetaLoader.Bindings;


    Binding := Bindings.Add;

    Binding.BindingType := CubeMetaLoaderBindingType.Attribute;

    Binding.Attribute := "COUNTRY";

    Binding.FieldType := CubeMetaLoaderFieldType.Index;

    Binding.Field := "0";

    Binding.CheckField := "1";

    Binding.Dimension := Mb.ItemByIdNamespace("COUNTRY", NsiDesc.Key).Bind As IDimensionModel;

    Binding.Index := "UNIQUEKEY";

    Binding.KeyAttribute := "KEY";

    Binding.NameAttribute := "NAME";


    Binding := Bindings.Add;

    Binding.BindingType := CubeMetaLoaderBindingType.Unit;

    Binding.FieldType := CubeMetaLoaderFieldType.Index;

    Binding.Field := "2";

    Binding.Dimension := Mb.ItemByIdNamespace("UNITS", NSIDesc.Key).Bind As IDimensionModel;

    Binding.Index := "PRIMARY_INDEX";

    Binding.KeyAttribute := "KEY";


    Binding := Bindings.Add;

    Binding.BindingType := CubeMetaLoaderBindingType.Calendar;

    Binding.CalendarOptions.Levels := DimCalendarLevelSet.Year;

    Binding.ByColumns := False;

    Binding.CalendarDateFormat := "$Year$A1";

    Binding.FieldType := CubeMetaLoaderFieldType.Index;

    Binding.Field := "3";


    Binding := Bindings.Add;

    Binding.BindingType := CubeMetaLoaderBindingType.Value;

    Binding.FieldType := CubeMetaLoaderFieldType.Index;

    Binding.Field := "4";


    Binding := Bindings.Add;

    Binding.BindingType := CubeMetaLoaderBindingType.Attribute;

    Binding.Attribute := "DL";

    Binding.FieldType := CubeMetaLoaderFieldType.ConstValue;

    Binding.FieldValue := DimCalendarLevel.Year;


    //Настройки загрузчика
    CubeMetaLoader.LoadType := CubeMetaLoaderLoadType.CreateAndUpdate;

    CubeMetaLoader.Rubricator := RubDesc.Bind As IRubricator;

    CubeMetaLoader.Data := OpenArrayProvider;

    CubeMetaLoader.LoadData;

End Sub LoadDataFromArray;


Функция «OpenArrayProvider» реализует пользовательский источник данных, загружающий данные из массива. При выполнении процедуры «LoadDataFromArray» будет создан загрузчик показателей. Будут настроены параметры привязки атрибутов, а также в качестве источника данных будет указан пользовательский источник данных. После этого будет произведена загрузка данных.


См. также:


[IDatasetDataArrayProvider](IDatasetDataArrayProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
