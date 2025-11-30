# IFormulaTransformModel.IdentificationStartDateParamId

IFormulaTransformModel.IdentificationStartDateParamId
-


# IFormulaTransformModel.IdentificationStartDateParamId


## Синтаксис


IdentificationStartDateParamId: String;


## Описание


Свойство IdentificationStartDateParamId определяет идентификатор параметра, задающего дату начала периода идентификации.


## Комментарии


Для определения параметра, задающего дату окончания периода идентификации используйте свойство [IFormulaTransformModel.IdentificationEndDateParamId](IFormulaTransformModel.IdentificationEndDateParamId.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент LanerBox с идентификатором «LanerBox1» и компонент UiErAnalayzer с идентификатором «UiErAnalayzer1», являющийся источником данных для «LanerBox1». В «UiErAnalayzer1» должна быть загружена рабочая книга БД временных рядов, содержащая вычисляемые ряды и параметры типа «Дата и время» со следующими идентификаторами: «IDENT_START», «IDENT_END», «FORECAST_START», «FORECAST_END».


Добавьте ссылки на системные сборки: «Cubes», «Dal», «Metabase», «Transform».


Перед выполнением примера в «LanerBox1» выделите один вычисляемый ряд.


			Sub CalcSeriesPerams;

Var

    Eax: IEaxAnalyzer;

    ParamsProv: ITsParamProvider;

    ParamVals: ITsModelParamValues;

    pVal: ITsModelParamValue;

    Laner: ILaner;

    Series: ILanerSerie;

    CalcSerie: ILanerCalculateSerie;

    TransformModel: IFormulaTransformModel;

Begin

    Eax := UiErAnalyzer1.ErAnalyzer;

    // Получаем объект для работы с параметрами
    ParamsProv := Eax.ParamProvider As ITsParamProvider;

    // Задаем значение параметров
    ParamVals := ParamsProv.ParamValues;

    // Начало идентификации
    pVal := ParamVals.FindById("IDENT_START");

    pVal.Value := DateTime.Parse("01.01.2003");

    // Окончание идентификации
    pVal := ParamVals.FindById("IDENT_END");

    pVal.Value := DateTime.Parse("31.12.2007");

    // Начало прогноза
    pVal := ParamVals.FindById("FORECAST_START");

    pVal.Value := DateTime.Parse("01.01.2008");

    // Окончание прогноза
    pVal := ParamVals.FindById("FORECAST_END");

    pVal.Value := DateTime.Parse("01.01.2015");

    // Получаем вычисляемый ряд
    Series := LanerBox1.SelectedSeries(0);

    CalcSerie := Series As ILanerCalculateSerie;

    TransformModel := CalcSerie.Transform;

    TransformModel.AutoPeriod := TransformModelAutoPeriodOptions.None;

    TransformModel.PeriodSet := TransformModelPeriodSet.All;

    TransformModel.UsePeriod := True;

    // Задаем параметры для периода расчёта ряда
    TransformModel.IdentificationStartDateParamId := "IDENT_START";

    TransformModel.IdentificationEndDateParamId := "IDENT_END";

    TransformModel.ForecastStartDateParamId := "FORECAST_START";

    TransformModel.ForecastEndDateParamId := "FORECAST_END";

    // Обновляем данные
    Laner := Eax.Laner;

    Laner.Refresh;

    CalcSerie.Calculate;

End Sub CalcSeriesPerams;


Результат выполнения примера: для вычисляемого ряда, выделенного в компоненте «LanerBox1», параметры периода расчёта будут определять параметры: «IDENT_START», «IDENT_END», «FORECAST_START», «FORECAST_END».


См. также:


[IFormulaTransformModel](IFormulaTransformModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
