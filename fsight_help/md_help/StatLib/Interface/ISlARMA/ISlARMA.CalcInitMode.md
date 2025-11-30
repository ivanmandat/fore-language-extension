# ISlARMA.CalcInitMode

ISlARMA.CalcInitMode
-


# ISlARMA.CalcInitMode


## Синтаксис


CalcInitMode: [ARMAInitType](../../Enums/ARMAInitType.htm);


## Описание


Свойство CalcInitMode задает
 метод определения начальных приближений.


## Комментарии


Данное свойство актуально, если в модели участвуют экзогенные переменные
 и/или константа.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    lr: ISmLinearRegress;

	    W: Array[12] Of Double;

	    X: array[20] Of Double;

	    ARMA: ISlARMA;

	    AR, MA: Array[1] Of Integer;

	    Inits: Array[1] Of Double;

	    res: Integer;

	    d: Double;

	    CoefficientsAR, CoefficientsMA, CoefficientsX: ICoefficients;

	    ModelCoefficients: IModelCoefficients;

	Begin

	    lr := New SmLinearRegress.Create;

	     // значения объясняемого ряда


    w[0] := 2; w[4] := -1.9; w[8] := -0.7;

    w[1] := 0.8; w[5] := Double.Nan; w[9] := Double.Nan;

    w[2] := -0.3; w[6] := 3.2; w[10] := 4.3;

    w[3] := -0.3; w[7] := 1.6; w[11] := 1.1;

    lr.Explained.Value := w;

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


    lr.ModelPeriod.FirstPoint := 1;

    lr.ModelPeriod.LastPoint := 12;

    lr.Forecast.LastPoint := 19;

     // метод обработки пропусков

    lr.MissingData.Method := MissingDataMethod.AnyValue;

     // в модели будет использоваться экзогенная переменная

    lr.Explanatories.Clear;

    lr.Explanatories.Add.Value := X;

     // начальное приближение экзогенной переменной

    lr.Explanatories.Item(0).InitValue := 0.7;

    ModelCoefficients := lr.ModelCoefficients;

     // в модели будет использоваться константа

    ModelCoefficients.Intercept.Mode := InterceptMode.AutoEstimate;

     // начальное приближение для константы

    ModelCoefficients.Intercept.InitValue := 3;

    ARMA := lr.ARMA;

     // порядок авторегрессии

    AR[0] := 2;

    ARMA.OrderAR := AR;

     // порядок скользящего среднего

    MA[0] := 1;

    ARMA.OrderMA := MA;

     // метод определения начальных приближений

    ARMA.CalcInitMode := ARMAInitType.Manual;

     // начальные приближение авторегрессии

    Inits[0] := 0.2;

    ARMA.InitAR := Inits;

     // начальные приближения скользящего среднего

    Inits[0] := 0.3;

    ARMA.InitMA := Inits;

     // метод оптимизации


    ARMA.EstimationMethod := ARMAEstimationMethodType.GaussNewton;

     //число итераций для метода оптимизации

    ARMA.MaxIteration := 50;

     //точность для метода оптимизации

    ARMA.Tolerance := 0.1;

     // расчет модели

    res := lr.Execute;

    Debug.WriteLine(lr.Errors);

    If (res = 0) Then

         // коэффициенты авторегрессии

        Debug.WriteLine("Оценки коэффициентов авторегрессии");

        CoefficientsAR := ARMA.CoefficientsAR;

        d := CoefficientsAR.Estimate[0];

        Debug.WriteLine(" Значение: " + d.ToString);

        d := CoefficientsAR.StandardError[0];

        Debug.WriteLine(" Стандартная ошибка: " + d.ToString);

        d := CoefficientsAR.TStatistic[0];

        Debug.WriteLine(" t-статистика: " + d.ToString);

        d := CoefficientsAR.Probability[0];

        Debug.WriteLine(" Вероятность: " + d.ToString);


         // коэффициенты скользящего среднего

        Debug.WriteLine("Оценки коэффициентов скользящего среднего");

        CoefficientsMA := ARMA.CoefficientsMA;

        d := CoefficientsMA.Estimate[0];

        Debug.WriteLine(" Значение: " + d.ToString);

        d := CoefficientsMA.StandardError[0];

        Debug.WriteLine(" Стандартная ошибка: " + d.ToString);

        d := CoefficientsMA.TStatistic[0];

        Debug.WriteLine(" t-статистика: " + d.ToString);

        d := CoefficientsMA.Probability[0];

        Debug.WriteLine(" Вероятность: " + d.ToString);

         // коэффициенты экзогенной переменной

        Debug.WriteLine("Оценки коэффициентов X:");

        CoefficientsX := ModelCoefficients.Coefficients;

        d := CoefficientsX.Estimate[0];

        Debug.WriteLine(" Значение: " + d.ToString);

        d := CoefficientsX.StandardError[0];

        Debug.WriteLine(" Стандартная ошибка: " + d.ToString);

        d := CoefficientsX.TStatistic[0];

        Debug.WriteLine(" t-статистика: " + d.ToString);

        d := CoefficientsX.Probability[0];

        Debug.WriteLine(" Вероятность: " + d.ToString);

         // константа

        d := ModelCoefficients.Intercept.Estimate;

        Debug.WriteLine("Константа: " + d.ToString);

    End If;

End Sub UserProc;


После выполнения примера будет создана модель линейной регрессии, определены
 ее параметры:


	- начальные приближения заданы вручную;


	- в качестве метода оптимизации использован квазиньютоновский
	 метод;


	- максимальное число итераций для расчета модели - «50»;


	- порядок авторегрессии равен двум;


	- порядок скользящего среднего равен единице;


	- точность расчетов равна «0,1».


В окно консоли будут выведены оценки коэффициентов модели и значение
 константы.


См. также:


[ISlARMA](ISlARMA.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
