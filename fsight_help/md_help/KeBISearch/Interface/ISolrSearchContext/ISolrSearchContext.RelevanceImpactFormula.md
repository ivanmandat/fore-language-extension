# ISolrSearchContext.RelevanceImpactFormula

ISolrSearchContext.RelevanceImpactFormula
-


# ISolrSearchContext.RelevanceImpactFormula


## Синтаксис


RelevanceImpactFormula: String;


## Описание


Свойство RelevanceImpactFormula
 определяет формулу влияния на релевантность поиска.


## Комментарии


Формула релевантности - это формула, на основании которой будет определяться
 значимость значений индексированных полей. В формуле могут использоваться
 созданные поля и различные функции. Список доступных функций представлен
 в справочной системе по Apache Solr по адресу [https://wiki.apache.org/solr/FunctionQuery](https://wiki.apache.org/solr/FunctionQuery).
 Результатом вычисления формулы должно быть целочисленное значение, которое,
 для определения значимости, будет умножено на значение релевантности найденного
 документа. Значение релевантности найденного документа рассчитывается
 Apache Solr.


Если свойство RelevanceImpactFormula
 не задано, то будет использоваться формула, указанная в свойстве [ISolrSearchOptions.RelevanceImpactFormula](../ISolrSearchOptions/ISolrSearchOptions.RelevanceImpactFormula.htm).


## Пример


Для выполнения примера предполагается наличие изменений в конфигурационном
 файле Solr: в файл добавлены пользовательские поля «rateDataDynamic» и
 «rateWeight». По данным полям хранится информация, определяющая значимость
 данных каждой записи. Подключите системные сборки: BISearch, Fore, Metabase.


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

    //Формула релевантности

    SearchContext.RelevanceImpactFormula := "sum(rateDataDynamic,rateWeight)";

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
 будет определена формула релевантности. В соответствии с формулой более
 значимыми записями будут считаться те, для которых сумма полей «rateDataDynamic»
 и «rateWeight» имеет большее значение. Такие записи будут находиться в
 числе первых в результате поиска. Полученные результаты будут выведены
 в консоль среды разработки.


См. также:


[ISolrSearchContext](ISolrSearchContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
