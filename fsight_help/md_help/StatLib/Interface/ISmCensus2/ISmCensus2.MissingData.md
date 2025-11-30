# ISmCensus2.MissingData

ISmCensus2.MissingData
-


# ISmCensus2.MissingData


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

		    Census2: SmCensus2;

		    Result: ICensus2Results;

		    s: Array[36] Of Double;

		    res, i: Integer;

		Begin

		    Census2 := New SmCensus2.Create;

		    // Задаем значения объясняемого ряда

		    s[0] := 670.2000183; s[12] := Double.Nan; s[24] := 826.6160466;

		    s[1] := 576.0680563; s[13] := 642.418544; s[25] := Double.Nan;

		    s[2] := 717.6484268; s[14] := Double.Nan; s[26] := 931.5707266;

		    s[3] := 856.9105808; s[15] := Double.Nan; s[27] := 1026.666524;

		    s[4] := 885.4609516; s[16] := 884.504279; s[28] := Double.Nan;

		    s[5] := 1011.846431; s[17] := 1008.30908; s[29] := 1099.626392;

		    s[6] := 995.4496292; s[18] := 1108.36628; s[30] := 1189.16892;

		    s[7] := 1064.742231; s[19] := 1072.77175; s[31] := 1092.343791;

		    s[8] := 1033.324656; s[20] := 1019.18752; s[32] := 1087.503861;

		    s[9] := 780.8584552; s[21] := 895.560672; s[33] := 971.6522721;

		    s[10] := 657.503313; s[22] := 811.036101; s[34] := 826.2502823;

		    s[11] := 654.547579; s[23] := 756.617764; s[35] := 789.6322825;

		    Census2.Serie.Value := s;

		    // Определяем параметры периода идентификации

		    Census2.ModelPeriod.FirstPoint := 1;

		    Census2.ModelPeriod.LastPoint := 36;

		    // Задаем метод обработки пропусков

		    Census2.MissingData.Method := MissingDataMethod.LinTrend;

		    // Определяем параметры сезонной составляющей и тип сезонности

		    Census2.SeasonalComponent.Mode := SeasonalityType.Multiplicative;

		    Census2.SeasonalComponentCycleType := SeasonalityCycleType.Month;

		    // Задаем поправку на рабочие дни

		    Census2.TraidingDaysAdjustment := TraidingDaysAdj.Auto;

		    // Задаем параметры начала периода

		    Census2.StartPeriod.Year := 1;

		    Census2.StartPeriod.MonthOrQuarter := 1;

		    // Определяем уровень Sigma

		    Census2.SigmaLevel.Lower := 0.9;

		    Census2.SigmaLevel.Upper := 2;

		    // Рассчитываем метод

		    res := Census2.Execute;

		    Result := Census2.Results;

		    If res <> 0 Then

		        Debug.WriteLine(census2.Errors);

		        Else

		            Debug.WriteLine("=== Ряд после априорной корректировки ===");

		            Debug.Indent;

		            For i := 0 To Result.B1.Length - 1 Do

		                Debug.WriteLine(Result.B1[i]);

		            End For;

		            Debug.Unindent;

		            Debug.WriteLine("=== Тренд-циклическая компонента ===");

		            Debug.Indent;

		            For i := 0 To Result.B2.Length - 1 Do

		                Debug.WriteLine(Result.B2[i]);

		            End For;

		            Debug.Unindent;

		            Debug.WriteLine("=== Cезонная корректировка ===");

		            Debug.Indent;

		            For i := 0 To Result.B6.Length - 1 Do

		                Debug.WriteLine(Result.B6[i]);

		            End For;

		            Debug.Unindent;

		            Debug.WriteLine("=== Немодифицированные S-I разности или отношения ===");

		            Debug.Indent;

		            For i := 0 To Result.B8.Length - 1 Do

		                Debug.WriteLine(Result.B8[i]);

		            End For;

		            Debug.Unindent;

		            Debug.WriteLine("=== Нерегулярная компонента ===");

		            Debug.Indent;

		            For i := 0 To Result.B13.Length - 1 Do

		                Debug.WriteLine(Result.B13[i]);

		            End For;

		            Debug.Unindent;

		            Debug.WriteLine("=== Сезонная составляющая ===");

		            Debug.Indent;

		            For i := 0 To Result.D10.Length - 1 Do

		                Debug.WriteLine(Result.D10[i]);

		            End For;

		            Debug.Unindent;

		            Debug.WriteLine("=== Окончательная тренд-циклическая компонента ===");

		            Debug.Indent;

		            For i := 0 To Result.D12.Length - 1 Do

		                Debug.WriteLine(Result.D12[i]);

		            End For;

		            Debug.Unindent;

		        End If;

		End Sub UserProc;


После выполнения в окно консоли будут выведены результаты расчета метода
 [X11](Lib.chm::/02_Time_series_analysis/UiModelling_Census2.htm).


См. также:


[ISmCensus2](ISmCensus2.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
