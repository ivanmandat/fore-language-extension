# IValidationSelectionValues.ParameterAsSelection

IValidationSelectionValues.ParameterAsSelection
-


# IValidationSelectionValues.ParameterAsSelection


## Синтаксис


ParameterAsSelection: [IMsModelParam](../IMsModelParam/IMsModelParam.htm);


## Описание


Свойство ParameterAsSelection
 определяет параметр для передачи отметки в элемент фильтра.


## Комментарии


Для задания значения параметра используйте свойство [IValidationExecuteSettings.ParamValues](../IValidationExecuteSettings/IValidationExecuteSettings.ParamValues.htm).


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


Пример является методом для добавления параметра в фильтр валидации.
 Параметр ограничивает набор фильтруемых рядов. Входные параметры метода:


	- IsGroup. Определяет,
	 является ли значение параметра группой элементов. True
	 - значение параметра является группой элементов; False
	 - значение параметра является отметкой элементов;


	- Value. Значение параметра.


			Sub AddFilterParam(IsGroup: Boolean; Value: Variant);

Var

    mb: IMetabase;

    FCObj: IMetabaseObject;

    FC: IRubricator;

    Atts: IMetaAttributes;

    LinkedDict: IMetabaseObjectDescriptor;

    ValidObj: IMetabaseObject;

    ValidFilter: IValidationFilter;

    Params: IMsModelParams;

    FilterPrarm: IMsModelParam;

    Filter: IValidationSelectionFilter;

    Sel: IDimSelection;

    FilterVal: IValidationSelectionValues;

    ExecSett: IValidationExecuteSettings;

    Analyzer: IEaxAnalyzer;

    ParamVals: IMsModelParamValues;

    ExecRun: IValidationExecRun;

    DiagRep: IDiagnosticReport;

Begin

    mb := MetabaseClass.Active;

    // Получаем базу данных временных рядов

    FCObj := mb.ItemById("TSDB_VALIDATION_PARAMETERS").Bind;

    FC := FCObj As IRubricator;

    // Получаем справочник, на который ссылается атрибут CITY

    Atts := FC.Facts.Attributes;

    LinkedDict := Atts.FindById("CITY").ValuesObject;

    // Получаем правило валидации

    ValidObj := Mb.ItemByIdNamespace("VALIDATION_TREND", FCObj.Key).Edit;

    ValidFilter := ValidObj As IValidationFilter;

    // Получаем параметры правила валидации

    Params := ValidFilter.Params;

    Params.Clear;

    // Добавляем параметр для фильтрации элементов

    FilterPrarm := Params.Add;

    FilterPrarm.Id := "FILTER_CITY";

    FilterPrarm.Name := "Город для фильтра";

    FilterPrarm.LinkedObject := LinkedDict;

    // Задаем фильтр валидации, основанный на параметре

    Filter := (ValidFilter.Details As IValidationTrend).SelectionFilter;

    Filter.Clear;

    Sel := (LinkedDict.Open(Null) As IDimInstance).CreateSelection;

    FilterVal := Filter.Add(Sel);

    If IsGroup Then

        FilterVal.ParameterAsGroup := FilterPrarm;

    Else

        FilterVal.ParameterAsSelection := FilterPrarm;

    End If;

    // Сохраняем правило валидации

    ValidObj.Save;

    // Задаем параметры выполнения правила

    ExecSett := ValidFilter.CreateExecuteSettings;

    Analyzer := UiErAnalyzer1.ErAnalyzer;

    ExecSett.Laner := Analyzer.Laner;

    // Задаем значения параметра

    ParamVals := ExecSett.ParamValues;

    ParamVals.FindById("FILTER_CITY").Value := Value;

    // Выполняем правило валидации

    ExecRun := ValidFilter.Execute(ExecSett);

    DiagRep := New DiagnosticReport.Create;

    DiagRep.Run := ExecRun;

    DiagRep.EaxAnalyzer := Analyzer;

End Sub AddFilterParam;


В результате выполнения примера для правила валидации «VALIDATION_TREND»
 будет задан фильтр. Отметка, образующая фильтр, будет задана параметром
 «COMPAR_CITY». Данный параметр определяет значение обязательного атрибута
 «CITY». Правило будет рассчитано для рабочей книги, отображаемой в «WorkbookDocumentViewerBox1».


См. также:


[IValidationSelectionValues](IValidationSelectionValues.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
