# ISmBoxConstrainedOptimization.Solution

ISmBoxConstrainedOptimization.Solution
-


# ISmBoxConstrainedOptimization.Solution


## Синтаксис


Solution: Array;


## Описание


Свойство Solution возвращает
 найденное решение.


## Комментарии


Для получения значения целевой функции по итерациям используйте свойство
 [ISmBoxConstrainedOptimization.ObjValByIter](ISmBoxConstrainedOptimization.ObjValByIter.htm).


## Пример


Добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    p1: SmBoxConstrainedOptimization;

    ub, lb, init: Array[3] Of Double;

    res, i: Integer;

Begin

    p1 := New smboxconstrainedoptimization.Create;

    ub[0] := 5;  ub[1] := 2;  ub[2] := 1;

    lb[0] := -1; lb[1] := -1; lb[2] := -1;

    // Область определения

    p1.Boundary.BoundaryUpper := ub;

    p1.Boundary.BoundaryLower := lb;

    // Порядок коэффициентов

    p1.CoefficientsOrder := "a;b;c";

    // Целевая функция:

    p1.FunctionString := "a-4*b+2*c";

    // Начальные приближения

    init[0]:=100; init[1]:=-50; init[2]:=800;

    p1.InitApproximation:=init;

    // Использование производных

    p1.UseDerivatives := False;

    // Максимальное число итераций и точность

    p1.MaxIteration := 500;

    p1.Tolerance := 0.00001;

    res := p1.Execute;

    If res = 0 Then

        Debug.WriteLine("=== Целевая функция ===");

        Debug.Indent;

        Debug.WriteLine("CF = " + p1.FunctionString);

        Debug.WriteLine(lb[0].ToString + " <= a <= " + ub[0].ToString);

        Debug.WriteLine(lb[1].ToString + " <= b <= " + ub[1].ToString);

        Debug.WriteLine(lb[2].ToString + " <= c <= " + ub[2].ToString);

        Debug.WriteLine("Значение целевой функции: " + p1.OptimalFunctionValue.ToString);

        Debug.WriteLine("Значения целевой функции по итерациям:");

        For i := 0 To p1.ObjValByIter.Length - 1 Do

            Debug.WriteLine(i.ToString + ". " + p1.ObjValByIter[i].ToString);

        End For;

        Debug.Unindent;

        Debug.WriteLine("=== Решение ===");

        Debug.Indent;

        For i := 0 To p1.Solution.Length - 1 Do

            Debug.WriteLine(i.ToString + ". " + p1.Solution[i].ToString);

        End For;

        Debug.Unindent;

        Debug.WriteLine("=== Градиент целевой функции ===");

        Debug.Indent;

        For i := 0 To p1.FunctionGradient.Length - 1 Do

            Debug.WriteLine(i.ToString + ". " + p1.FunctionGradient[i].ToString);

        End For;

        Debug.Unindent;

        Debug.WriteLine("=== Фактически использованные начальные приближения ===");

        Debug.Indent;

        For i := 0 To p1.InitApproximationActual.Length - 1 Do

            Debug.WriteLine(i.ToString + ". " + p1.InitApproximationActual[i].ToString);

        End For;

        Debug.Unindent;

    Else

        Debug.WriteLine(p1.Errors);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены:


	- выражение для целевой функции;


	- значение целевой функции;


	- решение;


	- градиент целевой функции;


	- фактически использованные начальные приближения.


См. также:


[ISmBoxConstrainedOptimization](ISmBoxConstrainedOptimization.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
