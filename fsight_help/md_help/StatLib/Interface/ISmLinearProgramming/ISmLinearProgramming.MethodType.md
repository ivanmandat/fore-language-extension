# ISmLinearProgramming.MethodType

ISmLinearProgramming.MethodType
-


# ISmLinearProgramming.MethodType


## Синтаксис


MethodType: [LPMethodType](../../Enums/LPMethodType.htm);


## Описание


Свойство MethodType определяет
 метод решения задачи линейного программирования.


## Комментарии


Для получения найденного решения используйте свойство [ISmLinearProgramming.Solution](ISmLinearProgramming.Solution.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    LP: SmLinearProgramming;

    CF, Lb, Ub, LinC1, LinC2: Array[4] Of Double;

    Z: Array[4] Of Integer;

    Bound: ISlBoundaryRegion;

    LCon1, LCon2: ISlLinearConstraint;

    i, Res: Integer;

    OptVal: Double;

    Sol: Array Of Double;

Begin

    LP := New SmLinearProgramming.Create;

    CF[0] := 5;  Lb[0] := 0; Ub[0] := 5;  LinC1[0] := 2; LinC2[0] := 3;

    CF[1] := -7; Lb[1] := 0; Ub[1] := 10; LinC1[1] := 4; LinC2[1] := 3;

    CF[2] := 2;  Lb[2] := 0; Ub[2] := 5;  LinC1[2] := 1; LinC2[2] := 0;

    CF[3] := -2; Lb[3] := 0; Ub[3] := 5;  LinC1[3] := 0; LinC2[3] := 2;

    LP.InitialApproximation.AutoCreate := True;

    // Целевая функция

    LP.CriterionFunction := CF;

    Bound := LP.Boundary;

    // Нижняя и верхняя границы области

    Bound.BoundaryLower := Lb;

    Bound.BoundaryUpper := Ub;

    // === Первое линейное ограничение ===

    LCon1 := LP.LinearConstraints.Add;

    // Коэффициенты линейного ограничения

    LCon1.Value := LinC1;

    // Линейное ограничение снизу и сверху

    LCon1.BoundaryLower := -100;

    LCon1.BoundaryUpper := 100;

    // === Второе линейное ограничение ===

    LCon2 := LP.LinearConstraints.Add;

    // Коэффициенты линейного ограничения

    LCon2.Value := LinC2;

    // Линейное ограничение снизу и сверху

    LCon2.BoundaryLower := -100;

    LCon2.BoundaryUpper := 90;

    // Вектор логических значений

    Z[0]:=1; Z[1]:=1; Z[2]:=1; Z[3]:=1;

    lp.IntVec:=Z;

    // Метод решения задачи

    LP.MethodType := LPMethodType.SimplexDualPrimal;

    Res := LP.Execute;

    If Res <> 0 Then

        Debug.WriteLine(LP.Errors);

        Else

            Debug.WriteLine("== Значение целевой функции ==");

            OptVal := LP.OptimalFunctionValue;

            Debug.WriteLine(OptVal.ToString);

            Debug.WriteLine("== Решение ==");

            Sol := LP.Solution;

            For i := 0 To LP.Solution.Length-1 Do

                Debug.WriteLine(i.ToString+" = "+Sol[i].ToString);

            End For;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведено найденное решение
 и значение целевой функции, отвечающее найденному решению.


См. также:


[ISmLinearProgramming](ISmLinearProgramming.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
