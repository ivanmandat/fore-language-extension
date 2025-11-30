# IImportRequestProviderParams.DuplicateCheck

IImportRequestProviderParams.DuplicateCheck
-


# IImportRequestProviderParams.DuplicateCheck


## Синтаксис


DuplicateCheck: [CubeLoadDuplicateCheckSet](../../Enums/CubeLoadDuplicateCheckSet.htm);


## Описание


Свойство DuplicateCheck
 определяет режим исключения дублирующих значений.


## Комментарии


Для выбора режима загрузки временных рядов используйте свойство [IImportRequestProviderParams.LoadType](IImportRequestProviderParams.LoadType.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором TSDB_IMP, содержащей обязательные пользовательские
 атрибуты с идентификаторами CITY и INDICATOR. Данные атрибуты должны являться
 ссылками на справочник. В дочернем контейнере моделирования базы данных
 временных рядов должно быть создано несколько сценариев.


В файловой системе предполагается наличие файла «D:\res_export.txt»,
 содержащего данные.


[![](../../Opened.gif)![](../../Closed.gif)Содержимое файла
 res_export.txt](javascript:TextPopup(this))


	"CITY_KEY";"INDICATOR_KEY";"Year";"Value"


	750;766;"1990";2,789


	750;766;"1990";2,789


	750;766;"1991";2,896


	750;766;"1992";2,869


	750;766;"1993";2,83


	750;766;"1992";2,869


	750;766;"1993";2,83


	750;766;"1994";2,76


	750;766;"1995";2,8


	750;766;"1996";2,7867


	750;766;"1997";2,8


	750;766;"1998";2,8171


	750;766;"1999";2,8286


	750;766;"1998";2,8171


	750;766;"1999";2,8286


	750;766;"2000";2,896


	750;766;"2001";2,895


	750;766;"2002";2,866


	750;766;"2003";2,837


	750;766;"2004";2,849


	750;766;"2002";2,866


	750;766;"2003";2,837


	750;766;"2004";2,849


	750;766;"2005";2,824


	750;766;"2006";2,799


	750;766;"2007";2,774


	750;766;"2008";2,749


	750;766;"2009";2,889


	750;766;"2010";2,695


	750;766;"2011";2,704


	750;766;"2012";2,713


	750;766;"2013";2,712


	750;766;"2014";2,711


	750;766;"2015";2,718


Добавьте ссылки на системные сборки: Cubes, Db, Dimensions, Dt, Metabase,
 Ms, Rds.


	Sub UserProc;

	Var

	    TextProvider: IDtTextProvider;

	    Mb: IMetabase;

	    TSDBObj: IMetabaseObject;

	    TSDB: IRubricator;

	    Attr: IMetaAttributes;

	    CrInfo: IMetabaseObjectCreateInfo;

	    ImportRequestDef: IImportRequestDefinition;

	    Params: IImportRequestProviderParams;

	    Obj: IMetabaseObject;

	    Bindings: ICubeMetaLoaderBindings;

	    Binding: ICubeMetaLoaderBinding;

	    DimM: IDimensionModel;

	    Instance: IImportRequestInstance;

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

	    TSDBObj := Mb.ItemById("TSDB_IMP").Bind;

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

	    Params.LoadMode := CubeLoadClearMode.DataAndMetadata;

	    Params.DuplicateCheck := CubeLoadDuplicateCheckSet.ValueAttribute Or CubeLoadDuplicateCheckSet.Value;

	    // Указываем сценарий, на который будут загружаться данные

	    Params.ScenarioKey := (TSDB.ModelSpace As IMsModelSpace).ScenarioTree.Item(0).Key;

	    // Задаем привязку атрибутов

	    Bindings := Params.Bindings;


	    // Задаем привязку календаря

	    Binding := Bindings.Add;

	    Binding.BindingType := CubeMetaLoaderBindingType.Calendar;

	    Binding.ByColumns := False;

	    Binding.CalendarDateFormat := "$Year$";

	    Binding.CalendarOptions.Levels := DimCalendarLevelSet.Year;

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

	End Sub UserProc;


В результате выполнения примера в базу данных временных рядов будут
 импортированы данные из файла «D:\res_export.txt», дублирующие данные
 будут исключены.


См. также:


[IImportRequestProviderParams](IImportRequestProviderParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
