# ICubeMetaExporterBinding.DateFormatEx

ICubeMetaExporterBinding.DateFormatEx
-


# ICubeMetaExporterBinding.DateFormatEx


## Синтаксис


DateFormatEx(Level: [DimCalendarLevel](kedims.chm::/enums/dimcalendarlevel.htm)):
 String;


## Параметры


Level. Уровень календаря, для
 которого задается формат.


## Описание


Свойство DateFormatEx определяет
 формат дат для нескольких уровней календарного измерения.


## Комментарии


Для задания формата дат для нескольких уровней последовательно указывайте
 их с помощью данного свойства. Например, код для задания формата годовой
 и квартальной динамики:


	Sub UserProc;

	Var

	    Binding: ICubeMetaExporterBinding;

	Begin

	    //...

	    Binding.CalendarDateFormatEx(DimCalendarLevel.Year) := "$Year$";

	    Binding.CalendarDateFormatEx(DimCalendarLevel.Quarter) := "$Year$Q$Quarter$";

	    //...

	End Sub UserProc;


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором «TSBD». Данная база данных временных
 рядов должна иметь годовую и квартальную динамики и пользовательский атрибут
 временных рядов с идентификатором «INDICATOR».


Добавьте ссылки на системные сборки: Cubes, Dal, Dimensions, Dt, Metabase.


	Sub UserProc;

	Var

	    TextConsumer: IDtTextConsumer;

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    RubDescr: IMetabaseObjectDescriptor;

	    ObjDesc: IMetabaseObjectDescriptor;

	    Obj: IMetabaseObject;

	    ExportRequestDef: IExportRequestDefinition;

	    RequestParams: IExportRequestParams;

	    Rubr: IRubricator;

	    Binding: ICubeMetaExporterBinding;

	    ExportRequestInst: IExportRequestInstance;

	Begin

	    // Получаем текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Создаём текстовый приёмник данных

	    TextConsumer := New DtTextConsumer.Create;

	    TextConsumer.File := "C:\result.txt";

	    TextConsumer.FormatType := DtTextFormatType.Delimited;

	    TextConsumer.DelimitedColumnDelimiter := ";";

	    TextConsumer.DelimitedTextQualifier := """";

	    TextConsumer.Encoding := "WIN";

	    TextConsumer.WriteHeader := True;

	    TextConsumer.Metabase := MB;

	    // Получаем базу данных временных рядов

	    RubDescr := MB.ItemById("TSDB");

	    // Создаем объект экспорта

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_EXPORTREQUEST;

	    CrInfo.Id := MB.GenerateId("OBJ_EXPORTREQUEST", RubDescr.Key);

	    CrInfo.Permanent := True;

	    CrInfo.Parent := RubDescr;

	    ObjDesc := MB.CreateObject(CrInfo);

	    Obj := ObjDesc.Edit;

	    // Задаем параметры экспорта

	    ExportRequestDef := Obj As IExportRequestDefinition;

	    RequestParams := ExportRequestDef.Exporter;

	    // Указываем базу данных временных рядов, данные которой будут экспортированы

	    Rubr := RubDescr.Bind As IRubricator;

	    RequestParams.Rubricator := Rubr;

	    // Указываем приёмник данных

	    RequestParams.Consumer := TextConsumer As IDtConsumer;

	    // Указываем, что приёмник должен быть очищен перед экспортом

	    RequestParams.ClearBeforeExport := True;

	    // Задаём параметры экспорта атрибута «INDICATOR»

	    Binding := RequestParams.Bindings.Add;

	    Binding.FieldName := "IndicatorKey";

	    Binding.DataType := DbDataType.Integer;

	    Binding.BindingType := CubeMetaExporterBindingType.Attribute;

	    Binding.Attribute := "INDICATOR";

	    Binding.KeyField := "KEY";

	    // Задаем параметры экспорта дат

	    Binding := RequestParams.Bindings.Add;

	    Binding.FieldName := "Date";

	    Binding.DataType := DbDataType.String;

	    Binding.BindingType := CubeMetaExporterBindingType.Calendar;

	    Binding.ValueFieldName := "Value";

	    Binding.ValueDataType := DbDataType.Float;

	    // Задаем формат экспорта дат

	    Binding.DateFormatEx(DimCalendarLevel.Year) := "$Year$";

	    Binding.DateFormatEx(DimCalendarLevel.Quarter) := "$Year$Q$Quarter$";

	    // Задаем экспортируемые уровни календаря

	    RequestParams.CalendarLevelSet := DimCalendarLevelSet.Year Or DimCalendarLevelSet.Quarter;

	    // Создаем вычисляемое поле для экспорта

	    Binding := RequestParams.Bindings.Add;

	    Binding.FieldName := "CalcField";

	    Binding.DataType := DbDataType.Float;

	    Binding.BindingType := CubeMetaExporterBindingType.Calculated;

	    Binding.Expression := "Value * 1.25";

	    // Сохраняем объект экспорта

	    Obj.Save;

	    // Выполняем экспорт

	    ExportRequestInst := ObjDesc.OpenWithParam(Null) As IExportRequestInstance;

	    ExportRequestInst.Export;

	End Sub UserProc;


В результате выполнения примера в файл «C:\result.txt» будут выгружены
 годовые и квартальные значения и значения атрибута «INDICATOR» из базы
 данных временных рядов. Также будет создано вычисляемое поле «CalcField»,
 содержащее годовые и квартальные значения, увеличенные в 1,25 раза.


См. также:


[ICubeMetaExporterBinding](ICubeMetaExporterBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
