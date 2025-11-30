# ISmMarkovSwitchingGARCH.ARCHCoefficients

ISmMarkovSwitchingGARCH.ARCHCoefficients
-


# ISmMarkovSwitchingGARCH.ARCHCoefficients


## Синтаксис


ARCHCoefficients: [IMSGARCHCoefficients](../IMSGARCHCoefficients/IMSGARCHCoefficients.htm);


## Описание


Свойство ARCHCoefficients возвращает
 оценки коэффициентов авторегрессии условной гетероскедастичности (ARCH)
 модели и их характеристики.


## Комментарии


Количество коэффициентов должно соответствовать параметру [ARCHOrder](ISmMarkovSwitchingGARCH.ARCHOrder.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    SMG: ISmMarkovSwitchingGARCH;

    ARCHCoef, RCoef, GARCHCoef: ICoefficients;

    y: Array[5] Of Double;

    x: Array[10] Of Double;

    res, i: Integer;

Begin

    SMG := New SmMarkovSwitchingGARCH.Create;

    // задаем значения переменных

    y[0] := 5.207664; x[0] := 1.9061476;

    y[1] := 5.264373; x[1] := -0.26003;

    y[2] := Double.Nan; x[2] := 9.54554;

    y[3] := 5.702848; x[3] := 7.9776938;

    y[4] := 5.996597; x[4] := Double.Nan;

                        x[5] := 12.719879;

                        x[6] := 13.875518;

                        x[7] := 16.046427;

                        x[8] := 17.218547;

                        x[9] := 21.07471;

    // выбираем объясняемый ряд

    SMG.Explained.Value := y;

    // выбираем объясняющий ряд

    SMG.Explanatories.Clear;

    SMG.Explanatories.Add.Value := x;

    // определяем период идентификации

    SMG.ModelPeriod.FirstPoint := 1;

    SMG.ModelPeriod.LastPoint := 5;

    // определяем период прогнозирования

    SMG.Forecast.LastPoint := 10;

    // выбираем порядки ARCH и GARCH

    SMG.ARCHOrder := 1;

    SMG.GARCHOrder := 1;

    // выбираем метод обработки пропусков

    SMG.MissingData.Method := MissingDataMethod.LinTrend;

    // определяем параметры алгоритма Марковской цепи Монте Карло

    SMG.MCMCParameters.NumOfIterations := 200;

    SMG.MCMCParameters.IterationsToDiscard := 100;

    SMG.MCMCParameters.Period := 20;

    // используем начальные значения по умолчанию

    SMG.UseDefaultInitDistribution := True;

    // рассчитываем модель и выводим результаты

    res := SMG.Execute;

    Debug.WriteLine(SMG.Errors);

    Debug.WriteLine("Модель MS-GARCH");

    RCoef := SMG.RegressionCoefficients.Coefficients;

    Debug.WriteLine("Коэффициенты");

    For i := 0 To RCoef.Estimate.Length - 1 Do

        Debug.WriteLine("X: " + RCoef.Estimate[i].ToString + ", Дисперсия: " + RCoef.StandardError[i].ToString);

    End For;

    ARCHCoef := SMG.ARCHCoefficients.Coefficients;

    For i := 0 To ARCHCoef.Estimate.Length - 1 Do

        Debug.WriteLine("ARCH: " + ARCHCoef.Estimate[i].ToString + ", Дисперсия: " + ARCHCoef.StandardError[i].ToString);

    End For;

    GARCHCoef := SMG.GARCHCoefficients.Coefficients;

    For i := 0 To GARCHCoef.Estimate.Length - 1 Do

        Debug.WriteLine("GARCH: " + GARCHCoef.Estimate[i].ToString + ", Дисперсия: " + GARCHCoef.StandardError[i].ToString);

    End For;

    Debug.WriteLine("GARCH Const0: " + SMG.GARCHConst.Estimation.ToString + ", Дисперсия: " + SMG.GARCHConst.Dispersion.ToString);

    Debug.WriteLine("GARCH Const1: " + SMG.GARCHConst1.Estimation.ToString + ", Дисперсия: " + SMG.GARCHConst1.Dispersion.ToString);

    Debug.WriteLine("");

    Debug.WriteLine("Модельный ряд");

    For i := 0 To SMG.Fitted.Length - 1 Do

        Debug.WriteLine((i + 1).ToString + " " + SMG.Fitted[i].ToString);

    End For;

    Debug.WriteLine("");

    Debug.WriteLine("Ряд остатков");

    For i := 0 To SMG.Residuals.Length - 1 Do

        Debug.WriteLine((i + 1).ToString + " " + SMG.Residuals[i].ToString);

    End For;

    Debug.WriteLine("");

    Debug.WriteLine("Ряд дисперсий остатков");

    For i := 0 To SMG.ResidualsDispersion.Length - 1 Do

        Debug.WriteLine((i + 1).ToString + " " + SMG.ResidualsDispersion[i].ToString);

    End For;

    Debug.WriteLine("");

    Debug.WriteLine("Прогнозный ряд");

    For i := SMG.Fitted.Length To SMG.Forecast.Value.Length - 1 Do

        Debug.WriteLine((i + 1).ToString + " " + SMG.Forecast.Value[i].ToString);

    End For;

    Debug.WriteLine("");

    Debug.WriteLine("Прогноз дисперсий остатков");

    For i := SMG.ResidualsDispersion.Length To SMG.Forecast.Value.Length - 1 Do

        Debug.WriteLine((i + 1).ToString + " " + SMG.ResidualsDispersionForecast[i].ToString);

    End For;

End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены коэффициенты
 регрессии, ARCH и GARCH, модельный ряд, ряд остатков, ряд дисперсий остатков,
 прогнозный ряд и прогноз дисперсий остатков.


См. также:


[ISmMarkovSwitchingGARCH](ISmMarkovSwitchingGARCH.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
