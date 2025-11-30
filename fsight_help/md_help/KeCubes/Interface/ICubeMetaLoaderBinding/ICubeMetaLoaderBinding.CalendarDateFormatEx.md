# ICubeMetaLoaderBinding.CalendarDateFormatEx

ICubeMetaLoaderBinding.CalendarDateFormatEx
-


# ICubeMetaLoaderBinding.CalendarDateFormatEx


## Синтаксис


CalendarDateFormatEx(Level: [DimCalendarLevel](kedims.chm::/enums/dimcalendarlevel.htm)):
 String;


## Параметры


Level. Уровень календаря, для
 которого задается формат.


## Описание


Свойство CalendarDateFormatEx
 определяет формат дат для нескольких уровней календарного измерения.


## Комментарии


Для задания формата дат для нескольких уровней последовательно указывайте
 их с помощью данного свойства. Например, код для задания формата годовой
 и квартальной динамики:


	Sub UserProc;

	Var

	    Binding: ICubeMetaLoaderBinding;

	Begin

	    //...

	    Binding.CalendarDateFormatEx(DimCalendarLevel.Year) := "$Year$";

	    Binding.CalendarDateFormatEx(DimCalendarLevel.Quarter) := "$Year$Q$Quarter$";

	    //...

	End Sub UserProc;


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором «TSDB_IMPORT», содержащей обязательные
 пользовательские атрибуты с идентификаторами «CITY» и «INDICATOR». Данные
 атрибуты должны являться ссылками на справочник.


В файловой системе предполагается наличие файла «D:\res_export.txt»,
 содержащего данные по нескольким календарным динамикам.


[![](../../Opened.gif)![](../../Closed.gif)Содержимое файла
 res_export.txt](javascript:TextPopup(this))


	"CITY_KEY";"INDICATOR_KEY";"Year";"Value"


	750;765;"2012";2,713


	750;765;"2013";2,712


	750;765;"2014";2,711


	750;765;"2015";2,718


	750;765;"2012Q2";3,178


	750;765;"2013Q2";3,563


	750;765;"2014Q2";3,321


	750;765;"2015Q2";2,772


	750;765;"2012Q3";3,598


	750;765;"2013Q3";3,684


	750;765;"2014Q3";2,958


	750;765;"2015Q3";2,887


	750;765;"2012Q4";2,730


	750;765;"2013Q4";2,781


	750;765;"2014Q4";3,600


	750;765;"2015Q4";3,095


Добавьте ссылки на системные сборки: Cubes, Db, Dimensions, Dt, Metabase,
 Rds.


	Sub UserProc;

	Var

	    TextProvider: IDtTextProvider;

	    Mb: IMetabase;

	    TSDBObj: IMetabaseObject;

	    TSDB: IRubricator;

	    Attr: IMetaAttributes;

	    CrInfo: IMetabaseObjectCreateInfo;

	    Obj: IMetabaseObject;

	    ImportRequestDef: IImportRequestDefinition;

	    Params: IImportRequestProviderParams;

	    Bindings: ICubeMetaLoaderBindings;

	    Binding: ICubeMetaLoaderBinding;

	    DimM: IDimensionModel;

	    Instance: IImportRequestInstance;

	    ImportResult: IImportRequestResult;

	    Count, i: Integer;

	    Entry: ICubeMetaLoaderLogEntry;

	Begin

	    // Создаем источник данных для импорта из текстового файла

	    TextProvider := New DtTextProvider.Create;

	    TextProvider.File := "D:\res_export.txt";

	    TextProvider.FormatType := DtTextFormatType.Delimited;

	    TextProvider.DelimitedColumnDelimiter := ";";

	    TextProvider.DelimitedTextQualifier := """";

	    TextProvider.Encoding := "WIN";

	    TextProvider.RangeHasHeader := True;

	    TextProvider.Open;

	    // Получаем базу данных временных рядов

	    Mb := MetabaseClass.Active;

	    TSDBObj := Mb.ItemById("TSDB_IMPORT").Bind;

	    TSDB := TSDBObj As IRubricator;

	    Attr := TSDB.Facts.Attributes;


	    // Создаем объект импорта

	    CrInfo := Mb.CreateCreateInfo;

	    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_IMPORTREQUEST;

	    CrInfo.Id := Mb.GenerateId("OBJ_IMPORTREQUEST_P", TSDBObj.Key);

	    CrInfo.Name := "Объект импорта";

	    CrInfo.Parent := TSDBObj;

	    Obj := Mb.CreateObject(CrInfo).Edit;

	    // Указываем источник данных

	    ImportRequestDef := Obj As IImportRequestDefinition;

	    ImportRequestDef.SourceType := ImportRequestSourceType.Provider;

	    // Указываем приёмник данных

	    ImportRequestDef.DestinationRubricator := TSDB;

	    // Задаём параметры импорта

	    Params := ImportRequestDef.ProviderParams;

	    Params.Provider := TextProvider As IDatasetDataProvider;

	    Params.NewRevisionName := "Импорт временных рядов";

	    Params.ImportObjectKey := Obj.Key;

	    Params.LoadType := CubeMetaLoaderLoadType.CreateAndUpdate;

	    // Задаем привязку атрибутов

	    Bindings := Params.Bindings;


	    // Задаем привязку календаря

	    Binding := Bindings.Add;

	    Binding.BindingType := CubeMetaLoaderBindingType.Calendar;

	    Binding.ByColumns := False;

	    Binding.CalendarDateFormatEx(DimCalendarLevel.Year) := "$Year$";

	    Binding.CalendarDateFormatEx(DimCalendarLevel.Quarter) := "$Year$Q$Quarter$";

	    Binding.CalendarOptions.Levels := DimCalendarLevelSet.Year Or DimCalendarLevelSet.Quarter;

	    Binding.FieldType := CubeMetaLoaderFieldType.Name;

	    Binding.Field := "Year";

	    // Задаем привязку атрибута «Единицы измерения» (UNIT)

	    Binding := Bindings.Add;

	    Binding.BindingType := CubeMetaLoaderBindingType.Unit;

	    Binding.FieldType := CubeMetaLoaderFieldType.ConstValue;

	    Binding.FieldValue := 1;

	    Binding.Attribute := "UNIT";

	    DimM := Attr.FindById("UNIT").ValuesObject.Bind As IDimensionModel;

	    Binding.Dimension := DimM;

	    Binding.Index := DimM.Indexes.Item(0).Id;

	    Binding.KeyAttribute := "KEY";


	    // Задаем привязку атрибута «Города» (CITY)

	    Binding := Bindings.Add;

	    Binding.BindingType := CubeMetaLoaderBindingType.Attribute;

	    Binding.Attribute := "CITY";

	    Binding.FieldType := CubeMetaLoaderFieldType.Name;

	    Binding.Field := "CITY_KEY";

	    DimM := Attr.FindById("CITY").ValuesObject.Bind As IDimensionModel;

	    Binding.Dimension := DimM;

	    Binding.Index := DimM.Indexes.Item(0).Id;

	    Binding.KeyAttribute := "KEY";

	    Binding.NameAttribute := "NAME";

	    // Задаем привязку атрибута «Показатели» (INDICATOR)

	    Binding := Bindings.Add;

	    Binding.BindingType := CubeMetaLoaderBindingType.Attribute;

	    Binding.Attribute := "INDICATOR";

	    Binding.FieldType := CubeMetaLoaderFieldType.Name;

	    Binding.Field := "INDICATOR_KEY";

	    DimM := Attr.FindById("INDICATOR").ValuesObject.Bind As IDimensionModel;

	    Binding.Dimension := DimM;

	    Binding.Index := DimM.Indexes.Item(0).Id;

	    Binding.KeyAttribute := "KEY";

	    Binding.NameAttribute := "NAME";


	    // Задаем привязку для импорта значений наблюдений рядов

	    Binding := Bindings.Add;

	    Binding.BindingType := CubeMetaLoaderBindingType.Value;

	    Binding.FieldType := CubeMetaLoaderFieldType.Name;

	    Binding.Field := "Value";

	    // Сохраняем изменения в объекте импорта

	    Obj.Save;

	    // Выполняем импорт данных

	    Instance := (ImportRequestDef As IMetabaseObject).Open(Null) As IImportRequestInstance;

	    Instance.LoadData;

	    // Получаем журнал ошибокимпорта данных

	    ImportResult := Instance.ImportResult;

	    Count := importResult.Log.Count;


	    // Выводим журнал в окно консоли

	    For i := 0 To Count - 1 Do

	        Entry := ImportResult.Log.Item(i);

	        Debug.WriteLine(Entry.ErrorMessage);

	        If Entry.IsError Then

	            Debug.WriteLine(" (field = """ + Entry.Field + """, record = " +

	                Entry.RecordNumber.ToString + ")");

	        End If;

	    End For;

	End Sub UserProc;


В результате выполнения примера в базу данных временных рядов будут
 импортированы данные из файла «D:\res_export.txt».


См. также:


[ICubeMetaLoaderBinding](ICubeMetaLoaderBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
