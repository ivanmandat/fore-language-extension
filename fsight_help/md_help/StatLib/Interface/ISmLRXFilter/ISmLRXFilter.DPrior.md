# ISmLRXFilter.DPrior

ISmLRXFilter.DPrior
-


# ISmLRXFilter.DPrior


## Синтаксис


DPrior: [ISlSerie](../ISlSerie/ISlSerie.htm);


## Описание


Свойство DPrior определяет априорные
 разности.


## Комментарии


Для задания априорных значений используйте свойство [ISmLRXFilter.Prior](ISmLRXFilter.Prior.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    lrx: SmLRXFilter;

    status, i: Integer;

    can, w1, w2, w3, P, Dp: Array[15] Of Double;

    SumStat: ISummaryStatistics;

Begin

    // Задаём значения переменных «can», «P»

    can[00] := 6209; P[00] := 4110;

    can[01] := 6385; P[01] := 4280;

    can[02] := 6752; P[02] := 4459;

    can[03] := Double.Nan; P[03] := 4545;

    can[04] := 6495; P[04] := 4664;

    can[05] := 6907; P[05] := 4861;

    can[06] := 7349; P[06] := 5195;

    can[07] := 7213; P[07] := 5389;

    can[08] := 7061; P[08] := 5463;

    can[09] := 7180; P[09] := 5610;

    can[10] := 7132; P[10] := 5948;

    can[11] := 7137; P[11] := 6218;

    can[12] := 7473; P[12] := 6521;

    can[13] := 7722; P[13] := 6788;

    can[14] := 8088; P[14] := 7222;

    // Задаем значения переменных «w1», «w2», «w3»

    w1[0] := 1; w2[0] := 15; w3[0] := 1;

    w1[1] := 2; w2[1] := 14; w3[1] := 2;

    w1[2] := 3; w2[2] := 13; w3[2] := 3;

    w1[3] := 4; w2[3] := 12; w3[3] := 4;

    w1[4] := 5; w2[4] := 11; w3[4] := 5;

    w1[5] := 6; w2[5] := 10; w3[5] := 6;

    w1[6] := 7; w2[6] := 9; w3[6] := 7;

    w1[7] := 8; w2[7] := 8; w3[7] := 8;

    w1[8] := 9; w2[8] := 7; w3[8] := 7;

    w1[9] := 10; w2[9] := 6; w3[9] := 6;

    w1[10] := 11; w2[10] := 5; w3[10] := 5;

    w1[11] := 12; w2[11] := 4; w3[11] := 4;

    w1[12] := 13; w2[12] := 3; w3[12] := 3;

    w1[13] := 14; w2[13] := 2; w3[13] := 2;

    w1[14] := 15; w2[14] := 1; w3[14] := 1;

    // Создаем метод

    lrx := New SmLRXFilter.Create;

    // Задаём исходный ряд

    lrx.Serie.Value := can;

    // Задаём априорные значения

    lrx.Prior.Value := P;

    // Задаем веса

    lrx.w1.Value := w1;

    lrx.w2.Value := w2;

    lrx.w3.Value := w3;

    //Задаём априорные разницы

    Dp[0] := 0;

    For i := 1 To 14 Do

        DP[i] := P[i] - P[i - 1];

    End For;

    lrx.DPrior.Value := Dp;

    // Задаём метод обработки пропусков

    lrx.MissingData.Method := MissingDataMethod.SampleAverage;

    // Задаём параметры периода расчёта

    lrx.ModelPeriod.FirstPoint := 1;

    lrx.ModelPeriod.LastPoint := 15;

    // Задаём меру сглаживания ряда

    lrx.SmoothingParameter := 110;

    // Выполняем расчёт и выводим результаты в окно консоли

    status := lrx.Execute;

    Debug.WriteLine(lrx.Errors);

    If status = 0 Then

        Debug.WriteLine(""); Debug.WriteLine("Статистические характеристики:");

        SumStat := lrx.SummaryStatistics;

        Debug.WriteLine(" - статистика Дарбина-Уотсона: " + SumStat.DW.ToString);

        Debug.WriteLine(" - сумма квадратов остатков: " + SumStat.SSR.ToString);

        Debug.WriteLine(""); Debug.WriteLine("Модельный ряд");

        Print(lrx.Fitted);

        Debug.WriteLine(""); Debug.WriteLine("Ряд остатков");

        Print(lrx.Residuals);

    End If;

End Sub UserProc;


// Процедура вывода данных

Sub Print(Data: Array Of Double);

Var

    i: Integer;

Begin

    Debug.Indent;

    For i := 0 To Data.Length - 1 Do

        Debug.WriteLine(i.ToString + " " + Data[i].ToString);

    End For;

    Debug.Unindent;

End Sub Print;


Результат выполнения примера: настроен и рассчитан LRX-фильтр, результаты
 расчёта выведены в окно консоли.


См. также:


[ISmLRXFilter](ISmLRXFilter.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
