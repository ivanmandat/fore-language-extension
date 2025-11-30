# IExponentialSmoothingBestTrialMethod.InitialApproximation

IExponentialSmoothingBestTrialMethod.InitialApproximation
-


# IExponentialSmoothingBestTrialMethod.InitialApproximation


## Синтаксис


InitialApproximation: [IExponentialSmoothingParameters](../IExponentialSmoothingParameters/IExponentialSmoothingParameters.htm);


## Описание


Свойство InitialApproximation
 определяет начальное приближение параметров.


## Комментарии


Для определения максимального числа итераций метода наилучшей пробы
 для поиска параметров используйте свойство [IExponentialSmoothingBestTrialMethod.MaxIteration](IExponentialSmoothingBestTrialMethod.MaxIteration.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


					Sub UserProc;

		Var

		    Method: SmExponentialSmoothing;

		    serie: Array[15] Of Double;

		    status: Integer;

		    Seasonal: ISeasonal;

		    Auto: IExponentialSmoothingAutoSearch;

		    BTM: IExponentialSmoothingBestTrialMethod;

		Begin

		    Method := New SmExponentialSmoothing.Create;

		    // Объясняемый ряд:

		    serie[0] := 670.2000183; serie[1] := 576.0680563; serie[2] := 717.6484268;

		    serie[3] := 856.9105808; serie[4] := 885.4609516; serie[5] := 1011.846431;

		    serie[6] := 995.4496292; serie[7] := 1064.74221; serie[8] := 1033.324656;

		    serie[9] := 780.8584552; serie[10] := 657.5033113; serie[11] := 654.5472579;

		    serie[12] := 678.2380139; serie[13] := 642.4128544; serie[14] := 751.9611194;

		    Method.Serie.Value := serie;

		    // Последняя точка прогноза:

		    Method.Forecast.LastPoint := 30;

		    // Параметры сезонной составляющей:

		    Seasonal := Method.SeasonalComponent;

		    Seasonal.Mode := SeasonalityType.Additive;

		    Seasonal.Cycle := 4;

		    // Тип линии тренда:

		    Method.TrendComponent := TrendType.Damped;

		    // Настройки автоподбора параметров:

		    Auto := Method.AutoSearch;

		    Auto.Criterion := CriterionType.MeanError;

		    Auto.Mode := SearchType.Optimal;

		    // Настройки автоподбора параметров для экспоненциального сглаживания

		    BTM := Auto.BestTrialMethod;

		    // Константа в методе наилучшей пробы:

		    BTM.MethodConstant := 0.5;

		    // Число реализаций в одной итерации метода наилучшей пробы:

		    BTM.Order := 7;

		    // Число итераций метода наилучшей пробы:

		    BTM.MaxIteration := 10;

		    // Начальные приближения параметров:

		    BTM.InitialApproximation.Alpha := 0.03;

		    BTM.InitialApproximation.Delta := 0.03;

		    BTM.InitialApproximation.Gamma := 0.02;

		    BTM.InitialApproximation.Phi := 0.02;

		    // Расчет модели и вывод результатов:

		    status := Method.Execute;

		    If status <> 0 Then

		        Debug.WriteLine(Method.Errors);

		        Else

		            Debug.WriteLine("=== Значения параметров ===");

		            Debug.WriteLine("Alpha " + Method.BestModelCoefficients.Alpha.ToString);

		            Debug.WriteLine("Delta " + Method.BestModelCoefficients.Delta.ToString);

		            Debug.WriteLine("Gamma " + Method.BestModelCoefficients.Gamma.ToString);

		            Debug.WriteLine("Phi " + Method.BestModelCoefficients.Phi.ToString);

		    End If;

		End Sub UserProc;


После выполнения примера в окно консоли будут выведены значения параметров.


См. также:


[IExponentialSmoothingBestTrialMethod](IExponentialSmoothingBestTrialMethod.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
