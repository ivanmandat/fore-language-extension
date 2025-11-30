# ISmQuadraticProgramming.IntVec

ISmQuadraticProgramming.IntVec
-


# ISmQuadraticProgramming.IntVec


## Синтаксис


IntVec: Array;


## Описание


Свойство IntVec определяет числовой
 массив, в котором задается, какие переменные являются целочисленными.


## Комментарии


Длина массива IntVec должна
 быть равна количеству переменных.


Если значение элемента массива IntVec
 равно «0», то соответствующая переменная считается вещественной, а если
 не равно «0» - целочисленной.


Если массив IntVec не задан,
 то все переменные считаются вещественными.


Примечание.
 IntVec используется только при
 использовании для расчётов [модуля
 решений](ISmQuadraticProgramming.SolverType.htm) Gurobi.


## Пример


Для выполнения примера на компьютере пользователя должен быть установлен
 модуль решений Gurobi.


Добавьте ссылку на системную сборку Stat.


					Sub UserProc;

		Var

		    QP: SmQuadraticProgramming;

		    i, j, Res, N: Integer;

		    Time: Double;

		    CF, Lb, Ub, Init: Array Of Double;

		    LinC1: Array Of Double;

		    H: Array Of Double;

		    Bound: ISlBoundaryRegion;

		    LCon1: ISlLinearConstraint;

		    intVec: Array[8] Of Integer;

		Begin

		    QP := New SmQuadraticProgramming.Create;

		    N := 8;

		    CF := New Double[N];

		    Lb := New Double[N];

		    Ub := New Double[N];

		    LinC1 := New Double[N];

		    Init := New Double[N];

		    // Область определения

		    Lb[0] := -1; Ub[0] := 1;

		    Lb[1] := -2.1;  Ub[1] := 2;

		    Lb[2] := -3.2;  Ub[2] := 3;

		    Lb[3] := -4.3;  Ub[3] := 4;

		    Lb[4] := -5.4;  Ub[4] := 5;

		    Lb[5] := -6.5;  Ub[5] := 6;

		    Lb[6] := -7.6;  Ub[6] := 7;

		    Lb[7] := -8.7;  Ub[7] := 8;

		    // Начальные приближения

		    Init[0] := -1;

		    Init[1] := -2;

		    Init[2] := -3;

		    Init[3] := -4;

		    Init[4] := -5;

		    Init[5] := -6;

		    Init[6] := -7;

		    Init[7] := -8;

		    QP.InitialApproximation.AutoCreate := False;

		    QP.InitialApproximation.InitValues := Init;

		    // Целевая функция

		    CF[0] := 7;

		    CF[1] := 6;

		    CF[2] := 5;

		    CF[3] := 4;

		    CF[4] := 3;

		    CF[5] := 2;

		    CF[6] := 1;

		    CF[7] := 0;

		    H := New Double[N, N];

		    H[0, 0] := 1.69; H[0, 1] := 1.00; H[0, 2] := 2.00; H[0, 3] := 3.00; H[0, 4] := 4.00; H[0, 5] := 5.00; H[0, 6] := 6.00; H[0, 7] := 7.00;

		    H[1, 0] := 1.00; H[1, 1] := 1.69; H[1, 2] := 1.00; H[1, 3] := 2.00; H[1, 4] := 3.00; H[1, 5] := 4.00; H[1, 6] := 5.00; H[1, 7] := 6.00;

		    H[2, 0] := 2.00; H[2, 1] := 1.00; H[2, 2] := 1.69; H[2, 3] := 1.00; H[2, 4] := 2.00; H[2, 5] := 3.00; H[2, 6] := 4.00; H[2, 7] := 5.00;

		    H[3, 0] := 3.00; H[3, 1] := 2.00; H[3, 2] := 1.00; H[3, 3] := 1.69; H[3, 4] := 1.00; H[3, 5] := 2.00; H[3, 6] := 3.00; H[3, 7] := 4.00;

		    H[4, 0] := 4.00; H[4, 1] := 3.00; H[4, 2] := 2.00; H[4, 3] := 1.00; H[4, 4] := 1.69; H[4, 5] := 1.00; H[4, 6] := 2.00; H[4, 7] := 3.00;

		    H[5, 0] := 5.00; H[5, 1] := 4.00; H[5, 2] := 3.00; H[5, 3] := 2.00; H[5, 4] := 1.00; H[5, 5] := 1.69; H[5, 6] := 1.00; H[5, 7] := 2.00;

		    H[6, 0] := 6.00; H[6, 1] := 5.00; H[6, 2] := 4.00; H[6, 3] := 3.00; H[6, 4] := 2.00; H[6, 5] := 1.00; H[6, 6] := 1.69; H[6, 7] := 1.00;

		    H[7, 0] := 7.00; H[7, 1] := 6.00; H[7, 2] := 5.00; H[7, 3] := 4.00; H[7, 4] := 3.00; H[7, 5] := 2.00; H[7, 6] := 1.00; H[7, 7] := 1.69;

		    For i := 0 To N - 1 Do

		        For j := 0 To N - 1 Do

		            If i <> j Then

		                H[i, j] := 0;

		                H[j, i] := 0;

		            End If;

		        End For;

		    End For;

		    // Указание целочисленных переменных

		    IntVec[0] := 0;

		    IntVec[1] := 1;

		    IntVec[2] := 0;

		    IntVec[3] := 1;

		    IntVec[4] := 0;

		    IntVec[5] := 1;

		    IntVec[6] := 0;

		    IntVec[7] := 1;

		    //Целевая функция

		    QP.CriterionFunction := CF;

		    QP.QuadraticForm := H;

		    QP.IntVec := IntVec;

		    Bound := QP.Boundary;

		    Bound.BoundaryLower := Lb; //Нижняя граница области

		    Bound.BoundaryUpper := Ub; //Верхняя граница области

		    LCon1 := QP.LinearConstraints.Add;

		    LinC1[0] := -1; LinC1[1] := 1;

		    LCon1.Value := LinC1; // Коэф. линейного ограничения

		    LCon1.BoundaryLower := -1.00; // Линейное ограничение снизу

		    LCon1.BoundaryUpper := Double.PositiveInfInity; //Линейное ограничение сверху

		    LinC1[0] := 0; LinC1[1] := 0;

		    LCon1 := QP.LinearConstraints.Add;

		    LinC1[1] := -1; LinC1[2] := 1;

		    LCon1.Value := LinC1; // Коэф. линейного ограничения

		    LCon1.BoundaryLower := -1.05; // Линейное ограничение снизу

		    LCon1.BoundaryUpper := Double.PositiveInfInity; //Линейное ограничение сверху

		    LinC1[1] := 0; LinC1[2] := 0;

		    LCon1 := QP.LinearConstraints.Add;

		    LinC1[2] := -1; LinC1[3] := 1;

		    LCon1.Value := LinC1; // Коэф. линейного ограничения

		    LCon1.BoundaryLower := -1.10; // Линейное ограничение снизу

		    LCon1.BoundaryUpper := Double.PositiveInfInity; //Линейное ограничение сверху

		    LinC1[2] := 0; LinC1[3] := 0;

		    LCon1 := QP.LinearConstraints.Add;

		    LinC1[3] := -1; LinC1[4] := 1;

		    LCon1.Value := LinC1; // Коэф. линейного ограничения

		    LCon1.BoundaryLower := -1.15; // Линейное ограничение снизу

		    LCon1.BoundaryUpper := Double.PositiveInfInity; //Линейное ограничение сверху

		    LinC1[3] := 0; LinC1[4] := 0;

		    LCon1 := QP.LinearConstraints.Add;

		    LinC1[4] := -1; LinC1[5] := 1;

		    LCon1.Value := LinC1; // Коэф. линейного ограничения

		    LCon1.BoundaryLower := -1.2; // Линейное ограничение снизу

		    LCon1.BoundaryUpper := Double.PositiveInfInity; //Линейное ограничение сверху

		    LinC1[4] := 0; LinC1[5] := 0;

		    LCon1 := QP.LinearConstraints.Add;

		    LinC1[5] := -1; LinC1[6] := 1;

		    LCon1.Value := LinC1; // Коэф. линейного ограничения

		    LCon1.BoundaryLower := -1.25; // Линейное ограничение снизу

		    LCon1.BoundaryUpper := Double.PositiveInfInity; //Линейное ограничение сверху

		    LinC1[5] := 0; LinC1[6] := 0;

		    LCon1 := QP.LinearConstraints.Add;

		    LinC1[6] := -1; LinC1[7] := 1;

		    LCon1.Value := LinC1; // Коэф. линейного ограничения

		    LCon1.BoundaryLower := -1.30; // Линейное ограничение снизу

		    LCon1.BoundaryUpper := Double.PositiveInfInity; //Линейное ограничение сверху

		    LinC1[6] := 0; LinC1[7] := 0;

		    // Использовать Gurobi

		    QP.SolverType := QPSolverType.Grb;

		    QP.ExtraSettings.DLLPath := "c:\gurobi752\win64\bin\gurobi75.dll";

		    // Выполняем расчёт

		    Res := QP.Execute;

		    Time := QP.PerformanceTime / 1000;

		    Debug.WriteLine("Time[sec] = " + Time.ToString);

		    Debug.WriteLine("RES = " + Res.ToString);

		    Debug.WriteLine(QP.Errors);

		    If res = 0 Then

		        Debug.WriteLine("== Значение целевой функции ==");

		        Debug.WriteLine(QP.OptimalFunctionValue.ToString);

		        Debug.WriteLine("== Решение ==");

		        Debug.Indent;

		        For i := 0 To QP.Solution.Length - 1 Do

		            Debug.WriteLine(i.ToString + ": " + lb[i].ToString + " <= " + QP.Solution[i].ToString + " <= " + ub[i].ToString);

		        End For;

		        Debug.Unindent;

		        Debug.WriteLine("== Линейные ограничения ==");

		        Debug.Indent;

		        For i := 0 To QP.LinearConstraints.Count - 1 Do

		            LCon1 := QP.LinearConstraints.Item(i);

		            Debug.WriteLine(i.ToString + ": " + LCon1.BoundaryLower.ToString + " <= " + LCon1.Result.ToString + " <= " + LCon1.BoundaryUpper.ToString);

		        End For;

		        Debug.Unindent;

		    End If;

		End Sub UserProc;


При выполнении примера будет произведён расчёт задачи квадратичного
 программирования с помощью модуля решений Gurobi.


В консоль среды разработки будут выведены:


	- значение целевой функции;


	- найденные решения;


	- линейные ограничения.


См. также:


[ISmQuadraticProgramming](ISmQuadraticProgramming.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
