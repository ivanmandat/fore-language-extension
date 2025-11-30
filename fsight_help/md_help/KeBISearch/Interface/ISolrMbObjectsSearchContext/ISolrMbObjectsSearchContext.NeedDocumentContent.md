# ISolrMbObjectsSearchContext.NeedDocumentContent

ISolrMbObjectsSearchContext.NeedDocumentContent
-


# ISolrMbObjectsSearchContext.NeedDocumentContent


## Синтаксис


NeedDocumentContent: Boolean;


## Описание


Свойство NeedDocumentContent
 определяет признак загрузки содержимого объектов «Документ».


## Комментарии


Если имеются индексированные документы, то поиск осуществляется как
 по их непосредственным метаданным (наименованию, идентификатору и другим
 метаданным), так и по содержимому того файла, который был загружен в документ.
 По умолчанию свойству NeedDocumentContent
 установлено значение False, при
 этом для найденных документов в результат поиска не загружается содержимое
 файла.


Если необходимо получить содержимое файла, то установите в свойстве
 NeedDocumentContent значение True. Содержимое будет доступно
 в свойствах [ISearchMbObjectResult.Content](../ISearchMbObjectResult/ISearchMbObjectResult.Content.htm)
 или [ISearchMbObjectResult.HighlightedContent](../ISearchMbObjectResult/ISearchMbObjectResult.HighlightedContent.htm).
 Содержимое будет загружаться вне зависимости от того, в какой части было
 найдено значение: в метаданных объекта репозитория или в содержимом файла.


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

    //Получать содержимое Документов

    SearchContext.NeedDocumentContent := True;

    SearchContext.Text := "Годовой отчёт 2016";

    //Поиск

    Results := SearchExecutor.Search(SearchContext) As ISolrSearchResults;

    //Просмотр результатов поиска

    For i := 0 To Results.Count - 1 Do

        Result := Results.Item(i) As ISearchMbObjectResult;

        //Вывод информации только по найденным Документам

        If Result.ClassId = MetabaseObjectClass.KE_CLASS_DOCUMENT Then

            Debug.WriteLine("Объект: " + Result.Name + '(' + Result.Id + ')');

            Debug.WriteLine("Дата и время последнего изменения: " + Result.Timestamp);

            If Result.Content <> "" Then

                Debug.WriteLine("Содержимое документа: " + Result.Content);

                If Result.HighlightedContent <> "" Then

                    Debug.WriteLine("Содержимое с подсветкой искомого значения: " + Result.HighlightedContent);

                End If;

            End If;

        End If;

    End For;

End Sub UserProc;


При выполнении примера будет осуществлён поиск указанного значения по
 индексированным метаданным объектов репозитория. Если искомое значение
 будет найдено в документах, то их содержимое также будет загружено вместе
 с результатами. Информация о найденных документах будет выведена в консоль
 среды разработки.


См. также:


[ISolrMbObjectsSearchContext](ISolrMbObjectsSearchContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
