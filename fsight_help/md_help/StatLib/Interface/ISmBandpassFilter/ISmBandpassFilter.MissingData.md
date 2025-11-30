# ISmBandpassFilter.MissingData

ISmBandpassFilter.MissingData
-


# ISmBandpassFilter.MissingData


## Синтаксис


MissingData: [IMissingData](../IMissingData/IMissingData.htm);


## Описание


Свойство MissingData определяет
 параметры обработки пропусков.


## Комментарии


Метод обработки пропусков MissingDataMethod.Casewise
 не может быть использован.


## Пример


Добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    bpf: SmBandpassFilter;

    can: Array[22] Of Double;

    res, i: Integer;

Begin

    bpf := New SmBandpassFilter.Create;

    // Задаём значения переменной

    can[00] := 6209; can[01] := 6385;

    can[02] := 6752; can[03] := 6837;

    can[04] := 6495; can[05] := 6907;

    can[06] := 7349; can[07] := Double.Nan;

    can[08] := 7180; can[09] := Double.Nan;

    can[10] := 7132; can[11] := 7137;

    can[12] := 7473; can[13] := 7722;

    can[14] := 8088; can[15] := 8516;

    can[16] := 8941; can[17] := Double.Nan;

    can[18] := 9380; can[19] := 9746;

    can[20] := 9907; can[21] := 10333;

    // Определяем параметры периода идентификации

    bpf.ModelPeriod.FirstPoint := 0;

    bpf.ModelPeriod.LastPoint := 21;

    // Определяем объясняемый ряд

    bpf.Serie.Value := can;

    // Определяем параметры обработки пропусков

    bpf.MissingData.Method := MissingDataMethod.LinInterpolation;

    // Задаём вес

    bpf.Width := 2;

    // Определяем верхнюю и нижнюю частоту отсечения

    bpf.FrequencyHigh := 7;

    bpf.FrequencyLow := 2;

    // Выполняем расчёт метода и выводим результаты

    res := bpf.Execute;

    If res <> 0 Then

        Debug.WriteLine(bpf.Errors);

        Else

            Debug.WriteLine("=== Модельный ряд ===");

            Debug.Indent;

            For i := 0 To bpf.Fitted.Length - 1 Do

                Debug.WriteLine(bpf.Fitted[i]);

            End For;

            Debug.Unindent;

            Debug.WriteLine("=== Остатки ===");

            Debug.Indent;

            For i := 0 To bpf.Residuals.Length - 1 Do

                Debug.WriteLine(bpf.Residuals[i]);

            End For;

            Debug.Unindent;

            Debug.WriteLine("=== Веса ===");

            Debug.Indent;

            For i := 0 To bpf.Weights.Length - 1 Do

                Debug.WriteLine(bpf.Weights[i]);

            End For;

            Debug.Unindent;

            Debug.WriteLine("=== Статистика Дарбина-Уотсона ===");

            Debug.WriteLine(bpf.SummaryStatistics.DW);

            Debug.WriteLine("=== Среднее остатков ===");

            Debug.WriteLine(bpf.SummaryStatistics.ME);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведены модельный ряд,
 веса, остатки и статистические характеристики.


См. также:


[ISmBandpassFilter](ISmBandpassFilter.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
