# ISmNonLinearOptimization.PerformanceInfo

ISmNonLinearOptimization.PerformanceInfo
-


# ISmNonLinearOptimization.PerformanceInfo


## Синтаксис


PerformanceInfo: [IPerformanceInfo](../IPerformanceInfo/IPerformanceInfo.htm);


## Описание


Свойство PerformanceInfo возвращает
 информацию о выполненной оптимизации.


## Комментарии


Для определения параметров нелинейных ограничений используйте свойство
 [ISmNonLinearOptimization.NonLinearConstraints](ISmNonLinearOptimization.NonLinearConstraints.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    nlo: ISmNonLinearOptimization;

	    lb, ub: Array[0..3] Of double;

	    init: Array[0..3] Of double;

	    LinConCfs: Array[0..3] Of double;

	    Xsol: Array[0..3] Of double;

	    Xsol_et: Array[0..3] Of double;

	    LinCons: ISlLinearConstraints;

	    LinCon: ISlLinearConstraint;

	    NonLinCons: INonLinearConstraints;

	    NonLinCon: INonLinearConstraint;

	    Bound: ISlBoundaryRegion;

	    InitP, Sol, BoundL, PerformanceObj: Array Of Double;

	    PerformanceInfo: IPerformanceInfo;

	    i, res: integer;

	    d, Sol_et: double;

	Begin

	    nlo := New SmNonLinearOptimization.Create;

	    // Эталонные значения

	    sol_et := 17.014017;

	    Xsol_et[0] := 1.0;

	    Xsol_et[1] := 4.7430;

	    Xsol_et[2] := 3.8211;

	    Xsol_et[3] := 1.3794;

	    // Параметры области определения

	    For i := 0 To 3 Do

	        lb[i] := 1;

	        ub[i] := 5;

	        LinConCfs[i] := 1;

	    End For;

	    Bound := nlo.Boundary;

	    Bound.BoundaryLower := lb;

	    Bound.BoundaryUpper := ub;

	    // Порядок коэффициентов

	    nlo.CoefficientsOrder := "x1;x2;x3;x4";

	    // Целевая функция

	    nlo.FunctionString := "x1*x4*(x1+x2+x3)+x3";

	    // Начальные значения

	    init[0] := 1;

	    init[1] := 5;

	    init[2] := 5;

	    init[3] := 1;

	    nlo.InitApproximation := init;

	    // Линейные ограничения и их параметры

	    LinCons := nlo.LinearConstraints;

	    LinCon := LinCons.Add;

	    LinCon.BoundaryLower := -10000;//-10e20;

	    LinCon.BoundaryUpper := 20;

	    LinConCfs[0] := 1;

	    LinConCfs[1] := 1;

	    LinConCfs[2] := 1;

	    LinConCfs[3] := 1;

	    LinCon.Value := LinConCfs;

	    // Нелинейные ограничения и их параметры

	    NonLinCons := nlo.NonLinearConstraints;

	    NonLinCon := NonLinCons.Add;

	    NonLinCon.BoundaryLower :=  -1000;

	    NonLinCon.BoundaryUpper := 40;

	    NonLinCon.NonLinearFunction := "x1*x1+x2*x2+x3*x3+x4*x4";

	    NonLinCon := NonLinCons.Add;

	    NonLinCon.BoundaryLower := 25;

	    NonLinCon.BoundaryUpper := 100000;

	    NonLinCon.NonLinearFunction := "x1*x2*x3*x4";

	    // Точность решения

	    nlo.Tolerance := 0.00001;

	    // Максимальное число итераций для поиска решения

	    nlo.MaxIteration := 1000;

	    // Расчёт

	    res := nlo.Execute;


    PerformanceInfo := nlo.PerformanceInfo;

    Debug.WriteLine("Статус выполнения: " + res.ToString);

    Debug.WriteLine(nlo.Errors);

    Debug.WriteLine("Оптимальное значение: " + nlo.OptimalFunctionValue.ToString);

    Debug.WriteLine("Эталонное значение: " + Sol_et.ToString);

    Debug.WriteLine("Число вызовов целевой функции: " + PerformanceInfo.ObjFunCalls.ToString);

    Debug.WriteLine("Число вызовов ограничений: " + PerformanceInfo.ConstraintsCalls.ToString);

    Debug.WriteLine("Фактическое число итераций: " + PerformanceInfo.Iterations.ToString);

    Debug.WriteLine("==========================");

    InitP := PerformanceInfo.InitFeasiblePoint;

    For i := 0 To InitP.Length - 1 Do

        d := InitP[i];

        Debug.WriteLine("Начальная допустимая точка для задачи с ограничением(" + i.ToString + ")= " + d.ToString);

    End For;

    Sol := nlo.Solution;

    BoundL := Bound.LagrangeMultiplier;

    If res = 0 Then

        Debug.WriteLine("======================");

        For i := 1 To BoundL.Length - 1 Do

            d := Sol[i - 1] As Double;

            Xsol[i - 1] := d;

            Debug.WriteLine(" ");

            Debug.WriteLine("x(" + i.ToString + ") =  " + d.ToString);

            Debug.WriteLine("x_et(" + i.ToString + ") =  " + Xsol_et[i - 1].ToString);

            Debug.WriteLine("[ " + lb[i - 1].ToString + ",  " + ub[i - 1].ToString + " ]");

            Debug.WriteLine("Множитель Лагранжа: " + BoundL[i - 1].ToString);

        End For;


        Debug.WriteLine("    ");

        Debug.WriteLine("Ограничения:");

        Debug.WriteLine("x1^2+x2^2+x3^2+x4^2 <= 40");

        d := Xsol[0] * Xsol[0] + Xsol[1] * Xsol[1] + Xsol[2] * Xsol[2] + Xsol[3] * Xsol[3];

        Debug.WriteLine(" = " + d.ToString);

        Debug.WriteLine(" Множитель Лагранжа: " + NonLinCons.Item(0).LagrangeMultiplier.ToString);


        Debug.WriteLine("    ");

        Debug.WriteLine("25 <= x1*x2*x3*x4 :");

        d := Xsol[0] * Xsol[1] * Xsol[2] * Xsol[3];

        Debug.WriteLine(" = " + d.ToString);

        Debug.WriteLine(" Множитель Лагранжа: " + NonLinCons.Item(1).LagrangeMultiplier.ToString);


        Debug.WriteLine("    ");

        Debug.WriteLine("x1+x2+x3+x4 < 20");

        d := Xsol[0] + Xsol[1] + Xsol[2] + Xsol[3];

        Debug.WriteLine(" = " + d.ToString);

        Debug.WriteLine(" Множитель Лагранжа: " + LinCons.Item(0).LagrangeMultiplier.ToString);

        PerformanceObj := PerformanceInfo.ObjValByIter;

        For i := 0 To PerformanceObj.Length - 1 Do

            Debug.WriteLine("Значение целевой функции на итерации (" + i.ToString + "): " + PerformanceObj[i].ToString);

        End For;

    End If;

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведены:


	- наличие ошибок расчёта;


	- оптимальное и эталонное значение;


	- информация о выполненной оптимизации;


	- значения целевой функции;


	- ограничения и множители Лагранжа.


См. также:


[ISmNonLinearOptimization](ISmNonLinearOptimization.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
