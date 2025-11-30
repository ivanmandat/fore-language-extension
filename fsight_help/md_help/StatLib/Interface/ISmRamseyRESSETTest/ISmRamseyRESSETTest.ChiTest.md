# ISmRamseyRESSETTest.ChiTest

ISmRamseyRESSETTest.ChiTest
-


# ISmRamseyRESSETTest.ChiTest


## Синтаксис


ChiTest: [ISpecificationTestStatistic](../ISpecificationTestStatistic/ISpecificationTestStatistic.htm);


## Описание


Свойство ChiTest возвращает
 значения статистики хи-квадрат.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    RESSET: SmRamseyRESSETTest;

    d0: Double;

    res, i: Integer;

    y, y0, y1, y2: Array[9] Of Double;

    v: Array Of Double;

Begin

    // Задаем значения переменных

    y[0] := 6209; y0[0] := 4110; y1[0] := 3415; y2[0] := 2822;

    y[1] := 6385; y0[1] := 4280; y1[1] := 3673; y2[1] := 3023;

    y[2] := 6752; y0[2] := 4459; y1[2] := 4013; y2[2] := 3131;

    y[3] := Double.Nan; y0[3] := 4545; y1[3] := 4278; y2[3] := 3351;

    y[4] := 6495; y0[4] := 4664; y1[4] := 4577; y2[4] := 3463;

    y[5] := 6907; y0[5] := 4861; y1[5] := 5135; y2[5] := 3686;

    y[6] := 7349; y0[6] := 5195; y1[6] := 5388; y2[6] := 3815;

    y[7] := Double.Nan; y0[7] := 5389; y1[7] := 5610; y2[7] := 3960;

    y[8] := 7061; y0[8] := 5463; y1[8] := 5787; y2[8] := 4119;

    RESSET := New SmRamseyRESSETTest.Create;

    // Задаем объясняемый и объясняющие ряды

    RESSET.Explained.Value := y;

    RESSET.Explanatories.Add.Value := y0;

    RESSET.Explanatories.Add.Value := y1;

    RESSET.Explanatories.Add.Value := y2;

    // Задаем периоды расчёта

    RESSET.ModelPeriod.FirstPoint := 1;

    RESSET.ModelPeriod.LastPoint := 9;

    // Задаем метод обработки пропущенных данных

    RESSET.MissingData.Method := MissingDataMethod.LinTrend;

    // Задаем порядок автрегрессии

    RESSET.ARMA.ParseAR("1");

    // Задаем способ вычисления константы

    RESSET.ModelCoefficients.Intercept.Mode := InterceptMode.AutoEstimate;

    // Задаем число дополнительных регрессоров

    RESSET.Power := 1;

    // Выполняем расчёт и выводим результаты

    res := RESSET.Execute;

    If res <> 0 Then

        Debug.WriteLine(RESSET.Errors);

    Else

        Debug.Indent;

        Debug.WriteLine("Тест Фишера");

        Debug.Unindent;

        d0 := RESSET.FTest.Statistic;

        Debug.WriteLine("значение: " + d0.ToString);

        d0 := RESSET.FTest.Probability;

        Debug.WriteLine("вероятность: " + d0.ToString);

        Debug.Indent;

        Debug.WriteLine("Тест хи-квадрат");

        Debug.Unindent;

        d0 := RESSET.ChiTest.Statistic;

        Debug.WriteLine("значение: " + d0.ToString);

        d0 := RESSET.ChiTest.Probability;

        Debug.WriteLine("вероятность: " + d0.ToString);

        Debug.Indent;

        Debug.WriteLine("Коэффициенты модели");

        Debug.Unindent;

        v := RESSET.ModelCoefficients.Coefficients.Estimate;

        For i := 0 To v.Length - 1 Do

            Debug.Write(i.ToString + ", ");

            Debug.WriteLine(v[i]);

        End For;

        Debug.Indent;

        Debug.WriteLine("Модельный ряд");

        Debug.Unindent;

        v := RESSET.Fitted;

        For i := 0 To v.Length - 1 Do

            Debug.Write(i.ToString + ", ");

            Debug.WriteLine(v[i]);

        End For;

        Debug.Indent;

        Debug.WriteLine("Остатки");

        Debug.Unindent;

        v := RESSET.Residuals;

        For i := 0 To v.Length - 1 Do

            Debug.Write(i.ToString + ", ");

            Debug.WriteLine(v[i]);

        End For;

        Debug.Indent;

        Debug.WriteLine("Константа");

        Debug.Unindent;

        d0 := RESSET.ModelCoefficients.Intercept.Estimate;

        Debug.WriteLine(d0.ToString);

        Debug.Indent;

        Debug.WriteLine("Статистические характеристики");

        Debug.Unindent;

        d0 := RESSET.SummaryStatistics.AIC;

        Debug.WriteLine("Критерий Акаике: " + d0.ToString);

        d0 := RESSET.SummaryStatistics.DW;

        Debug.WriteLine("Статистика Дарбина-Уотсона: " + d0.ToString);

    End If;

End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены результаты
 расчетов тестов Фишера и хи-квадрат, модельный ряд, ряд остатков, константа
 и статистические характеристики.


См. также:


[ISmRamseyRESSETTest](ISmRamseyRESSETTest.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
