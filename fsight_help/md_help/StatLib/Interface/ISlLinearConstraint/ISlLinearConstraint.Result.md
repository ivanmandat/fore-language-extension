# ISlLinearConstraint.Result

ISlLinearConstraint.Result
-


# ISlLinearConstraint.Result


## Синтаксис


Result: Double;


## Описание


Свойство Result возвращает значение
 линейного ограничения.


## Комментарии


Для определения значения коэффициентов линейного ограничения используйте
 свойство [ISlLinearConstraint.Value](ISlLinearConstraint.Value.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    LP: SmLinearProgramming;

	    Bound: ISlBoundaryRegion;

	    LCon1, LCon2: ISlLinearConstraint;

	    CF, Lb, Ub, LinC1, LinC2: Array[4] Of Double;

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

	    //Целевая функция

	    LP.CriterionFunction := CF;

	    Bound := LP.Boundary;

	    //Нижняя и верхняя границы области

	    Bound.BoundaryLower := Lb;

	    Bound.BoundaryUpper := Ub;

	    // Первое линейное ограничение

	    LCon1 := LP.LinearConstraints.Add;

	    LCon1.Value := LinC1;

	    LCon1.BoundaryLower := -100;

	    LCon1.BoundaryUpper := 100;

	    // Второе линейное ограничение

	    LCon2 := LP.LinearConstraints.Add;

	    LCon2.Value := LinC2;

	    LCon2.BoundaryLower := -100;

	    LCon2.BoundaryUpper := 90;

	    // Расчет модели

	    Res := LP.Execute;

	    If Res <> 0 Then

	        Debug.WriteLine(LP.Errors);

	        Else

	            Debug.WriteLine("== Значение целевой функции ==");

	            OptVal := LP.OptimalFunctionValue;

	            Debug.WriteLine(OptVal.ToString);

	            Debug.WriteLine("== Решение ==");

	            Sol := LP.Solution;

	            For i := 0 To Sol.Length - 1 Do

	                Debug.WriteLine(i.ToString + " = " + Sol[i].ToString);

	            End For;

	            Debug.WriteLine("== Значения линейных ограничений ==");

	            Debug.WriteLine("1. " + LCon1.Result.ToString);

	            Debug.WriteLine("2. " + LCon2.Result.ToString);

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены решение, значение
 целевой функции, отвечающее найденному решению, и значения линейных ограничений.


См. также:


[ISlLinearConstraint](ISlLinearConstraint.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
