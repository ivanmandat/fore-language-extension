# ISlARMA.CoefficientsARSeas

ISlARMA.CoefficientsARSeas
-


# ISlARMA.CoefficientsARSeas


## Синтаксис


CoefficientsARSeas: [ICoefficients](../ICoefficients/ICoefficients.htm);


## Описание


Свойство CoefficientsARSeas возвращает
 коэффициенты сезонной авторегрессии.


## Комментарии


Коэффициенты будут рассчитаны, если в [ISlARMA.OrderARSeas](ISlARMA.OrderARSeas.htm)
 задан порядок сезонной авторегрессии.


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

    CoefficientsAR, CoefficientsMA: ICoefficients;

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

    lr.MissingData.Method := MissingDataMethod.AnyValue;

    lr.Explained.Value := w;

    ModelCoefficients := lr.ModelCoefficients;

// в модели будет использоваться константа

    ModelCoefficients.Intercept.Mode := InterceptMode.AutoEstimate;

    ARMA := lr.ARMA;

// порядок сезонной авторегрессии

    ARMA.ParseARSeas("1");

// порядок сезонного скользящего среднего

    ARMA.ParseMASeas("1");

// начальные приближения сезонной авторегрессии

    Inits[0] := 0.0025;

    ARMA.InitARSeas := Inits;

// начальные приближения сезонного скользящего среднего

    Inits[0] := 0.0035;

    ARMA.InitMASeas := Inits;

// сезонная разность

    ARMA.DiffSeas := 0;

// период сезонности

    ARMA.PeriodSeas := 4;

// разность

    ARMA.Diff := 2;

// метод оптимизации

    ARMA.EstimationMethod := ARMAEstimationMethodType.LevenbergMarquardt;

// расчет модели

    res := lr.Execute;

    Debug.WriteLine(lr.Errors);

    If (res = 0) Then

    // прогнозные значения

        Forecast := lr.Forecast.Value;

        Debug.WriteLine("Прогнозные значения:"); Debug.Indent;

        For i := 0 To Forecast.Length - 1 Do

            Debug.WriteLine(Forecast[i]);

        End For;

        Debug.Unindent;

    // коэффициенты сезонной авторегрессии

        Debug.WriteLine("Оценки коэффициентов сезонной авторегрессии");

        CoefficientsAR := ARMA.CoefficientsARSeas;

        d := CoefficientsAR.Estimate[0];

        Debug.WriteLine(" Значение: " + d.ToString);

        d := CoefficientsAR.Probability[0];

        Debug.WriteLine(" Вероятность: " + d.ToString);

    // коэффициенты сезонного скользящего среднего

        Debug.WriteLine("Оценки коэффициентов сезонного скользящего среднего");

        CoefficientsMA := ARMA.CoefficientsMASeas;

        d := CoefficientsMA.Estimate[0];

        Debug.WriteLine(" Значение: " + d.ToString);

        d := CoefficientsMA.Probability[0];

        Debug.WriteLine(" Вероятность: " + d.ToString);

    End If;

End Sub UserProc;


После выполнения примера будет создана модель линейной регрессии, определены
 ее параметры. Порядки сезонной авторегрессии и сезонного скользящего среднего
 будут разобраны из строкового представления. В окно консоли будут выведены
 прогнозные значения и оценки коэффициентов модели.


См. также:


[ISlARMA](ISlARMA.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
