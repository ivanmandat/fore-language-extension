# ISmNonLinearOptimization.InitApproximation

ISmNonLinearOptimization.InitApproximation
-


# ISmNonLinearOptimization.InitApproximation


## Синтаксис


InitApproximation: Array;


## Описание


Свойство InitApproximation определяет
 начальные приближения.


## Комментарии


Индексация массива начальных приближений должна начинаться с нуля.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    nlo: ISmNonLinearOptimization;

    lb, ub: Array[0..3] Of Double;

    init: Array[0..3] Of Double;

    LinConCfs: Array[0..3] Of Double;

    LinCons: ISlLinearConstraints;

    LinCon: ISlLinearConstraint;

    NonLinCons: INonLinearConstraints;

    NonLinCon: INonLinearConstraint;

    i, res: Integer;

    OptVal: Double;

Begin

    nlo := New SmNonLinearOptimization.Create;

    // Задаем параметры области определения

    For i := 0 To 3 Do

        lb[i] := 1;

        ub[i] := 5;

        LinConCfs[i] := 1;

    End For;

    nlo.Boundary.BoundaryLower := lb;

    nlo.Boundary.BoundaryUpper := ub;

    // Задаем порядок коэффициентов

    nlo.CoefficientsOrder := "x1;x2;x3;x4";

    // Задаем целевую функцию

    nlo.FunctionString := "x1*x4*(x1+x2+x3)+x3*0.5";

    // Задаем начальные приближения

    init[0] := 1;

    init[1] := 7;

    init[2] := 5;

    init[3] := 1;

    nlo.InitApproximation := init;

    // Задаем линейные ограничения и их параметры

    LinCons := nlo.LinearConstraints;

    LinCon := LinCons.Add;

    LinCon.BoundaryLower := -10e20;

    LinCon.BoundaryUpper := 20;

    LinConCfs[0] := 1.5;

    LinConCfs[1] := 1.7;

    LinConCfs[2] := 1.9;

    LinConCfs[3] := 1.2;

    LinCon.Value := LinConCfs;

    // Задаем максимальное число итераций для поиска решения

    nlo.MaxIteration := 75;

    // Задаем точность решения

    nlo.Tolerance := 0.00001;

    // Задаем нелинейные ограничения и их параметры

    NonLinCons := nlo.NonLinearConstraints;

    NonLinCon := NonLinCons.Add;

    NonLinCon.BoundaryLower := -10e20;

    NonLinCon.BoundaryUpper := 40;

    NonLinCon.NonLinearFunction := "x1*x1+x2*x2+x3*x3+x4*0.47";

    NonLinCon := NonLinCons.Add;

    NonLinCon.BoundaryLower := 25;

    NonLinCon.BoundaryUpper := 10e21;

    NonLinCon.NonLinearFunction := "x1*x2*x3*x4+9";

    // Выполняем расчет

    res := nlo.Execute;

    If res <> 0 Then

        Debug.WriteLine(nlo.Errors);

    // Выводим результаты расчета

    Else

        Debug.WriteLine("== Значение целевой функции ==");

        OptVal := nlo.OptimalFunctionValue;

        Debug.WriteLine(OptVal.ToString);

        Debug.WriteLine("=== Решение ===");

        For i := 0 To nlo.Solution.Length - 1 Do

            Debug.WriteLine(i.ToString + ", " + nlo.Solution[i].ToString)

        End For;

        Debug.WriteLine("=== Градиент целевой функции ===");

        For i := 0 To nlo.FunctionGradient.Length - 1 Do

            Debug.WriteLine(i.ToString + ", " + nlo.FunctionGradient[i].ToString)

        End For;

        Debug.WriteLine("=== Фактически использованные начальные приближения ===");

        For i := 0 To nlo.InitApproximationActual.Length - 1 Do

            Debug.WriteLine(i.ToString + ", " + nlo.InitApproximationActual[i].ToString)

        End For;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены результаты расчетов.


См. также:


[ISmNonLinearOptimization](ISmNonLinearOptimization.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
