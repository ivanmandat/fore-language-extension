# IExponentialSmoothingAutoSearch.AlphaSearch

IExponentialSmoothingAutoSearch.AlphaSearch
-


# IExponentialSmoothingAutoSearch.AlphaSearch


## Синтаксис


AlphaSearch: Boolean;


## Описание


Свойство AlphaSearch определяет,
 искать ли параметр «Альфа».


## Комментарии


AlphaSearch = True. Параметр
 «Альфа» будет найден автоматически.


AlphaSearch = False. Значение
 по умолчанию. Параметр «Альфа»
 определяется пользователем (используйте свойство [IExponentialSmoothingParameters.Alpha](../IExponentialSmoothingParameters/IExponentialSmoothingParameters.Alpha.htm)).


## Пример


В примере описано задание параметров и расчет экспоненциального сглаживания
 ряда данных, заданного вещественным массивом «serie». Для выполнения примера
 необходимо добавить ссылку на системную сборку Stat.


			Sub UserProc;

Var

    Method: SmExponentialSmoothing;

    serie: Array Of Double;

    status: Integer;

    Seasonal: ISeasonal;

    Auto: IExponentialSmoothingAutoSearch;

    Grid: IExponentialSmoothingQuickestDescentMethod;

Begin

    Method := New SmExponentialSmoothing.Create;

    serie := New Double[15]; serie[7] := 1064.74221;

    serie[0] := 670.2000183; serie[8] := 1033.324656;

    serie[1] := 576.0680563; serie[9] := 780.8584552;

    serie[2] := 717.6484268; serie[10] := 657.5033113;

    serie[3] := 856.9105808; serie[11] := 654.5472579;

    serie[4] := 885.4609516; serie[12] := 678.2380139;

    serie[5] := 1011.846431; serie[13] := 642.4128544;

    serie[6] := 995.4496292; serie[14] := 751.9611194;

    Method.Serie.Value := serie;

    Method.Forecast.LastPoint := 30;

    Seasonal := Method.SeasonalComponent;

    Seasonal.Mode := SeasonalityType.Additive;

    Seasonal.Cycle := 4;

    Method.TrendComponent := TrendType.Damped;

    Auto := Method.AutoSearch;

    Auto.Criterion := CriterionType.SumOfSquareError;

    Auto.Mode := SearchType.Grid;

    Grid := Auto.QuickestDescentMethod;

    Grid.GridStep := 0.1;

    Auto.AlphaSearch := True;

    Auto.GammaSearch := True;

    Auto.DeltaSearch := False;

    Grid.InitialApproximation.Delta := 0.001;

    Auto.PhiSearch := False;

    Grid.InitialApproximation.Phi := 0.4;

    status := Method.Execute;

    If status <> 0 Then

        Debug.WriteLine(Method.Errors);

    Else

        Debug.WriteLine("Alpha " + Method.BestModelCoefficients.Alpha.ToString);

        Debug.WriteLine("Delta " + Method.BestModelCoefficients.Delta.ToString);

        Debug.WriteLine("Gamma " + Method.BestModelCoefficients.Gamma.ToString);

        Debug.WriteLine("Phi " + Method.BestModelCoefficients.Phi.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены значения параметров
 экспоненциального сглаживания. Параметры «Альфа»,
 «Гамма» оценивались автоматически,
 параметры «Дельта» и «Фи»
 были заданы изначально.


См. также:


[IExponentialSmoothingAutoSearch](IExponentialSmoothingAutoSearch.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
