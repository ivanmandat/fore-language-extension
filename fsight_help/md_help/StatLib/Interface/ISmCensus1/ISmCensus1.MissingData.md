# ISmCensus1.MissingData

ISmCensus1.MissingData
-


# ISmCensus1.MissingData


## Синтаксис


MissingData: [IMissingData](../IMissingData/IMissingData.htm);


## Описание


Свойство MissingData определяет
 параметры обработки пропусков.


## Комментарии


По умолчанию обработка пропусков не выполняется.


## Пример


Добавьте ссылку на системную сборку Stat.


					Sub UserProc;

		Var

		    census1: SmCensus1;

		    s: Array[45] Of Double;

		    res, i: Integer;

		Begin

		    census1 := New SmCensus1.Create;

		    // Задаем значения переменных

		    s[0] := 670.2000183; s[1] := 576.0680563; s[2] := 717.6484268;

		    s[3] := 856.9105808; s[4] := 885.4609516; s[5] := 1011.846431;

		    s[6] := 995.4496292; s[7] := 1064.74221; s[8] := 1033.324656;

		    s[9] := 780.8584552; s[10] := 657.5033113; s[11] := 654.5472579;

		    s[12] := 678.2380139; s[13] := 642.4128544; s[14] := 751.9611194;

		    s[15] := 786.7090365; s[16] := 884.5042879; s[17] := 1008.308908;

		    s[18] := 1108.363628; s[19] := 1072.737175; s[20] := 1019.183752;

		    s[21] := 895.5601672; s[22] := 811.0306101; s[23] := 756.601764;

		    s[24] := 826.6160466; s[25] := 762.3903317; s[26] := 931.5707266;

		    s[27] := 1026.666524; s[28] := 1114.124119; s[29] := 1099.626392;

		    s[30] := 1189.16892; s[31] := 1092.343791; s[32] := 1087.503861;

		    s[33] := 971.6522721; s[34] := 826.2502823; s[35] := 789.6322825;

		    s[36] := 797.0210578; s[37] := 770.0206; s[38] := 832.1481674;

		    s[39] := 1014.565844; s[40] := 980.4343089; s[41] := 1195.843135;

		    s[42] := 1117.405835; s[43] := 1142.834834; s[44] := 1239.704489;

		    // Определяем объясняемый ряд

		    census1.Serie.Value := s;

		    // Определяем параметры периода идентификации

		    census1.ModelPeriod.FirstPoint := 1;

		    census1.ModelPeriod.LastPoint := 45;

		    // Определяем метод обработки пропусков

		    census1.MissingData.Method := MissingDataMethod.LinInterpolation;

		    // Определяем параметры сезонной составляющей

		    census1.SeasonalComponent.Mode := SeasonalityType.Multiplicative;

		    // Центрируем скользящее среднее

		    census1.CenterMovingAverage := True;

		    // Определяем параметры сезонной составляющей

		    census1.SeasonalComponent.Cycle := 12;

		    // Производим расчет, выводим сообщения об ошибках и результаты расчетов

		    res := census1.Execute;

		    If res <> 0 Then

		        Debug.WriteLine(census1.Errors);

		        Else

		            Debug.WriteLine("=== Сглаженный ряд ===");

		            Debug.Indent;

		            For i := 0 To census1.MovingAverage.Length - 1 Do

		                Debug.WriteLine(census1.MovingAverage[i]);

		            End For;

		            Debug.Unindent;

		            Debug.WriteLine("=== Сезонная составляющая ===");

		            Debug.Indent;

		            For i := 0 To census1.Seasonal.Length - 1 Do

		                Debug.WriteLine(census1.Seasonal[i]);

		            End For;

		            Debug.Unindent;

		            Debug.WriteLine("=== Тренд-циклическая компонента ===");

		            Debug.Indent;

		            For i := 0 To census1.TrendCycle.Length - 1 Do

		                Debug.WriteLine(census1.TrendCycle[i]);

		            End For;

		            Debug.Unindent;

		            Debug.WriteLine("=== Сезонная корректировка ===");

		            Debug.Indent;

		            For i := 0 To census1.SeasonalAdjustment.Length - 1 Do

		                Debug.WriteLine(census1.SeasonalAdjustment[i]);

		            End For;

		            Debug.Unindent;

		            Debug.WriteLine("=== Разности ===");

		            Debug.Indent;

		            For i := 0 To census1.RatioDifferences.Length - 1 Do

		                Debug.WriteLine(census1.RatioDifferences[i]);

		            End For;

		            Debug.Unindent;

		            Debug.WriteLine("=== Нерегулярная компонента ===");

		            Debug.Indent;

		            For i := 0 To census1.Irregula.Length - 1 Do

		                Debug.WriteLine(census1.Irregula[i]);

		            End For;

		            Debug.Unindent;

		    End If;

		End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены сглаженный
 ряд, его сезонная составляющая, его тренд-циклическая компонента, сезонная
 корректировка, разности и нерегулярная компонента.


См. также:


[ISmCensus1](ISmCensus1.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
