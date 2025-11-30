# ISmNonLinearOptimization.ObjValByIter

ISmNonLinearOptimization.ObjValByIter
-


# ISmNonLinearOptimization.ObjValByIter


## Синтаксис


ObjValByIter: Array;


## Описание


Свойство ObjValByIter возвращает
 значения целевой функции по итерациям.


## Комментарии


Для определения целевой функции используйте свойство [ISmNonLinearOptimization.FunctionString](ISmNonLinearOptimization.FunctionString.htm).


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

Begin

    nlo := New SmNonLinearOptimization.Create;

    For i := 0 To 3 Do

        lb[i] := 1;

        ub[i] := 5;

        LinConCfs[i] := 1;

    End For;

    nlo.Boundary.BoundaryLower := lb;

    nlo.Boundary.BoundaryUpper := ub;

    nlo.CoefficientsOrder := "x1;x2;x3;x4";

    nlo.FunctionString := "x1*x4*(x1+x2+x3)+x3";

    init[0] := 1;

    init[1] := 5;

    init[2] := 5;

    init[3] := 1;

    nlo.InitApproximation := init;

    LinCons := nlo.LinearConstraints;

    LinCon := LinCons.Add;

    LinCon.BoundaryLower := -10e20;

    LinCon.BoundaryUpper := 20;

    LinConCfs[0] := 1;

    LinConCfs[1] := 1;

    LinConCfs[2] := 1;

    LinConCfs[3] := 1;

    LinCon.Value := LinConCfs;

    nlo.MaxIteration := 75;

    NonLinCons := nlo.NonLinearConstraints;

    NonLinCon := NonLinCons.Add;

    NonLinCon.BoundaryLower := -10e20;

    NonLinCon.BoundaryUpper := 40;

    NonLinCon.NonLinearFunction := "x1*x1+x2*x2+x3*x3+x4*x4";

    NonLinCon := NonLinCons.Add;

    NonLinCon.BoundaryLower := 25;

    NonLinCon.BoundaryUpper := 10e21;

    NonLinCon.NonLinearFunction := "x1*x2*x3*x4";

    // Не используем аналитические производные при поиске решения:

    nlo.UseDerivatives := False;

    res := nlo.Execute;

    If res <> 0 Then

        Debug.WriteLine(nlo.Errors);

        Else

            Debug.WriteLine("=== Значение целевой функции по итерациям ===");

            For i := 0 To nlo.ObjValByIter.Length - 1 Do

                Debug.WriteLine(i.ToString + ", " + nlo.ObjValByIter[i].ToString)

            End For;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены значения целевой
 функции по итерациям.


См. также:


[ISmNonLinearOptimization](ISmNonLinearOptimization.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
