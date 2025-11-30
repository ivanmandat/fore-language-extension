# ISmNgPerronTest.MPTStat

ISmNgPerronTest.MPTStat
-


# ISmNgPerronTest.MPTStat


## Синтаксис


MPTStat: [IUnitRootTestStatistic](../IUnitRootTestStatistic/IUnitRootTestStatistic.htm);


## Описание


Свойство MPTStat возвращает
 значение модифицированной статистики Эллиота-Розенберга-Стока MPdt.


## Комментарии


Для получения значения модифицированной статистики Филлипса-Перрона
 используйте свойства [ISmNgPerronTest.MZaStat](ISmNgPerronTest.MZaStat.htm)
 и [ISmNgPerronTest.MZtStat](ISmNgPerronTest.MZtStat.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    NP: SmNgPerronTest;

	    MZaStat, MZtStat, MSBStat, MPTStat: IUnitRootTestStatistic;

	    can: Array[43] Of Double;

	    i, res: Integer;

	Begin

	    NP := New SmNgPerronTest.Create;

	    // Задаем значения переменных

	    can[0] := 6209; can[1] := 6385; can[2] := 6752; can[3] := Double.Nan; can[4] := 6495;

	    can[5] := Double.Nan; can[6] := 7349; can[7] := 7213; can[8] := 7061; can[9] := 7180;

	    can[10] := 7132; can[11] := 7137; can[12] := 7473; can[13] := 7722; can[14] := 8088;

	    can[15] := 8516; can[16] := 8941; can[17] := 9064; can[18] := 9380; can[19] := 9746;

	    can[20] := 9907; can[21] := 10333; can[22] := 10863; can[23] := 11693; can[24] := 12242;

	    can[25] := 12227; can[26] := 12910; can[27] := 13049; can[28] := 13384; can[29] := 14036;

	    can[30] := 14242; can[31] := 14704; can[32] := 13802; can[33] := 14197; can[34] := 15010;

	    can[35] := 15589; can[36] := 15932; can[37] := 16631; can[38] := 17394; can[39] := 17758;

	    can[40] := 17308; can[41] := 16444; can[42] := 16413;

	    //Выбор тестируемого
	 ряда

	    NP.Serie.Value := can;

	    // Тип проверяемого ряда

	    NP.TestedSeries := ADFTestedSeriesType.Level;

	    // Метод обработки пропусков

	    NP.MissingData.Method := MissingDataMethod.LinTrend;

	    // Тип модели

	    NP.Equation := EquationType.Constant;

	    // Метод для вычисления скорректированной дисперсии остатков

	    NP.F0SpectrumEstimation := F0SpectrumEstimationType.BartlettKernel;

	    // Порядок авторегрессии

	    NP.AutoRegressionOrder := 9;

	    // Период идентификации

	    NP.ModelPeriod.FirstPoint := 1;

	    NP.ModelPeriod.LastPoint := 43;

	    res := NP.Execute;

	    For i := 0 To NP.WarningsCount - 1 Do

	        Debug.WriteLine(NP.Warnings[i]);

	    End For;

	    MZaStat := NP.MZaStat;

	    MZtStat := NP.MZtStat;

	    MSBStat := NP.MSBStat;

	    MPTStat := NP.MPTStat;

	    If res = 0 Then

	        Debug.WriteLine("===Вывод статистических значений===");

	        Debug.WriteLine("MZaStat: ");

	        Debug.WriteLine("Значение статистики: " + MZaStat.Statistic.ToString);

	        Debug.WriteLine("Значение вероятности: " + MZaStat.Probability.ToString);

	        Debug.WriteLine("Критические значения: ");

	        Debug.Indent;

	        For i := 0 To MZaStat.CriticalValues.Length - 1 Do

	            Debug.Write(i.ToString + " ");

	            Debug.WriteLine(MZaStat.CriticalValues[i]);

	        End For;

	        Debug.Unindent;

	        Debug.WriteLine("MZtStat: ");

	        Debug.WriteLine("Значение статистики: " + MZtStat.Statistic.ToString);

	        Debug.WriteLine("Значение вероятности: " + MZtStat.Probability.ToString);

	        Debug.WriteLine("Критические значения: ");

	        Debug.Indent;

	        For i := 0 To MZtStat.CriticalValues.Length - 1 Do

	            Debug.Write(i.ToString + " ");

	            Debug.WriteLine(MZtStat.CriticalValues[i]);

	        End For;

	        Debug.Unindent;

	        Debug.WriteLine("MSBStat: ");

	        Debug.WriteLine("Значение статистики: " + MSBStat.Statistic.ToString);

	        Debug.WriteLine("Значение вероятности: " + MSBStat.Statistic.ToString);

	        Debug.WriteLine("Критические значения: ");

	        Debug.Indent;

	        For i := 0 To MSBStat.CriticalValues.Length - 1 Do

	            Debug.Write(i.ToString + " ");

	            Debug.WriteLine(MSBStat.CriticalValues[i]);

	        End For;

	        Debug.Unindent;

	        Debug.WriteLine("MPTStat: ");

	        Debug.WriteLine("Значение статистики: " + MPTStat.Statistic.ToString);

	        Debug.WriteLine("Значение вероятности: " + MPTStat.Statistic.ToString);

	        Debug.WriteLine("Критические значения: ");

	        Debug.Indent;

	        For i := 0 To MPTStat.CriticalValues.Length - 1 Do

	            Debug.Write(i.ToString + " ");

	            Debug.WriteLine(MPTStat.CriticalValues[i]);

	        End For;

	        Debug.Unindent;

	        Debug.WriteLine("===Описательные характеристики вспомогательной регрессии===");

	        Debug.WriteLine("Скорректированная дисперсия остатков: " + NP.F0.ToString);

	        Else

	            Debug.WriteLine(NP.Errors);

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены результаты расчёта
 теста Нг-Перрона.


См. также:


[ISmNgPerronTest](ISmNgPerronTest.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
