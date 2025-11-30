# ISmSerialCorrelationLMTest.Fitted

ISmSerialCorrelationLMTest.Fitted
-


# ISmSerialCorrelationLMTest.Fitted


## Синтаксис


Fitted: Array;


## Описание


Свойство Fitted возвращает модельный
 ряд.


## Комментарии


Значения доступны после расчёта метода.


## Пример


Добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    Lm: SmSerialCorrelationLMTest;

    d0: Double;

    i, res: Integer;

    y, y0, y1, y2: Array[9] Of Double;

Begin

    Lm := New SmSerialCorrelationLMTest.Create;

    // Задаем значения переменных

    y[0] := 6209; y0[0] := 4110; y1[0] := 3415; y2[0] := 2822;

    y[1] := Double.NaN; y0[1] := 4280; y1[1] := 3673; y2[1] := 3023;

    y[2] := 6752; y0[2] := 4459; y1[2] := 4013; y2[2] := 3131;

    y[3] := 6837; y0[3] := 4545; y1[3] := 4278; y2[3] := 3351;

    y[4] := 6495; y0[4] := 4664; y1[4] := 4577; y2[4] := 3463;

    y[5] := 6907; y0[5] := 4861; y1[5] := 5135; y2[5] := 3686;

    y[6] := 7349; y0[6] := 5195; y1[6] := 5388; y2[6] := 3815;

    y[7] := 7213; y0[7] := 5389; y1[7] := 5610; y2[7] := 3960;

    y[8] := 7061; y0[8] := 5463; y1[8] := 5787; y2[8] := 4119;

    // Задаем объясняемые и объясняющие переменные

    Lm.Explained.Value := y;

    Lm.Explanatories.Add.Value := y0;

    Lm.Explanatories.Add.Value := y1;

    Lm.Explanatories.Add.Value := y2;

    // Задаем периоды расчёта

    Lm.ModelPeriod.FirstPoint := 1;

    Lm.ModelPeriod.LastPoint := 9;

    // Задаем метод обработки пропусков

    Lm.MissingData.Method := MissingDataMethod.SampleAverage;

    // Задаем способ определения константы

    Lm.ModelCoefficients.Intercept.Mode := InterceptMode.AutoEstimate;

    // Задаем лаг

    Lm.LMOrder := 1;

    // Выполняем расчет и выводим результаты

    res := Lm.Execute;

    If res <> 0 Then

        Debug.WriteLine(Lm.Errors);

        Else

            Debug.Indent;

            Debug.WriteLine("Тест Фишера");

            Debug.Unindent;

            d0 := Lm.FTest.Statistic;

            Debug.WriteLine("значение: " + d0.ToString);

            d0 := Lm.FTest.Probability;

            Debug.WriteLine("вероятность: " + d0.ToString);

            Debug.Indent;

            Debug.WriteLine("Модельный ряд");

            Debug.Unindent;

            For i := 0 To Lm.Fitted.Length - 1 Do

            Debug.Write(i.ToString + ", ");

            Debug.WriteLine(Lm.Fitted[i]);

            End For;

            Debug.Indent;

            Debug.WriteLine("Остатки");

            Debug.Unindent;

            For i := 0 To Lm.Residuals.Length - 1 Do

            Debug.Write(i.ToString + ", ");

            Debug.WriteLine(Lm.Residuals[i]);

            End For;

    End If;

End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены модельный
 ряд и ряд остатков.


См. также:


[ISmSerialCorrelationLMTest](ISmSerialCorrelationLMTest.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
