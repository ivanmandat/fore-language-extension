# INonLinearRegressionExplanatories.Add

INonLinearRegressionExplanatories.Add
-


# INonLinearRegressionExplanatories.Add


## Синтаксис


Add: [INonLinearRegressionExplanatory](../INonLinearRegressionExplanatory/INonLinearRegressionExplanatory.htm);


## Описание


Метод Add добавляет объясняющий
 ряд в коллекцию.


## Пример


Добавьте ссылку на системную сборку Stat.


					Sub UserProc;

		Var

		    NLr: ISmNonLinearLeastSquare;

		    ar: Array[0..6] Of Double;

		    ar2: Array[0..8] Of Double;

		    ar3: Array[0..8] Of Double;

		    InitEst: Array[0..1] Of Double;

		    Per: IStatPeriod;

		    res, i: Integer;

		    MC: ISlConstCoefficients;

		    Regs: INonLinearRegressionExplanatories;

		Begin

		    NLr := New SmNonLinearLeastSquare.Create;

		    // Задаем значения переменных

		    ar[0] := 100; ar2[0] := 120; ar3[0] := 122;

		    ar[1] := 111; ar2[1] := 125; ar3[1] := 127;

		    ar[2] := 123; ar2[2] := 124; ar3[2] := 130;

		    ar[3] := 113; ar2[3] := 130; ar3[3] := 135;

		    ar[4] := 119; ar2[4] := 133; ar3[4] := 140;

		    ar[5] := 121; ar2[5] := 129; ar3[5] := 149;

		    ar2[6] := 139; ar3[6] := 150;

		    ar2[7] := 140; ar3[7] := 155;

		    // Задаем объясняемую переменную

		    NLr.Explained.Value := ar;

		    // Определяем параметры коллекции регрессоров для нелинейного МНК

		    Regs := NLr.Explanatories;

		    // Добавляем объясняющие ряды в коллекцию

		    Regs.Add.Serie.Value := ar2;

		    Regs.Add.Serie.Value := ar3;

		    // Определяем рассчитываемую функцию

		    NLr.FunctionString := "A1 + A2 * " + Regs.Item(0).VariableName + " * " + Regs.Item(1).VariableName;

		    // Определяем порядок коэффициентов

		    NLr.CoefficientsOrder := "A1;A2";

		    // Определяем параметры периода идентификации

		    Per := NLr.ModelPeriod;

		    Per.FirstPoint := 1;

		    Per.LastPoint := 5;

		    // Определяем последнюю точку прогноза

		    NLr.Forecast.LastPoint := 9;

		    // Определяем максимальное количество итераций

		    NLr.MaxIteration := 100;

		    // Определяем, будут ли при поиске решения использоваться аналитические производные

		    NLr.UseDerivatives := False;

		    // Определяем точность

		    NLr.Tolerance := 0.003;

		    // Определяем начальные приближения

		    InitEst[0] := 0.5;

		    InitEst[1] := 1.0;

		    Nlr.InitApproximation := InitEst;

		    // Выполняем расчёт и выводим результаты

		    res := NLr.Execute;

		    If res <> 0 Then

		        Debug.WriteLine(NLr.Errors);

		        Else

		            Debug.WriteLine("== Коэффициенты ==");

		            Debug.WriteLine("A1");

		            MC := NLr.ModelCoefficients("A1");

		            Debug.WriteLine("значение: " + MC.Estimate.ToString);

		            Debug.WriteLine("вероятность: " + MC.Probability.ToString);

		            Debug.WriteLine("A2");

		            MC := NLr.ModelCoefficients("A2");

		            Debug.WriteLine("значение: " + MC.Estimate.ToString);

		            Debug.WriteLine("вероятность: " + MC.Probability.ToString);

		            Debug.WriteLine("== Модельный ряд ==");

		            For i := 0 To NLr.Fitted.Length - 1 Do

		                Debug.WriteLine(NLr.Fitted[i]);

		            End For;

		    End If;

		End Sub UserProc;


После выполнения примера в окно консоли будут выведены результаты расчетов:
 коэффициенты, их значения и вероятности и модельный ряд.


См. также:


[INonLinearRegressionExplanatories](INonLinearRegressionExplanatories.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
