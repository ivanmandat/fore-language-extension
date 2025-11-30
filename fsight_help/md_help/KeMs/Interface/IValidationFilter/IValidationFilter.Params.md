# IValidationFilter.Params

IValidationFilter.Params
-


# IValidationFilter.Params


## Синтаксис


Params: [IMsModelParams](../IMsModelParams/IMsModelParams.htm);


## Описание


Свойство Params возвращает
 набор параметров фильтра валидации.


## Комментарии


Значения параметров указываются в объекте, создаваемом с помощью метода
 [IValidationFilter.CreateExecuteSettings](IValidationFilter.CreateExecuteSettings.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты:
 WorkbookDocumentViewerBox с идентификатором
 «WorkbookDocumentViewerBox1» и UiErAnalayzer
 с идентификатором «UiErAnalyzer1». «UiErAnalyzer1» является источником
 данных для «WorkbookDocumentViewerBox1» и содержит рабочую книгу из базы
 данных временных рядов с идентификатором «TSDB_VALIDATION_PARAMETERS».
 Параметры базы данных временных рядов:


	- присутствует обязательный атрибут рядов с идентификатором «CITY»,
	 ссылающийся на справочник;


	- присутствует правило валидации с идентификатором «VALIDATION_TREND»
	 типа «Сравнение трендов».


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms,
 Rds.


			Sub UserProc;

Var

    mb: IMetabase;

    FCObj: IMetabaseObject;

    FC: IRubricator;

    LinkedDict: IMetabaseObjectDescriptor;

    Dim: IDimInstance;

    DimSel: IDimSelection;

    ValidObj: IMetabaseObject;

    ValidFilter: IValidationFilter;

    Params: IMsModelParams;

    ComparPrarm: IMsModelParam;

    Trend: IValidationTrend;

    Comparator: IValidationSelectionValueList;

    ComparVal: IValidationSelectionValue;

    ExecSett: IValidationExecuteSettings;

    Analyzer: IEaxAnalyzer;

    ParamVals: IMsModelParamValues;

    ExecRun: IValidationExecRun;

    DiagRep: IDiagnosticReport;

Begin

    mb := MetabaseClass.Active;

    // Получаем БД временных рядов

    FCObj := mb.ItemById("TSDB_VALIDATION_PARAMETERS").Bind;

    FC := FCObj As IRubricator;

    //Получаем справочник, на который ссылается атрибут "CITY"

    LinkedDict := FC.Facts.Attributes.FindById("CITY").ValuesObject;

    Dim := LinkedDict.Open(Null) As IDimInstance;

    DimSel := Dim.CreateSelection;

    //Получаем правило валидации

    ValidObj := Mb.ItemByIdNamespace("VALIDATION_TREND", FCObj.Key).Edit;

    ValidFilter := ValidObj As IValidationFilter;

    // Получаем параметры правила валидации

    Params := ValidFilter.Params;

    Params.Clear;

    // Добавляем параметр для выражения сравнения

    ComparPrarm := Params.Add;

    ComparPrarm.Id := "COMPAR_CITY";

    ComparPrarm.Name := "Город для блока сравнения";

    ComparPrarm.LinkedObject := LinkedDict;

    // Задаем выражение сравнения

    Trend := ValidFilter.Details As IValidationTrend;

    Comparator := Trend.SelectionComparatorData;

    Comparator.Clear;

    ComparVal := Comparator.Add(DimSel);

    ComparVal.Parameter := ComparPrarm;

    // Очищаем фильтр валидации

    Trend.SelectionFilter.Clear;

    // Сохраняем правило валидации

    ValidObj.Save;

    // Получаем параметры выполнения правила

    ExecSett := ValidFilter.CreateExecuteSettings;

    Analyzer := UiErAnalyzer1.ErAnalyzer;

    ExecSett.Laner := Analyzer.Laner;

    // Задаем значения параметра

    ParamVals := ExecSett.ParamValues;

    DimSel.DeselectAll;

    DimSel.SelectElement(1, False);

    ParamVals.FindById("COMPAR_CITY").Value := DimSel.ToVariant;

    // Выполняем правило валидации

    ExecRun := ValidFilter.Execute(ExecSett);

    DiagRep := New DiagnosticReport.Create;

    DiagRep.Run := ExecRun;

    DiagRep.EaxAnalyzer := Analyzer;

End Sub UserProc;


В результате выполнения примера для правила валидации «VALIDATION_TREND»
 будет изменён ряд, с трендом которого выполняется сравнение. Сравниваемый
 ряд задается параметром «COMPAR_CITY», определяющим значение обязательного
 атрибута «CITY». Правило будет выполнено для рабочей книги, отображаемой
 в «WorkbookDocumentViewerBox1».


См. также:


[IValidationFilter](IValidationFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
