# ISmLinearProgramming.Boundary

ISmLinearProgramming.Boundary
-


# ISmLinearProgramming.Boundary


## Синтаксис


Boundary: [ISlBoundaryRegion](../ISlBoundaryRegion/ISlBoundaryRegion.htm);


## Описание


Свойство Boundary определяет
 параметры области определения.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    i, N, Res: Integer;

    d, OptVal: Double;

    CF, Lb, Ub, LinC1, LinC2, Sol: Array Of Double;

    LP: SmLinearProgramming;

    Bound: ISlBoundaryRegion;

    LCon1, LCon2: ISlLinearConstraint;

Begin

    N := 4;

    CF := New Double[N];

    Lb := New Double[N];

    Ub := New Double[N];

    LinC1 := New Double[N];

    LinC2 := New Double[N];

    CF[0] := 5; Lb[0] := 0; Ub[0] := 5; LinC1[0] := 2; LinC2[0] := 3;

    CF[1] := -7; Lb[1] := 0; Ub[1] := 10; LinC1[1] := 4; LinC2[1] := 3;

    CF[2] := 2; Lb[2] := 0; Ub[2] := 5; LinC1[2] := 1; LinC2[2] := 0;

    CF[3] := -2; Lb[3] := 0; Ub[3] := 5; LinC1[3] := 0; LinC2[3] := 2;

    LP := New SmLinearProgramming.Create;

    LP.InitialApproximation.AutoCreate := True;

    //Целевая функция

    LP.CriterionFunction := CF;

    Bound := LP.Boundary;

    Bound.BoundaryLower := Lb;//Нижняя граница области

    Bound.BoundaryUpper := Ub;//Верхняя граница области

    LCon1 := LP.LinearConstraints.Add; // первое линейное ограничение

    LCon1.Value := LinC1;// Коэффициенты линейного ограничения

    LCon1.BoundaryLower := -100;// линейное ограничение снизу

    LCon1.BoundaryUpper := 100;//линейное ограничение сверху

    LCon2 := LP.LinearConstraints.Add; // второе линейное ограничение

    LCon2.Value := LinC2;

    LCon2.BoundaryLower := -100;

    LCon2.BoundaryUpper := 90;

    Res := LP.Execute;

    If Res <> 0 Then

        Debug.WriteLine(LP.Errors);

    Else

        Debug.WriteLine("== Значение целевой функции ==");

        OptVal := LP.OptimalFunctionValue;

        Debug.WriteLine(OptVal.ToString);

        Debug.WriteLine("== Решение ==");

        Sol := LP.Solution;

        For i := 0 To N-1 Do

            d := Sol[i];

            Debug.AssertMsg(False,i.ToString+" = "+d.ToString);

        End For;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведено найденное решение
 и значение целевой функции, отвечающее найденному решению:


Module execution started


== Значение целевой функции ==


-80


== Решение ==


0 = 0


1 = 10


2 = 0


3 = 5


Module execution finished


См. также:


[ISmLinearProgramming](ISmLinearProgramming.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
