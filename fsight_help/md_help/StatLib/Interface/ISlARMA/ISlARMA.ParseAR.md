# ISlARMA.ParseAR

ISlARMA.ParseAR
-


# ISlARMA.ParseAR


## Синтаксис


ParseAR(Value: String; [AssignOrder: Boolean = True]);


## Параметры


Value. Строковое представление
 порядка авторегрессии;


AssignOrder. Признак установки
 полученного значения в свойство [ISlARMA.OrderAR](ISlARMA.OrderAR.htm).


## Описание


Метод ParseAR осуществляет разбор
 строкового представления порядка авторегрессии.


## Комментарии


Параметр Value
 должен содержать номера или диапазоны порядков авторегрессии, разделённые
 запятыми. Например:


ParseAR("1-3,5,7-9");


Если AssignOrder = True,
 то после выполнения ParseAR полученное
 значение устанавливается в свойство [ISlARMA.OrderAR](ISlARMA.OrderAR.htm).
 Если AssignOrder = False,
 то порядок авторегрессии не изменяется.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserARMA;

Var

    lr: ISmLinearRegress;

    W: Array[15] Of Double;

    x: Array[20] Of Double;

    ARMA: ISlARMA;

    res: Integer;

    d: Double;

    CoefficientsAR, CoefficientsMA: ICoefficients;

    ModelCoefficients: IModelCoefficients;

Begin

    lr := New SmLinearRegress.Create;

// значения объясняемого ряда

    w[0] := 2; w[4] := -1.9; w[8] := -0.7; w[12] := 5.4;

    w[1] := 0.8; w[5] := Double.Nan; w[9] := Double.Nan; w[13] := 6.4;

    w[2] := -0.3; w[6] := 3.2; w[10] := 4.3; w[14] := 7.4;

    w[3] := -0.3; w[7] := 1.6; w[11] := 1.1;

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

    lr.ModelPeriod.LastPoint := 13;

    lr.Forecast.LastPoint := 19;

    lr.MissingData.Method := MissingDataMethod.LinTrend;

    lr.Explained.Value := w;

    lr.Explanatories.Add.Value := x;

    ModelCoefficients := lr.ModelCoefficients;

// в модели будет использоваться константа

    ModelCoefficients.Intercept.Mode := InterceptMode.AutoEstimate;

    ModelCoefficients.Intercept.InitValue := 2;

    ARMA := lr.ARMA;

// порядок авторегрессии

    ARMA.ParseAR("2");

// порядок скользящего среднего

    ARMA.ParseMA("1");

// метод определения начальных приближений

    ARMA.CalcInitMode := ARMAInitType.Auto;

// использовать ретрополяцию для оценки коэффициентов скользящего среднего

    ARMA.EstimationApproach := ARMAEstimationApproach.LeastSquares;

    ARMA.UseBackCast := True;

// метод оптимизации

    ARMA.EstimationMethod := ARMAEstimationMethodType.GaussNewton;

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

    // коэффициенты скользящего среднего

        Debug.WriteLine("Оценки коэффициентов скользящего среднего");

        CoefficientsMA := ARMA.CoefficientsMA;

        d := CoefficientsMA.Estimate[0];

        Debug.WriteLine(" Значение: " + d.ToString);

        d := CoefficientsMA.StandardError[0];

        Debug.WriteLine(" Стандартная ошибка: " + d.ToString);

    End If;

End Sub UserARMA;


После выполнения примера будет создана модель линейной регрессии, определены
 ее параметры. Порядки авторегрессии и скользящего среднего будут разобраны
 из строкового представления. Для оценки коэффициентов скользящего среднего
 будет использоваться ретрополяция. В окно консоли будут выведены оценки
 коэффициентов модели.


См. также:


[ISlARMA](ISlARMA.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
