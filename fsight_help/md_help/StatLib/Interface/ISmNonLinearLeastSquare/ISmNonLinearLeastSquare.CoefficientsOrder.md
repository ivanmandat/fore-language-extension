# ISmNonLinearLeastSquare.CoefficientsOrder

ISmNonLinearLeastSquare.CoefficientsOrder
-


# ISmNonLinearLeastSquare.CoefficientsOrder


## Синтаксис


CoefficientsOrder: String;


## Описание


Свойство CoefficientsOrder определяет
 порядок коэффициентов.


## Комментарии


Если коэффициентов несколько, то указывайте их наименования через точку
 с запятой «;». Например: A1;A2;A3;A4.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    NLS: SmNonLinearLeastSquare;

	    can, fra: Array[43] Of Double;

	    expl: INonLinearRegressionExplanatory;

	    InitEst: Array[2] Of Double;

	    res, i: Integer;

	    MC: ISlConstCoefficients;

	    coef: String;

	    SumStat: ISummaryStatistics;

	Begin

	    // Создаем метод

	    NLS := New SmNonLinearLeastSquare.Create;

	    // Задаем значение переменной «can»

	    can[00] := 6209; can[11] := Double.Nan; can[22] := 10863; can[33] := 14197;

	    can[01] := 6385; can[12] := Double.Nan; can[23] := 11693; can[34] := 15010;

	    can[02] := 6752; can[13] := 7722; can[24] := 12242; can[35] := Double.Nan;

	    can[03] := 6837; can[14] := 8088; can[25] := 12227; can[36] := Double.Nan;

	    can[04] := 6495; can[15] := 8516; can[26] := 12910; can[37] := Double.Nan;

	    can[05] := 6907; can[16] := 8941; can[27] := 13049; can[38] := 17394;

	    can[06] := 7349; can[17] := 9064; can[28] := 13384; can[39] := 17758;

	    can[07] := 7213; can[18] := 9380; can[29] := 14036; can[40] := 17308;

	    can[08] := 7061; can[19] := 9746; can[30] := 14242; can[41] := 16444;

	    can[09] := 7180; can[20] := 9907; can[31] := 14704; can[42] := 16413;

	    can[10] := Double.Nan; can[21] := 10333; can[32] := 13802;

	    // Задаем значение переменной «fra»

	    fra[00] := 4110; fra[11] := 6218; fra[22] := 10217; fra[33] := 11900;

	    fra[01] := 4280; fra[12] := 6521; fra[23] := 10763; fra[34] := 11986;

	    fra[02] := 4459; fra[13] := 6788; fra[24] := 10683; fra[35] := 12206;

	    fra[03] := 4545; fra[14] := 7222; fra[25] := 10494; fra[36] := 12734;

	    fra[04] := 4664; fra[15] := 7486; fra[26] := 10938; fra[37] := Double.Nan;

	    fra[05] := 4861; fra[16] := 7832; fra[27] := 11198; fra[38] := Double.Nan;

	    fra[06] := 5195; fra[17] := 8153; fra[28] := 11546; fra[39] := Double.Nan;

	    fra[07] := 5389; fra[18] := 8468; fra[29] := 11865; fra[40] := 14141;

	    fra[08] := 5463; fra[19] := 9054; fra[30] := 11781; fra[41] := 14141;

	    fra[09] := 5610; fra[20] := 9499; fra[31] := 11681; fra[42] := 14237;

	    fra[10] := 5948; fra[21] := 9866; fra[32] := 11903;

	    // Задаем периоды расчёта

	    NLS.ModelPeriod.FirstPoint := 1;

	    NLS.ModelPeriod.LastPoint := 30;

	    NLS.Forecast.LastPoint := 43;

	    // Задаём объясняемую переменную

	    NLS.Explained.Value := can;

	    // Задаём объясняющую переменную

	    expl := NLS.Explanatories.Add;

	    expl.Serie.Value := fra;

	    expl.VariableName := "fra";

	    // Задаём функцию

	    NLS.FunctionString := "A1 + A2 * fra";

	    // Задаём порядок коэффициентов

	    NLS.CoefficientsOrder := "A1;A2";

	    // Задаём значения начальных приближений

	    InitEst[0] := 0.02; InitEst[1] := 0.02;

	    NLS.InitApproximation := InitEst;

	    // Не используем начальные значения по умолчанию

	    NLS.UseDefaultInitValues := False;

	    // Задаём точность и максимальное количество итераций

	    NLS.Tolerance := 0.001;

	    NLS.MaxIteration := 600;


    // Задаём метод оптимизации

    NLS.OptimizationMethod := NLSOptimizationMethod.LevenbergMarquardt;

    // Задаём метод обработки пропусков

    NLS.MissingData.Method := MissingDataMethod.SampleAverage;

    // Не используем производные при расчёте

    NLS.UseDerivatives := False;

    // Учитываем, что коэффициенты найдены приближенно

    NLS.Forecast.CoefUncertaintyInSECalc := True;

    // Выполняем расчёт и выводим результаты в окно консоли

    res := NLS.Execute;

    Debug.WriteLine(NLS.Errors);

    If (res = 0) Then

        Debug.WriteLine("Оценки коэффициентов:");

        Debug.Indent; coef := "A1";

        For i := 0 To 1 Do

            MC := NLS.ModelCoefficients(coef);

            Debug.WriteLine(coef + ":");

            Debug.WriteLine(" - значение: " + MC.Estimate.ToString);

            Debug.WriteLine(" - стандартная ошибка: " + MC.StandardError.ToString);

            Debug.WriteLine(" - t-статистика: " + MC.TStatistic.ToString);

            Debug.WriteLine(" - вероятность: " + MC.Probability.ToString);

            coef := "A2";

        End For;

        Debug.Unindent; Debug.WriteLine("");

        Debug.Write("Оптимальное значение суммы квадратов остатков: ");

        Debug.WriteLine(NLS.OptimalSumOfSquare);

        Debug.WriteLine(""); Debug.WriteLine("Статистические характеристики:");

        SumStat := NLS.SummaryStatistics;

        Debug.WriteLine(" - коэффициент детерминации: " + SumStat.R2.ToString);

        Debug.WriteLine(" - статистика Фишера: " + SumStat.Fstat.ToString);

        Debug.WriteLine(" - сумма квадратов остатков:" + SumStat.SSR.ToString);

        Debug.WriteLine(" - количество итераций:" + SumStat.NumOfIter.ToString);

        Debug.WriteLine(""); Debug.WriteLine("Объясняющий ряд:");

        Print(NLS.Explained.Value);

        Debug.WriteLine(""); Debug.WriteLine("Модельный ряд:");

        Print(NLS.Fitted);

        Debug.WriteLine(""); Debug.WriteLine("Ряд остатков:");

        Print(NLS.Residuals);

        Debug.WriteLine(""); Debug.WriteLine("Прогнозный ряд:");

        Print(NLS.Forecast.Value);

        Debug.WriteLine(""); Debug.WriteLine("Нижняя доверительная граница");

        Print(NLS.Forecast.LowerConfidenceLevel);

        Debug.WriteLine(""); Debug.WriteLine("Верхняя доверительная граница");

        Print(NLS.Forecast.UpperConfidenceLevel);

        Debug.WriteLine(""); Debug.WriteLine("Фактически использованные начальные приближения");

        Print(NLS.InitApproximationActual);

    End If;

End Sub UserProc;


// Процедура вывода данных

Sub Print(Data: Array Of Double);

Var

    i: Integer;

Begin

    Debug.Indent;

    For i := 0 To Data.Length - 1 Do

        Debug.WriteLine(i.ToString + " " + Data[i].ToString);

    End For;

    Debug.Unindent;

End Sub Print;


Результат: настроен и выполнен расчёт нелинейной регрессии методом наименьших
 квадратов, результаты вычисления выведены в окно консоли.


См. также:


[ISmNonLinearLeastSquare](ISmNonLinearLeastSquare.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
