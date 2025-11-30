# ISmDickeyFullerGLSTest.DFGLSStat

ISmDickeyFullerGLSTest.DFGLSStat
-


# ISmDickeyFullerGLSTest.DFGLSStat


## Синтаксис


DFGLSStat: [IUnitRootTestStatistic](../IUnitRootTestStatistic/IUnitRootTestStatistic.htm);


## Описание


Свойство DFGLSStat возвращает
 значение статистики обобщенного теста Дики-Фуллера.


## Комментарии


Для получения сводной характеристики используйте свойство [ISmDickeyFullerGLSTest.SummaryStatistics](ISmDickeyFullerGLSTest.SummaryStatistics.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    DFGLS: SmDickeyFullerGLSTest;

    DFGLSASS: IAutomaticLagSelectionSettings;

    SumStat: ISummaryStatistics;

    can {, ws} : Array[43] Of Double;

    i, res: Integer;

Begin

    DFGLS := New SmDickeyFullerGLSTest.Create;

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

    // Период идентификации

    DFGLS.ModelPeriod.FirstPoint := 1;

    DFGLS.ModelPeriod.LastPoint := 43;

    // Выбор тестируемого
 ряда

    DFGLS.Serie.Value := can;

    // Метод обработки пропусков

    DFGLS.MissingData.Method := MissingDataMethod.LinTrend;

    // Тип модели

    DFGLS.Equation := EquationType.Constant;

    // Применяется автоподбор лага

    DFGLS.UseAutomaticAROrderSelection := True;

    // Параметры автоподбора лага

    DFGLSASS := DFGLS.AutomaticAROrderSelectionSettings;

    DFGLSASS.InformationCriterion := InformationCriterionType.Akaike;

    DFGLSASS.MaxLagLength := 9;

    // Тип проверяемого ряда

    DFGLS.TestedSeries := ADFTestedSeriesType.Level;

    res := DFGLS.Execute;

    For i := 0 To DFGLS.WarningsCount - 1 Do

        Debug.WriteLine(DFGLS.Warnings[i]);

    End For;

    SumStat := DFGLS.SummaryStatistics;

    If (res = 0) Then

        Debug.WriteLine("===Статистика обобщенного теста Дики-Фуллера===");

        Debug.WriteLine("Значение статистики: " + DFGLS.DFGLSStat.Statistic.ToString);

        Debug.WriteLine("Значение вероятности: " + DFGLS.DFGLSStat.Probability.ToString);

        Debug.WriteLine("Критические значения: ");

        Debug.Indent;

        For i := 0 To DFGLS.DFGLSStat.CriticalValues.Length - 1 Do

            Debug.Write(i.ToString + " ");

            Debug.WriteLine(DFGLS.DFGLSStat.CriticalValues[i]);

        End For;

        Debug.Unindent;

        Debug.WriteLine("===Вспомогательная регрессия===");

        Debug.WriteLine("Коэффициенты вспомогательной регрессии");

        Debug.Indent;

        For i := 0 To DFGLS.ModelCoefficients.Estimate.Length - 1 Do

            Debug.Write(i.ToString + " ");

            Debug.WriteLine(DFGLS.ModelCoefficients.Estimate[i]);

        End For;

        Debug.Unindent;

        Debug.WriteLine("Описательные характеристики вспомогательной регрессии");

        Debug.Indent;

        Debug.WriteLine("Коэффициент детерминации: " + SumStat.R2.ToString);

        Debug.WriteLine("Скорректированный коэффициент детерминации: " + SumStat.AdjR2.ToString);

        Debug.WriteLine("Информационный критерий Акаике: " + SumStat.AIC.ToString);

        Debug.Unindent;

        Else

            Debug.WriteLine(DFGLS.Errors);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены результаты расчёта
 обобщенного теста Дики-Фуллера.


См. также:


[ISmDickeyFullerGLSTest](ISmDickeyFullerGLSTest.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
