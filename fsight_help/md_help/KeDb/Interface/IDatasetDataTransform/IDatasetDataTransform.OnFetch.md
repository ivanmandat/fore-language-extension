# IDatasetDataTransform.OnFetch

IDatasetDataTransform.OnFetch
-


# IDatasetDataTransform.OnFetch


## Синтаксис


OnFetch(Var Values: Array): Integer;


## Параметры


Values. Одномерный массив, содержащий данные одной строки источника данных, которые необходимо преобразовать.


## Описание


Метод OnFetch реализует пользовательский преобразователь данных.


## Комментарии


Данный метод должен быть переопределен в пользовательском классе.


Метод будет выполняться для каждой строки подключенного [источника данных](../IDatasetDataTransformProvider/IDatasetDataTransformProvider.Source.htm). Параметр Values будет содержать данные строки, обрабатываемой в текущий момент. Именно в этом массиве данные могут быть изменены. Результат работы метода должен быть следующим:


-
«-1» или «-2» - Импорт данных необходимо прекратить немедленно.


-
«0» - Строка обработана, содержит корректные данные и может быть импортирована.


-
Меньше «-2», либо больше «0» - Строка содержит некорректные данные и должна быть пропущена.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных временных рядов с идентификатором «FC». В данной базе создан атрибут, ссылающийся на справочник НСИ с идентификатором «COUNTRY». Справочник создан в репозитории НСИ с идентификатором «RDS». В справочнике НСИ создан дополнительный целочисленный атрибут Code. В базе данных временных рядов используется годовая динамика.


			Class TransformData: Object, IDatasetDataTransform

    Public Function OnFetch(Var Values: Array): Integer;

    Begin

        If <Условие, при котором необходимо прекратить импорт> Then
            Return - 1;

        Elseif <Условие, при котором необходимо пропустить запись> Then
            Return 1;

        Else

            //Изменение данных в массиве Values
            Return 0;

        End If;

    End Function OnFetch;

End Class TransformData;


Function OpenTransformProvider: IDatasetDataTransformProvider;

Var

    TransformProvider: IDatasetDataTransformProvider;

Begin

    TransformProvider := New DatasetDataTransformProvider.Create;

    TransformProvider.Source := <Источник данных, данные которого будут преобразованы перед импортом>;

    TransformProvider.Transform := New TransformData.Create;

    Return TransformProvider;

End Function OpenTransformProvider;


Sub LoadTransformData;

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

    CubeMetaLoader.Data := OpenTransformProvider;

    CubeMetaLoader.LoadData;

End Sub LoadTransformData;


Функция «OpenTransformProvider» реализует пользовательский источник данных, загружающий и преобразующий данные из какого-либо другого источника. При выполнении процедуры «LoadTransformData» будет создан загрузчик показателей. Будут настроены параметры привязки атрибутов, а также в качестве источника данных будет указан пользовательский источник данных. После этого будет произведена загрузка данных. Преобразование будет происходить в методе «OnFetch» объекта «TransformData».


См. также:


[IDatasetDataTransform](IDatasetDataTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
