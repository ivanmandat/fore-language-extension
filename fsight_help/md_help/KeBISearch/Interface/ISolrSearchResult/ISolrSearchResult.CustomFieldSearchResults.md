# ISolrSearchResult.CustomFieldSearchResults

ISolrSearchResult.CustomFieldSearchResults
-


# ISolrSearchResult.CustomFieldSearchResults


## Синтаксис


CustomFieldSearchResults: [ISolrCustomFieldSearchResults](../ISolrCustomFieldSearchResults/ISolrCustomFieldSearchResults.htm);


## Описание


Свойство CustomFieldSearchResults
 возвращает результаты поиска по пользовательским полям.


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

    Result: ISolrSearchResult;

    CustomResults: ISolrCustomFieldSearchResults;

    CustomResult: ISolrCustomFieldSearchResult;

    i, j: Integer;

    s: Variant;

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

    SearchContext.Text := "Россия";

    //Поиск

    Results := SearchExecutor.Search(SearchContext) As ISolrSearchResults;

    For i := 0 To Results.Count - 1 Do

        Result := Results.Item(i) As ISolrSearchResult;

        CustomResults := Result.CustomFieldSearchResults;

        If CustomResults.Count > 0 Then

            Debug.WriteLine("Индекс записи с результатами поиска: " + i.ToString);

            Debug.WriteLine("Идентификатор документа с индексированными данными: " + Result.DocId);

            For j := 0 To CustomResults.Count - 1 Do

                CustomResult := CustomResults.Item(j);

                Debug.WriteLine("Пользовательское поле: " + CustomResult.SolrField.Id);

                Debug.Indent;

                Debug.WriteLine("Значения:");

                For Each s In CustomResult.Values Do

                    Debug.Write(s + " ");

                End For;

                Debug.WriteLine("");

                If CustomResult.HighlightedValues.Length > 0 Then

                    Debug.WriteLine("Значения с подсветкой искомого значения:");

                    For Each s In CustomResult.HighlightedValues Do

                        Debug.Write(s + " ");

                    End For;

                    Debug.WriteLine("");

                End If;

                Debug.Unindent;

            End For;

            Debug.WriteLine("------");

        End If;

    End For;

End Sub UserProc;


При выполнении примера будет осуществлен поиск указанного значения по
 индексированной информации об элементах измерений. Из результата поиска
 будут получены индексированные значения пользовательских полей. Значения
 будут выведены в консоль среды разработки.


См. также:


[ISolrSearchResult](ISolrSearchResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
