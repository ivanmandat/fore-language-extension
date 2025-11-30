# ILanerTransformPeriod.ForecastStartDateParamID

ILanerTransformPeriod.ForecastStartDateParamID
-


# ILanerTransformPeriod.ForecastStartDateParamID


## Синтаксис


ForecastStartDateParamID: String;


## Описание


Свойство ForecastStartDateParamID
 определяет идентификатор параметра, задающего дату начала периода прогнозирования.


## Комментарии


Значение свойства можно изменять, если [ILanerTransformPeriod.PeriodSet](ILanerTransformPeriod.PeriodSet.htm)
 имеет значение [LnTransformPeriodSet.ForecastStartDate](../../Enums/LnTransformPeriodSet.htm)
 или [LnTransformPeriodSet.All](../../Enums/LnTransformPeriodSet.htm). Поэтому
 [ILanerTransformPeriod.PeriodSet](ILanerTransformPeriod.PeriodSet.htm)
 необходимо задавать до ForecastStartDateParamID.


Если значение свойства не задано, то дату начала периода прогнозирования
 определяет свойство [ILanerTransformPeriod.ForecastStartDate](ILanerTransformPeriod.ForecastStartDate.htm).


Если заданы свойства ForecastStartDateParamID
 и [ILanerTransformPeriod.ForecastStartDate](ILanerTransformPeriod.ForecastStartDate.htm),
 то дату начала периода прогнозирования определяет то свойство, которое
 задано последним.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая книга базы данных временных
 рядов, содержащая вычисляемый ряд первым в таблице данных.


Добавьте ссылки на системные сборки: Cubes, Dal, Transform.


	Sub UserProc;

	Var

	    Eax: IEaxAnalyzer;

	    ParamsProv: ITsParamProvider;

	    mParams: ITsModelParams;

	    tParam: ITsModelParam;

	    ParamVals: ITsModelParamValues;

	    pVal: ITsModelParamValue;

	    Laner: ILaner;

	    CalcSerie: ILanerCalculateSerie;

	    TransfPeriod: ILanerTransformPeriod;

	Begin

	    // Получаем рабочую книгу

	    Eax := UiErAnalyzer1.ErAnalyzer;

	    // Получаем объект для работы с параметрами

	    ParamsProv := Eax.ParamProvider As ITsParamProvider;

	    // Получаем коллекцию параметров

	    mParams := ParamsProv.Params;

	    // Очищаем коллекцию параметров

	    mParams.Clear;

	    // Создаем новые параметры и задаем их тип

	    tParam := mParams.Add;

	    tParam.ParamType := TsParamType.Date;

	    tParam.DataType := DbDataType.DateTime;

	    tParam.Id := "IDENT_START";

	    tParam.Name := "Начало идентификации";

	    tParam := mParams.Add;

	    tParam.ParamType := TsParamType.Date;

	    tParam.DataType := DbDataType.DateTime;

	    tParam.Id := "FORECAST_START";

	    tParam.Name := "Начало прогноза";

	    tParam := mParams.Add;

	    tParam.ParamType := TsParamType.Date;

	    tParam.DataType := DbDataType.DateTime;

	    tParam.Id := "FORECAST_END";

	    tParam.Name := "Окончание прогноза";

	    // Задаем значения параметров

	    ParamVals := ParamsProv.ParamValues;

	    // Начало идентификации

	    pVal := ParamVals.FindById("IDENT_START");

	    pVal.Value := "01.01.1995";

	    // Начало прогноза

	    pVal := ParamVals.FindById("FORECAST_START");

	    pVal.Value := "01.01.2007";

	    // Окончание прогноза

	    pVal := ParamVals.FindById("FORECAST_END");

	    pVal.Value := "01.01.2015";

	    // Используем объект для работы с временными рядами

	    Laner := Eax.Laner;

	    Laner.BeginUpdate;

	    // Получаем вычисляемый ряд

	    CalcSerie := Laner.Series.Item(0) As ILanerCalculateSerie;

	    // Получаем параметры расчета ряда

	    TransfPeriod := CalcSerie.TransformPeriod;

	    // Задаем используемые границы расчета периодов

	    TransfPeriod.AutoPeriod := TransformModelAutoPeriodOptions.None;

	    TransfPeriod.PeriodSet := LnTransformPeriodSet.All;

	    // Указываем параметры для определения границ расчёта ряда

	    TransfPeriod.StartDateParamId := "IDENT_START";

	    TransfPeriod.ForecastStartDateParamID := "FORECAST_START";

	    TransfPeriod.EndDateParamId := "FORECAST_END";

	    // Обновляем параметрические значения в рабочей книге

	    Laner.Refresh;

	    Laner.EndUpdate;

	End Sub


В результате выполнения примера в рабочей книге созданы параметры, определяющие
 период расчёта вычисляемых рядов. Для данных параметров заданы значения
 и они использовались для расчета первого вычисляемого ряда в таблице данных.


См. также:


[ILanerTransformPeriod](ILanerTransformPeriod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
