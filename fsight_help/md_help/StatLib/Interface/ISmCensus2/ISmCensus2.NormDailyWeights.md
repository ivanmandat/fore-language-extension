# ISmCensus2.NormDailyWeights

ISmCensus2.NormDailyWeights
-


# ISmCensus2.NormDailyWeights


## Синтаксис


NormDailyWeights: Array;


## Описание


Свойство NormDailyWeights возвращает
 нормированные веса для дней недели.


## Комментарии


Нормированные веса для дней недели в сумме дают 7, если среди значений [ISmCensus2.DailyWeights](ISmCensus2.DailyWeights.htm)
 есть хотя бы одно ненулевое значение.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    Census2: SmCensus2;

    res, i: Integer;

    s: Array[36] Of Double;

    W: Array[7] Of Double;

Begin

    Census2 := New SmCensus2.Create;

    // Задаем значения объясняемого ряда

    s[0] := 670.2000183; s[12] := Double.Nan; s[24] := 826.6160466;

    s[1] := 576.0680563; s[13] := 642.418544; s[25] := 762.3903317;

    s[2] := 717.6484268; s[14] := Double.Nan; s[26] := 931.5707266;

    s[3] := 856.9105808; s[15] := Double.Nan; s[27] := 1026.666524;

    s[4] := 885.4609516; s[16] := 884.504279; s[28] := 1114.124119;

    s[5] := 1011.846431; s[17] := 1008.30908; s[29] := 1099.626392;

    s[6] := 995.4496292; s[18] := 1108.36628; s[30] := 1189.16892;

    s[7] := 1064.742231; s[19] := 1072.77175; s[31] := 1092.343791;

    s[8] := 1033.324656; s[20] := 1019.18752; s[32] := 1087.503861;

    s[9] := 780.8584552; s[21] := 895.560672; s[33] := 971.6522721;

    s[10] := 657.503313; s[22] := 811.036101; s[34] := 826.2502823;

    s[11] := 654.547579; s[23] := 756.617764; s[35] := 789.6322825;

    Census2.Serie.Value := s;

    Census2.ModelPeriod.FirstPoint := 1;

    Census2.ModelPeriod.LastPoint := 36;

    Census2.MissingData.Method := MissingDataMethod.LinTrend;

    Census2.SeasonalComponent.Mode := SeasonalityType.Multiplicative;

    Census2.SeasonalComponentCycleType := SeasonalityCycleType.Month;

    W[0] := 0.50; W[4] := 1.00;

    W[1] := 1.00; W[5] := 1.00;

    W[2] := 1.00; W[6] := 1.00;

    W[3] := 1.00;

    Census2.DailyWeights := W;

    Census2.TraidingDaysAdjustment := TraidingDaysAdj.Auto;

    Census2.StartPeriod.Year := 1;

    Census2.StartPeriod.MonthOrQuarter := 1;

    Census2.Holday := Census2HolidayAdjType.C2hatEaster;

    Census2.SSAnalysis := False;

    res := Census2.Execute;

    If res<>0 Then

        Debug.WriteLine(census2.Errors);

    Else

        Debug.WriteLine("=== Нормированные веса для дней недели ===");

        For i:=0 To 6 Do

            Debug.WriteLine(Census2.NormDailyWeights[i]);

        End For;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены нормированные
 веса для дней недели.


См. также:


[ISmCensus2](ISmCensus2.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
