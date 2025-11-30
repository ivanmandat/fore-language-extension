# ISearchMbObjectResult.Id

ISearchMbObjectResult.Id
-


# ISearchMbObjectResult.Id


## Синтаксис


Id: String;


## Описание


Свойство Id возвращает идентификатор
 объекта репозитория.


## Пример


Предполагается, что репозиторий настроен на работу с поисковым сервисом
 на базе Apache Solr. В базе поискового сервиса имеются индексированные
 метаданные различных объектов репозитория. Подключите системные сборки:
 BISearch, Fore, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    SharedParams: ISharedParams;

    SearchEngine: ISolrSearchEngineService;

    Schema: ISolrSearchEngineSchema;

    SearchExecutor: ISearchExecutor;

    SearchContext: ISolrMbObjectsSearchContext;

    Results: ISolrSearchResults;

    Result: ISearchMbObjectResult;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    //Параметры поиска и индексации, заданные для репозитория

    SharedParams := MB.SpecialObject(MetabaseSpecialObject.SharedParams).Bind As ISharedParams;

    SearchEngine := SharedParams.SearchEngine As ISolrSearchEngineService;

    Schema := SearchEngine.SearchEngineSchema As ISolrSearchEngineSchema;

    //Параметры поиска

    Schema.SearchOptions.UseSmartSearch := False;

    SearchExecutor := Schema.SearchExecutor(SearchEngineTargetType.MbObject);

    SearchContext := SearchExecutor.CreateContext As ISolrMbObjectsSearchContext;

    SearchContext.Locale := LocaleCodeID.Russian;

    SearchContext.Text := "Куб
 2016";

    //Поиск

    Results := SearchExecutor.Search(SearchContext) As ISolrSearchResults;

    //Просмотр результатов поиска

    For i := 0 To Results.Count - 1 Do

        Result := Results.Item(i) As ISearchMbObjectResult;

        Debug.WriteLine(Result.ClassName + '(' + Result.ClassId.ToString + ')');

        If Result.HighlightedClassName <> "" Then

            Debug.WriteLine("Наименование класса с подсветкой искомого значения: " + Result.HighlightedClassName);

        End If;

        Debug.Indent;

        Debug.WriteLine("Объект: " + Result.Name + '(' + Result.Id + "). Ключ: " + Result.Key.ToString);

        Debug.WriteLine("Дата и время последнего изменения: " + Result.Timestamp);

        Debug.WriteLine("Информация с подсветкой искомого значения:");

        If Result.HighlightedName <> "" Then

            Debug.WriteLine("Наименование: " + Result.HighlightedName);

        End If;

        If Result.HighlightedId <> "" Then

            Debug.WriteLine("Идентификатор: " + Result.HighlightedId);

        End If;

        If Result.HighlightedDescription <> "" Then

            Debug.WriteLine("Описание: " + Result.HighlightedDescription);

        End If;

        If Result.HighlightedTimestamp <> "" Then

            Debug.WriteLine("Дата и время последнего изменения: " + Result.HighlightedTimestamp);

        End If;

        If Result.HighlightedKey <> "" Then

            Debug.WriteLine("Ключ: " + Result.HighlightedKey);

        End If;

        Debug.Unindent;

    End For;

End Sub UserProc;


При выполнении примера будет осуществлен поиск указанного значения по
 индексированным метаданным объектов репозитория. Информация о найденных
 объектах будет выведена в консоль среды разработки.


См. также:


[ISearchMbObjectResult](ISearchMbObjectResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
