# ISmSingularSpectrumAnalysis.Fitted

ISmSingularSpectrumAnalysis.Fitted
-


# ISmSingularSpectrumAnalysis.Fitted


## Синтаксис


Fitted: Array;


## Описание


Свойство Fitted возвращает
 восстановленный ряд.


## Комментарии


Для получения ряда остатков используйте свойство [ISmSingularSpectrumAnalysis.Residuals](ISmSingularSpectrumAnalysis.Residuals.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserSSA;

Var

    ssa: ISmSingularSpectrumAnalysis;

    d0, d1, d2: Double;

    i, res: Integer;

    can: Array[18] Of double;

    incl: Array[2] Of Integer;

Begin

    ssa := New SmSingularSpectrumAnalysis.Create;

    // Задаем метод обработки пропусков

    ssa.MissingData.Method := MissingDataMethod.AnyValue;

    // Задаем значения входного ряда

    can[00] := Double.Nan; can[06] := 7349; can[12] := 7473;

    can[01] := 6385; can[07] := 7213; can[13] := 7722;

    can[02] := 6752; can[08] := 7061; can[14] := 8088;

    can[03] := 6837; can[09] := 7180; can[15] := 8516;

    can[04] := 6495; can[10] := 7132; can[16] := 8941;

    can[05] := 6907; can[11] := 7137; can[17] := Double.Nan;

    // Задаем входной ряд

    ssa.Serie.Value := can;

    // Задаем ширину окна

    ssa.Width := 4;

    // Задаем количество главных компонент

    ssa.PCCount := 3;

    // Задаем используемые главные компоненты

    incl[0] := 0;

    incl[1] := 2;

    ssa.IncludedComponents := incl;

    // Задаем тип центрирования матрицы

    ssa.MatrixAlignmentType := AlignmentType.SingleAlignment;

    // Задаем период идентификации

    ssa.ModelPeriod.FirstPoint := 3;

    ssa.ModelPeriod.LastPoint := 15;

    // Выполняем расчёт и выводим результаты в окно консоли

    res := ssa.Execute;

    If res <> 0 Then

        Debug.WriteLine(ssa.Errors);

    Else

        Debug.WriteLine("Статистики:");

        For i := 1 To ssa.PCCount + 1 Do

            Debug.WriteLine("Главная компонента №" + i.ToString);

            d0 := ssa.Statistics[i - 1, 0];

            Debug.WriteLine("  - собственное значение: " + d0.ToString);

            d0 := ssa.Statistics[i - 1, 1];

            Debug.WriteLine("  - дисперсия:" + d0.ToString);

            d0 := ssa.Statistics[i - 1, 2];

            Debug.WriteLine("  - накопленная дисперсия: " + d0.ToString);

            d0 := ssa.Statistics[i - 1, 3];

            Debug.WriteLine("  - статистика хи-квадрат: " + d0.ToString);

            d0 := ssa.Statistics[i - 1, 4];

            Debug.WriteLine("  - число степеней свободы для статистики хи-квадрат: " + d0.ToString);

            d0 := ssa.Statistics[i - 1, 5];

            Debug.WriteLine("  - вероятность для статистики хи-квадрат: " + d0.ToString);

        End For;

        Debug.WriteLine("Собственные векторы: ");

        For i := 1 To ssa.PCCount Do

            d0 := ssa.P[0, i - 1];

            d1 := ssa.P[1, i - 1];

            d2 := ssa.P[2, i - 1];

            Debug.WriteLine("Главная компонента №" +

                i.ToString + ": " + d0.ToString +

                " " + d1.ToString + " " + d2.ToString);

        End For;

        Debug.WriteLine("================================");

        Debug.WriteLine("Значения главных компонент: ");

        Debug.WriteLine("Главная компонента №1, №2, №3");

        For i := 1 To ssa.v.GetUpperBound(1) + 1 Do

            d0 := ssa.V[i - 1, 1];

            d1 := ssa.V[i - 1, 2];

            d2 := ssa.V[i - 1, 3];

            Debug.WriteLine("Наблюдение №" +

                i.ToString + ": " + d0.ToString +

                " " + d1.ToString + " " + d2.ToString);

        End For;

        d0 := ssa.V[0, 0];

        Debug.WriteLine("================================");

        Debug.WriteLine("Общегрупповое среднее: " + d0.ToString);

        Debug.WriteLine("================================");

        Debug.WriteLine("Восстановленный ряд");

        For i := 0 To ssa.Fitted.Length - 1 Do

            Debug.WriteLine(ssa.Fitted[i]);

        End For;

        Debug.WriteLine("================================");

        Debug.WriteLine("Ряд остатков");

        For i := 0 To ssa.Residuals.Length - 1 Do

            Debug.WriteLine(ssa.Residuals[i]);

        End For;

    End If;

End Sub UserSSA;


Результат выполнения примера: настроен и выполнен сингулярный спектральный
 анализ, результаты выполнения выведены в окно консоли.


См. также:


[ISmSingularSpectrumAnalysis](ISmSingularSpectrumAnalysis.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
