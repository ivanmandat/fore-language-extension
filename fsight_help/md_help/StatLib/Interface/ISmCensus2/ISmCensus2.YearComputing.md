# ISmCensus2.YearComputing

ISmCensus2.YearComputing
-


# ISmCensus2.YearComputing


## Синтаксис


YearComputing: Integer;


## Описание


Свойство YearComputing определяет
 начальную дату (год) для вычисления зависимости от рабочих дней недели.


## Комментарии


Начальную дату (год) для применения зависимости от рабочих дней
 недели определяет свойство [ISmCensus2.YearApplying](ISmCensus2.YearApplying.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    Census2: SmCensus2;

    res: Integer;

    s, w: Array Of Double;

    // Процедура вывода данных

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

    // Задаем значения объясняемого ряда

    s := New Double[36];

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

    Census2 := New SmCensus2.Create;

    Census2.Serie.Value := s;

    // Определяем параметры периода идентификации

    Census2.ModelPeriod.FirstPoint := 1;

    Census2.ModelPeriod.LastPoint := 36;

    // Задаем метод обработки пропусков

    Census2.MissingData.Method := MissingDataMethod.LinTrend;

    // Определяем параметры сезонной составляющей и тип сезонности

    Census2.SeasonalComponent.Mode := SeasonalityType.Multiplicative;

    Census2.SeasonalComponentCycleType := SeasonalityCycleType.Month;

    // Задаем весовые коэффициенты дней

    W := New Double[7]; W[3] := 1.10;

    W[0] := 1.00; W[4] := 0.90;

    W[1] := 1.00; W[5] := 0.98;

    W[2] := 1.02; W[6] := 1.00;

    Census2.DailyWeights := W;

    // Задаем поправку на рабочие дни

    Census2.TraidingDaysAdjustment := TraidingDaysAdj.Yes;

   // Задаем параметры расчета
 и применения зависимости от рабочих дней

    Census2.YearComputing := 1;

    Census2.YearApplying := 3;

    Census2.TradingSigmaLimit := 1200;

    // Задаем параметры начала периода

    Census2.StartPeriod.Year := 1;

    Census2.StartPeriod.MonthOrQuarter := 1;

    // Задаем поправку на праздничные дни

    Census2.Holday := Census2HolidayAdjType.C2hatEaster;

    // Применяем скользящие интервалы

    Census2.SSAnalysis := True;

    // Рассчитываем метод

    res := Census2.Execute;

    // Выводим результаты расчета

    If res <> 0 Then

        Debug.WriteLine(census2.Errors);

    Else

        Debug.WriteLine("=== Ряд после априорной корректировки ===");

        Print(Census2.Results.B1);

        Debug.WriteLine("Сезонная составляющая");

        Print(Census2.Results.D10);

    End If;

End Sub UserProc;


После выполнения процедуры будет рассчитан метод «X11» с заданными параметрами
 поправки на рабочие дни. Результаты будут выведены в окно консоли.


См. также:


[ISmCensus2](ISmCensus2.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
