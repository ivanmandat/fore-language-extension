# ISmQuadraticProgramming.PerformanceInfo

ISmQuadraticProgramming.PerformanceInfo
-


# ISmQuadraticProgramming.PerformanceInfo


## Синтаксис


PerformanceInfo: [IPerformanceInfo](../IPerformanceInfo/IPerformanceInfo.htm);


## Описание


Свойство PerformanceInfo возвращает
 информацию о выполненной оптимизации.


## Комментарии


Для определения параметров линейных ограничений используйте свойство
 [ISmQuadraticProgramming.LinearConstraints](ISmQuadraticProgramming.LinearConstraints.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


					Sub UserProc;

		Var

		    QP: SmQuadraticProgramming;

		    i, j, Res, N: Integer;

		    d, time: double;

		    CF, Lb, Ub, init: Array Of Double;

		    LinC1: Array Of Double;

		    H, A: Array Of Double;

		    Bound: ISlBoundaryRegion;

		    LinCons: ISlLinearConstraints;

		    LCon1: ISlLinearConstraint;

		    InitP, Sol, BoundL, PerformanceObj, PerformancePoint: Array Of Double;

		Begin

		    QP := New SmQuadraticProgramming.Create;

		    N := 7;

		    CF := New Double[N];

		    Lb := New Double[N];

		    Ub := New Double[N];

		    LinC1 := New Double[N];

		    init := New double[N];


 style="font-family: 'Courier New'; font-size: 10pt;">    // Область определения

		    Lb[0] := -0.01; Ub[0] := 0.01;

		    Lb[1] := -0.10; Ub[1] := 0.15;

		    Lb[2] := -0.01; Ub[2] := 0.03;

		    Lb[3] := -0.04; Ub[3] := 0.02;

		    Lb[4] := -0.10; Ub[4] := 0.05;

		    Lb[5] := -0.01; Ub[5] := double.PositiveInfinity;

		    Lb[6] := -0.01; Ub[6] := Double.PositiveInfinity;

		    // Начальные приближения

		    init[0] := -0.01;

		    init[1] := -0.03;

		    init[2] := 0.0;

		    init[3] := -0.01;

		    init[4] := -0.1;

		    init[5] := 0.02;

		    init[6] := 0.01;

		    QP.InitialApproximation.AutoCreate := False;

		    QP.InitialApproximation.InitValues := init;

		    // Целевая функция

		    CF[0] := -0.02;

		    CF[1] := -0.2;

		    CF[2] := -0.2;

		    CF[3] := -0.2;

		    CF[4] := -0.2;

		    CF[5] := 0.04;

		    CF[6] := 0.04;


		    H := New double[N, N];

		    H[0, 0] := 2; H[0, 1] := 0; H[0, 2] := 0; H[0, 3] := 0; H[0, 4] := 0; H[0, 5] := 0; H[0, 6] := 0;

    H[1, 0] := 0; H[1, 1] := 2; H[1, 2] := 0; H[1, 3] := 0; H[1, 4] := 0; H[1, 5] := 0; H[1, 6] := 0;

		    H[2, 0] := 0; H[2, 1] := 0; H[2, 2] := 2; H[2, 3] := 2; H[2, 4] := 0; H[2, 5] := 0; H[2, 6] := 0;


    H[3, 0] := 0; H[3, 1] := 0; H[3, 2] := 2; H[3, 3] := 2; H[3, 4] := 0; H[3, 5] := 0; H[3, 6] := 0;

    H[4, 0] := 0; H[4, 1] := 0; H[4, 2] := 0; H[4, 3] := 0; H[4, 4] := 2; H[4, 5] := 0; H[4, 6] := 0;


    H[5, 0] := 0; H[5, 1] := 0; H[5, 2] := 0; H[5, 3] := 0; H[5, 4] := 0; H[5, 5] := -2; H[5, 6] := -2;


    H[6, 0] := 0; H[6, 1] := 0; H[6, 2] := 0; H[6, 3] := 0; H[6, 4] := 0; H[6, 5] := -2; H[6, 6] := -2;


    QP.CriterionFunction := CF;

		    QP.QuadraticForm := H;

		    // Линейные ограничения

		    A := New double[N, N];

		    A[0, 0] := 1.00; A[0, 1] := 1.00; A[0, 2] := 1.00;

		    A[0, 3] := 1.00; A[0, 4] := 1.00; A[0, 5] := 1.00; A[0, 6] := 1.00;

		    A[1, 0] := 0.15; A[1, 1] := 0.04; A[1, 2] := 0.02;

		    A[1, 3] := 0.04; A[1, 4] := 0.02; A[1, 5] := 0.01; A[1, 6] := 0.03;

		    A[2, 0] := 0.03; A[2, 1] := 0.05; A[2, 2] := 0.08;

		    A[2, 3] := 0.02; A[2, 4] := 0.06; A[2, 5] := 0.01; A[2, 6] := 0.00;

		    A[3, 0] := 0.02; A[3, 1] := 0.04; A[3, 2] := 0.01;

		    A[3, 3] := 0.02; A[3, 4] := 0.02; A[3, 5] := 0.00; A[3, 6] := 0.00;

		    A[4, 0] := 0.02; A[4, 1] := 0.03; A[4, 2] := 0.00;

		    A[4, 3] := 0.00; A[4, 4] := 0.01; A[4, 5] := 0.00; A[4, 6] := 0.00;

		    A[5, 0] := 0.70; A[5, 1] := 0.75; A[5, 2] := 0.80;

		    A[5, 3] := 0.75; A[5, 4] := 0.80; A[5, 5] := 0.97; A[5, 6] := 0.00;

		    A[6, 0] := 0.02; A[6, 1] := 0.06; A[6, 2] := 0.08;

		    A[6, 3] := 0.12; A[6, 4] := 0.02; A[6, 5] := 0.01; A[6, 6] := 0.97;
		    // Границы области

		    Bound := QP.Boundary;

		    // Нижняя граница области

		    Bound.BoundaryLower := Lb;

		    // Верхняя граница области

		    Bound.BoundaryUpper := Ub;

		    // Коэффициент линейного ограничения

		    LCon1 := QP.LinearConstraints.Add;

		    For i := 0 To N - 1 Do

		        LinC1[i] := A[0, i];

		    End For;

		    LCon1.Value := LinC1;

		    // Линейное ограничение снизу

		    LCon1.BoundaryLower := -0.13;

		    // Линейное ограничение сверху

		    LCon1.BoundaryUpper := -0.13;

		    // Коэффициент линейного ограничения

		    LCon1 := QP.LinearConstraints.Add;

		    For i := 0 To N - 1 Do

		        LinC1[i] := A[1,i];

		    End For;

		    LCon1.Value := LinC1;

		    // Линейное ограничение снизу

		    LCon1.BoundaryLower := double.NegativeInfinity;

		    // Линейное ограничение сверху

		    LCon1.BoundaryUpper := -0.0049;

		    // Коэффициент линейного ограничения

		    LCon1 := QP.LinearConstraints.Add;

		    For i := 0 To N - 1 Do

		        LinC1[i] := A[2, i];

		    End For;

		    LCon1.Value := LinC1;


		    // Линейное ограничение снизу

		    LCon1.BoundaryLower := double.NegativeInfinity;

		    // Линейное ограничение сверху

		    LCon1.BoundaryUpper := -0.0064;

		    // Коэффициент линейного ограничения

		    LCon1 := QP.LinearConstraints.Add;

		    For i := 0 To N - 1 Do

		        LinC1[i] := A[3, i];

		    End For;

		    LCon1.Value := LinC1;

		    // Линейное ограничение снизу

		    LCon1.BoundaryLower := double.NegativeInfinity;

		    // Линейное ограничение сверху

		    LCon1.BoundaryUpper := -0.0037;

		    // Коэффициент линейного ограничения

		    LCon1 := QP.LinearConstraints.Add;

		    For i := 0 To N - 1 Do

		        LinC1[i] := A[4, i];

		    End For;

		    LCon1.Value := LinC1;

		    // Линейное ограничение снизу

		    LCon1.BoundaryLower := double.NegativeInfinity;

		    // Линейное ограничение сверху

		    LCon1.BoundaryUpper := -0.0012;

		    // Коэффициент линейного ограничения

		    LCon1 := QP.LinearConstraints.Add;

		    For i := 0 To N - 1 Do

		        LinC1[i] := A[5, i];

		    End For;

		    LCon1.Value := LinC1;

		    // Линейное ограничение снизу

		    LCon1.BoundaryLower := -0.0992;

		    // Линейное ограничение сверху

		    LCon1.BoundaryUpper := double.PositiveInfinity;

		    // Коэффициент линейного ограничения

		    LCon1 := QP.LinearConstraints.Add;

		    For i := 0 To N - 1 Do

		        LinC1[i] := A[6, i];

		    End For;

		    LCon1.Value := LinC1;


    // Линейное ограничение снизу

		    LCon1.BoundaryLower := -0.003;

		    // Линейное ограничение сверху

		    LCon1.BoundaryUpper := 0.002;

		    // Расчёт и вывод решения

		    Res := QP.Execute;

		    time := QP.PerformanceTime / 1000;

		    Debug.WriteLine("Время выполнения, сек " + time.ToString);

		    Debug.WriteLine("Статус выполнения: " + Res.ToString);

		    Debug.WriteLine(QP.Errors);

		    If res = 0 Then

		        Debug.WriteLine("== Значение целевой функции ==");

		        Debug.WriteLine(QP.OptimalFunctionValue.ToString);

		        Debug.WriteLine("Число вызовов целевой функции: "

		        + qp.PerformanceInfo.ObjFunCalls.ToString);

		        Debug.WriteLine("Число вызовов ограничений: "

		        + qp.PerformanceInfo.ConstraintsCalls.ToString);

		        Debug.WriteLine("Фактическое число итераций: "

		        + qp.PerformanceInfo.Iterations.ToString);

		        Debug.WriteLine("== Решение ==");

		        Sol := QP.Solution;

		        For i := 0 To Sol.Length - 1 Do

		            Debug.WriteLine(i.ToString + ": " + Sol[i].ToString);

		        End For;

		        Debug.WriteLine("== Общие ограничения: ==");

		        d := 0;

		        BoundL := Bound.LagrangeMultiplier;

		        For i := 0 To N - 1 Do //

		            d := Sol[i];

		            Debug.WriteLine(i.ToString + ": ");

		            Debug.WriteLine(Lb[i].ToString + "<=" + d.ToString +

		            "<= " + Ub[i].ToString);

		            Debug.WriteLine("Множитель Лагранжа: " + BoundL[i].ToString);

		            Debug.WriteLine("  ");

		        End For;

		        Debug.WriteLine("   ");

		        Debug.WriteLine("== Линейные ограничения ==");

		        LinCons := QP.LinearConstraints;

		        For i := 0 To LinCons.Count - 1 Do

		            LCon1 := LinCons.Item(i);

		            Debug.WriteLine(i.ToString + ": " + LCon1.BoundaryLower.ToString + " <= "

		            + LCon1.Result.ToString + " <= " + LCon1.BoundaryUpper.ToString);

		            Debug.WriteLine("Множитель Лагранжа: " + LCon1.LagrangeMultiplier.ToString);

		            Debug.WriteLine("  ");

		        End For;

		    End If;

		    Debug.WriteLine("== Начальное приближение ==");

		    PerformancePoint := QP.PerformanceInfo.InitFeasiblePoint;

		    For i := 0 To PerformancePoint.Length - 1 Do

		        Debug.WriteLine(i.ToString + ": " + PerformancePoint[i].ToString);

		    End For;

		End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены:


	- наличие ошибок расчёта;


	- оптимальное и эталонное значения;


	- информация о выполненной оптимизации;


	- значения целевой функции;


	- ограничения и множители Лагранжа.


См. также:


[ISmQuadraticProgramming](ISmQuadraticProgramming.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
