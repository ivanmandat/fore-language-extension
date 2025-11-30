# IDtExcelProvider.CheckFieldName

IDtExcelProvider.CheckFieldName
-


# IDtExcelProvider.CheckFieldName


## Синтаксис


CheckFieldName: Boolean;


## Описание


Свойство CheckFieldName определяет,
 будут ли преобразовываться наименования полей таким образом, чтобы можно
 было импортировать числовые наименования.


## Комментарии


Если свойству установлено значение True,
 то при импорте будут произведены специальные преобразования таким образом,
 чтобы провайдер не изменил числовые наименования полей. При значении False для полей, имеющих числовое
 наименование, будут сгенерированы новые наименования: F1, F2 и так далее.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором OBJ_RUBRICATOR и файла экспорта показателей «C:\Country
 By Rows.XLS».


			Sub UserProc;

Var

    Mb: IMetabase;

    Excel: IDtExcelProvider;

    Provider: IDatasetDataProvider;

    RubDesc: IMetabaseObjectDescriptor;

    CrInfo: IMetabaseObjectCreateInfo;

    Obj: IMetabaseObject;

    ObjDesc: IMetabaseObjectDescriptor;

    ImportRequestDef: IImportRequestDefinition;

    ImportRequestProviderParams: IImportRequestProviderParams;

    Binding: ICubeMetaLoaderBinding;

Begin

    // Источник данных для импорта из формата XLS

    Excel := New DtExcelProvider.Create;

    Excel.ImexMode := DtExcelImexMode.Import;

    Excel.File := "C:\Country By Rows.XLS";

    Excel.Query := "SELECT * FROM [By Rows$]";

    Excel.HasHeader := True;

    Excel.CheckFieldName := True;

    Excel.Open;

    Mb := MetabaseClass.Active;

    RubDesc := Mb.ItemById("OBJ_RUBRICATOR");

    Provider := (Excel As IDatasetDataProvider);

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
 указанного файла. В данном объекте будут настроены параметры календаря.
 Если в строке с заголовками полей будут иметься числовые наименования,
 то они не будут заменены при импорте.


См. также:


[IDtExcelProvider](IDtExcelProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
