# ISmKwiatkowskiPhillipsSchmidtShinTest.KPSSStat

ISmKwiatkowskiPhillipsSchmidtShinTest.KPSSStat
-


# ISmKwiatkowskiPhillipsSchmidtShinTest.KPSSStat


## Синтаксис


KPSSStat: [IUnitRootTestStatistic](../IUnitRootTestStatistic/IUnitRootTestStatistic.htm);


## Описание


Свойство KPSSStat возвращает
 значение статистики Квятковского-Филлипса-Шмидта-Шина.


## Комментарии


Для получения значения скорректированной дисперсии остатков используйте
 свойство [ISmKwiatkowskiPhillipsSchmidtShinTest.F0](ISmKwiatkowskiPhillipsSchmidtShinTest.F0.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    KPSS: SmKwiatkowskiPhillipsSchmidtShinTest;

    KPSSStat: IUnitRootTestStatistic;

    can: Array[43] Of Double;

    i, res: Integer;

Begin

    KPSS := New SmKwiatkowskiPhillipsSchmidtShinTest.Create;

    // Задаем значения переменных

    can[0] := 6209; can[1] := 6385; can[2] := 6752; can[3] := Double.Nan; can[4] := 6495;

    can[5] := Double.Nan; can[6] := 7349; can[7] := 7213; can[8] := 7061; can[9] := 7180;

    can[10] := 7132; can[11] := 7137; can[12] := 7473; can[13] := 7722; can[14] := 8088;

    can[15] := 8516; can[16] := 8941; can[17] := 9064; can[18] := 9380; can[19] := 9746;

    can[20] := 9907; can[21] := 10333; can[22] := 10863; can[23] := 11693; can[24] := 12242;

    can[25] := 12227; can[26] := 12910; can[27] := 13049; can[28] := 13384; can[29] := 14036;

    can[30] := 14242; can[31] := 14704; can[32] := 13802; can[33] := 14197; can[34] := 15010;

    can[35] := 15589; can[36] := 15932; can[37] := 16631; can[38] := 17394; can[39] := 17758;

    can[40] := 17308; can[41] := 16444; can[42] := 16413;

    //Выбор тестируемого
 ряда

    KPSS.Serie.Value := can;

    // Тип проверяемого ряда

    KPSS.TestedSeries := ADFTestedSeriesType.Level;

    // Метод обработки пропусков

    KPSS.MissingData.Method := MissingDataMethod.LinTrend;

    // Тип модели

    KPSS.Equation := EquationType.Constant;

    // Метод для вычисления скорректированной дисперсии остатков

    KPSS.F0SpectrumEstimation := F0SpectrumEstimationType.BartlettKernel;

    // Порядок авторегрессии

    KPSS.AutoRegressionOrder := 9;

    // Период идентификации

    KPSS.ModelPeriod.FirstPoint := 1;

    KPSS.ModelPeriod.LastPoint := 43;

    res := KPSS.Execute;

    For i := 0 To KPSS.WarningsCount - 1 Do

        Debug.WriteLine(KPSS.Warnings[i]);

    End For;

    KPSSStat := KPSS.KPSSStat;

    If res = 0 Then

        Debug.WriteLine("===Статистика Квятковского-Филлипса-Шмидта-Шина===");

Debug.WriteLine("Значение статистики: " + KPSSStat.Statistic.ToString);

        Debug.WriteLine("Значение вероятности: " + KPSSStat.Probability.ToString);

        Debug.WriteLine("Критические значения");

        Debug.Indent;

        For i := 0 To KPSSStat.CriticalValues.Length - 1 Do

            Debug.Write(i.ToString + " ");

            Debug.WriteLine(KPSSStat.CriticalValues[i]);

        End For;

        Debug.Unindent;

        Debug.WriteLine("Скорректированная дисперсия остатков: " + KPSS.F0.ToString);

        Debug.WriteLine("Дисперсия остатков: " + KPSS.S0.ToString);

        Debug.WriteLine("===Вспомогательная регрессия===");

        Debug.WriteLine("Коэффициенты вспомогательной регрессии:");

        Debug.Indent;

        For i := 0 To KPSS.ModelCoefficients.Estimate.Length - 1 Do

            Debug.WriteLine(KPSS.ModelCoefficients.Estimate[i]);

        End For;

        Debug.Unindent;

        Debug.WriteLine("Описательные характеристики вспомогательной регрессии:");

        Debug.Indent;

        Debug.WriteLine("Скорректированный коэффициент детерминации: " + KPSS.SummaryStatistics.AdjR2.ToString);

        Debug.Unindent;

        Else

            Debug.WriteLine(KPSS.Errors);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены результаты расчёта
 обобщенного теста Квятковского-Филлипса-Шмидта-Шина.


См. также:


[ISmKwiatkowskiPhillipsSchmidtShinTest](ISmKwiatkowskiPhillipsSchmidtShinTest.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
