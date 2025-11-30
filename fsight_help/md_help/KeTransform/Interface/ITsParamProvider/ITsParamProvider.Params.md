# ITsParamProvider.Params

ITsParamProvider.Params
-


# ITsParamProvider.Params


## Синтаксис


Params: [ITsModelParams](../ITsModelParams/ITsModelParams.htm);


## Описание


Свойство Params возвращает
 коллекцию параметров.


## Комментарии


Для получения коллекции значений параметров используйте интерфейс [ITsModelParamValues](../ITsModelParamValues/ITsModelParamValues.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 LanerBox и компонент UiErAnalayzer
 с идентификатором «UiErAnalayzer1», являющийся источником данных для LanerBox. В «UiErAnalayzer1» должна
 быть загружена рабочая книга БД временных рядов, содержащая вычисляемые
 ряды.


Добавьте ссылки на системные сборки: Cubes, Dal, Metabase, Transform.


	Sub ParamProv;

	Var

	    Eax: IEaxAnalyzer;

	    ParamsProv: ITsParamProvider;

	    Params: ITsModelParams;

	    tParam: ITsModelParam;

	    ParamVals: ITsModelParamValues;

	    pVal: ITsModelParamValue;

	    Laner: ILaner;

	    i: Integer;

	    Serie: ILanerSerie;

	    CalcSerie: ILanerCalculateSerie;

	    TransfPeriod: ILanerTransformPeriod;

	Begin

	    Eax := UiErAnalyzer1.ErAnalyzer;

	    // Получаем объект для работы с параметрами

	    ParamsProv := Eax.ParamProvider As ITsParamProvider;

	    ParamsProv.Params.Clear;

	    Params := ParamsProv.Params;

	    // Создаем новые параметры и задаем их значения

	    tParam := Params.Add;

	    tParam.ParamType := TsParamType.Date;

	    tParam.DataType := DbDataType.DateTime;

	    tParam.Id := "IDENT_START";

	    tParam.Name := "Начало идентификации";

	    tParam := Params.Add;

	    tParam.ParamType := TsParamType.Date;

	    tParam.DataType := DbDataType.DateTime;

	    tParam.Id := "IDENT_END";

	    tParam.Name := "Окончание идентификации";

	    tParam := Params.Add;

	    tParam.ParamType := TsParamType.Date;

	    tParam.DataType := DbDataType.DateTime;

	    tParam.Id := "FORECAST_END";

	    tParam.Name := "Окончание прогноза";

	    // Задаем значения параметров

	    ParamVals := ParamsProv.ParamValues;

	    // Начало идентификации

	    pVal := ParamVals.FindById("IDENT_START");

	    pVal.Value := "01.01.2003";

	    // Окончание идентификации

	    pVal := ParamVals.FindById("IDENT_END");

	    pVal.Value := "01.01.2007";

	    // Окончание прогноза

	    pVal := ParamVals.FindById("FORECAST_END");

	    pVal.Value := "01.01.2015";

	    // Используем параметры в рабочей книге

	    Laner := Eax.Laner;

	    Laner.BeginUpdate;

	    // Получаем вычисляемый ряд

	    For i := 0 To Laner.Series.Count - 1 Do

	        Serie := Laner.Series.Item(i);

	        If Serie.Kind = LnSerieKind.Calculate Then

	            CalcSerie := Serie As ILanerCalculateSerie;

	            TransfPeriod := CalcSerie.TransformPeriod;

	            TransfPeriod.AutoPeriod := TransformModelAutoPeriodOptions.None;

	            TransfPeriod.PeriodSet := LnTransformPeriodSet.All;

	            // Задаем параметры для периода расчёта ряда

	            TransfPeriod.StartDateParamId := "IDENT_START";

	            TransfPeriod.IdentificationEndDateParamId := "IDENT_END";

	            TransfPeriod.EndDateParamId := "FORECAST_END";

	        End If;

	    End For;

	    // Обновляем параметрические значения в рабочей книге

	    Laner.Refresh;

	    Laner.EndUpdate;

	End Sub ParamProv;


Результат выполнения примера: в рабочей книге созданы параметры, определяющие
 период расчёта вычисляемых рядов. Заданы значения параметров, вычисляемые
 ряды заново рассчитаны в соответствии со значениями параметров.


См. также:


[ITsParamProvider](ITsParamProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
