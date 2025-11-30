# ISmAugmentDickeyFullerTest.AutoRegressionOrder

ISmAugmentDickeyFullerTest.AutoRegressionOrder
-


# ISmAugmentDickeyFullerTest.AutoRegressionOrder


## Синтаксис


AutoRegressionOrder: Integer;


## Описание


Свойство AutoRegressionOrder определяет порядок авторегрессии.


## Комментарии


Значение порядка авторегрессии должно быть больше нуля.


## Пример


			Sub UserProc;

Var

    ADF: SmAugmentDickeyFullerTest;

    ADFASS: IAutomaticLagSelectionSettings;

    SumStat: ISummaryStatistics;

    i, res: Integer;

    can: Array[43] Of Double;

Begin

    ADF := New SmAugmentDickeyFullerTest.Create;

    // Задаем значения переменных
    can[0] := 6209; can[1] := 6385; can[2] := Double.Nan; can[3] := 6837; can[4] := 6495;

    can[5] := 6907; can[6] := 7349; can[7] := 7213; can[8] := 7061; can[9] := 7180;

    can[10] := 7132; can[11] := 7137; can[12] := 7473; can[13] := 7722; can[14] := 8088;

    can[15] := 8516; can[16] := 8941; can[17] := 9064; can[18] := 9380; can[19] := 9746;

    can[20] := 9907; can[21] := 10333; can[22] := 10863; can[23] := 11693; can[24] := 12242;

    can[25] := 12227; can[26] := 12910; can[27] := 13049; can[28] := 13384; can[29] := 14036;

    can[30] := 14242; can[31] := 14704; can[32] := 13802; can[33] := 14197; can[34] := 15010;

    can[35] := 15589; can[36] := 15932; can[37] := 16631; can[38] := 17394; can[39] := 17758;

    can[40] := 17308; can[41] := 16444; can[42] := 16413;

    // Тестируемый ряд данных
    ADF.Serie.Value := can;

    // Метод обработки пропусков
    ADF.MissingData.Method := MissingDataMethod.LinTrend;

    // Период идентификации
    ADF.ModelPeriod.FirstPoint := 1;

    ADF.ModelPeriod.LastPoint := 43;

    // Спецификация модели
    ADF.EquationType := ADFEquationType.ConstantTrend;

    // Применяется автоподбор лага
    ADF.UseAutomaticAROrderSelection := False;

    // Порядок авторегрессии
    ADF.AutoRegressionOrder := 9;

    //  Параметра автоподбора лага
    ADFASS := ADF.AutomaticAROrderSelectionSettings;

    ADFASS.InformationCriterion := InformationCriterionType.Akaike;

    ADFASS.MaxLagLength := 9;

    // Тип проверяемого лага
    ADF.TestedSeries := ADFTestedSeriesType.Level;

    res := ADF.Execute;

    If res = 0 Then

        Debug.WriteLine("===Вспомогательная регрессия===");

        Debug.WriteLine("Коэффициенты вспомогательной регрессии");

        Debug.Indent;

        For i := 0 To ADF.ModelCoefficients.Estimate.Length - 1 Do

            Debug.Write(i.ToString + " ");

            Debug.WriteLine(ADF.ModelCoefficients.Estimate[i]);

        End For;

        Debug.Unindent;

        Debug.WriteLine("Описательные характеристики вспомогательной регрессии");

        SumStat := ADF.SummaryStatistics;

        Debug.Indent;

        Debug.WriteLine("Коэффициент детерминации: " + SumStat.R2.ToString);

        Debug.WriteLine("Скорректированный коэффициент детерминации: " + SumStat.AdjR2.ToString);

        Debug.WriteLine("Информационный критерий Акаике: " + SumStat.AIC.ToString);

        Debug.Unindent;

        Else

            Debug.WriteLine(ADF.Errors);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены результаты расчета расширенного теста Дики-Фуллера.


См. также:


[ISmAugmentDickeyFullerTest](ISmAugmentDickeyFullerTest.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
