# ICensus2PeriodBegin.MonthOrQuarter

ICensus2PeriodBegin.MonthOrQuarter
-


# ICensus2PeriodBegin.MonthOrQuarter


## Синтаксис


MonthOrQuarter: Integer;


## Описание


Свойство MonthOrQuarter определяет
 начальный месяц или квартал в зависимости от значения свойства [SmCensus2.SeasonalComponentCycleType](../ISmCensus2/ISmCensus2.SeasonalComponentCycleType.htm).


## Пример


Добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    Census2: SmCensus2;

    res: Integer;

    s, Av: Array Of Double;

    Sub Print(Data: Array Of Double);

    Var

        i: Integer;

        CI: ICultureInfo;

    Begin

        CI := CultureInfo.Current;

        Debug.WriteLine("---Begin---");

        For i := 0 To Data.Length - 1 Do

            If Double.IsNan(Data[i]) Then

                Debug.WriteLine("---empty---");

            Else

                Debug.WriteLine(i.ToString + ", " + CI.FormatDoublePrec(Data[i], 4));

            End If;

        End For;

        Debug.WriteLine("---End---");

    End Sub Print;

Begin

    // значение s

    s := New Double[36];

    s[0] := 670.2000183;

    s[1] := 576.0680563;

    s[2] := 717.6484268;

    s[3] := 856.9105808;

    s[4] := 885.4609516;

    s[5] := 1011.846431;

    s[6] := 995.4496292;

    s[7] := 1064.74221;

    s[8] := 1033.324656;

    s[9] := 780.8584552;

    s[10] := 657.5033113;

    s[11] := 654.5472579;

    s[12] := Double.Nan;

    s[13] := 642.4128544;

    s[14] := Double.Nan;

    s[15] := Double.Nan;

    s[16] := 884.5042879;

    s[17] := 1008.308908;

    s[18] := 1108.363628;

    s[19] := 1072.737175;

    s[20] := 1019.183752;

    s[21] := 895.5601672;

    s[22] := 811.0306101;

    s[23] := 756.601764;

    s[24] := 826.6160466;

    s[25] := 762.3903317;

    s[26] := 931.5707266;

    s[27] := 1026.666524;

    s[28] := 1114.124119;

    s[29] := 1099.626392;

    s[30] := 1189.16892;

    s[31] := 1092.343791;

    s[32] := 1087.503861;

    s[33] := 971.6522721;

    s[34] := 826.2502823;

    s[35] := 789.6322825;

    Census2 := New SmCensus2.Create;

    Census2.Serie.Value := s;

    Census2.ModelPeriod.FirstPoint := 1;

    Census2.ModelPeriod.LastPoint := 36;

    Census2.MissingData.Method := MissingDataMethod.LinTrend;

    Census2.SeasonalComponent.Mode := SeasonalityType.Multiplicative;

    Census2.SeasonalComponentCycleType := SeasonalityCycleType.Month;

    Av := New Double[4];

    Av[0] := 0.02;

    Av[1] := 0.1;

    Av[2] := 0.2;

    Av[3] := 0.5;

    Census2.MovingAverage := Av;

    Census2.TraidingDaysAdjustment := TraidingDaysAdj.Auto;

    Census2.StartPeriod.Year := 1;

    Census2.StartPeriod.MonthOrQuarter := 1;

    Census2.SigmaLevel.Lower := 0.9;

    Census2.SigmaLevel.Upper := 2;

    res := Census2.Execute;

    If res<>0 Then

        Debug.WriteLine(census2.Errors);

    Else

        Debug.WriteLine("=== Ряд после априорной корректировки ===");

        Print(Census2.Results.B1);

        Debug.WriteLine("=== Сезонная составляющая ===");

        Print(Census2.Results.D10);

    End If;

End Sub UserProc;


После выполнения в окно консоли будут выведены результаты расчетов методом:


Выполнение модуля начато


=== Ряд после априорной корректировки ===


---Begin---


0, 670,2000


1, 576,0681


2, 717,6484


3, 856,9106


4, 885,4609


5, 1011,8464


6, 995,4496


7, 1064,7422


8, 1033,3247


9, 780,8585


10, 657,5033


11, 654,5472


12, 867,2011


13, 642,4128


14, 879,6692


15, 885,9033


16, 884,5043


17, 1008,3089


18, 1108,3636


19, 1072,7372


20, 1019,1838


21, 895,5602


22, 811,0306


23, 756,6017


24, 826,6160


25, 762,3903


26, 931,5707


27, 1026,6665


28, 1114,1241


29, 1099,6263


30, 1189,1689


31, 1092,3438


32, 1087,5039


33, 971,6523


34, 826,2503


35, 789,6323


---End---


=== Сезонная составляющая ===


---Begin---


0, 92,1623


1, 76,5592


2, 94,4045


3, 104,2769


4, 105,4475


5, 115,3286


6, 122,0558


7, 119,4511


8, 113,6118


9, 95,4300


10, 82,9406


11, 78,3318


12, 92,1623


13, 76,5592


14, 94,4045


15, 104,2769


16, 105,4475


17, 115,3286


18, 122,0558


19, 119,4511


20, 113,6118


21, 95,4300


22, 82,9406


23, 78,3318


24, 92,1623


25, 76,5592


26, 94,4045


27, 104,2769


28, 105,4475


29, 115,3286


30, 122,0558


31, 119,4511


32, 113,6118


33, 95,4300


34, 82,9406


35, 78,3318


---End---


Выполнение модуля завершено


См. также:


[ICensus2PeriodBegin](ICensus2PeriodBegin.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
