# ISolrSearchContext.FilterContext

ISolrSearchContext.FilterContext
-


# ISolrSearchContext.FilterContext


## Синтаксис


FilterContext: [ISolrFilterContext](../ISolrFilterContext/ISolrFilterContext.htm);


## Описание


Свойство FilterContext возвращает
 параметры фильтрации результатов поиска.


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

    SolrContext: ISolrSearchContext;

    FilterCondition: ISolrFilterCondition;

    ConditionValues: ISolrFilterFieldValues;

    Values: Array Of Variant;

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

    SearchExecutor := Schema.SearchExecutor(SearchEngineTargetType.SourceData);

    SolrContext := SearchExecutor.CreateContext As ISolrSearchContext;

    //Параметры фильтрации

    FilterCondition := SolrContext.FilterContext.FilterCondition;

    FilterCondition.SolrField := Schema.Fields(SearchEngineTargetType.SourceData).FindById("name");

    FilterCondition.Operator_ := LogicalOperator.And_;

    ConditionValues := FilterCondition.Values;

    ConditionValues.Operator_ := LogicalOperator.Or_;

    Values := New Variant[2];

    Values[0] := "Доход";

    Values[1] := "Расход";

    ConditionValues.Values := Values;

    //Параметры поиска

    SearchContext := SolrContext As ISolrSourceDataSearchContext;

    SearchContext.Locale := LocaleCodeID.Russian;

    SearchContext.Text := "Россия";

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
 индексированной информации об элементах измерений. Поиск осуществляется
 с учетом указанных параметров фильтрации по значениям поля «name». Полученные
 результаты будут выведены в консоль среды разработки.


См. также:


[ISolrSearchContext](ISolrSearchContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
