# ICubeMetaLoaderLogEntry.DestField

ICubeMetaLoaderLogEntry.DestField
-


# ICubeMetaLoaderLogEntry.DestField


## Синтаксис


DestField: Integer;


## Описание


Свойство DestField возвращает
 номер поля в приёмнике данных.


## Комментарии


Для получения номера соответствующего поля в источнике данных используйте
 свойство [ICubeMetaLoaderLogEntry.SourceField](ICubeMetaLoaderLogEntry.SourceField.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором TSDB_UNPIVOT, содержащей атрибуты временных
 рядов с идентификаторами COUNTRY и INDICATOR. Атрибут COUNTRY должен быть
 ссылкой на справочник НСИ, а атрибут INDICATOR - ссылкой на табличный
 справочник НСИ.


В файловой системе должен содержаться файл «D:\Indicator_Data.xlsx»,
 содержащий лист сданными, имеющий наименование «Лист1».


Добавьте ссылки на системные сборки: Cubes, Db, Dimensions, Dt, Metabase,
 Rds.


[![](../../Opened.gif)![](../../Closed.gif)Содержимое листа
 «Лист1» в файле «D:\Indicator_Data.xlsx»](javascript:TextPopup(this))


			 A


			 B


			 C


			 D


			E


			F


			G


			H


			I


			 1


			 Current
			 account balance


			 2


			 BCA


			 3


			 Country
			 Key


			 Indicator
			 Key


			 2001


			 2001A


			 2002


			 2002A


			 2003


			 2003A


			 4


			 Albania


			 11


			 204181


			 10


			 g


			 11


			 w


			 12


			 q


			 5


			 Afghanistan


			 19


			 204181


			 20


			 h


			 21


			 t


			 22


			 w


			 6


			 Angola


			 47


			 204181


			 30


			 y


			 31


			 b


			 32


			 e


	Совет. Для самостоятельного
	 выполнения примера вы можете создать файл «Indicator_Data.xlsx». Просто
	 скопируйте данные из таблицы выше и сохраните их с помощью приложения
	 Microsoft Excel под требуемым именем на диске «D».


	Sub UserProc;

	Var

	    mb: IMetabase;

	    desc: IMetabaseObjectDescriptor;

	    importObject: IImportRequestDefinition;

	    createInfo: IMetabaseObjectCreateInfo;

	    params: IImportRequestProviderParams;

	    importBinding: ICubeMetaLoaderBinding;

	    Bindings: ICubeMetaLoaderBindings;

	    rdsDictionary: IRdsDictionary;

	    excel: IDtExcelProviderEx;

	    instance: IImportRequestInstance;

	    importResult: IImportRequestResult;

	    Log: ICubeMetaLoaderLog;

	    LogStr: String;

	    count, i: Integer;

	    entry: ICubeMetaLoaderLogEntry;

	    rub: IRubricator;

	    Unpivot: IDtUnpivotProvider;

	    Attributes: IMetaAttributes;

	Begin

	    MB := MetabaseClass.Active;


	    // Получаем и очищаем базу данных временных рядов

	    desc := mb.ItemById("TSDB_UNPIVOT");

	    rub := desc.Bind As IRubricator;

	    rub.Truncate;

	    // Создаем объект для импорта временных рядов

	    createInfo := mb.CreateCreateInfo;

	    createInfo.ClassId := MetabaseObjectClass.KE_CLASS_IMPORTREQUEST;

	    // Задаем параметры объекта

	    createInfo.Name := "Импорт из файла";

	    createInfo.KeepEdit := True;

	    createInfo.Permanent := False;

	    createInfo.Parent := desc;


	    importObject := mb.CreateObject(createInfo) As IImportRequestDefinition;

	    // Задаем тип источника, из которого будут импортироваться данные

	    importObject.SourceType := ImportRequestSourceType.Provider;

	    // Задаем базу данных временных рядов, в которую будут импортироваться данные

	    importObject.DestinationRubricator := desc.Bind As IRubricator;

	    // Задаем параметры импорта

	    params := importObject.ProviderParams;

	    // Снимаем ограничение на максимальное количество ошибок в отчете о импорте данных

	    (params As ICubeMetaLoader).Log.MaxErrors := -1;

	    // Получаем привязки атрибутов

	    Bindings := params.Bindings;

	    // Получаем атрибуты временных рядов;

	    Attributes := rub.Facts.Attributes;

	    // Получаем справочник, на который ссылается атрибут «COUNTRY»

	    desc := Attributes.FindById("COUNTRY").ValuesObject;

	    rdsDictionary := desc.Bind As IRdsDictionary;


	    // Создаем привязку для атрибута «COUNTRY»

	    importBinding := Bindings.Add;

	    importBinding.BindingType := CubeMetaLoaderBindingType.Attribute;

	    importBinding.Attribute := "COUNTRY";

	    importBinding.Dimension := rdsDictionary As IDimensionModel;

	    importBinding.KeyAttribute := rdsDictionary.Attributes.Key.Id;

	    importBinding.Index := rdsDictionary.UniqueKeys.Item(0).Id;

	    // Указываем, что данные для атрибута будут браться по номеру поля в источнике данных

	    importBinding.FieldType := CubeMetaLoaderFieldType.Index;

	    // Указываем номер поля

	    importBinding.Field := "0";

	    // Получаем справочник, на который ссылается атрибут «INDICATOR»

	    desc := Attributes.FindById("INDICATOR").ValuesObject;

	    rdsDictionary := desc.Bind As IRdsDictionary;


	    // Создаем привязку для атрибута «INDICATOR»

	    importBinding := Bindings.Add;

	    importBinding.BindingType := CubeMetaLoaderBindingType.Attribute;

	    importBinding.Attribute := "INDICATOR";

	    importBinding.Dimension := rdsDictionary As IDimensionModel;

	    importBinding.KeyAttribute := rdsDictionary.Attributes.Key.Id;

	    importBinding.Index := rdsDictionary.UniqueKeys.Item(1).Id;

	    // Указываем, что данные для атрибута будут браться по номеру поля в источнике данных

	    importBinding.FieldType := CubeMetaLoaderFieldType.Index;

	    // Указываем номер поля

	    importBinding.Field := "1";

	    // Получаем справочник, на который ссылается атрибут «UNIT»

	    desc := Attributes.FindById("UNIT").ValuesObject;

	    rdsDictionary := desc.Bind As IRdsDictionary;


	    // Создаем привязку для атрибута «UNIT»

	    importBinding := Bindings.Add;

	    importBinding.BindingType := CubeMetaLoaderBindingType.Unit;

	    importBinding.Dimension := rdsDictionary As IDimensionModel;

	    importBinding.KeyAttribute := rdsDictionary.Attributes.Key.Id;

	    importBinding.Index := rdsDictionary.UniqueKeys.Item(0).Id;

	    // Указываем, что в качестве данных атрибута будет браться заданное значение

	    importBinding.FieldType := CubeMetaLoaderFieldType.ConstValue;

	    // Задаем значение атрибута

	    importBinding.FieldValue := 1 As Variant;

	    // Создаем привязку для календаря

	    importBinding := Bindings.Add;

	    importBinding.BindingType := CubeMetaLoaderBindingType.Calendar;

	    importBinding.ByColumns := False;

	    importBinding.CalendarDateFormatEx(DimCalendarLevel.Year) := "$Year$";

	    importBinding.CalendarOptions.Levels := DimCalendarLevelSet.Year;

	    // Указываем, что данные для календаря будут браться по номеру поля в источнике данных

	    importBinding.FieldType := CubeMetaLoaderFieldType.Index;

	    // Указываем номер поля

	    importBinding.Field := "2";


	    // Создаем привязку для значений временных рядов

	    importBinding := Bindings.Add;

	    importBinding.BindingType := CubeMetaLoaderBindingType.Value;

	    // Указываем, что значения будут браться по номеру поля в источнике данных

	    importBinding.FieldType := CubeMetaLoaderFieldType.Index;

	    // Указываем номер поля

	    importBinding.Field := "3";


	    // Настраиваем источник данных

	    Try

	        excel := New DtExcelProviderEx.Create;

	        // Задаем параметры файла, из которого будет импортировать данные

	        excel.File := "D:\Indicator_Data.xlsx";

	        excel.Sheet := "Лист1";

	        excel.Format := "XLSX";

	        Excel.HasHeader := False;


	        // Задаем расположение областей данных в файле-источнике

	        Unpivot := New DtUnpivotProvider.Create;

	        Unpivot.Provider := Excel;

	        Unpivot.LeftEnd := 2;

	        Unpivot.DataWidth := 2;

	        Unpivot.DataTop := 3;

	        Unpivot.DataBottom := 5;

	        Unpivot.HeadBottom := 2;

	        Unpivot.DataRight := 8;

	        Unpivot.HeadColumn := 1;

	        Unpivot.LeftBegin := 1;

	        Unpivot.HeadTop := 2;


	        // Выполняем загрузку данных

	        Unpivot.Open;

	        count := Unpivot.Fields.Count;

	        importObject.ProviderParams.Provider := Unpivot As IDatasetDataProvider;

	        instance := (importObject As IMetabaseObject).Open(Null) As IImportRequestInstance;

	        Instance.LoadData;


	        // Получаем отчет о загрузке данных

	        importResult := instance.ImportResult;

	        Log := importResult.Log;

	        count := Log.Count;


	        // Выводим отчет в окно консоли

	        Debug.WriteLine("Количество записей  = " + Count.ToString);

	        For i := 0 To Count - 1 Do

	            Entry := Log.Item(i);

	            LogStr := i.ToString + ": "

	                + (Entry.IsError ? "Ошибка: " :(Entry.IsMessage ? "Сообщение: " : "Предупреждение: ")) +

	                + Entry.ErrorMessage;

	            Debug.WriteLine(LogStr);


	            Debug.Indent;

	            Debug.WriteLine("Номер записи = " + Entry.RecordNumber.ToString);

	            Debug.WriteLine("Значение записи = " + Entry.ValueRecordNumber.ToString);

	            Debug.WriteLine("Поле в источнике данных = " + Entry.Field);

	            Debug.WriteLine("Номер записи в источнике данных = " + Entry.SourceRecord.ToString);

	            Debug.WriteLine("Номер поля в источнике данных = " + Entry.SourceField.ToString);

	            Debug.WriteLine("Номер записи в приёмнике данных = " + Entry.DestRecord.ToString);

	            Debug.WriteLine("Номер поля в приёмнике данных = " + Entry.DestField.ToString);

	            Debug.Unindent;

	        End For;

	    Except On e: Exception Do

	        Debug.WriteLine(e.Message);

	    Finally

	    End Try;

	End Sub UserProc;


В результате выполнения примера будет выполнен импорт данных из файла
 «D:\Indicator_Data.xlsx» в базу данных временных рядов TSDB_UNPIVOT. Ошибки
 импорта будут выведены в окно консоли.


См. также:


[ICubeMetaLoaderLogEntry](ICubeMetaLoaderLogEntry.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
