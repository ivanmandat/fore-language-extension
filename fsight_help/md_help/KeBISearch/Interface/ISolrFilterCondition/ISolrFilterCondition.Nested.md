# ISolrFilterCondition.Nested

ISolrFilterCondition.Nested
-


# ISolrFilterCondition.Nested


## Синтаксис


Nested: [ISolrFilterConditions](../ISolrFilterConditions/ISolrFilterConditions.htm);


## Описание


Свойство Nested возвращает коллекцию
 вложенных условий фильтрации.


## Пример


Предполагается, что репозиторий настроен на работу с поисковым сервисом
 на базе Apache Solr. В базе поискового сервиса имеются индексированные
 данные о срезах различных источников данных репозитория. Подключите системные
 сборки: BISearch, Fore, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    SharedParams: ISharedParams;

    SearchEngine: ISolrSearchEngineService;

    Schema: ISolrSearchEngineSchema;

    SearchExecutor: ISearchExecutor;

    SolrContext: ISolrSearchContext;

    Condition1, Condition2: ISolrFilterCondition;

    ConditionValues1, ConditionValues2: ISolrFilterFieldValues;

    Values1, Values2: Array Of Variant;

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

    Condition1 := SolrContext.FilterContext.FilterCondition.Nested.Add;

    Condition1.SolrField := Schema.Fields(SearchEngineTargetType.SourceData).FindById("name");

    Condition1.Operator_ := LogicalOperator.And_;

    ConditionValues1 := Condition1.Values;

    ConditionValues1.Operator_ := LogicalOperator.Or_;

    Values1 := New Variant[2];

    Values1[0] := "Доход";

    Values1[1] := "Расход";

    ConditionValues1.Values := Values1;

    //Связанное условие

    Condition2 := SolrContext.FilterContext.FilterCondition.Nested.Add;

    Condition2.Operator_ := LogicalOperator.And_;

    Condition2.SolrField := Schema.Fields(SearchEngineTargetType.SourceData).FindById("time");

    ConditionValues2 := Condition2.Values;

    ConditionValues2.Operator_ := LogicalOperator.Or_;

    Values2 := New Variant[2];

    Values2[0] := "2000";

    Values2[1] := "2001";

    ConditionValues2.Values := Values2;

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
 с учетом указанных параметров фильтрации по значениям полей «name» и «time».
 Полученные результаты будут выведены в консоль среды разработки.


См. также:


[ISolrFilterCondition](ISolrFilterCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
