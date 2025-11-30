# IExponentialSmoothingQuickestDescentMethod.FinalApproximation

IExponentialSmoothingQuickestDescentMethod.FinalApproximation
-


# IExponentialSmoothingQuickestDescentMethod.FinalApproximation


## Синтаксис


FinalApproximation: [IExponentialSmoothingParameters](../IExponentialSmoothingParameters/IExponentialSmoothingParameters.htm);


## Описание


Свойство FinalApproximation
 определяет конечное приближение параметров.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    Method: SmExponentialSmoothing;

    serie: Array Of Double;

    status: Integer;

    Seasonal: ISeasonal;

    Auto: IExponentialSmoothingAutoSearch;

    QDM: IExponentialSmoothingQuickestDescentMethod;

Begin

    Method := New SmExponentialSmoothing.Create;

    serie := New Double[15];

    serie[0] := 670.2000183;

    serie[1] := 576.0680563;

    serie[2] := 717.6484268;

    serie[3] := 856.9105808;

    serie[4] := 885.4609516;

    serie[5] := 1011.846431;

    serie[6] := 995.4496292;

    serie[7] := 1064.74221;

    serie[8] := 1033.324656;

    serie[9] := 780.8584552;

    serie[10] := 657.5033113;

    serie[11] := 654.5472579;

    serie[12] := 678.2380139;

    serie[13] := 642.4128544;

    serie[14] := 751.9611194;

    Method.Serie.Value := serie;

    Method.Forecast.LastPoint := 30;

    Seasonal := Method.SeasonalComponent;

    Seasonal.Mode := SeasonalityType.Additive;

    Seasonal.Cycle := 4;

    Method.TrendComponent := TrendType.Damped;

    Auto := Method.AutoSearch;

    Auto.Criterion := CriterionType.MeanError;

    Auto.Mode := SearchType.Grid;

    QDM := Auto.QuickestDescentMethod;

    QDM.InitialApproximation.Alpha := 0.01;

    QDM.InitialApproximation.Delta := 0.01;

    QDM.InitialApproximation.Phi := 0.01;

    QDM.FinalApproximation.Alpha := 0.5;

    QDM.FinalApproximation.Delta := 0.5;

    QDM.FinalApproximation.Phi := 0.5;

    QDM.GridStep := 0.01;

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


После выполнения примера в окно консоли будут выведены подобранные значения
 параметров.


См. также:


[IExponentialSmoothingQuickestDescentMethod](IExponentialSmoothingQuickestDescentMethod.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
