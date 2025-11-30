# ISolrSearchContext.ItemsOnPage

ISolrSearchContext.ItemsOnPage
-


# ISolrSearchContext.ItemsOnPage


## Синтаксис


ItemsOnPage: Integer;


## Описание


Свойство ItemsOnPage определяет
 количество результатов, доступных на одной странице.


## Комментарии


После поиска Solr разбивает все результаты на отдельные страницы. Количество
 результатов на одной странице задается в свойстве ItemsOnPage.
 Номер страницы, которая будет загружена, указывается в свойстве [ISolrSearchContext.Page](ISolrSearchContext.Page.htm).


## Пример


Предполагается, что репозиторий настроен на работу с поисковым сервисом
 на базе Apache Solr. В базе поискового сервиса имеются индексированные
 метаданные различных документов репозитория. Подключите системные сборки:
 BISearch, Fore, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    SharedParams: ISharedParams;

    SearchEngine: ISolrSearchEngineService;

    Schema: ISolrSearchEngineSchema;

    SearchExecutor: ISearchExecutor;

    SearchContext: ISolrSourceDataSearchContext;

    Results: ISolrSearchResults;

    Result: ISearchResult;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    //Параметры поиска и индексации, заданные для репозитория

    SharedParams := MB.SpecialObject(MetabaseSpecialObject.SharedParams).Bind As ISharedParams;

    SearchEngine := SharedParams.SearchEngine As ISolrSearchEngineService;

    Schema := SearchEngine.SearchEngineSchema As ISolrSearchEngineSchema;

    //Параметры поиска

    SearchExecutor := Schema.SearchExecutor(SearchEngineTargetType.SourceData);

    SearchContext := SearchExecutor.CreateContext As ISolrSourceDataSearchContext;

    //Количество результатов на одной странице

    SearchContext.ItemsOnPage := 10;

    //Номер загружаемой страницы

    SearchContext.Page := 0;

    SearchContext.Locale := LocaleCodeID.Russian;

    SearchContext.Text := "Россия";

    SearchContext.SearchType := SolrSearchType.SearchOnly;

    //Поиск

    Results := SearchExecutor.Search(SearchContext) As ISolrSearchResults;

    //Просмотр результатов поиска

    For i := 0 To Results.Count - 1 Do

        Result := Results.Item(i);

        Debug.WriteLine("Наименование: """ + Result.Name + """. Описание: """ + Result.Description + '"');

        If Result.HighlightedName <> "" Then

            Debug.Indent;

            Debug.WriteLine("Значения с подсветкой искомого значения:");

            Debug.WriteLine("Наименование: """ + Result.HighlightedName + """. Описание: """ + Result.HighlightedDescription + '"');

            Debug.Unindent;

        End If;

    End For;

End Sub UserProc;


При выполнении примера будет осуществлен поиск указанного значения по
 индексированной информации об элементах измерений. Для выполнения поиска
 будут определены различные параметры (тип поиска, язык, количество результатов
 на одной странице). Из всех найденных значений будет загружена только
 первая страница, содержащая десять результатов поиска. Полученные результаты
 будут выведены в консоль среды разработки.


См. также:


[ISolrSearchContext](ISolrSearchContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
