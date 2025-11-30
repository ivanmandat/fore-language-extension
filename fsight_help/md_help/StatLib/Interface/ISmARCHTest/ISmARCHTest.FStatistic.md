# ISmARCHTest.FStatistic

ISmARCHTest.FStatistic
-


# ISmARCHTest.FStatistic


## Синтаксис


FStatistic: [ISpecificationTestStatistic](../ISpecificationTestStatistic/ISpecificationTestStatistic.htm);


## Описание


Свойство FStatistic возвращает
 значение статистики Фишера.


## Комментарии


Для получения значения статистики Энгла используйте свойство [ISmARCHTest.ObsR2](ISmARCHTest.ObsR2.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    ARCH: SmARCHTest;

    ModelCoef: ICoefficients;

    can, fra, ger: Array[10] Of Double;

    i, res: Integer;

Begin

    ARCH := New SmARCHTest.Create;

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

    // Задаем объясняемую переменную

    ARCH.Explained.Value := can;

    // Задаем объясняющие переменные

    ARCH.Explanatories.Clear;

    ARCH.Explanatories.Add.Value := fra;

    ARCH.Explanatories.Add.Value := ger;

    // Используем автоматическую оценку константы

    ARCH.ModelCoefficients.Intercept.Mode := InterceptMode.AutoEstimate;

    // Задаём порядок авторегрессии

    ARCH.AutoRegressionOrder := 1;

    // Задаем порядки авторегрессии и скользящего среднего

    ARCH.ARMA.ParseAR('3');

    ARCH.ARMA.ParseMA('2');

    // Определяем метод обработки пропусков

    ARCH.MissingData.Method := MissingDataMethod.LinTrend;

    // Задаём период идентификации

    ARCH.ModelPeriod.FirstPoint := 1;

    ARCH.ModelPeriod.LastPoint := 10;

    ModelCoef := ARCH.ModelCoefficients.Coefficients;

    // Выполняем расчёт и выводим результаты

    res := ARCH.Execute;

    Debug.WriteLine(ARCH.Errors);

    Debug.WriteLine("Статистика Фишера:");

    Debug.Indent;

    Debug.WriteLine("Значение статистики: " + ARCH.FStatistic.Statistic.ToString);

    Debug.WriteLine("Значение вероятности: " + ARCH.FStatistic.Probability.ToString);

    Debug.Unindent;

    Debug.WriteLine("Статистика Энгла:");

    Debug.Indent;

    Debug.WriteLine("Значение статистики: " + ARCH.ObsR2.Statistic.ToString);

    Debug.WriteLine("Значение вероятности: " + ARCH.ObsR2.Probability.ToString);

    Debug.Unindent;

    Debug.WriteLine("Вспомогательная регрессия:");

    Debug.WriteLine("Оценки коэффициентов вспомогательной регрессии:");

    Debug.Indent;

    Debug.WriteLine(ARCH.ModelCoefficients.Intercept.Estimate.ToString + " " +

        ARCH.ModelCoefficients.Intercept.StandardError.ToString + " " +

        ARCH.ModelCoefficients.Intercept.TStatistic.ToString + " " +

        ARCH.ModelCoefficients.Intercept.Probability.ToString);

    For i := 0 To ARCH.ModelCoefficients.Coefficients.Estimate.Length - 1 Do

        Debug.WriteLine("Оцененные значения коэффициентов: " + ModelCoef.Estimate[i].ToString);

        Debug.WriteLine("Стандартные ошибки коэффициентов: " + ModelCoef.StandardError[i].ToString);

        Debug.WriteLine("t-статистики коэффициентов: " + ModelCoef.TStatistic[i].ToString);

        Debug.WriteLine("Вероятности коэффициентов: " + ModelCoef.Probability[i].ToString);

    End For;

    Debug.Unindent;

    Debug.WriteLine("Характеристики вспомогательной регрессии");

    Debug.Indent;

    Debug.WriteLine("Коэффициент детерминации: " + ARCH.SummaryStatistics.R2.ToString);

    Debug.WriteLine("Скорректированный коэффициент детерминации: " + ARCH.SummaryStatistics.AdjR2.ToString);

    Debug.WriteLine("Стандартная ошибка регрессии: " + ARCH.SummaryStatistics.SE.ToString);

    Debug.WriteLine("Сумма квадратов остатков: " + ARCH.SummaryStatistics.SSR.ToString);

    Debug.WriteLine("Статистика Дарбина-Уотсона: " + ARCH.SummaryStatistics.DW.ToString);

    Debug.Unindent;

    Debug.WriteLine("Модельный ряд вспомогательной регрессии");

    Debug.Indent;

    For i := 0 To ARCH.ModelPeriod.LastPoint - 1 Do

        Debug.Write(i.ToString + " ");

        Debug.WriteLine(ARCH.Fitted[i]);

    End For;

    Debug.Unindent;

    Debug.WriteLine("Ряд остатков вспомогательной регрессии");

    Debug.Indent;

    For i := 0 To ARCH.Residuals.Length - 1 Do

        Debug.Write(i.ToString + " ");

        Debug.WriteLine(ARCH.Residuals[i]);

    End For;

    Debug.Unindent;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены результаты расчёта
 теста ARCH на гетероскедастичность.


См. также:


[ISmARCHTest](ISmARCHTest.htm) | [Статистика Фишера](Lib.chm::/05_Statistics/UiModelling_Fisher.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
