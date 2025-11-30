# ISmCensoredTruncatedRegression.DistributionType

ISmCensoredTruncatedRegression.DistributionType
-


# ISmCensoredTruncatedRegression.DistributionType


## Синтаксис


DistributionType: [ErrorDistributionType](../../Enums/ErrorDistributionType.htm);


## Описание


Свойство DistributionType определяет
 тип распределения ошибок.


## Комментарии


По умолчанию используется нормальное распределение ошибок, т.е. DistributionType = ErrorDistributionType.NormalDistribution.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    Cr: SmCensoredTruncatedRegression;

	    y, x, uBound, lBound: Array[20] Of Double;

	    i, res, factN, N: Integer;

	    coef: ICoefficients;

	    stat: ISummaryStatistics;

	Begin

	    Cr := New SmCensoredTruncatedRegression.Create;


    // Задаем значения переменных

    y[0] := 1; x[0] := 0.841471;

    y[1] := Double.Nan; x[1] := 0.909297;

    y[2] := -0.432407;x[2]:=0.14112;

    y[3] := -1; x[3] := -0.756802;

    y[4] := Double.Nan; x[4] := -0.958924;

    y[5] := -0.628591;x[5]:=-0.279415;

    y[6] := 1; x[6] := 0.656987;

    y[7] := 1; x[7] := 0.989358;

    y[8] := 1; x[8] := 0.412118;

    y[9] := -0.423543;x[9]:=-0.544021;

    y[10] := -1; x[10] := -0.99999;

    y[11] := Double.Nan; x[11] := -0.536573;

    y[12] := 1; x[12] := 0.420167;

    y[13] := 1; x[13] := 0.990607;

    y[14] := 0.544025; x[14] := 0.650288;

    y[15] := Double.Nan; x[15] := -0.287903;

    y[16] := -1; x[16] := -0.961397;

    y[17] := Double.Nan; x[17] := -0.750987;

    y[18] := 0.549188; x[18] := 0.149877;

    y[19] := 1; x[19] := 0.912945;

    // Определяем тип модели

    Cr.ModelType := CTModelType.TruncatedRegression;

    // Определяем тип распределения ошибок

    Cr.DistributionType := ErrorDistributionType.GumbelDistribution;

    // Задаем объясняемый ряд

    Cr.Explained.Value := y;

    // Задаем объясняющий ряд

    Cr.Explanatories.Add.Value := x;

    factN := 20;

    N := 1;


    // Задаем значения первой и последней точек периода идентификации

    Cr.ModelPeriod.FirstPoint := 1;

    Cr.ModelPeriod.LastPoint := factN - 5;

    // Задаем значение последней точки прогноза

    Cr.Forecast.LastPoint := factN;

    // Определяем максимальное число итераций

    Cr.MaxIteration := 500;

    // Определяем точность решения

    Cr.Tolerance := 0.0001;

    For i := 0 To factN - 1 Do

        lBound[i] := -1;

        uBound[i] := 1;

    End For;

    // Определяем левую (нижнюю) границу для наблюдения

    Cr.LeftBound.Value := lBound;

    //Определяем правую (верхнюю) границу для наблюдения

    Cr.RightBound.Value := uBound;

    // Определяем константу

    Cr.ModelCoefficients.Intercept.Mode := InterceptMode.AutoEstimate;

    // Определяем метод обработки пропусков

    Cr.MissingData.Method := MissingDataMethod.LinTrend;

    // Производим расчет и выводим сообщения об ошибках

    res := Cr.Execute;

    Debug.WriteLine("Ошибки: " + Cr.Errors);


    // Выводим результаты расчетов

    If res = 0 Then

        Debug.WriteLine("");

        Debug.WriteLine("Оцененные коэффициенты модели: ");

        Debug.Indent;

        coef := Cr.ModelCoefficients.Coefficients;

        For i := 0 To N - 1 Do

            Debug.WriteLine("значение коэффициента: " + coef.Estimate[i].ToString);

            Debug.WriteLine("cтандартная ошибка: " + coef.StandardError[i].ToString);

            Debug.WriteLine("t-статистика: " + coef.TStatistic[i].ToString);

            Debug.WriteLine("вероятность: " + coef.Probability[i].ToString);

        End For;

        Debug.Unindent;

        Debug.WriteLine("");

        Debug.WriteLine("Результаты расчета Сигма: ");

        Debug.Indent;

        Debug.WriteLine("значение: " + Cr.Sigma.ToString);

        Debug.WriteLine("стандартная ошибка: " + Cr.SigmaSE.ToString);

        Debug.WriteLine("ошибка Z-статистики: " + Cr.SigmaZStatErr.ToString);

        Debug.WriteLine("вероятность ошибки Z-статистики: " + Cr.SigmaZStatProbErr.ToString);

        Debug.Unindent;

        Debug.WriteLine("");

        Debug.WriteLine("Общие статистики:");

        Debug.Indent;

        stat := cr.SummaryStatistics;

        Debug.WriteLine("R2: " + stat.R2.ToString);

        Debug.WriteLine("AdjR2: " + stat.AdjR2.ToString);

        Debug.WriteLine("Fstat: " + stat.Fstat.ToString);

        Debug.WriteLine("ProbFstat: " + stat.ProbFstat.ToString);

        Debug.WriteLine("DW: " + stat.DW.ToString);

        Debug.WriteLine("========");

        Debug.WriteLine("MD: " + stat.MD.ToString);

        Debug.WriteLine("SE: " + stat.SE.ToString);

        Debug.WriteLine("SSR: " + stat.SSR.ToString);

        Debug.WriteLine("LogL: " + stat.LogL.ToString);

        Debug.WriteLine("AvgLogL: " + stat.AvgLogL.ToString);

        Debug.WriteLine("SD: " + stat.SD.ToString);

        Debug.WriteLine("AIC: " + stat.AIC.ToString);

        Debug.WriteLine("SC: " + stat.SC.ToString);

        Debug.WriteLine("HQcriterion: " + stat.HQcriterion.ToString);

        Debug.Unindent; Debug.WriteLine("");


        Debug.WriteLine("Модельный ряд:"); Debug.Indent;

        For i := 0 To cr.Fitted.Length - 1 Do

            Debug.WriteLine(i.ToString + ": " + (cr.Fitted[i] As Double).ToString);

        End For;

        Debug.Unindent; Debug.WriteLine("");

        Debug.WriteLine("Латентный модельный ряд:"); Debug.Indent;

        For i := 0 To cr.LatentFitted.Length - 1 Do

            Debug.WriteLine(i.ToString + ": " + (cr.LatentFitted[i] As Double).ToString);

        End For;

        Debug.Unindent; Debug.WriteLine("");

        Debug.WriteLine("Остатки:"); Debug.Indent;

        For i := 0 To cr.Residuals.Length - 1 Do

            Debug.WriteLine(i.ToString + ": " + (cr.Residuals[i] As Double).ToString);

        End For;

        Debug.Unindent; Debug.WriteLine("");

        Debug.WriteLine("Прогноз:"); Debug.Indent;

        For i := 0 To cr.Forecast.Value.Length - 1 Do

            Debug.WriteLine(i.ToString + ": " + (cr.Forecast.Value[i] As Double).ToString);

        End For;

        Debug.Unindent; Debug.WriteLine("");

        Debug.WriteLine("Латентный прогноз:"); Debug.Indent;

        For i := 0 To cr.LatentForecast.Value.Length - 1 Do

            Debug.WriteLine(i.ToString + ": " + (cr.LatentForecast.Value[i] As Double).ToString);

        End For;

    End If;

End Sub UserProc;


В результате выполнения примера будет создана и рассчитана регрессионная
 модель с цензурированными данными, результаты выведены в окно консоли.


См. также:


[ISmCensoredTruncatedRegression](ISmCensoredTruncatedRegression.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
