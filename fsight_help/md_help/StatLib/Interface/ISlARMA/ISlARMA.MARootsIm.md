# ISlARMA.MARootsIm

ISlARMA.MARootsIm
-


# ISlARMA.MARootsIm


## Синтаксис


MARootsIm: Array;


## Описание


Свойство MARootsIm возвращает
 значения мнимой части характеристических корней MA процесса.


## Комментарии


Для получения значений действительной части характеристических корней
 MA процесса используйте свойство [ISlARMA.MARootsRe](ISlARMA.MARootsRe.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    lr: ISmLinearRegress;

    x: Array[30] Of Double;

    Intercept: IIntercept;

    res, i: Integer;

    d: Double;

    CoefficientsMa, CoefficientsSMA: ICoefficients;

Begin

    lr := New SmLinearRegress.Create;

    // Значения объясняемого ряда:

    x[0]:=0.00576;  x[1]:=0.0078;    x[2]:=0.00851;   x[3]:=0.00691;

    x[4]:=0.00585;  x[5]:=0.00127;   x[6]:=-0.00431;  x[7]:=0.00305;

    x[8]:=0.00455;  x[9]:=0.00829;   x[10]:=0.01095;  x[11]:=0.0042;

    x[12]:=0.00172; x[13]:=0.00221;  x[14]:=0.00685;  x[15]:=0.00317;

    x[16]:=0.00073; x[17]:=0.00267;  x[18]:=0.00073;  x[19]:=0.00218;

    x[20]:=0.0041;  x[21]:=-0.00144; x[22]:=-0.00507; x[23]:=0.00964;

    x[24]:=0.00455; x[25]:=0.00334;  x[26]:=0.00166;  x[27]:=0.00781;

    x[28]:=0.01055; x[29]:=0.00512;

    lr.Explained.Value := x;

    // Период идентификации:

    lr.ModelPeriod.FirstPoint := 1;

    lr.ModelPeriod.LastPoint := 20;

    lr.Forecast.LastPoint := 30;

    // В модели будет использоваться константа:

    Intercept:= lr.ModelCoefficients.Intercept;

    Intercept.Mode := InterceptMode.ManualEstimate;

    // ARIMA-опции:

    lr.ARMA.ParseMA("3");

    lr.ARMA.ParseMASeas("2");

    // Метод определения начальных приближений:

    lr.ARMA.CalcInitMode := ARMAInitType.Auto;

    // Метод оптимизации:

    lr.ARMA.EstimationMethod := ARMAEstimationMethodType.GaussNewton;

    // Число итераций и точность для метода оптимизации:

    lr.ARMA.MaxIteration := 500;

    lr.ARMA.Tolerance := 0.000100;

    // Расчёт модели:

    res := lr.Execute;

    If (res = 0) Then

        Debug.WriteLine("===Оценки коэффициентов скользящего среднего===");

        CoefficientsMA := lr.ARMA.CoefficientsMA;

        For i:=0 To  CoefficientsMA.Estimate.Length-1 Do

            d := CoefficientsMA.Estimate[i];

            Debug.WriteLine("Значение: " + d.ToString);

            d := CoefficientsMA.StandardError[i];

            Debug.WriteLine("Стандартная ошибка: " + d.ToString);

            d := CoefficientsMA.TStatistic[i];

            Debug.WriteLine("t-статистика: " + d.ToString);

            d := CoefficientsMA.Probability[i];

            Debug.WriteLine("Вероятность: " + d.ToString);

        End For;

        Debug.WriteLine("===Оценки коэффициентов сезонного скользящего среднего===");

        CoefficientsSMA := lr.ARMA.CoefficientsMASeas;

        For i:=0 To  CoefficientsSMA.Estimate.Length-1 Do

            d := CoefficientsSMA.Estimate[i];

            Debug.WriteLine("Значение: " + d.ToString);

            d := CoefficientsSMA.StandardError[i];

            Debug.WriteLine("Стандартная ошибка: " + d.ToString);

            d := CoefficientsSMA.TStatistic[i];

            Debug.WriteLine("t-статистика: " + d.ToString);

            d := CoefficientsSMA.Probability[i];

            Debug.WriteLine("Вероятность: " + d.ToString);

        End For;

        //Характеристических корни:

        Debug.WriteLine("Корни MA:");

        For i:=0 To lr.ARMA.MARootsRe.Length-1 Do

            Debug.WriteLine((lr.ARMA.MARootsRe[i] As Double).ToString + " + " + (lr.ARMA.MARootsIm[i] As Double).ToString + "i");

        End For;

        Else

            Debug.WriteLine(lr.Errors);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены оценки коэффициентов
 скользящего среднего и корни MA.


См. также:


[ISlARMA](ISlARMA.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
