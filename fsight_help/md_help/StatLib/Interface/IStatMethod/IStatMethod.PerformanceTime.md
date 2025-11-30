# IStatMethod.PerformanceTime

IStatMethod.PerformanceTime
-


# IStatMethod.PerformanceTime


## Синтаксис


PerformanceTime: Double;


## Описание


Свойство PerformanceTime возвращает
 время выполнения метода.


## Комментарии


Свойство содержит время в миллисекундах от начала выполнения метода
 [IStatMethod.Execute](IStatMethod.Execute.htm)
 до его завершения.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


					Sub UserProc;

		Var

		    QP: SmQuadraticProgramming;

		    i, Res: Integer;

		    time: double;

		    LinC1, CF, Lb, Ub, init: Array[3] Of Double;

		    H: Array[3, 3] Of Double;

		    Bound: ISlBoundaryRegion;

		    LCon1: ISlLinearConstraint;

		Begin

		    QP := New SmQuadraticProgramming.Create;

		    // Задаем начальные приближения

		    init[0] := 6; init[1] := 0; init[2] := 0;

		    QP.InitialApproximation.AutoCreate := False;

		    QP.InitialApproximation.InitValues := init;

		    // Задаем линейную часть целевой функции

		    CF[0] := -1; CF[1] := 0; CF[2] := -2;

		    QP.CriterionFunction := CF;

		    //Задаем квадратичную часть целевой функции

		    H[0, 0] := 2; H[0, 1] := 0; H[0, 2] := 0;

		    H[1, 0] := 0; H[1, 1] := 2; H[1, 2] := 0;

		    H[2, 0] := 0; H[2, 1] := 0; H[2, 2] := 0;

		    QP.QuadraticForm := H;

		    // Задаем область определения

		    Lb[0] := 0; Ub[0] := double.PositiveInfinity;

		    Lb[1] := 0; Ub[1] := double.PositiveInfinity;

		    Lb[2] := 0; Ub[2] := double.PositiveInfinity;

		    Bound := QP.Boundary;

		    // Задаем границы области

		    Bound.BoundaryLower := Lb;

		    Bound.BoundaryUpper := Ub;

		    // Задаем коэффициент линейного ограничения

		    LinC1[0] := 1; LinC1[1] := -1; LinC1[2] := 2;

		    LCon1 := QP.LinearConstraints.Add;

		    LCon1.Value := LinC1;

		    // Задаем границы коэффициента линейного ограничения

		    LCon1.BoundaryLower := 6;

		    LCon1.BoundaryUpper := 6;

		    // Выполняем расчёт и выводим результаты

		    Res := QP.Execute;

		    time := QP.PerformanceTime / 1000;

		    Debug.WriteLine("Время выполнения[sec] = " + time.ToString);

		    Debug.WriteLine("RES=" + Res.ToString);

		    Debug.WriteLine(QP.Errors);

		    If res = 0 Then

		        Debug.WriteLine("== Значение целевой функции ==");

		        Debug.WriteLine(QP.OptimalFunctionValue.ToString);

		        Debug.WriteLine("== Решение ==");

		        For i := 0 To QP.Solution.Length - 1 Do

		            Debug.WriteLine(i.ToString + ": " + QP.Solution[i].ToString);

		        End For;

		    End If;

		End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены время
 выполнения и результат расчёта.


См. также:


[IStatMethod](IStatMethod.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
