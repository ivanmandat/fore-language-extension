# ISmBreuschPaganGodfreyTest.FStatistic

ISmBreuschPaganGodfreyTest.FStatistic
-


# ISmBreuschPaganGodfreyTest.FStatistic


## Синтаксис


FStatistic: [ISpecificationTestStatistic](../ISpecificationTestStatistic/ISpecificationTestStatistic.htm);


## Описание


Свойство FStatistic возвращает
 значение статистики Фишера.


## Комментарии


Для получения значения статистики Энгла используйте свойство [ISmBreuschPaganGodfreyTest.ObsR2](ISmBreuschPaganGodfreyTest.ObsR2.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    BPG: SmBreuschPaganGodfreyTest;

    SESS: ISpecificationTestStatistic;

    ModelCoef: ICoefficients;

    can, fra, ger: Array[10] Of Double;

    i, res: Integer;

Begin

    BPG := New SmBreuschPaganGodfreyTest.Create;

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

    BPG.Explained.Value := can;

    // Объясняющий ряд

    BPG.Explanatories.Clear;

    BPG.Explanatories.Add.Value := fra;

    // Объясняющий ряд для вспомогательной регрессии

    BPG.AdditionalExplanatories.Clear;

    BPG.AdditionalExplanatories.Add.Value := ger;

    //Оценка константы

    BPG.ModelCoefficients.Intercept.Mode := InterceptMode.AutoEstimate;

    // Задаем порядки авторегрессии и скользящего среднего

    BPG.ARMA.ParseAR("3");

    BPG.ARMA.ParseMA("2");

    // Метод обработки пропусков

    BPG.MissingData.Method := MissingDataMethod.LinTrend;

    // Период идентификации

    BPG.ModelPeriod.FirstPoint := 1;

    BPG.ModelPeriod.LastPoint := 10;

    res := bpg.Execute;

    For i := 0 To BPG.WarningsCount - 1 Do

        Debug.WriteLine(BPG.Warnings[i]);

    End For;

    SESS := BPG.ScaledExplainedSS;

    ModelCoef := BPG.ModelCoefficients.Coefficients;

    Debug.WriteLine("Статистики Фишера: ");

    Debug.Indent;

    Debug.WriteLine("Значение статистики: " + BPG.FStatistic.Statistic.ToString);

    Debug.WriteLine("Значение вероятности: " + BPG.FStatistic.Probability.ToString);

    Debug.Unindent;

    Debug.WriteLine("Статистики Энгла: ");

    Debug.Indent;

    Debug.WriteLine("Значение статистики: " + BPG.ObsR2.Statistic.ToString);

    Debug.WriteLine("Значение вероятности: " + BPG.ObsR2.Probability.ToString);

    Debug.Unindent;

    Debug.WriteLine("Статистики скорректированной ошибки регрессии: ");

    Debug.Indent;

    Debug.WriteLine("Значение статистики: " + SESS.Statistic.ToString);

    Debug.WriteLine("Значение вероятности: " + SESS.Probability.ToString);

    Debug.Unindent;

    Debug.WriteLine("===Вспомогательная регрессия===");

    Debug.WriteLine("Оценки коэффициентов вспомогательной регрессии");

    Debug.Indent;

    Debug.WriteLine(BPG.ModelCoefficients.Intercept.Estimate.ToString + " " +

        BPG.ModelCoefficients.Intercept.StandardError.ToString + " " +

        BPG.ModelCoefficients.Intercept.TStatistic.ToString + " " +

        BPG.ModelCoefficients.Intercept.Probability.ToString);

    For i := 0 To BPG.ModelCoefficients.Coefficients.Estimate.Length - 1 Do

        Debug.WriteLine("Оцененные значения коэффициентов: " + ModelCoef.Estimate[i].ToString);

        Debug.WriteLine("Стандартные ошибки коэффициентов: " + ModelCoef.StandardError[i].ToString);

        Debug.WriteLine("t-статистики коэффициентов: " + ModelCoef.TStatistic[i].ToString);

        Debug.WriteLine("Вероятности коэффициентов: " + ModelCoef.Probability[i].ToString);

    End For;

    Debug.Unindent;

    Debug.WriteLine("Характеристики вспомогательной регрессии");

    Debug.Indent;

    Debug.WriteLine("Коэффициент детерминации: " + BPG.SummaryStatistics.R2.ToString);

    Debug.WriteLine("Скорректированный коэффициент детерминации: " + BPG.SummaryStatistics.AdjR2.ToString);

    Debug.WriteLine("Стандартная ошибка регрессии: " + BPG.SummaryStatistics.SE.ToString);

    Debug.WriteLine("Сумма квадратов остатков: " + BPG.SummaryStatistics.SSR.ToString);

    Debug.WriteLine("Статистика Дарбина-Уотсона: " + BPG.SummaryStatistics.DW.ToString);

    Debug.Unindent;

    Debug.WriteLine("Модельный ряд вспомогательной регрессии");

    Debug.Indent;

    For i := 0 To BPG.Fitted.Length - 1 Do

        Debug.Write(i.ToString + " ");

        Debug.WriteLine(BPG.Fitted[i]);

    End For;

    Debug.Unindent;

    Debug.WriteLine("Ряд остатков вспомогательной регрессии");

    Debug.Indent;

    For i := 0 To BPG.Residuals.Length - 1 Do

        Debug.Write(i.ToString + " ");

        Debug.WriteLine(BPG.Residuals[i]);

    End For;

    Debug.Unindent;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены результаты расчёта
 теста Бреуша-Пагана-Годфри на гетероскедастичность.


См. также:


[ISmBreuschPaganGodfreyTest](ISmBreuschPaganGodfreyTest.htm) | [Статистика Фишера](Lib.chm::/05_Statistics/UiModelling_Fisher.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
