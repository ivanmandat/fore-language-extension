# ISearchSourceDataResult.SourceMetadata

ISearchSourceDataResult.SourceMetadata
-


# ISearchSourceDataResult.SourceMetadata


## Синтаксис


SourceMetadata: [ISourceMetadata](../ISourceMetadata/ISourceMetadata.htm);


## Описание


Свойство SourceMetadata возвращает
 метаданные источника данных.


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

    Result: ISearchSourceDataResult;

    Source: ISourceMetadata;

    Selections: ISearchDimSelectionSet;

    Selection: ISearchDimSelection;

    Elements: ISearchDimSelectionElements;

    Element: ISearchDimSelectionElement;

    Calendars: ICalendarInfos;

    Calendar: ICalendarInfo;

    MDesc: IMetabaseObjectDescriptor;

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

    SearchContext.Text := "Россия";

    //Поиск

    Results := SearchExecutor.Search(SearchContext) As ISolrSearchResults;

    //Просмотр информации по источнику для первого результата поиска

    Result := Results.Item(0) As ISearchSourceDataResult;

    Source := Result.SourceMetadata;

    Debug.WriteLine("Наименование среза: " + Result.Name);

    Debug.WriteLine("Источник: " + Source.SourceName + '(' + Source.SourceId + ')');

    Debug.WriteLine("Тип объекта: " + MetabaseClass.CommonClassName(Source.SourceClassId As MetabaseObjectClass));

    If Source.HighlightedSourceName.Length > 0 Then

        Debug.WriteLine("Наименование с подсветкой искомого значения: " + Source.HighlightedSourceName);

    End If;

    Debug.WriteLine("Отметка по индексированным измерениям:");

    Debug.Indent;

    //Отметка измерений, по которой сформирован срез

    Selections := Source.Selection;

    For i := 0 To Selections.Count - 1 Do

        Selection := Selections.Item(i);

        Debug.Write("Ключ измерения: " + Selection.DimensionKey.ToString + ". Элементы: ");

        Elements := Selection.Elements;

        For j := 0 To Elements.Count - 1 Do

            Element := Elements.Item(j);

            Debug.Write(Element.Name + '(' + Element.Key + ") ");

        End For;

        Debug.WriteLine("");

    End For;

    Debug.Unindent;

    //Отметка свободных измерений, если они имеются

    If Source.FreeDimensionsSelection.Count <> 0 Then

        Debug.WriteLine("Отметка свободных измерений:");

        Debug.Indent;

        Selections := Source.FreeDimensionsSelection;

        For i := 0 To Selections.Count - 1 Do

            Selection := Selections.Item(i);

            Debug.Write("Ключ измерения: " + Selection.DimensionKey.ToString + ". Элементы: ");

            Elements := Selection.Elements;

            For j := 0 To Elements.Count - 1 Do

                Element := Elements.Item(j);

                Debug.Write(Element.Name + '(' + Element.Key + ") ");

            End For;

            Debug.WriteLine("");

        End For;

        Debug.Unindent;

    End If;

    //Информация о календарных измерениях

    Calendars := Source.CalendarInfo;

    For i := 0 To Calendars.Count - 1 Do

        Calendar := Calendars.Item(i);

        MDesc := MB.Item(Calendar.Key);

        Debug.WriteLine("Справочник в основе календарного измерения: " + MDesc.Name + '(' + MDesc.Id + ')');

        Debug.WriteLine("Даты, на которые имеются данные: " + Calendar.DateStart.ToString + " - " +

            Calendar.DateEnd.ToString);

    End For;

End Sub UserProc;


При выполнении примера будет осуществлен поиск указанного значения по
 индексированной информации об элементах измерений. Из первого найденного
 результата будет получена информация об источнике данных, к которому относится
 срез. Различная информация об отметке источника будет выведена в консоль
 среды разработки.


См. также:


[ISearchSourceDataResult](ISearchSourceDataResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
