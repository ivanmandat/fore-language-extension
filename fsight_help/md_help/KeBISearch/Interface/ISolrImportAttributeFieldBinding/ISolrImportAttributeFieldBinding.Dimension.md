# ISolrImportAttributeFieldBinding.Dimension

ISolrImportAttributeFieldBinding.Dimension
-


# ISolrImportAttributeFieldBinding.Dimension


## Синтаксис


Dimension: [IDimensionModel](KeDims.chm::/interface/IDimensionModel/IDimensionModel.htm);


## Описание


Свойство Dimension определяет
 измерение источника данных, к атрибуту которого осуществляется привязка.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 запланированных задач с идентификатором «TASK_CONTAINER». Первая задача
 в контейнере предназначена для обновления поискового индекса. В настройках
 задачи определены параметры индексации для стандартного куба. В настройках
 индексации и поиска репозитория создано пользовательское поле «TAG».


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

    FieldBindings: ISolrImportFieldBindings;

    FieldBinding: ISolrImportAttributeFieldBinding;

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

    Cube := MB.Item(SourceInfo.Key).Bind As ICubeModel;

    CubeDimensions := Cube.Destinations.DefaultDestination.Dimensions;

    Dimension := CubeDimensions.FindById("COUNTRY");

    //Параметры заполнения пользовательских полей

    FieldBindings := (DestinationInfo As ISolrSourceDataImportDestinationInfo).FieldBindings;

    //Поле, для которого будут настроены параметры

    Field := EngineSchema.Fields(SearchEngineTargetType.SourceData).FindById("TAG");

    //Заполнение из значений атрибута измерения

    FieldBinding := FieldBindings.AddBinding(SolrFieldBindingType.ByAttribute, Field) As ISolrImportAttributeFieldBinding;

    FieldBinding.Dimension := Dimension;

    FieldBinding.Attribute := Dimension.Attributes.FindById("NAME");

    //Установка настроенного контекста в задачу

    Task.ImportContext(SearchEngineTargetType.SourceData) := ImportContext;

    //Сохранение задачи

    (Task As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера в задаче будут настроены параметры заполнения
 значений пользовательского поля «TAG»: в качестве значений поля будут
 подставляться значения атрибута «NAME» измерения «COUNTRY».


См. также:


[ISolrImportAttributeFieldBinding](ISolrImportAttributeFieldBinding.htm)
 | [Системные
 и пользовательские поля](Setup.chm::/BISearch/Desktop_application_setting.htm#fields)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
