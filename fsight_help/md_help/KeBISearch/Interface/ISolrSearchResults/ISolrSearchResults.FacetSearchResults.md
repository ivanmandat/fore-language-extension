# ISolrSearchResults.FacetSearchResults

ISolrSearchResults.FacetSearchResults
-


# ISolrSearchResults.FacetSearchResults


## Синтаксис


FacetSearchResults: [ISolrFacetSearchResults](../ISolrFacetSearchResults/ISolrFacetSearchResults.htm);


## Описание


Свойство FacetSearchResults
 возвращает результат [фасетного
 поиска](UiNav.chm::/Glossary.htm#facetsearch).


## Комментарии


Результат фасетного поиска будет доступен, если в контексте поиска свойству
 [ISolrSearchContext.SearchType](../ISolrSearchContext/ISolrSearchContext.SearchType.htm)
 было установлено значение [SolrSearchType.FacetOnly](../../Enums/SolrSearchType.htm)
 или [SolrSearchType.FacetAndSearch](../../Enums/SolrSearchType.htm).


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

    SearchContext: ISolrSourceDataSearchContext;

    Results: ISolrSearchResults;

    FacetResults: ISolrFacetSearchResults;

    FacetResult: ISolrFacetFieldResults;

    i, j: Integer;

Begin

    MB := MetabaseClass.Active;

    //Параметры поиска и индексации, заданные для репозитория

    SharedParams := MB.SpecialObject(MetabaseSpecialObject.SharedParams).Bind As ISharedParams;

    SearchEngine := SharedParams.SearchEngine As ISolrSearchEngineService;

    Schema := SearchEngine.SearchEngineSchema As ISolrSearchEngineSchema;

    //Параметры поиска

    SearchExecutor := Schema.SearchExecutor(SearchEngineTargetType.SourceData);

    SearchContext := SearchExecutor.CreateContext As ISolrSourceDataSearchContext;

    SearchContext.Locale := LocaleCodeID.Russian;

    SearchContext.Text := "Куб";

    SearchContext.SearchType := SolrSearchType.FacetOnly;

    //Поиск

    Results := SearchExecutor.Search(SearchContext) As ISolrSearchResults;

    FacetResults := Results.FacetSearchResults;

    //Просмотр результатов фасетного поиска

    For i := 0 To FacetResults.Count - 1 Do

        FacetResult := FacetResults.Item(i);

        Debug.WriteLine("Поле: " + FacetResult.Id + ". Значения: ");

        Debug.Indent;

        For j := 0 To FacetResult.Count - 1 Do

            Debug.WriteLine("Количество фасетных результатов: " + FacetResult.Item(j).FacetCount.ToString +

                ". Значение фасетного поля: " + FacetResult.Item(j).FacetValue);

        End For;

        Debug.Unindent;

    End For;

End Sub UserProc;


При выполнении примера будет осуществлен поиск указанного значения по
 индексированной информации об элементах измерений. Найденные значения
 будут сгруппированы по значениям фасетных полей. После поиска будут доступны
 только фасетные результаты, содержащие общую информацию о количестве найденных
 срезов данных.


См. также:


[ISolrSearchResults](ISolrSearchResults.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
