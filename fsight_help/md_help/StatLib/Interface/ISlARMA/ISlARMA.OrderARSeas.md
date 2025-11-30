# ISlARMA.OrderARSeas

ISlARMA.OrderARSeas
-


# ISlARMA.OrderARSeas


## Синтаксис


OrderARSeas: Array;


## Описание


Свойство OrderARSeas определяет
 порядок сезонной авторегрессии.


## Комментарии


OrderARSeas является целочисленным
 массивом и используется при расчете авторегрессии и скользящего
 среднего в модели ARIMA.


Если задан порядок сезонной авторегрессии, то будут рассчитаны соответствующие
 коэффициенты: [ISlARMA.CoefficientsARSeas](ISlARMA.CoefficientsARSeas.htm).


## Пример


Добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    lr: ISmLinearRegress;

    W: Array[40] Of Double;

    ARMA: ISlARMA;

    AR, MA: Array[1] Of Integer;

    Inits: Array[2] Of Double;

    res: Integer;

    d: Double;

    CoefficientsAR, CoefficientsMA: ICoefficients;

    ModelCoefficients: IModelCoefficients;

Begin

    lr := New SmLinearRegress.Create;

// значения объясняемого ряда

    w[00] := 6209; w[10] := 7132; w[20] := 9907; w[30] := 14242;

    w[01] := 6385; w[11] := 7137; w[21] := 10333; w[31] := 14704;

    w[02] := 6752; w[12] := 7473; w[22] := 10863; w[32] := 13802;

    w[03] := 6837; w[13] := 7722; w[23] := 11693; w[33] := 14197;

    w[04] := 6495; w[14] := 8088; w[24] := 12242; w[34] := Double.Nan;

    w[05] := 6907; w[15] := 8516; w[25] := 12227; w[35] := 15589;

    w[06] := 7349; w[16] := 8941; w[26] := 12910; w[36] := 15932;

    w[07] := 7213; w[17] := 9064; w[27] := 13049; w[37] := 16631;

    w[08] := 7061; w[18] := 9380; w[28] := 13384; w[38] := Double.Nan;

    w[09] := 7180; w[19] := 9746; w[29] := 14036; w[39] := 17758;

// период идентификации

    lr.ModelPeriod.FirstPoint := 1;

    lr.ModelPeriod.LastPoint := 23;

    lr.Forecast.LastPoint := 35;

    lr.MissingData.Method := MissingDataMethod.Casewise;

    lr.Explained.Value := w;

    ModelCoefficients := lr.ModelCoefficients;

// в модели будет использоваться константа

    ModelCoefficients.Intercept.Mode := InterceptMode.AutoEstimate;

    ARMA := lr.ARMA;

// порядок сезонной авторегрессии

    AR[0] := 1;

    ARMA.OrderARSeas := AR;

// порядок сезонного скользящего среднего

    MA[0] := 1;

    ARMA.OrderMASeas := MA;

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

    ARMA.EstimationMethod := ARMAEstimationMethodType.GaussNewton;

// расчет модели

    res := lr.Execute;

    Debug.WriteLine(lr.Errors);

    If (res = 0) Then

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
 ее параметры, заданы порядки сезонной авторегрессии и сезонного скользящего
 среднего. В окно консоли будут выведены оценки коэффициентов модели


См. также:


[ISlARMA](ISlARMA.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
