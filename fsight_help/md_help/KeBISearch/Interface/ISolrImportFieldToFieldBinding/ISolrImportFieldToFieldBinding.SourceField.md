# ISolrImportFieldToFieldBinding.SourceField

ISolrImportFieldToFieldBinding.SourceField
-


# ISolrImportFieldToFieldBinding.SourceField


## Синтаксис


SourceField: [ISolrField](../ISolrField/ISolrField.htm);


## Описание


Свойство SourceField определяет
 поле, к которому осуществляется привязка.


## Комментарии


Если осуществляется привязка для [поля
 с данными](../ISolrImportFieldBinding/ISolrImportFieldBinding.Field.htm), то в качестве значения свойства SourceField
 необходимо указать поле с метаданными. Если осуществляется привязка для
 [поля
 с метаданными](../ISolrImportFieldBinding/ISolrImportFieldBinding.Field.htm), то в качестве значения свойства SourceField
 необходимо указать поле с данными. Привязка может осуществляться как к
 системным, так и к пользовательским полям. Список всех полей можно получить
 в свойстве [ISolrSearchEngineSchema.Fields](../ISolrSearchEngineSchema/ISolrSearchEngineSchema.Fields.htm).


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

    SourceInfo: ISourceDataImportInfo;

    DestinationInfo: ISourceDataImportDestinationInfo;

    FieldBindings: ISolrImportFieldBindings;

    FieldBinding: ISolrImportFieldToFieldBinding;

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

    FieldBindings := (DestinationInfo As ISolrSourceDataImportDestinationInfo).FieldBindings;

    //Поле, для которого будут настроены параметры

    Field := EngineSchema.Fields(SearchEngineTargetType.SourceData).FindById("TAG");

    //Заполнение из значений другого
 поля

    FieldBinding := FieldBindings.AddBinding(SolrFieldBindingType.ByField, Field) As ISolrImportFieldToFieldBinding;

    FieldBinding.SourceField := EngineSchema.Fields(SearchEngineTargetType.MbObject).FindById("name");

    //Установка настроенного контекста в задачу

    Task.ImportContext(SearchEngineTargetType.SourceData) := ImportContext;

    //Сохранение задачи

    (Task As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера в задаче будут настроены параметры заполнения
 значений пользовательского поля «TAG»: в качестве значений поля будут
 подставляться значения поля метаданных «name».


См. также:


[ISolrImportFieldToFieldBinding](ISolrImportFieldToFieldBinding.htm)
 | [ISolrSearchEngineSchema.Fields](../ISolrSearchEngineSchema/ISolrSearchEngineSchema.Fields.htm)
 | [Системные
 и пользовательские поля](Setup.chm::/BISearch/Desktop_application_setting.htm#fields)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
