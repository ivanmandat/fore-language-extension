# ISlARMA.UseFittedInForecast

ISlARMA.UseFittedInForecast
-


# ISlARMA.UseFittedInForecast


## Синтаксис


UseFittedInForecast: Boolean;


## Описание


Свойство UseFittedInForecast
 определяет, рассчитываются ли первые прогнозные значения в модели с авторегрессией
 на основе смоделированных значений.


## Комментарии


Допустимые значения:


	- True. В модели с авторегрессией
	 первые прогнозные значения рассчитываются на основе смоделированных
	 значений;


	- False. Значение по умолчанию.
	 В модели с авторегрессией первые прогнозные значения рассчитываются
	 на основе фактических значений.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    lr: ISmLinearRegress;

	    W: Array[20] Of Double;

	    ARMA: ISlARMA;

	    Inits: Array[2] Of Double;

	    res: Integer;

	    d: Double;

	    CoefficientsAR: ICoefficients;

	    ModelCoefficients: IModelCoefficients;

	    i: Integer;

	    Forecast: Array Of Double;

	Begin

	    lr := New SmLinearRegress.Create;

	    // значения объясняемого ряда

	    w[0] := 2; w[4] := -1.9; w[8] := -0.7; w[12] := 5.4; w[16] := 2.8;

	    w[1] := 0.8; w[5] := Double.Nan; w[9] := Double.Nan; w[13] := 6.4;w[17] := 0.8;

	    w[2] := -0.3; w[6] := 3.2; w[10] := 4.3; w[14] := 7.4; w[18] := -0.7;

	    w[3] := -0.3; w[7] := 1.6; w[11] := 1.1;w[15] := 2;w[19] := Double.Nan;

	    // период идентификации

	    lr.ModelPeriod.FirstPoint := 1;

	    lr.ModelPeriod.LastPoint := 13;

	    lr.Forecast.LastPoint := 19;

	    lr.MissingData.Method := MissingDataMethod.SampleAverage;

	    lr.Explained.Value := w;

	    ModelCoefficients := lr.ModelCoefficients;

	    // в модели будет использоваться константа

	    ModelCoefficients.Intercept.Mode := InterceptMode.AutoEstimate;

	    ARMA := lr.ARMA;

	    // прогнозные значения будут рассчитываться на базе моделируемого ряда

	    ARMA.UseFittedInForecast := True;

	    // порядок авторегрессии

	    ARMA.ParseAR("1");

	    // начальные приближения авторегрессии

	    Inits[0] := 0.0025;

	    ARMA.InitAR := Inits;

	    // разность

	    ARMA.Diff := 2;

	    // метод оптимизации

	    ARMA.EstimationMethod := ARMAEstimationMethodType.LevenbergMarquardt;

	    // 1-й расчет модели. Прогнозные значения рассчитываются на базе моделируемого ряда

	    res := lr.Execute;

	    If (res = 0) Then

	    Debug.WriteLine("Прогнозные значения рассчитаны на базе моделируемого ряда");

	        // коэффициенты авторегрессии

	        CoefficientsAR := ARMA.CoefficientsAR;

	        d := CoefficientsAR.Estimate[0];

	        Debug.WriteLine(" Оценка коэффициента авторегрессии: " + d.ToString);

	        // прогнозные значения

	        Forecast := lr.Forecast.Value;

	        Debug.WriteLine(" Прогнозные значения:"); Debug.Indent;

	        For i := lr.ModelPeriod.LastPoint To Forecast.Length - 1 Do

	            Debug.WriteLine(Forecast[i]);

	        End For;

	        Debug.Unindent;

	    Else

	        Debug.WriteLine(lr.Errors);

	    End If;

	    // 2-й расчет модели. Прогнозные значения рассчитываются на базе фактических данных

	    ARMA.UseFittedInForecast := False;

	    res := lr.Execute;

	    If (res = 0) Then

	    Debug.WriteLine("Прогнозные значения рассчитаны на базе фактических данных");

	        // коэффициенты авторегрессии

	        CoefficientsAR := ARMA.CoefficientsAR;

	        d := CoefficientsAR.Estimate[0];

	        Debug.WriteLine(" Оценка коэффициента авторегрессии: " + d.ToString);

	        // прогнозные значения

	        Forecast := lr.Forecast.Value;

	        Debug.WriteLine(" Прогнозные значения:"); Debug.Indent;

	        For i := lr.ModelPeriod.LastPoint To Forecast.Length - 1 Do

	            Debug.WriteLine(Forecast[i]);

	        End For;

	        Debug.Unindent;

	    Else

	        Debug.WriteLine(lr.Errors);

	    End If;

	End Sub UserProc;


После выполнения примера будет создана модель линейной регрессии, определены
 ее параметры. В окно консоли будут выведены оценки коэффициентов модели
 и прогнозные значения, рассчитанные на базе моделируемого ряда и фактических
 данных.


См. также:


[ISlARMA](ISlARMA.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
