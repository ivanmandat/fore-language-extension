# ISlARMAGARCH.CoefficientsAR

ISlARMAGARCH.CoefficientsAR
-


# ISlARMAGARCH.CoefficientsAR


## Синтаксис


CoefficientsAR: [ICoefficients](../ICoefficients/ICoefficients.htm);


## Описание


Свойство CoefficientsAR возвращает
 коэффициенты несезонной авторегрессии.


## Комментарии


Для получения коэффициентов скользящего среднего используйте свойство
 [ISlARMAGARCH.CoefficientsMA](ISlARMAGARCH.CoefficientsMA.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    armagarch: ISmGARCH;

	    W: Array[12] Of Double;

	    X: Array[20] Of Double;

	    ARMA: ISlARMAGARCH;

	    AR, MA: Array[1] Of Integer;

	    Inits: Array[1] Of Double;

	    res: Integer;

	    d: Double;

	    CoefficientsAR, CoefficientsMA: ICoefficients;

	    GARCHCoefficients: IGARCHCoefficients;

	Begin

	    armagarch := New SmGARCH.Create;

	    // значения объясняемого ряда

	    w[0] := 2; w[4] := -1.9; w[8] := -0.7;

	    w[1] := 0.8; w[5] := Double.Nan; w[9] := Double.Nan;

	    w[2] := -0.3; w[6] := 3.2; w[10] := 4.3;

	    w[3] := -0.3; w[7] := 1.6; w[11] := 1.1;

	    armagarch.Explained.Value := w;

	    // значения объясняющего ряда

	    x[0] := Double.Nan; x[10] := 11;

	    x[1] := 2; x[11] := 12;

	    x[2] := 3; x[12] := 13;

	    x[3] := 4; x[13] := Double.Nan;

	    x[4] := 5; x[14] := 15;

	    x[5] := 6; x[15] := 16;

	    x[6] := Double.Nan; x[16] := 17;

	    x[7] := 8; x[17] := Double.Nan;

	    x[8] := 9; x[18] := 19;

	    x[9] := 10; x[19] := 20;

	    // период идентификации

	    armagarch.ModelPeriod.FirstPoint := 1;

	    armagarch.ModelPeriod.LastPoint := 12;

	    armagarch.Forecast.LastPoint := 19;

	    // метод обработки пропусков

	    armagarch.MissingData.Method := MissingDataMethod.AnyValue;

	    // в модели будет использоваться экзогенная переменная

	    armagarch.Explanatories.Clear;

	    armagarch.Explanatories.Add.Value := X;

	    // начальное приближение экзогенной переменной

	    armagarch.Explanatories.Item(0).InitValue := 0.7;

	    GARCHCoefficients := armagarch.GARCHCoefficients;

	    ARMA := armagarch.ARMA;

	    // порядок авторегрессии

	    AR[0] := 2;

	    ARMA.OrderAR := AR;

	    // порядок скользящего среднего

	    MA[0] := 1;

	    ARMA.OrderMA := MA;

	    // начальные приближения авторегрессии

	    Inits[0] := 0.2;

	    ARMA.InitAR := Inits;

	    // начальные приближения скользящего среднего

	    Inits[0] := 0.3;

	    ARMA.InitMA := Inits;

	    // расчет модели

	    res := armagarch.Execute;

	    Debug.WriteLine(armagarch.Errors);

	    If (res = 0) Then

	        // коэффициенты авторегрессии

	        Debug.WriteLine("Оценки коэффициентов авторегрессии");

	        CoefficientsAR := ARMA.CoefficientsAR;

	        Debug.Indent;

	        d := CoefficientsAR.Estimate[0];

	        Debug.WriteLine("Значение: " + d.ToString);

	        d := CoefficientsAR.StandardError[0];

	        Debug.WriteLine("Стандартная ошибка: " + d.ToString);

	        d := CoefficientsAR.TStatistic[0];

	        Debug.WriteLine("t-статистика: " + d.ToString);

	        d := CoefficientsAR.Probability[0];

	        Debug.WriteLine("Вероятность: " + d.ToString);

	        Debug.Unindent;

	        // коэффициенты скользящего среднего

	        Debug.WriteLine("Оценки коэффициентов скользящего среднего");

	        CoefficientsMA := ARMA.CoefficientsMA;

	        Debug.Indent;

	        d := CoefficientsMA.Estimate[0];

	        Debug.WriteLine("Значение: " + d.ToString);

	        d := CoefficientsMA.StandardError[0];

	        Debug.WriteLine("Стандартная ошибка: " + d.ToString);

	        d := CoefficientsMA.TStatistic[0];

	        Debug.WriteLine("t-статистика: " + d.ToString);

	        d := CoefficientsMA.Probability[0];

	        Debug.WriteLine("Вероятность: " + d.ToString);

	        Debug.Unindent;

	    End If;

	End Sub UserProc;


В результате выполнения примера заданы настройки:


	- период идентификации, дата начала периода расчёта заданы вручную;


	- порядок авторегрессии равен двум;


	- порядок скользящего среднего равен единице;


	- заданы начальные приближения авторегрессии и скользящего среднего.


В окно консоли будут выведены оценки коэффициентов авторегрессии и оценки
 коэффициентов скользящего среднего.


См. также:


[ISlARMAGARCH](ISlARMAGARCH.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
