# ISolrImportDocumentExtensionBinding.Element

ISolrImportDocumentExtensionBinding.Element
-


# ISolrImportDocumentExtensionBinding.Element


## Синтаксис


Element: Integer;


## Описание


Свойство Element определяет
 индекс элемента, данные по которому будут подставляться в качестве значений
 пользовательского атрибута.


## Комментарии


Измерение задается в свойстве [ISolrImportDocumentExtensionInfo.Dimension](../ISolrImportDocumentExtensionInfo/ISolrImportDocumentExtensionInfo.Dimension.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 запланированных задач с идентификатором «TASK_CONTAINER». Первая задача
 в контейнере предназначена для обновления поискового индекса. В настройках
 задачи определены параметры индексации для стандартного куба. В настройках
 индексации и поиска репозитория создано пользовательское поле «TAG». В
 репозитории также имеется куб с идентификатором «STD_ALTERNATIVE_DATA»,
 структура которого совпадает с индексируемым кубом, а также имеет одно
 дополнительное измерение «ADDITIONAL_FACTORS».


			Sub UserProc;

Var

    MB: IMetabase;

    Container: IScheduledTasksContainer;

    Task: ISearchEngineImportScheduledTask;

    EngineSchema: ISolrSearchEngineSchema;

    ImportContext: ISourceDataImportContext;

    Cube: ICubeModel;

    CubeDimensions: ICubeModelDimensions;

    Dimension: IDimensionModel;

    SourceInfo: ISourceDataImportInfo;

    DestinationInfo: ISourceDataImportDestinationInfo;

    ExtensionInfo: ISolrImportDocumentExtensionInfo;

    FieldBindings: ISolrImportFieldBindings;

    FieldBinding: ISolrImportDocumentExtensionBinding;

    Field: ISolrField;

Begin

    MB := MetabaseClass.Active;

    //Получение задачи

    Container := MB.ItemById("TASK_CONTAINER").Bind As IScheduledTasksContainer;

    Task := Container.Tasks.Item(0).Edit As ISearchEngineImportScheduledTask;

    //Контекст для индексации объектов

    EngineSchema := Task.Engine.SearchEngineSchema As ISolrSearchEngineSchema;

    ImportContext := Task.ImportContext(SearchEngineTargetType.SourceData) As ISourceDataImportContext;

    //Получение параметров индексации куба

    SourceInfo := ImportContext.SourceInfos.Item(0);

    DestinationInfo := SourceInfo.DestinationInfos.Item(0);

    //Параметры заполнения пользовательских полей

    ExtensionInfo := (DestinationInfo As ISolrSourceDataImportDestinationInfo).DocumentExtensionInfo;

    Cube := MB.ItemById("STD_ALTERNATIVE_DATA").Bind As ICubeModel;

    CubeDimensions := Cube.Destinations.DefaultDestination.Dimensions;

    Dimension := CubeDimensions.FindById("ADDITIONAL_FACTORS");

    ExtensionInfo.Cube := Cube;

    ExtensionInfo.Dimension := Dimension;

    FieldBindings := (DestinationInfo As ISolrSourceDataImportDestinationInfo).FieldBindings;

    //Поле, для которого будут настроены параметры

    Field := EngineSchema.Fields(SearchEngineTargetType.SourceData).FindById("TAG");

    //Заполнение из значений по указанному элементу измерения внешнего источника данных

    FieldBinding := FieldBindings.AddBinding(SolrFieldBindingType.ByDocumentExtension, Field) As ISolrImportDocumentExtensionBinding;

    FieldBinding.Element := 0;

    //Установка настроенного контекста в задачу

    Task.ImportContext(SearchEngineTargetType.SourceData) := ImportContext;

    //Сохранение задачи

    (Task As IMetabaseObject).Save;

End Sub UserProc;


При выполнении пример в задаче будут настроены параметры заполнения
 значений пользовательского поля «TAG»: в качестве значений поля будут
 подставляться значения по указанному элементу внешнего источника данных.
 Предварительно будет указан используемый внешний источник данных.


См. также:


[ISolrImportDocumentExtensionBinding](ISolrImportDocumentExtensionBinding.htm)
 | [Системные
 и пользовательские поля](Setup.chm::/BISearch/Desktop_application_setting.htm#fields)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
