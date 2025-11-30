# ISlARMA.UseAnalyticDeriv

ISlARMA.UseAnalyticDeriv
-


# ISlARMA.UseAnalyticDeriv


## Синтаксис


UseAnalyticDeriv: Boolean;


## Описание


Свойство UseAnalyticDeriv определяет,
 будут ли при поиске решения использоваться аналитические производные.


## Комментарии


Допустимые значения:


	- True. Значение по умолчанию.
	 При поиске решения используются аналитические производные.


	- False. При поиске решения
	 используются численные производные.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    lr: ISmLinearRegress;

    W: Array[12] Of Double;

    X: array[20] Of Double;

    ARMA: ISlARMA;

    AR, MA: Array[1] Of Integer;

    res, i: Integer;

    ModelCoefficients: IModelCoefficients;

Begin

    lr := New SmLinearRegress.Create;

    // Значения объясняемого ряда

    w[0] := 2; w[4] := -1.9; w[8] := -0.7;

    w[1] := 0.8; w[5] := Double.Nan; w[9] := Double.Nan;

    w[2] := -0.3; w[6] := 3.2; w[10] := 4.3;

    w[3] := -0.3; w[7] := 1.6; w[11] := 1.1;

    lr.Explained.Value := w;

    // Значения объясняющего ряда

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

    lr.Explanatories.Clear;

    lr.Explanatories.Add.Value := X;

    lr.Explanatories.Item(0).Name := "X";

    // В модели будет использоваться константа

    ModelCoefficients := lr.ModelCoefficients;

    ModelCoefficients.Intercept.Mode := InterceptMode.AutoEstimate;

    // Период идентификации

    lr.ModelPeriod.FirstPoint := 1;

    lr.ModelPeriod.LastPoint := 12;

    lr.Forecast.LastPoint := 19;

    // Метод обработки пропусков

    lr.MissingData.Method := MissingDataMethod.AnyValue;

    ARMA := lr.ARMA;

    // Порядок авторегрессии

    AR[0] := 2;

    ARMA.OrderAR := AR;

    // Порядок скользящего среднего

    MA[0] := 1;

    ARMA.OrderMA := MA;

    // Метод определения начальных приближений

    ARMA.CalcInitMode := ARMAInitType.Auto;

    // Метод оптимизации

    ARMA.EstimationMethod := ARMAEstimationMethodType.LevenbergMarquardt;

    // Число итераций и точность для метода оптимизации

    ARMA.MaxIteration := 50;

    ARMA.Tolerance := 0.1;

    // Используем аналитические
 производные при поиске решений

    ARMA.UseAnalyticDeriv := True;

    // Расчет модели

    res := lr.Execute;

    If (res = 0) Then

        Debug.WriteLine(" ===Оценки коэффициентов модели=== ");

        Debug.WriteLine("Константа: " + ModelCoefficients.Intercept.Estimate.ToString);

        For i:=0 To ModelCoefficients.Coefficients.Estimate.Length-1 Do

            Debug.WriteLine(lr.Explanatories.Item(i).Name +": " + ModelCoefficients.Coefficients.Estimate[i].ToString);

        End For;

        For i:=0 To lr.ARMA.CoefficientsAR.Estimate.Length-1 Do

            Debug.WriteLine("AR("+Ar[i].ToString +"): " + lr.ARMA.CoefficientsAR.Estimate[i].ToString);

        End For;

        For i:=0 To lr.ARMA.CoefficientsMA.Estimate.Length-1 Do

            Debug.WriteLine("MA("+Ma[i].ToString +"): " + lr.ARMA.CoefficientsMA.Estimate[i].ToString);

        End For;

        Debug.WriteLine(" ===Описательные статистики=== ");

        Debug.WriteLine("Коэффициент детерминации: " + lr.SummaryStatistics.R2.ToString);

        Debug.WriteLine("Сумма квадратов остатков: " + lr.SummaryStatistics.SSR.ToString);

        Debug.WriteLine("Стандартная ошибка: " + lr.SummaryStatistics.SE.ToString);

        Else

            Debug.WriteLine(lr.Errors);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены оценки коэффициентов
 модели и описательные статистики.


См. также:


[ISlARMA](ISlARMA.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
