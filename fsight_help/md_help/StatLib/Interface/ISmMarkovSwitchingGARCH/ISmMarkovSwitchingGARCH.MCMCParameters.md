# ISmMarkovSwitchingGARCH.MCMCParameters

ISmMarkovSwitchingGARCH.MCMCParameters
-


# ISmMarkovSwitchingGARCH.MCMCParameters


## Синтаксис


MCMCParameters: [IMCMCParameters](../IMCMCParameters/IMCMCParameters.htm);


## Описание


Свойство MCMCParameters возвращает
 параметры алгоритма Марковской цепи Монте Карло (Markov Chain Monte Carlo).


## Комментарии


Для определения порядков ARCH и GARCH используйте свойства [ISmMarkovSwitchingGARCH.ARCHOrder](ISmMarkovSwitchingGARCH.ARCHOrder.htm) и
 [ISmMarkovSwitchingGARCH.GARCHOrder](ISmMarkovSwitchingGARCH.GARCHOrder.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    SMG: ISmMarkovSwitchingGARCH;

    y: Array[5] Of Double;

    x: Array[10] Of Double;

    M: Array[1] Of Double;

    CM: Array[1, 1] Of Double;

    res, i: Integer;

Begin

    SMG := New SmMarkovSwitchingGARCH.Create;

    // задаем значения переменных

    y[0] := 5.207664; x[0] := 1.9061476;

    y[1] := 5.264373;   x[1] := -0.26003;

    y[2] := Double.Nan; x[2] := 9.54554;

    y[3] := 5.702848; x[3] := 7.9776938;

    y[4] := 5.996597;   x[4] := Double.Nan;

                        x[5] := 12.719879;

                        x[6] := 13.875518;

                        x[7] := 16.046427;

                        x[8] := 17.218547;

                        x[9] := 21.07471;


    //выбор объясняемого ряда

    SMG.Explained.Value := y;

    // выбор объясняющего ряда

    SMG.Explanatories.Clear;

    SMG.Explanatories.Add.Value := x;

    // период идентификации

    SMG.ModelPeriod.FirstPoint := 1;

    SMG.ModelPeriod.LastPoint := 5;

    // прогнозирование

    SMG.Forecast.LastPoint := 10;

    // порядки ARCH
 и GARCH

    SMG.ARCHOrder := 1;

    SMG.GARCHOrder := 1;

    // обработка пропусков

    SMG.MissingData.Method := MissingDataMethod.LinTrend;

    // параметры алгоритма Марковской цепи Монте Карло

    SMG.MCMCParameters.NumOfIterations := 200;

    SMG.MCMCParameters.IterationsToDiscard := 100;

    SMG.MCMCParameters.Period := 20;

    // не использовать начальные значения по умолчанию

    SMG.UseDefaultInitDistribution := False;

    M[0] := 0;

    CM[0, 0] := 1;

    // значения среднего и ковариационной матрицы для генерации регресионных коэффициентов

    SMG.RegressionCoefficients.InitMeanValues := M;

    SMG.RegressionCoefficients.InitCovarianceMatrix := CM;

    // значения среднего и ковариационной матрицы для генерации коэффициентов ARCH

    SMG.ARCHCoefficients.InitMeanValues := M;

    SMG.ARCHCoefficients.InitCovarianceMatrix := CM;

    // значения среднего и ковариационной матрицы для генерации коэффициентов GARCH

    SMG.GARCHCoefficients.InitMeanValues := M;

    SMG.GARCHCoefficients.InitCovarianceMatrix := CM;

    SMG.GARCHConst.InitMeanValue := 0;

    SMG.GARCHConst.InitDispersion := 1;

    SMG.GARCHConst1.InitMeanValue := 0;

    SMG.GARCHConst1.InitDispersion := 1;

    // параметры распределения для вероятности перехода

    SMG.P00Distribution.A := 9;

    SMG.P00Distribution.B := 1;

    SMG.P11Distribution.A := 9;

    SMG.P11Distribution.B := 1;

    // расчет модели

    res := SMG.Execute;

    Debug.WriteLine(SMG.Errors);

    Debug.WriteLine("------------------------------Модель MS-GARCH------------------------------------------");

    Debug.WriteLine("***Коэффициенты***");

    Debug.WriteLine("GARCH Const0: " + SMG.GARCHConst.Estimation.ToString + ", Дисперсия: " + SMG.GARCHConst.Dispersion.ToString);

    Debug.WriteLine("GARCH Const1: " + SMG.GARCHConst1.Estimation.ToString + ", Дисперсия: " + SMG.GARCHConst1.Dispersion.ToString);

    Debug.WriteLine("");

    Debug.WriteLine("***Оценки параметров перехода из состояния 0 в 0***");

    Debug.WriteLine("Оцененные значения коэффициентов модели: " + SMG.P00.Estimation.ToString);

    Debug.WriteLine("Дисперсия: " + SMG.P00.Dispersion.ToString);

    Debug.WriteLine("");

    Debug.WriteLine("***Оценки параметров перехода из состояния 1 в 1***");

    Debug.WriteLine("Оцененные значения коэффициентов модели: " + SMG.P11.Estimation.ToString);

    Debug.WriteLine("Дисперсия: " + SMG.P11.Dispersion.ToString);

    Debug.WriteLine("");

    Debug.WriteLine("***Описательные характеристики модели***");

    Debug.WriteLine("Число итераций: " + SMG.SummaryStatistics.NumOfIter.ToString);

    Debug.WriteLine("");

    Debug.WriteLine("***Оценки условных вероятностей***");

    For i := 0 To SMG.ConditionalStateProbabilities.Length - 1 Do

        Debug.WriteLine((i + 1).ToString + ": " + SMG.ConditionalStateProbabilities[i].ToString);

    End For;

    Debug.WriteLine("");

End Sub UserProc;


В результате выполнения примера заданы настройки:


	- период идентификации и параметры прогнозирования заданы вручную;


	- порядки авторегрессии условной гетероскедастичности и обобщенной
	 авторегрессии условной гетероскедастичности заданы вручную;


	- задан метод обработки пропусков;


	- заданы параметры алгоритма Марковской цепи Монте Карло.


В окно консоли будут выведены оценки коэффициентов GARCH μ0 и μ1 оценки параметров перехода,
 описательные характеристики модели и оценки условных вероятностей.


См. также:


[ISmMarkovSwitchingGARCH](ISmMarkovSwitchingGARCH.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
