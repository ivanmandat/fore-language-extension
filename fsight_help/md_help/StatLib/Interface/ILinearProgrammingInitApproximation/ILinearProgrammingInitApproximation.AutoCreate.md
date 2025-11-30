# ILinearProgrammingInitApproximation.AutoCreate

ILinearProgrammingInitApproximation.AutoCreate
-


# ILinearProgrammingInitApproximation.AutoCreate


## Синтаксис


AutoCreate: Boolean;


## Описание


Свойство AutoCreate определяет признак автоматического создания начальных значений.


## Комментарии


Допустимые значения:


-
True. Значение по умолчанию. Начальные значения будут созданы автоматически;


-
False. Начальные значения необходимо задать в свойстве [ILinearProgrammingInitApproximation.InitValues](ILinearProgrammingInitApproximation.InitValues.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;
Var

    LP: SmLinearProgramming;

    Bound: ISlBoundaryRegion;

    LCon1, LCon2: ISlLinearConstraint;

    i, N, Res: Integer;

    d, OptVal: Double;

    CF, Lb, Ub, LinC1, LinC2, InVal: Array[4] Of Double;

    Sol: Array Of Double;
Begin

    LP := New SmLinearProgramming.Create;

    N := 4;

    CF[0] := 5; Lb[0] := 0; Ub[0] := 5; LinC1[0] := 2; LinC2[0] := 3; InVal[0] := 0;

    CF[1] := -7; Lb[1] := 0; Ub[1] := 10; LinC1[1] := 4; LinC2[1] := 3; InVal[1] := 0;

    CF[2] := 2; Lb[2] := 0; Ub[2] := 5; LinC1[2] := 1; LinC2[2] := 0; InVal[2] := 0;

    CF[3] := -2; Lb[3] := 0; Ub[3] := 5; LinC1[3] := 0; LinC2[3] := 2; InVal[3] := 0;

    LP.InitialApproximation.AutoCreate := False;

    LP.InitialApproximation.InitValues := InVal;

    //Целевая функция:
    LP.CriterionFunction := CF;

    Bound := LP.Boundary;

    //Нижняя и верхняя границы области:
    Bound.BoundaryLower := Lb;

    Bound.BoundaryUpper := Ub;

    //Первое линейное ограничение:
    LCon1 := LP.LinearConstraints.Add;

    //Коэффициенты линейного ограничения:
    LCon1.Value := LinC1;

    //Линейные ограничения снизу и сверху:
    LCon1.BoundaryLower := -100;

    LCon1.BoundaryUpper := 100;

    //Второе линейное ограничение:
    LCon2 := LP.LinearConstraints.Add;

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

            For i := 0 To N - 1 Do

                d := Sol[i];

                Debug.WriteLine(i.ToString + " = " + d.ToString);

            End For;

    End If;
End Sub UserProc;


После выполнения примера в окно консоли будет выведено найденное решение и значение целевой функции, отвечающее найденному решению:


== Значение целевой функции ==


-80


== Решение ==


0 = 0


1 = 10


2 = 0


3 = 5


См. также:


[ILinearProgrammingInitApproximation](ILinearProgrammingInitApproximation.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
