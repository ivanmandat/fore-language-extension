# ISearchSourceDataResult.DateLevels

ISearchSourceDataResult.DateLevels
-


# ISearchSourceDataResult.DateLevels


## Синтаксис


DateLevels: Array;


## Описание


Свойство DateLevels возвращает
 список уровней календаря, по которым в источнике имеются данные.


## Комментарии


Каждый элемент массива содержит числовое значение, обозначающее уровень.
 Для проверки значений можно воспользоваться перечислением [DimCalendarLevel](KeDims.chm::/Enums/DimCalendarLevel.htm).


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

    i: Integer;

    s: String;

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

    SearchContext.Text := "2000";

    //Поиск

    Results := SearchExecutor.Search(SearchContext) As ISolrSearchResults;

    //Просмотр информации по источнику для первого результата поиска

    Result := Results.Item(0) As ISearchSourceDataResult;

    Debug.WriteLine("Наименование среза: " + Result.Name);

    Debug.WriteLine("Уровни календаря, по которым имеются данные:");

    Debug.Indent;

    For Each i In Result.DateLevels Do

        Select Case i

            Case 1: Debug.WriteLine("Годы");

            Case 2: Debug.WriteLine("Полугодия");

            Case 3: Debug.WriteLine("Кварталы");

            Case 4: Debug.WriteLine("Месяцы");

            Case 5: Debug.WriteLine("Дни");

            Case 6: Debug.WriteLine("9 месяцев");

            Case 7: Debug.WriteLine("Недели");

        End Select;

    End For;

    Debug.Unindent;

    Debug.WriteLine("Список годов, по которым имеются данные:");

    For Each s In Result.Time Do

        Debug.Write(s + ' ');

    End For;

    Debug.WriteLine("");

    If Result.HighlightedTime.Length > 0 Then

        Debug.WriteLine("Список годов с подсветкой искомого значения:");

        For Each s In Result.HighlightedTime Do

            Debug.Write(s + ' ');

        End For;

        Debug.WriteLine("");

    End If;

    If Result.HighlightedFreeDimensions.Length > 0 Then

        Debug.WriteLine("Список свободных измерений с подсветкой искомого значения:");

        For Each s In Result.HighlightedFreeDimensions Do

            Debug.Write(s + ' ');

        End For;

        Debug.WriteLine("");

    End If;

End Sub UserProc;


При выполнении примера будет осуществлен поиск указанного значения по
 индексированной информации об элементах измерений. Из первого найденного
 результата будет получена информация о календарном периоде, за который
 имеются данные. Данная информация будет выведена в консоль среды разработки.
 Также будет выведена информация о свободных измерения, если они имеются.


См. также:


[ISearchSourceDataResult](ISearchSourceDataResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
