# ISmGARCH.ARMA

ISmGARCH.ARMA
-


# ISmGARCH.ARMA


## Синтаксис


ARMA: [ISlARMAGARCH](../ISlARMAGARCH/ISlARMAGARCH.htm);


## Описание


Свойство ARMA возвращает параметры
 авторегрессии и скользящего среднего.


## Комментарии


По умолчанию порядки авторегрессии и скользящего среднего не заданы.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub Print(Data: Array Of Double);

	    Var

	        i: Integer;

	    Begin

	        Debug.Indent;

	        For i := 0 To Data.Length - 1 Do

	            If Double.IsNan(Data[i]) Then

	                Debug.WriteLine("----empty---");

	                Else

	                    Debug.WriteLine(i.ToString + " " + Data[i].ToString);

	            End If;

	        End For;

	    Debug.Unindent;

	End Sub Print;


	Sub UserProc;

	Var

	    GARCH: ISmGARCH;

	    W: Array[12] Of Double;

	    X: Array[20] Of Double;

	    ARMA: ISlARMAGARCH;

	    Inits: Array[1] Of Double;

	    res, i: Integer;

	    d: Double;

	    CoefficientsAR, CoefficientsMA, GARCHCoef, RegrCoef: ICoefficients;

	    ModelCoefficients: IGARCHCoefficients;

	Begin

	    GARCH := New SmGARCH.Create;

	    // Задаём значения объясняемого ряда

	    w[0] := 2; w[4] := -1.9; w[8] := -0.7;

	    w[1] := 0.8; w[5] := Double.Nan; w[9] := Double.Nan;

	    w[2] := -0.3; w[6] := 3.2; w[10] := 4.3;

	    w[3] := -0.3; w[7] := 1.6; w[11] := 1.1;

	    GARCH.Explained.Value := w;

	    // Задаём значения объясняющего ряда

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

	    // Задаём период идентификации

	    GARCH.ModelPeriod.FirstPoint := 1;

	    GARCH.ModelPeriod.LastPoint := 12;

	    GARCH.Forecast.LastPoint := 19;

	    // Задаём метод обработки пропусков

	    GARCH.MissingData.Method := MissingDataMethod.AnyValue;

	    // Задаём объясняющий ряд

	    GARCH.Explanatories.Clear;

	    GARCH.Explanatories.Add.Value := X;

	    // Задаём начальное приближение экзогенной переменной

	    GARCH.Explanatories.Item(0).InitValue := 0.7;

	    ModelCoefficients := GARCH.GARCHCoefficients;

	    //Задаём начальное приближение константы

	    GARCH.Intercept.Mode := InterceptMode.AutoEstimate;

	    // Используем начальные значения по умолчанию

	    GARCH.UseDefaultInitValues := True;

	    // Задаем параметры авторегрессии и скользящего среднего

	    GARCH.ARMA.ParseAR("2", True);

	    GARCH.ARMA.ParseMA("1", True);

	    ARMA := GARCH.ARMA;

	    // Определяем условие стационарности

	    GARCH.StationarityCondition := False;

	    // Задаём максимальное число итераций для расчета метода

	    GARCH.MaxIteration := 100;

	    // Задаём точность вычислений

	    GARCH.Tolerance := 0.01;

	    // Задаём порядок авторегрессии условной гетероскедастичности

	    GARCH.ARCHOrder := 1;

	    // Задаём порядок обобщенной авторегрессии условной гетероскедастичности

	    GARCH.GARCHOrder := 1;

	    // Задаём порядок асимметрии

	    GARCH.AssymetryOrder := 2;

	    // Задаём тип модели GARCH

	    GARCH.GARCHSpec := GARCHSpecType.GARCH;


    // Производим расчет и выводим результаты

    res := GARCH.Execute;

    Debug.WriteLine(GARCH.Errors);

    If (res = 0) Then

        Debug.WriteLine("Оценки коэффициентов авторегрессии");

        CoefficientsAR := ARMA.CoefficientsAR;

        Debug.Indent;

        d := CoefficientsAR.Estimate[0];

        Debug.WriteLine("Значение: " + d.ToString);

        Debug.Unindent;

        Debug.WriteLine("Оценки коэффициентов скользящего среднего");

        CoefficientsMA := ARMA.CoefficientsMA;

        Debug.Indent;

        d := CoefficientsMA.Estimate[0];

        Debug.WriteLine("Значение: " + d.ToString);

        Debug.Unindent;

        Debug.WriteLine("Оптимальное значение функции правдоподобия");

        Debug.Indent;

        d := GARCH.LikelihoodFunctionValue;

        Debug.WriteLine("Значение" + d.ToString);

        Debug.Unindent;

        Debug.WriteLine("Стандартная ошибка");

        Debug.Indent;

        d := GARCH.SummaryStatistics.SE;

        Debug.WriteLine("Значение: " + d.ToString);

        Debug.Unindent;

        Debug.WriteLine("Модельный ряд");

        Print(GARCH.Fitted);

        Debug.WriteLine("Ряд остатков");

        Print(GARCH.Residuals);

        Debug.WriteLine("Дисперсия остатков");

        Print(GARCH.ResidualsDispersion);

        Debug.WriteLine("Прогноз дисперсии остатков");

        Print(GARCH.ResidualsDispersionForecast);

        Debug.WriteLine("Оценка регрессионных коэффициентов");

        RegrCoef := GARCH.RegressionCoefficients.Coefficients;

        Debug.Indent;

        Debug.WriteLine("Оцененные значения коэффициентов модели: ");

        Print(RegrCoef.Estimate);

        Debug.WriteLine("Вероятностные коэффициенты: ");

        Print(RegrCoef.Probability);

        Debug.Unindent;

        Debug.WriteLine("Оценка коэффициентов обобщенной авторегрессии условной гетероскедастичности");

        GARCHCoef := GARCH.GARCHCoefficients.Coefficients;

        Debug.Indent;

        Debug.WriteLine("Оцененные значения коэффициентов модели: ");

        Print(GARCHCoef.Estimate);

        Debug.WriteLine("Вероятностные коэффициенты: ");

        Print(GARCHCoef.Probability);

        Debug.Unindent;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены результаты расчёта
 GARCH-модели.


См. также:


[ISmGARCH](ISmGARCH.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
