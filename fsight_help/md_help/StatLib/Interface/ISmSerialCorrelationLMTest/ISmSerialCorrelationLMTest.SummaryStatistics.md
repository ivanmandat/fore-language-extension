# ISmSerialCorrelationLMTest.SummaryStatistics

ISmSerialCorrelationLMTest.SummaryStatistics
-


# ISmSerialCorrelationLMTest.SummaryStatistics


## Синтаксис


SummaryStatistics: [ISummaryStatistics](../ISummaryStatistics/ISummaryStatistics.htm);


## Описание


Свойство SummaryStatistics возвращает
 статистические характеристики.


## Комментарии


Статистические характеристики рассчитываются по общим формулам.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    Lm: SmSerialCorrelationLMTest;

	    d0: Double;

	    res: Integer;

	    y, y0, y1, y2: Array[9] Of Double;

	Begin

	    Lm := New SmSerialCorrelationLMTest.Create;

	    //значения y, y0, y1, y2

	    y[0] := 6209; y0[0] := 4110; y1[0] := 3415; y2[0] := 2822;

	    y[1] := Double.Nan; y0[1] := 4280; y1[1] := 3673; y2[1] := 3023;

	    y[2] := 6752; y0[2] := 4459; y1[2] := 4013; y2[2] := 3131;

	    y[3] := 6837; y0[3] := 4545; y1[3] := 4278; y2[3] := 3351;

	    y[4] := Double.Nan; y0[4] := 4664; y1[4] := 4577; y2[4] := 3463;

	    y[5] := 6907; y0[5] := 4861; y1[5] := 5135; y2[5] := 3686;

	    y[6] := 7349; y0[6] := 5195; y1[6] := 5388; y2[6] := 3815;

	    y[7] := 7213; y0[7] := 5389; y1[7] := 5610; y2[7] := 3960;

	    y[8] := 7061; y0[8] := 5463; y1[8] := 5787; y2[8] := 4119;

	    Lm.Explained.Value := y;

	    Lm.Explanatories.Add.Value := y0;

	    Lm.Explanatories.Add.Value := y1;

	    Lm.Explanatories.Add.Value := y2;

	    Lm.ModelPeriod.FirstPoint := 1;

	    Lm.ModelPeriod.LastPoint := 9;

	    Lm.MissingData.Method := MissingDataMethod.SampleAverage;

	    Lm.ModelCoefficients.Intercept.Mode := InterceptMode.AutoEstimate;

	    Lm.LMOrder := 1;

	    res := Lm.Execute;

	    If res <> 0 Then

	        Debug.WriteLine(Lm.Errors);

	        Else

	            Debug.WriteLine("=== Тест Фишера ===");

	            d0 := Lm.FTest.Statistic;

	            Debug.WriteLine("значение: " + d0.ToString);

	            d0 := Lm.FTest.Probability;

	            Debug.WriteLine("вероятность: " + d0.ToString);

	            Debug.WriteLine("=== LM-статистика ===");

	            d0 := Lm.ChiTest.Statistic;

	            Debug.WriteLine("значение: " + d0.ToString);

	            d0 := Lm.ChiTest.Probability;

	            Debug.WriteLine("вероятность: " + d0.ToString);

	            Debug.WriteLine("== Статистические характеристики ==");

	            d0 := Lm.SummaryStatistics.AIC;

	            Debug.WriteLine("Критерий Акаике: " + d0.ToString);

	            d0 := Lm.SummaryStatistics.DW;

	            Debug.WriteLine("Статистика Дарбина-Уотсона: " + d0.ToString);

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены результаты расчетов
 теста:


=== Тест Фишера ===


значение: 0.0476108114852778


вероятность: 0.837953928924362


=== LM-статистика ===


значение: 0.105864255069094


вероятность: 0.744902664803821


== Статистические характеристики
 ==


Критерий Акаике: 14.0606356975859


Статистика Дарбина-Уотсона:
 1.85614734236225


См. также:


[ISmSerialCorrelationLMTest](ISmSerialCorrelationLMTest.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
