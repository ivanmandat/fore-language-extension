# ISmPhillipsPerronTest.PPStat

ISmPhillipsPerronTest.PPStat
-


# ISmPhillipsPerronTest.PPStat


## Синтаксис


PPStat: [IUnitRootTestStatistic](../IUnitRootTestStatistic/IUnitRootTestStatistic.htm);


## Описание


Свойство PPStat возвращает
 значение статистики теста Филлипса-Перрона.


## Комментарии


Для получения значения скорректированной дисперсии остатков используйте
 свойство [ISmPhillipsPerronTest.F0](ISmPhillipsPerronTest.F0.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    PP: SmPhillipsPerronTest;

    SumStat: ISummaryStatistics;

    PPStat: IUnitRootTestStatistic;

    can: Array[43] Of Double;

    i, res: Integer;

Begin

    PP := New SmPhillipsPerronTest.Create;

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

    PP.Serie.Value := can;

    // Тип проверяемого ряда

    PP.TestedSeries := ADFTestedSeriesType.Level;

    // Метод обработки пропусков

    PP.MissingData.Method := MissingDataMethod.LinTrend;

    // Тип модели

    PP.Equation := ADFEquationType.Constant;

    // Метод для вычисления скорректированной дисперсии остатков

    PP.F0SpectrumEstimation := F0SpectrumEstimationType.BartlettKernel;

    // Порядок авторегрессии

    PP.AutoRegressionOrder := 9;

    // Период идентификации

    PP.ModelPeriod.FirstPoint := 1;

    PP.ModelPeriod.LastPoint := 43;

    res := PP.Execute;

    For i := 0 To PP.WarningsCount - 1 Do

        Debug.WriteLine(PP.Warnings[i]);

    End For;

    PPStat := PP.PPStat;

    SumStat := PP.SummaryStatistics;

    If res = 0 Then

        // вывод статистических значений

        Debug.WriteLine("===Статистики теста Филлипса-Перрона===");

        Debug.WriteLine("Значение статистики: " + PPStat.Statistic.ToString);

        Debug.WriteLine("Значение вероятности: " + PPStat.Probability.ToString);

        Debug.WriteLine("Критические значения: ");

        Debug.Indent;

        For i := 0 To PPStat.CriticalValues.Length - 1 Do

            Debug.Write(i.ToString + " ");

            Debug.WriteLine(PPStat.CriticalValues[i]);

        End For;

        Debug.Unindent;

        Debug.WriteLine("Скорректированная дисперсия остатков: " + PP.F0.ToString);

        Debug.WriteLine("Дисперсия остатков: " + PP.S0.ToString);

        Debug.WriteLine("===Вспомогательная регрессия===");

        Debug.WriteLine("Коэффициенты вспомогательной регрессии:");

        Debug.Indent;

        For i := 0 To PP.ModelCoefficients.Estimate.Length - 1 Do

            Debug.WriteLine(PP.ModelCoefficients.Estimate[i]);

        End For;

        Debug.Unindent;

        Debug.WriteLine("Описательные характеристики вспомогательной регрессии:");

        Debug.Indent;

        Debug.WriteLine("Статистика Фишера: " + SumStat.Fstat.ToString);

        Debug.WriteLine("Вероятность для статистики Фишера: " + SumStat.ProbFstat.ToString);

        Debug.Unindent;

        Else

            Debug.WriteLine(PP.Errors);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены результаты расчёта
 теста Филлипса-Перрона.


См. также:


[ISmPhillipsPerronTest](ISmPhillipsPerronTest.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
