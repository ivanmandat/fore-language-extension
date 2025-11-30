# IDtTextProvider.AllowMuchColumnDelimiter

IDtTextProvider.AllowMuchColumnDelimiter
-


# IDtTextProvider.AllowMuchColumnDelimiter


## Синтаксис


AllowMuchColumnDelimiter: Boolean;


## Описание


Свойство AllowMuchColumnDelimiter
 определяет признак пропуска подряд идущих разделителей.


## Комментарии


Допустимые значения:


	- True. Пропускать подряд
	 идущие разделители;


	- False Не пропускать
	 подряд идущие разделители.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором OBJ_RUBRICATOR и файла экспорта показателей «C:\result.txt».


			Sub UserProc;

Var

    TextProvider: IDtTextProvider;

    Provider: IDatasetDataProvider;

    Mb: IMetabase;

    RubDesc: IMetabaseObjectDescriptor;

    CrInfo: IMetabaseObjectCreateInfo;

    Obj: IMetabaseObject;

    ObjDesc: IMetabaseObjectDescriptor;

    ImportRequestDef: IImportRequestDefinition;

    ImportRequestProviderParams: IImportRequestProviderParams;

    Binding: ICubeMetaLoaderBinding;

Begin

    // Источник данных для импорта из текстового формата

    TextProvider := New DtTextProvider.Create;

    TextProvider.File := "C:\result.txt";

    TextProvider.FormatType := DtTextFormatType.Delimited;

    TextProvider.DelimitedColumnDelimiter := ";";

    TextProvider.DelimitedTextQualifier := """";

    TextProvider.Encoding := "WIN";

    TextProvider.RangeHasHeader := True;

    TextProvider.HeaderRow := 2;

    TextProvider.AllowMuchColumnDelimiter := True;

    TextProvider.Open;

    Mb := MetabaseClass.Active;

    RubDesc := Mb.ItemById("OBJ_RUBRICATOR");

    Provider := (TextProvider As IDatasetDataProvider);

    // Объект импорта

    CrInfo := Mb.CreateCreateInfo;

    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_IMPORTREQUEST;

    CrInfo.Id := "OBJ_IMPORTREQUEST_P";

    CrInfo.Name := "Объект импорта";

    CrInfo.Permanent := True;

    CrInfo.Parent := RubDesc.Bind;

    ObjDesc := Mb.CreateObject(CrInfo);

    Obj := ObjDesc.Edit;

    // Настройка источника

    ImportRequestDef := Obj As IImportRequestDefinition;

    ImportRequestDef.SourceType := ImportRequestSourceType.Provider;

    ImportRequestDef.DestinationRubricator := RubDesc.Bind As IRubricator;

    // Параметры импорта

    ImportRequestProviderParams := ImportRequestDef.ProviderParams;

    ImportRequestProviderParams.Provider := Provider;

    ImportRequestProviderParams.NewRevisionName := "Импорт показателй";

    ImportRequestProviderParams.ImportObjectKey := Obj.Key;

    ImportRequestProviderParams.LoadType := CubeMetaLoaderLoadType.CreateAndUpdate;

    Binding := ImportRequestProviderParams.Bindings.Add;

    Binding.BindingType := CubeMetaLoaderBindingType.Calendar;

    Binding.CalendarOptions.Levels := DimCalendarLevelSet.Year;

    Binding.ByColumns := False;

    Binding.CalendarDateFormat := "$Year$";

    Obj.Save;

End Sub UserProc;


После выполнения примера будет создан объект импорта показателей из
 текстового файла «C:\result.txt». В данном объекте будут настроены параметры
 календаря. При импорте в качестве разделителя полей будет использоваться
 знак «;», в качестве ограничителя текста - знак двойные кавычки. Подряд
 идущие разделители будут пропущены. Из второй строки файла будут импортироваться
 наименования полей.


См. также:


[IDtTextProvider](IDtTextProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
