# ISmQuadraticProgramming.CriterionFunction

ISmQuadraticProgramming.CriterionFunction
-


# ISmQuadraticProgramming.CriterionFunction


## Синтаксис


CriterionFunction: Array;


## Описание


Свойство CriterionFunction определяет
 линейную часть целевой функции.


## Комментарии


Индексация массива коэффициентов целевой функции должна начинаться с
 нуля.


Квадратичная часть целевой функции определяется свойством [ISmQuadraticProgramming.QuadraticForm](ISmQuadraticProgramming.QuadraticForm.htm).


## Пример


Добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    QP: SmQuadraticProgramming;

    i, Res: Integer;

    CF, Lb, Ub, LinC1, LinC2, LinC3, init: Array[3] Of Double;

    H: Array[3, 3] Of Double;

    Bound: ISlBoundaryRegion;

    LCon1, LCon2, LCon3: ISlLinearConstraint;

Begin

    QP := New SmQuadraticProgramming.Create;

    // Задаем начальные приближения

    init[0] := 1; init[1] := 1;

    QP.InitialApproximation.AutoCreate := False;

    QP.InitialApproximation.InitValues := init;

    // Задаем линейную часть целевой функции

    CF[0] := 1; CF[1] := 1; CF[2] := -1;

    QP.CriterionFunction := CF;

    //Задаем квадратичную часть целевой функции

    H[0, 0] := -2; H[0, 1] := 2; H[0, 2] := 0;

    H[1, 0] := 2; H[1, 1] := -2; H[1, 2] := 0;

    H[2, 0] := 0; H[2, 1] := 0; H[2, 2] := -2;

    QP.QuadraticForm := H;

    // Задаем область определения

    Lb[0] := 0; Lb[1] := 0; Lb[2] := 0;

    Ub[0] := 1; Ub[1] := 1; Ub[2] := 1;

    Bound := QP.Boundary;

    // Задаем границы области

    Bound.BoundaryLower := Lb;

    Bound.BoundaryUpper := Ub;

    // Задаем первый коэффициент линейного ограничения

    LinC1[0] := 1; LinC1[1] := 1; LinC1[2] := 1;

    LCon1 := QP.LinearConstraints.Add;

    LCon1.Value := LinC1;

    // Задаем границы первого коэффициента линейного ограничения

    LCon1.BoundaryLower := 1;

    LCon1.BoundaryUpper := Double.PositiveInfinity;

    // Задаем второй коэффициент линейного ограничения

    LinC2[0] := 2; LinC2[1] := 1; LinC2[2] := -1;

    LCon2 := QP.LinearConstraints.Add;

    LCon2.Value := LinC2;

    // Задаем границы второго коэффициента линейного ограничения

    LCon2.BoundaryLower := -1;

    LCon2.BoundaryUpper := Double.PositiveInfinity;

    // Задаем третий коэффициент линейного ограничения

    LinC3[0] := 1; LinC3[1] := -1; LinC3[2] := 1;

    LCon3 := QP.LinearConstraints.Add;

    LCon3.Value := LinC3;

    // Задаем границы третьего коэффициента линейного ограничения

    LCon3.BoundaryLower := 0;

    LCon3.BoundaryUpper := 0;

    // Выполняем расчёт и выводим результаты

    Res := QP.Execute;

    If res = 0 Then

        Debug.WriteLine("== Значение целевой функции ==");

        Debug.WriteLine(QP.OptimalFunctionValue.ToString);

        Debug.WriteLine("== Решение ==");

        For i := 0 To QP.Solution.Length - 1 Do

            Debug.WriteLine(i.ToString + ": " + QP.Solution[i].ToString);

        End For;

    End If;

End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены результаты
 расчёта задачи квадратичного программирования.


См.
 также


[ISmQuadraticProgramming](ISmQuadraticProgramming.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
