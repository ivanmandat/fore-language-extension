# Поиск

Поиск
-


# Поиск


После [получения доступа](get_access.htm) к объекту, позволяющему
 произвести поиск, необходимо подготовить контекст с настройками поиска.
 Для создания контекста вызовите метод [ISearchExecutor.CreateContext](../Interface/ISearchExecutor/ISearchExecutor.CreateContext.htm).
 В зависимости от того, что предполагается искать (срезы в индексированных
 структурах источников по наименованиям элементов измерений или метаданные
 объектов репозитория) необходимо результат метода привести к одному из
 двух интерфейсов: [ISolrSourceDataSearchContext](../Interface/ISolrSourceDataSearchContext/ISolrSourceDataSearchContext.htm)
 и [ISolrMbObjectsSearchContext](../Interface/ISolrMbObjectsSearchContext/ISolrMbObjectsSearchContext.htm).


	Var

	    //...

	    MB: IMetabase;

	    SharedParams: ISharedParams;

	    SearchEngine: ISolrSearchEngineService;

	    SearchSchema: ISolrSearchEngineSchema;

	    SearchExecutor: ISearchExecutor;

	    SourceContext: ISolrSourceDataSearchContext;

	    MbObjContext: ISolrMbObjectsSearchContext;

	    //...

	Begin

	    //...

	    MB := MetabaseClass.Active;

	    //Параметры поиска и индексации, заданные для репозитория

	    SharedParams := MB.SpecialObject(MetabaseSpecialObject.SharedParams).Bind As ISharedParams;

	    SearchEngine := SharedParams.SearchEngine As ISolrSearchEngineService;

	    SearchSchema := SearchEngine.SearchEngineSchema As ISolrSearchEngineSchema;

	    //Для поиска по
	 элементам измерений

	    SearchExecutor := SearchSchema.SearchExecutor(SearchEngineTargetType.SourceData);

	    SourceContext := SearchExecutor.CreateContext As ISolrSourceDataSearchContext;

	    //...

	    //Для поиска метаданных объектов репозитория

	    SearchExecutor := SearchSchema.SearchExecutor(SearchEngineTargetType.MbObject);

	    MbObjContext := SearchExecutor.CreateContext As ISolrMbObjectsSearchContext;

	    //...


## Поиск по элементам измерений


Для поиска и формирования срезов источников данных по индексированным
 наименованиям элементов измерений в контексте для поиска необходимо указать
 следующие минимальные настройки: в свойстве [Locale](../Interface/ISolrSearchContext/ISolrSearchContext.Locale.htm)
 указать язык, на котором осуществляется поиск (язык влияет на выбор экземпляров
 Solr, с которыми будет производиться работа), и в свойстве [Text](../Interface/ISearchEngineSearchContext/ISearchEngineSearchContext.Text.htm)
 указать искомый текст. При необходимости можно указать дополнительные
 параметры поиска, более подробно смотрите описание свойств интерфейса
 [ISolrSearchContext](../Interface/ISolrSearchContext/ISolrSearchContext.htm).


Минимальные настройки для поиска:


	Var

	    //...

	    SearchSchema: ISolrSearchEngineSchema;

	    SearchExecutor: ISearchExecutor;

	    SourceContext: ISolrSourceDataSearchContext;

	    //...

	Begin

	    //...

	    //Для поиска по элементам измерений

	    SearchExecutor := SearchSchema.SearchExecutor(SearchEngineTargetType.SourceData);

	    SourceContext := SearchExecutor.CreateContext As ISolrSourceDataSearchContext;

	    SourceContext.Locale := LocaleCodeID.Russian;

	    SourceContext.Text := "ВВП Россия";

	    //...


Поиск с фильтрацией по значениям поля:


	Var

	    //...

	    SearchSchema: ISolrSearchEngineSchema;

	    SearchExecutor: ISearchExecutor;

	    SourceContext: ISolrSourceDataSearchContext;

	    FilterCondition: ISolrFilterCondition;

	    ConditionValues: ISolrFilterFieldValues;

	    Values: Array Of Variant;

	    //...

	Begin

	    //...

	    //Для поиска по элементам измерений

	    SearchExecutor := SearchSchema.SearchExecutor(SearchEngineTargetType.SourceData);

	    SourceContext := SearchExecutor.CreateContext As ISolrSourceDataSearchContext;

	    SourceContext.Locale := LocaleCodeID.Russian;

	    SourceContext.Text := "ВВП Россия";

	    //Параметры фильтрации

	    FilterCondition := SourceContext.FilterContext.FilterCondition;

	    FilterCondition.SolrField := SearchSchema.Fields(SearchEngineTargetType.SourceData).FindById("name");

	    FilterCondition.Operator_ := LogicalOperator.And_;

	    ConditionValues := FilterCondition.Values;

	    ConditionValues.Operator_ := LogicalOperator.Or_;

	    Values := New Variant[2];

	    Values[0] := "Доход";

	    Values[1] := "Расход";

	    //...


После указания всех параметров поиска настроенный контекст передайте
 в метод [ISearchExecutor.Search](../Interface/ISearchExecutor/ISearchExecutor.Search.htm).
 При выполнении метода будет сформирован и отправлен запрос поисковой платформе
 Apache Solr, выполнен поиск и получен ответ с результатами поиска. Результат
 представляет собой коллекцию элементов, каждый из которых содержит информацию
 о срезе данных. Результирующую коллекцию можно привести к интерфейсу [ISolrSearchResults](../Interface/ISolrSearchResults/ISolrSearchResults.htm),
 а каждый элемент коллекции - к интерфейсу [ISolrSearchResult](../Interface/ISolrSearchResult/ISolrSearchResult.htm)
 или [ISearchSourceDataResult](../Interface/ISearchSourceDataResult/ISearchSourceDataResult.htm).


	Var

	    //...

	    Schema: ISolrSearchEngineSchema;

	    SearchExecutor: ISearchExecutor;

	    SearchContext: ISolrSourceDataSearchContext;

	    Results: ISolrSearchResults;

	    Result: ISearchResult;

	    i: Integer;

	    //...

	Begin

	    //...

	    SearchExecutor := Schema.SearchExecutor(SearchEngineTargetType.SourceData);

	    //...

	    //Настройка параметров поиска

	    //...

	    //Выполнение поиска и получение результатов

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


## Поиск по метаданным объектов репозитория


Также, как и при поиске по элементам измерений, для поиска объектов
 по их индексированным метаданным в контексте для поиска необходимо указать
 следующие минимальные настройки: в свойстве [Locale](../Interface/ISolrSearchContext/ISolrSearchContext.Locale.htm)
 указать язык, на котором осуществляется поиск, и в свойстве [Text](../Interface/ISearchEngineSearchContext/ISearchEngineSearchContext.Text.htm)
 указать искомый текст. При необходимости можно указать дополнительные
 параметры поиска, более подробно смотрите описание свойств интерфейса
 [ISolrMbObjectsSearchContext](../Interface/ISolrMbObjectsSearchContext/ISolrMbObjectsSearchContext.htm).


Минимальные настройки для поиска:


	Var

	    //...

	    SearchSchema: ISolrSearchEngineSchema;

	    SearchExecutor: ISearchExecutor;

	    MbObjContext: ISolrMbObjectsSearchContext;

	    //...

	Begin

	    //...

	    //Для поиска по индексированным метаданным

	    SearchExecutor := SearchSchema.SearchExecutor(SearchEngineTargetType.MbObject);

	    MbObjContext := SearchExecutor.CreateContext As ISolrMbObjectsSearchContext;

	    MbObjContext.Locale := LocaleCodeID.Russian;

	    MbObjContext.Text := "Куб";

	    //...


	Поиск с фильтрацией по значениям поля:


	Var

	    //...

	    SearchSchema: ISolrSearchEngineSchema;

	    SearchExecutor: ISearchExecutor;

	    MbObjContext: ISolrMbObjectsSearchContext;

	    FilterCondition: ISolrFilterCondition;

	    ConditionValues: ISolrFilterFieldValues;

	    Values: Array Of Variant;

	    //...

	Begin

	    //...

	    //Для поиска по индексированным метаданным

	    SearchExecutor := SearchSchema.SearchExecutor(SearchEngineTargetType.MbObject);

	    MbObjContext := SearchExecutor.CreateContext As ISolrMbObjectsSearchContext;

	    MbObjContext.Locale := LocaleCodeID.Russian;

	    MbObjContext.NeedDocumentContent := True;

	    MbObjContext.Text := "Документ";

	    //Параметры фильтрации

	    FilterCondition := MbObjContext.FilterContext.FilterCondition;

	    FilterCondition.SolrField := SearchSchema.Fields(SearchEngineTargetType.SourceData).FindById("content");

	    FilterCondition.Operator_ := LogicalOperator.And_;

	    ConditionValues := FilterCondition.Values;

	    ConditionValues.Operator_ := LogicalOperator.Or_;

	    Values := New Variant[3];

	    Values[0] := "Россия";

	    Values[1] := "США";

	    Values[1] := "Канада";

	    //...


После указания всех параметров поиска настроенный контекст передайте
 в метод [ISearchExecutor.Search](../Interface/ISearchExecutor/ISearchExecutor.Search.htm).
 При выполнении метода будет сформирован и отправлен запрос поисковой платформе
 Apache Solr, выполнен поиск и получен ответ с результатами поиска. Результат
 представляет собой коллекцию элементов, каждый из которых содержит информацию
 с метаданными объекта репозитория. Результирующую коллекцию можно привести
 к интерфейсу [ISolrSearchResults](../Interface/ISolrSearchResults/ISolrSearchResults.htm),
 а каждый элемент коллекции - к интерфейсу [ISolrSearchResult](../Interface/ISolrSearchResult/ISolrSearchResult.htm)
 или [ISearchMbObjectResult](../Interface/ISearchMbObjectResult/ISearchMbObjectResult.htm).


	Var

	    //...

	    Schema: ISolrSearchEngineSchema;

	    SearchExecutor: ISearchExecutor;

	    MbObjContext: ISolrMbObjectsSearchContext;

	    Results: ISolrSearchResults;

	    Result: ISearchMbObjectResult;

	    i: Integer;

	    //...

	Begin

	    //...

	    SearchExecutor := Schema.SearchExecutor(SearchEngineTargetType.MbObject);

	    //...

	    //Настройка параметров поиска

	    //...

	    //Выполнение поиска и получение результатов

	    Results := SearchExecutor.Search(MbObjContext) As ISolrSearchResults;

	    //Просмотр результатов поиска

	        For i := 0 To Results.Count - 1 Do

	        Result := Results.Item(i) As ISearchMbObjectResult;

	        Debug.WriteLine(Result.ClassName + '(' + Result.ClassId.ToString + ')');

	        Debug.Indent;

	        Debug.WriteLine("Объект: " + Result.Name + '(' + Result.Id + ')');

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

	        If Result.Content <> "" Then

	            Debug.WriteLine("Содержимое документа: " + Result.Content);

	            If Result.HighlightedContent <> "" Then

	                Debug.WriteLine("Содержимое с подсветкой искомого значения: " + Result.HighlightedContent);

	            End If;

	        End If;

	        Debug.Unindent;

	    End For;


См. также:


[Введение](KeBISearch_Intro.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
