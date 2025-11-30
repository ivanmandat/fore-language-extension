# ISearchSourceDataResult.CreateDimSelectionSet

ISearchSourceDataResult.CreateDimSelectionSet
-


# ISearchSourceDataResult.CreateDimSelectionSet


## Синтаксис


CreateDimSelectionSet: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Описание


Метод CreateDimSelectionSet
 создает по найденным элементам измерений отметку, которая формирует срез
 данных.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiErAnalyzer
 с наименованием «UiErAnalyzer1» и каких-либо визуальных компонентов, для
 которых «UiErAnalyzer1» установлен в качестве источника данных. Подключите
 системные сборки: BISearch, Cubes, Dimensions, Express, Fore, Metabase,
 Pivot.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

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

    CrInfo: IMetabaseObjectCreateInfo;

    Cube: ICubeInstance;

    Expr: IEaxAnalyzer;

    SelSet: IDimSelectionSet;

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

    //Отображение среза

    If Source.SourceClassId = MetabaseObjectClass.KE_CLASS_STDCUBE Then

        CrInfo := MB.CreateCreateInfo;

        CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_EXPRESSREPORT;

        Expr := MB.CreateObject(CrInfo).Edit As IEaxAnalyzer;

        Cube := MB.Item(Source.SourceKey).Open(Null) As ICubeInstance;

        Expr.OpenCubeDestination(Cube, Source.DestinationKey, EaxOpenCubeOptions.None);

        //Получение отметки среза

        SelSet := Result.CreateDimSelectionSet;

        //Установка отметки в экспресс-отчете

        SelSet.CopyTo(Expr.Pivot.Selection, True, True);

        //Подключение к компоненту UiErAnalyzer

        UiErAnalyzer1.ErAnalyzer := Expr;

        UiErAnalyzer1.Active := True;

    End If;

End Sub Button1OnClick;


При нажатии на кнопку будет осуществлен поиск указанного значения по
 индексированной информации об элементах измерений. Из первого найденного
 результата будет получена информация об источнике данных. Если источником
 является стандартный куб, то будут выполнены следующие действия:


	- динамически создан экспресс-отчет;


	- в качестве источника для экспресс-отчета будет установлен полученный
	 куб;


	- создана отметка, соответствующая найденному срезу. Отметка будет
	 установлена в экспресс-отчете.


После этого экспресс-отчет будет подключен к компонентам формы для просмотра
 данных найденного среза.


См. также:


[ISearchSourceDataResult](ISearchSourceDataResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
