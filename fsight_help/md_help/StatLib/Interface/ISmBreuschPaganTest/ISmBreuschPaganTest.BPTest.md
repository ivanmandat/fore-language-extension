# ISmBreuschPaganTest.BPTest

ISmBreuschPaganTest.BPTest
-


# ISmBreuschPaganTest.BPTest


## Синтаксис


BPTest: [ISpecificationTestStatistic](../ISpecificationTestStatistic/ISpecificationTestStatistic.htm);


## Описание


Свойство BPTest возвращает значение
 статистики Бреуша-Пагана.


## Комментарии


Для получения сводной характеристики используйте свойство [ISmBreuschPaganTest.SummaryStatistics](ISmBreuschPaganTest.SummaryStatistics.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    BP: SmBreuschPaganTest;

    ModelCoef: ICoefficients;

    can, fra, ger: Array[43] Of Double;

    i, res: Integer;

Begin

    BP := New SmBreuschPaganTest.Create;

    // Задаем значения переменных

    Can[0] := 6209; fra[0] := 4110; ger[0] := 3415;

    Can[1] := 6385; fra[1] := 4280; ger[1] := 3673;

    Can[2] := Double.Nan; fra[2] := 4459; ger[2] := 4013;

    Can[3] := 6837; fra[3] := 4545; ger[3] := 4278;

    Can[4] := 6495; fra[4] := 4664; ger[4] := 4577;

    Can[5] := 6907; fra[5] := 4861; ger[5] := 5135;

    Can[6] := 7349; fra[6] := 5195; ger[6] := 5388;

    Can[7] := 7213; fra[7] := 5389; ger[7] := 5610;

    Can[8] := 7061; fra[8] := 5463; ger[8] := 5787;

    Can[9] := 7180; fra[9] := 5610; ger[9] := 6181;

    // Объясняемый ряд данных

    BP.Explained.Value := can;

    // Объясняющий ряд

    BP.Explanatories.Clear;

    BP.Explanatories.Add.Value := fra;

    // Объясняющий ряд для вспомогательной регрессии

    BP.AdditionalExplanatories.Clear;

    BP.AdditionalExplanatories.Add.Value := ger;

    //Оценка константы

    BP.ModelCoefficients.Intercept.Mode := InterceptMode.AutoEstimate;

    // Метод обработки пропусков

    BP.MissingData.Method := MissingDataMethod.LinTrend;

    // Период идентификации

    BP.ModelPeriod.FirstPoint := 1;

    BP.ModelPeriod.LastPoint := 10;

    // Параметр стьюдентеризации учитывается

    BP.Studentize := True;

    res := BP.Execute;

    Debug.WriteLine(BP.Errors);

    ModelCoef := BP.ModelCoefficients.Coefficients;

    Debug.WriteLine("===Статистики теста Бреуша-Пагана===");

    Debug.Indent;

    Debug.WriteLine("Значение статистики: " + BP.BPTest.Statistic.ToString);

    Debug.WriteLine("Значение вероятности: " + BP.BPTest.Probability.ToString);

    Debug.Unindent;

    Debug.WriteLine("===Вспомогательная регрессия===");

    Debug.WriteLine("Оценки коэффициентов вспомогательной регрессии:");

    Debug.WriteLine(BP.ModelCoefficients.Intercept.Estimate.ToString + " " +

        BP.ModelCoefficients.Intercept.StandardError.ToString + " " +

        BP.ModelCoefficients.Intercept.TStatistic.ToString + " " +

        BP.ModelCoefficients.Intercept.Probability.ToString);

    For i := 0 To BP.ModelCoefficients.Coefficients.Estimate.Length - 1 Do

        Debug.WriteLine("Оцененные значения коэффициентов: " + ModelCoef.Estimate[i].ToString);

        Debug.WriteLine("Стандартные ошибки коэффициентов: " + ModelCoef.StandardError[i].ToString);

        Debug.WriteLine("t-статистики коэффициентов: " + ModelCoef.TStatistic[i].ToString);

        Debug.WriteLine("Вероятности коэффициентов: " + ModelCoef.Probability[i].ToString);

    End For;

    Debug.Unindent;

    Debug.WriteLine("Характеристики вспомогательной регрессии");

    Debug.Indent;

    Debug.WriteLine("Коэффициент детерминации: " + BP.SummaryStatistics.R2.ToString);

    Debug.WriteLine("Скорректированный коэффициент детерминации: " + BP.SummaryStatistics.AdjR2.ToString);

    Debug.WriteLine("Стандартная ошибка регрессии: " + BP.SummaryStatistics.SE.ToString);

    Debug.WriteLine("Сумма квадратов остатков: " + BP.SummaryStatistics.SSR.ToString);

    Debug.WriteLine("Статистика Дарбина-Уотсона: " + BP.SummaryStatistics.DW.ToString);

    Debug.Unindent;

    Debug.WriteLine("Модельный ряд вспомогательной регрессии");

    Debug.Indent;

    For i := 0 To BP.Fitted.Length - 1 Do

        Debug.Write(i.ToString + " ");

        Debug.WriteLine(BP.Fitted[i]);

    End For;

    Debug.Unindent;

    Debug.WriteLine("Ряд остатков вспомогательной регрессии");

    Debug.Indent;

    For i := 0 To BP.Residuals.Length - 1 Do

        Debug.Write(i.ToString + " ");

        Debug.WriteLine(BP.Residuals[i]);

    End For;

    Debug.Unindent;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены результаты расчёта
 теста Бреуша-Пагана.


См. также:


[ISmBreuschPaganTest](ISmBreuschPaganTest.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
