# ISourceDataImportDestinationInfo.Destination

ISourceDataImportDestinationInfo.Destination
-


# ISourceDataImportDestinationInfo.Destination


## Синтаксис


Destination: [ICubeModelDestination](KeCubes.chm::/Interface/ICubeModelDestination/ICubeModelDestination.htm);


## Описание


Свойство Destination возвращает
 вариант отображения, для которого задаются настройки индексации.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 запланированных задач с идентификатором «TASK_CONTAINER». В контейнере
 создана одна задача, осуществляющая обновление поискового индекса. Задача
 настроена на обновление поискового индекса для нескольких источников.
 Подключите системные сборки: BiSearch, Cubes, Fore, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Container: IScheduledTasksContainer;

    Task: ISearchEngineImportScheduledTask;

    EngineSchema: ISolrSearchEngineSchema;

    ImportContext: ISourceDataImportContext;

    SourceInfos: ISourceDataImportInfos;

    SourceInfo: ISourceDataImportInfo;

    DestinationInfos: ISourceDataImportDestinationInfos;

    CubeDest: ICubeModelDestination;

    i, j: Integer;

Begin

    MB := MetabaseClass.Active;

    //Получение задачи

    Container := MB.ItemById("TASK_CONTAINER").Bind As IScheduledTasksContainer;

    Task := Container.Tasks.Item(0).Bind As ISearchEngineImportScheduledTask;

    //Контекст для индексации объектов

    EngineSchema := Task.Engine.SearchEngineSchema As ISolrSearchEngineSchema;

    ImportContext := Task.ImportContext(SearchEngineTargetType.SourceData) As ISourceDataImportContext;

    //Получение индексируемых объектов

    SourceInfos := ImportContext.SourceInfos;

    //Просмотр информации

    For i := 0 To SourceInfos.Count - 1 Do

        SourceInfo := SourceInfos.Item(i);

        Debug.WriteLine("Источник: " + MB.Item(SourceInfo.Key).Name + "(Ключ: " + SourceInfo.Key.ToString + ')');

        Debug.WriteLine("Индексируемые варианты отображения:");

        Debug.Indent;

        DestinationInfos := SourceInfo.DestinationInfos;

        For j := 0 To DestinationInfos.Count - 1 Do

            CubeDest := DestinationInfos.Item(j).Destination;

            Debug.WriteLine(CubeDest.Name + '(' + CubeDest.Id + ')');

        End For;

        Debug.Unindent;

    End For;

End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведена информация
 по источникам и их вариантам отображения, которые будут использоваться
 при обновлении поискового индекса.


См. также:


[ISourceDataImportDestinationInfo](ISourceDataImportDestinationInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
