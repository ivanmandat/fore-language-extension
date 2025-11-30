# Задание фиксированной привязки календарного измерения

Задание фиксированной привязки календарного измерения
-


# Задание фиксированной привязки календарного измерения


Для импорта базы данных временных рядов реализована возможность задания фиксированной привязки календарного измерения.


Для выполнения примера предполагается наличие базы данных временных рядов с идентификатором «OBJ_RUBRICATOR» и файла «C:\Doc.xlsx». Добавьте ссылки на системные сборки «Cubes», «Db», «Dimensions», «Dt» и «Metabase». Фиксированная привязка календаря задается следующим образом:


			Sub UserProc;
Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    Obj: IMetabaseObject;

    ObjDesc: IMetabaseObjectDescriptor;

    Binding: ICubeMetaLoaderBinding;

    Provider: IDatasetDataProvider;

    RubDesc: IMetabaseObjectDescriptor;

    ImportRequestDef: IImportRequestDefinition;

    ImportRequestProviderParams: IImportRequestProviderParams;

    ValueBinding: ICubeMetaLoaderBinding;

    Parser: ICubeMetaLoaderBindingParser;

    Excel: IDtExcelProvider;
Begin

    MB := MetabaseClass.Active;

   // Источник данных для импорта из Excel формата
    Excel := New DtExcelProvider.Create;

    Excel.ImexMode := DtExcelImexMode.Import;

    Excel.File := "C:\Doc.xlsx";

    Excel.Query := "SELECT * FROM [Sheet1$]";

    Excel.HasHeader := True;

    Excel.CheckFieldName := True;

   // БД временных рядов
    RubDesc := Mb.ItemById("OBJ_RUBRICATOR");

    Provider := (Excel As IDatasetDataProvider);

   // Создаем объект импорта
    CrInfo := Mb.CreateCreateInfo;

    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_IMPORTREQUEST;

    CrInfo.Id := "OBJ_IMPORTREQUEST";

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

    ImportRequestProviderParams.NewRevisionName := "Импорт показателей";

    ImportRequestProviderParams.ImportObjectKey := Obj.Key;

    ImportRequestProviderParams.LoadType := CubeMetaLoaderLoadType.CreateAndUpdate;
    Binding := ImportRequestProviderParams.Bindings.Add;
    // Фиксированная привязка календарного измерения

    Binding.FieldType := CubeMetaLoaderFieldType.ConstValue;

    Binding.BindingType := CubeMetaLoaderBindingType.Calendar;

    Binding.FieldValue := DateTime.Today;

    Binding.CalendarOptions.Levels := DimCalendarLevelSet.Year;

    ValueBinding := ImportRequestProviderParams.Bindings.Add;

    ValueBinding.BindingType := CubeMetaLoaderBindingType.Value;

    ValueBinding.Field := "Value";

    ValueBinding.FieldType := CubeMetaLoaderFieldType.Name;

    Parser := ValueBinding.Parser;

    Parser.ParserType := CubeMetaLoaderParserType.FixedPosition;

    Parser.StringPositionStart := 0;

    Parser.StringPositionEnd := -1;

    Obj.Save;

End Sub UserProc;


После выполнения примера будет создан объект импорта из Excel файла «C:\Doc.xlsx». В данном объекте будет настроена фиксированная привязка календарного измерения.


См. также:


[Примеры](KeCubes_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
