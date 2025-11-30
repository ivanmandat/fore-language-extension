# IMsParamProvider.Params

IMsParamProvider.Params
-


# IMsParamProvider.Params


## Синтаксис


Params: [IMsModelParams](../IMsModelParams/IMsModelParams.htm);


## Описание


Свойство Params возвращает коллекцию параметров.


## Комментарии


Для получения коллекции значений параметров используйте интерфейс [IMsModelParamValues](IMsParamProvider.ParamValues.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент LanerBox и компонент UiErAnalayzer с идентификатором «UiErAnalayzer1», являющийся источником данных для LanerBox. В «UiErAnalayzer1» должна быть загружена рабочая книга БД временных рядов, содержащая вычисляемые ряды.


Добавьте ссылки на системные сборки: «Cubes», «Dal», «Metabase», «Ms», «Transform».


			Sub MsParamProv;

Var

    Eax: IEaxAnalyzer;

    ParamsProv: IMsParamProvider;

    Params: IMsModelParams;

    Param: IMsModelParam;

    ParamVals: IMsModelParamValues;

    pVal: IMsModelParamValue;

    Laner: ILaner;

    i: Integer;

    Serie: ILanerSerie;

    CalcSerie: ILanerCalculateSerie;

    TransfPeriod: ILanerTransformPeriod;

Begin

    Eax := UiErAnalyzer1.ErAnalyzer;

    // Получаем объект для работы с параметрами
    ParamsProv := Eax.ParamProvider As IMsParamProvider;

    ParamsProv.Params.Clear;

    Params := ParamsProv.Params;

    // Создаем новые параметры и задаем их значения
    Param := Params.Add;

    Param.ParamType := TsParamType.Date;

    Param.DataType := DbDataType.DateTime;

    Param.Id := "IDENT_START";

    Param.Name := "Начало идентификации";

    Param := Params.Add;

    Param.ParamType := TsParamType.Date;

    Param.DataType := DbDataType.DateTime;

    Param.Id := "IDENT_END";

    Param.Name := "Окончание идентификации";

    Param := Params.Add;

    Param.ParamType := TsParamType.Date;

    Param.DataType := DbDataType.DateTime;

    Param.Id := "FORECAST_END";

    Param.Name := "Окончание прогноза";

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

End Sub MsParamProv;


Результат выполнения примера: в рабочей книге созданы параметры, определяющие период расчёта вычисляемых рядов. Заданы значения параметров, вычисляемые ряды заново рассчитаны в соответствии со значениями параметров.


См. также:


[IMsParamProvider](IMsParamProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
