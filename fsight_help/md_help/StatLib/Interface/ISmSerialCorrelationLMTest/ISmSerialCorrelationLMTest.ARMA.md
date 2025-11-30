# ISmSerialCorrelationLMTest.ARMA

ISmSerialCorrelationLMTest.ARMA
-


# ISmSerialCorrelationLMTest.ARMA


## Синтаксис


ARMA: [ISlARMA](../ISlARMA/ISlARMA.htm);


## Описание


Свойство ARMA определяет порядки
 авторегрессии и скользящего среднего.


## Комментарии


По умолчанию параметры авторегрессии и скользящего среднего не заданы.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    Lm: SmSerialCorrelationLMTest;

	    d0: Double;

	    res: Integer;

	    y, y0, y1, y2, v: Array Of Double;

	    ARorder: Array Of Integer;

	    // процедура вывода данных

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

	    y := New Double[9];

	    y0 := New Double[9];

	    y1 := New Double[9];

	    y2 := New Double[9];

	//значения y, y0, y1, y2

	    y[0] := 6209; y0[0] := 4110; y1[0] := 3415; y2[0] := 2822;

	    y[1] := 6385; y0[1] := 4280; y1[1] := 3673; y2[1] := 3023;

	    y[2] := 6752; y0[2] := 4459; y1[2] := 4013; y2[2] := 3131;

	    y[3] := 6837; y0[3] := 4545; y1[3] := 4278; y2[3] := 3351;

	    y[4] := 6495; y0[4] := 4664; y1[4] := 4577; y2[4] := 3463;

	    y[5] := 6907; y0[5] := 4861; y1[5] := 5135; y2[5] := 3686;

	    y[6] := 7349; y0[6] := 5195; y1[6] := 5388; y2[6] := 3815;

	    y[7] := 7213; y0[7] := 5389; y1[7] := 5610; y2[7] := 3960;

	    y[8] := 7061; y0[8] := 5463; y1[8] := 5787; y2[8] := 4119;

	    Lm := New SmSerialCorrelationLMTest.Create;

	    Lm.Explained.Value := y;

	    Lm.Explanatories.Add.Value := y0;

	    Lm.Explanatories.Add.Value := y1;

	    Lm.Explanatories.Add.Value := y2;

	    Lm.ModelPeriod.FirstPoint := 1;

	    Lm.ModelPeriod.LastPoint := 9;

	    Lm.MissingData.Method := MissingDataMethod.SampleAverage;

	    Lm.ModelCoefficients.Intercept.Mode := InterceptMode.AutoEstimate;

	    Lm.LMOrder := 1;

	    AROrder := New integer[1];

	    AROrder[0] := 2;

	    Lm.ARMA.OrderAR := ARorder;

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

	        Debug.WriteLine("== Коэффициенты модели ==");

	        v := Lm.ModelCoefficients.Coefficients.Estimate;

	        Print(v);

	        Debug.WriteLine("== Константа ==");

	        d0 := Lm.ModelCoefficients.Intercept.Estimate;

	        Debug.WriteLine(d0.ToString);

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены результаты расчетов
 теста с учетом заданной авторегрессии:


=== Тест Фишера ===

значение: 1.2987001006937815

вероятность: 0.31805922153735455

=== LM-cтатистика ===

значение: 2.2058808168278183

вероятность: 0.13748534485747116

== Коэффициенты модели ==

---Begin---

0, 0,2371

1, -0,0855

2, -0,1312

3, -0,6181

---End---

== Константа ==

-271.10474686542312


См. также:


[ISmSerialCorrelationLMTest](ISmSerialCorrelationLMTest.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
