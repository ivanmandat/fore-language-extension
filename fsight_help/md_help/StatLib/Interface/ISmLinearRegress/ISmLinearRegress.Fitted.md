# ISmLinearRegress.Fitted

ISmLinearRegress.Fitted
-


# ISmLinearRegress.Fitted


## Синтаксис


Fitted: Array;


## Описание


Свойство Fitted возвращает массив
 значений модельного ряда.


## Комментарии


Значения доступны после расчёта метода.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    slr: SmLinearRegress;

    Factors: ISlSeries;

    res: Integer;

    Serie, Factor: Array Of Double;

    Weights: Array[20, 20] Of Double;

    Period: IStatPeriod;

    AR, MA: Array Of Integer;

    ARMA: ISlARMA;

    Stat: Double;

Begin

    slr := New SmLinearRegress.Create;

    // Задаем объясняемый ряд

    Serie := New Double[20];

    Serie[00] := 6209; Serie[01] := 6385;

    Serie[02] := 6752; Serie[03] := 6837;

    Serie[04] := 6495; Serie[05] := 6907;

    Serie[06] := 7349; Serie[07] := 7213;

    Serie[08] := 7061; Serie[09] := 7180;

    Serie[10] := 7132; Serie[11] := 7137;

    Serie[12] := 7473; Serie[13] := 7722;

    Serie[14] := 8088; Serie[15] := 7486;

    Serie[16] := 7832; Serie[17] := 9064;

    Serie[18] := 9380; Serie[19] := 9746;

    slr.Explained.Value := Serie;

    // Задаем объясняющий ряд

    Factor := New Double[30];

    Factor[00] := 4110; Factor[01] := 4280;

    Factor[02] := 4459; Factor[03] := 4545;

    Factor[04] := 4664; Factor[05] := 4861;

    Factor[06] := 5195; Factor[07] := 5389;

    Factor[08] := 5463; Factor[09] := 5610;

    Factor[10] := 5948; Factor[11] := 6218;

    Factor[12] := 6521; Factor[13] := 6788;

    Factor[14] := 7222; Factor[15] := 7486;

    Factor[16] := 7832; Factor[17] := 8153;

    Factor[18] := 8468; Factor[19] := 9054;

    Factor[20] := 9907; Factor[21] := 10333;

    Factor[22] := 10863; Factor[23] := 11693;

    Factors := slr.Explanatories;

    Factors.Add.Value := Factor;

    // Задаем ряд весов

    Weights[0, 0] := 1; Weights[0, 1] := 1.5;

    Weights[0, 2] := 0; Weights[0, 3] := 1;

    Weights[0, 4] := 1; Weights[0, 5] := 0;

    Weights[0, 6] := 1.5; Weights[0, 7] := 0;

    Weights[0, 8] := 1; Weights[0, 9] := 1;

    Weights[0, 10] := 1; Weights[0, 11] := 1;

    Weights[0, 12] := 1; Weights[0, 13] := 1;

    Weights[0, 14] := 1; Weights[0, 15] := 1;

    Weights[0, 16] := 0; Weights[0, 17] := 2;

    Weights[0, 18] := 1; Weights[0, 19] := 1.5;

    slr.UseWeights := True;

    slr.GLSMatrix := Weights;

    // Задаем параметры авторегрессии и скользящего среднего

    ARMA := slr.ARMA;

    AR := New Integer[1];

    AR[0] := 1;

    ARMA.OrderAR := AR;

    MA := New Integer[1];

    MA[0] := 1;

    ARMA.OrderMA := MA;

    // Задаем параметры периода идентификации

    Period := slr.ModelPeriod;

    Period.FirstPoint := 4;

    Period.LastPoint := 20;

    // Задаем параметры прогнозирования

    slr.Forecast.LastPoint := 30;

    //Выполняем расчёт и выводим результаты

    res := slr.Execute;

    If res <> 0 Then

        Debug.WriteLine(slr.Errors);

    Else

        Debug.WriteLine("=== Модельный ряд ===");

        Print(slr.Fitted);

        Debug.WriteLine("=== Прогноз ===");

        Print(slr.Forecast.Value);

        Debug.WriteLine("=== Ряд остатков ===");

        Print(slr.Residuals);

        Debug.WriteLine("=== Статистика Фишера ===");

        Stat := slr.SummaryStatistics.Fstat;

        Debug.WriteLine(Stat);

        Debug.WriteLine("=== Вероятность для статистики Фишера === ");

        Stat := slr.SummaryStatistics.ProbFstat;

        Debug.WriteLine(Stat);

    End If;

End Sub UserProc;

// Процедура вывода данных

Sub Print(Data: Array Of Double);

Var

    i: Integer;

    d: Double;

Begin

    For i := 0 To Data.Length - 1 Do

        If Double.IsNan(Data[i]) Then

            Debug.WriteLine(i.ToString + ", ---empty---");

        Else

            d := Data[i];

            Debug.WriteLine(i.ToString + ", " + d.ToString);

        End If;

    End For;

End Sub Print;


После выполнения примера в окно консоли будут выведены результаты расчёта
 линейной регрессии: модельный ряд, прогнозный ряд, ряд остатков, статистика
 Фишера и вероятность для статистики Фишера.


См. также:


[ISmLinearRegress](ISmLinearRegress.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
