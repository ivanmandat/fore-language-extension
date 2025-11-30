# IValidationFilter.ParamProvider

IValidationFilter.ParamProvider
-


# IValidationFilter.ParamProvider


## Синтаксис


ParamProvider: [IMsParamProvider](../IMsParamProvider/IMsParamProvider.htm);


## Описание


Свойство ParamProvider
 определяет объект, предназначенный для работы с параметрами правила валидации
 и их значениями.


## Комментарии


По умолчанию правило валидации не содержит параметров.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты:
 WorkbookDocumentViewerBox с идентификатором
 «WorkbookDocumentViewerBox1» и UiErAnalayzer
 с идентификатором «UiErAnalyzer1». «UiErAnalyzer1» является источником
 данных для «WorkbookDocumentViewerBox1» и содержит рабочую книгу базы
 данных временных рядов с идентификатором «TSDB». Параметры базы данных
 временных рядов:


	- присутствует обязательный атрибут временных рядов с идентификатором
	 «CITY», ссылающийся на справочник;


	- присутствует правило валидации с идентификатором «VALIDATION_COMPARPARAM»
	 типа «Сравнение трендов».


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms,
 Rds, Transform.


			Sub UserProc;

Var

    mb: IMetabase;

    FCObj: IMetabaseObject;

    FC: IRubricator;

    Atts: IMetaAttributes;

    LinkedDict: IMetabaseObjectDescriptor;

    ValidObj: IMetabaseObject;

    ValidFilter: IValidationFilter;

    ParamProvider: IMsParamProvider;

    Params: IMsModelParams;

    ExecSett: IValidationExecuteSettings;

    Analyzer: IEaxAnalyzer;

    ParamVals: IMsModelParamValues;

    DimSel: IDimSelection;

    ExecRun: IValidationExecRun;

    DiagRep: IDiagnosticReport;

    FilterPrarm: IMsModelParam;

    Filter: IValidationSelectionFilter;

    DimInstance: IDimInstance;

    FilterVal: IValidationSelectionValues;

Begin

    mb := MetabaseClass.Active;

    // Получаем БД временных рядов

    FCObj := mb.ItemById("TSDB").Bind;

    FC := FCObj As IRubricator;

    //Получаем справочник, на который ссылается атрибут "CITY"

    Atts := FC.GetDictionary(RubricatorDictionary.Facts).Attributes;

    LinkedDict := Atts.FindById("CITY").ValuesObject;

    //Получаем правило валидации

    ValidObj := Mb.ItemByIdNamespace("VALIDATION_COMPARPARAM", FCObj.Key).Edit;

    ValidFilter := ValidObj As IValidationFilter;

    // Получаем параметры правила валидации

    Analyzer := UiErAnalyzer1.ErAnalyzer;

    ValidFilter.ParamProvider := Analyzer.ParamProvider As IMsParamProvider;

    ParamProvider := ValidFilter.ParamProvider;

    Params := ParamProvider.Params;

    Params.Clear;

    // Добавляем параметр для фильтрации

    FilterPrarm := Params.Add;

    FilterPrarm.Id := "COMPAR_CITY";

    FilterPrarm.Name := "Город для блока фильтрации";

    FilterPrarm.LinkedObject := LinkedDict;

    FilterPrarm.ParamType := TsParamType.Selection;

    // Сохраняем правило валидации

    ValidObj.Save;

    // Задаем параметры выполнения правила

    ExecSett := ValidFilter.CreateExecuteSettings;

    ExecSett.Laner := Analyzer.Laner;

    // Задаем фильтр

    Filter := ExecSett.SelectionFilter;

    Filter.Clear;

    DimInstance := LinkedDict.Open(Null) As IDimInstance;

    DimSel := DimInstance.CreateSelection;

    FilterVal := Filter.Add(DimSel);

    FilterVal.OutputParameter := FilterPrarm;

    // Задаем значения параметра

    ParamVals := ExecSett.ParamValues;

    DimSel.DeselectAll;

    DimSel.SelectElement(1, False);

    ParamVals.FindById("COMPAR_CITY").Value := DimSel;

    // Выполняем правило валидации

    ExecRun := ValidFilter.Execute(ExecSett);

    DiagRep := New DiagnosticReport.Create;

    DiagRep.Run := ExecRun;

    DiagRep.EaxAnalyzer := Analyzer;

End Sub UserProc;


Результат выполнения примера: для правила валидации «VALIDATION_COMPARPARAM»
 задан фильтр. Фильтрация задается параметром «COMPAR_CITY», определяющим
 значение обязательного атрибута «CITY». Правило будет выполнено для рабочей
 книги, отображаемой в «WorkbookDocumentViewerBox1».


См. также:


[IValidationFilter](IValidationFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
