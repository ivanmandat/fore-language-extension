# INonLinearConstraint.Result

INonLinearConstraint.Result
-


# INonLinearConstraint.Result


## Синтаксис


Result: Double;


## Описание


Свойство Result возвращает значение
 нелинейного ограничения.


## Комментарии


Для определения нелинейной функции ограничения используйте свойство
 [INonLinearConstraint.NonLinearFunction](INonLinearConstraint.NonLinearFunction.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    nlo: ISmNonLinearOptimization;

    LinCons: ISlLinearConstraints;

    LinCon: ISlLinearConstraint;

    NonLinCons: INonLinearConstraints;

    NonLinCon1, NonLinCon2: INonLinearConstraint;

    lb,ub: Array[0..3] Of Double;

    init: Array[0..3] Of Double;

    LinConCfs: Array[0..3] Of Double;

    i,res: Integer;

    OptVal: Double;

    Sol, FuncGrad: Array Of Double;

Begin

    nlo := New SmNonLinearOptimization.Create;

    For i := 0 To 3 Do

        lb[i] := 1;

        ub[i] := 5;

        LinConCfs[i] := 1;

    End For;

    // Параметры оптимизации функции

    nlo.Boundary.BoundaryLower := lb;

    nlo.Boundary.BoundaryUpper := ub;

    nlo.CoefficientsOrder := "x1;x2;x3;x4";

    nlo.FunctionString := "x1*x4*(x1+x2+x3)+x3";

    init[0] := 1;

    init[1] := 5;

    init[2] := 5;

    init[3] := 1;

    nlo.InitApproximation := init;

    nlo.MaxIteration := 75;

    // === Коллекция линейных ограничений ===

    LinCons := nlo.LinearConstraints;

    // Параметры линейного ограничения

    LinCon := LinCons.Add;

    LinCon.BoundaryLower := -10e20;

    LinCon.BoundaryUpper := 20;

    LinConCfs[0] := 1;

    LinConCfs[1] := 1;

    LinConCfs[2] := 1;

    LinConCfs[3] := 1;

    LinCon.Value := LinConCfs;

    // === Коллекция нелинейных ограничений ===

    NonLinCons := nlo.NonLinearConstraints;

    // Первое нелинейное ограничение

    NonLinCon1 := NonLinCons.Add;

    NonLinCon1.BoundaryLower := -10e20;

    NonLinCon1.BoundaryUpper := 40;

    NonLinCon1.NonLinearFunction := "x1*x1+x2*x2+x3*x3+x4*x4";

    // Второе нелинейное ограничение

    NonLinCon2 := NonLinCons.Add;

    NonLinCon2.BoundaryLower := 25;

    NonLinCon2.BoundaryUpper := 10e21;

    NonLinCon2.NonLinearFunction := "x1*x2*x3*x4";

    // Расчет модели

    res := nlo.Execute;

    If res<>0 Then

        Debug.WriteLine(nlo.Errors);

        Else

            Debug.WriteLine("== Значение целевой функции ==");

            OptVal := nlo.OptimalFunctionValue;

            Debug.WriteLine(OptVal.ToString);

            Debug.WriteLine("=== Решение ===");

            Sol := nlo.Solution;

            For i := 0 To Sol.Length - 1 Do

                Debug.WriteLine(i.ToString + ". " + Sol[i].ToString);

            End For;

            Debug.WriteLine("=== Градиент целевой функции ===");

            FuncGrad := nlo.FunctionGradient;

            For i := 0 To FuncGrad.Length - 1 Do

                Debug.WriteLine(i.ToString + ". " + FuncGrad[i].ToString);

            End For;

            Debug.WriteLine("=== Значения нелинейных ограничений ===");

            Debug.WriteLine("1. " + NonLinCon1.Result.ToString);

            Debug.WriteLine("2. " + NonLinCon2.Result.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведено найденное решение,
 градиент целевой функции и значения нелинейных ограничений.


См. также:


[INonLinearConstraint](INonLinearConstraint.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
