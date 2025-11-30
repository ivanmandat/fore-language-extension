# ISlLinearConstraint.LagrangeMultiplier

ISlLinearConstraint.LagrangeMultiplier
-


# ISlLinearConstraint.LagrangeMultiplier


## Синтаксис


LagrangeMultiplier: Double;


## Описание


Свойство LagrangeMultiplier
 определяет значение множителя Лагранжа.


## Комментарии


Множитель Лагранжа характеризует в какой степени значение ограничения
 близко его границе.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    i, N, Res: Integer;

	    d, OptVal: Double;

	    CF, Lb, Ub, LagrMultEtalon1, LagrMultEtalon2: Array Of Double;

	    LinC1, LinC2, LinC3, LinC4, LinC5, LinC6, LinC7: ISlLinearConstraint;

	    LP: SmLinearProgramming;

	    Bound: ISlBoundaryRegion;

	    LC1, LC2, LC3, LC4, LC5, LC6, LC7, Sol, LPBL, LPBU, LPLM: Array Of Double;

	    inft: Double;

	    LCon1: ISlLinearConstraint;

	Begin

	    LP := New SmLinearProgramming.Create;

	    LP.InitialApproximation.AutoCreate := True;

	    N := 7;

	    inft := double.PositiveInfinity;

	    CF := New Double[N];

	    Lb := New Double[N];

	    Ub := New Double[N];

	    LC1 := New Double[N];

	    LC2 := New Double[N];

	    LC3 := New Double[N];

	    LC4 := New Double[N];

	    LC5 := New Double[N];

	    LC6 := New Double[N];

	    LC7 := New Double[N];

	    LagrMultEtalon1 := New double[N];

	    LagrMultEtalon2 := New double[7];

	    // Множители для общих ограничений

	    LagrMultEtalon1[0] := 0.3301;

	    LagrMultEtalon1[1] := 0.01438;

	    LagrMultEtalon1[2] := -0.09100;

	    LagrMultEtalon1[3] := -0.07661;

	    LagrMultEtalon1[4] := 0;

	    LagrMultEtalon1[5] := 0;

	    LagrMultEtalon1[6] := 0;

	    // Множители для линейных ограничений

	    LagrMultEtalon2[0] := -1.431;

	    LagrMultEtalon2[1] := 0;

	    LagrMultEtalon2[2] := 0;

	    LagrMultEtalon2[3] := 0;

	    LagrMultEtalon2[4] := 0;

	    LagrMultEtalon2[5] := 1.501;

	    LagrMultEtalon2[6] := 1.517;


	    // Значения

	    cf[0] := -0.02;     cf[1] := -0.2;  cf[2] := -0.2;  cf[3] := -0.2; cf[4] := -0.2;   cf[5] := 0.04;      cf[6] := 0.04;


	    ub[0] := 0.01;      ub[1] := 0.15;  ub[2] := 0.03;  ub[3] := 0.02;  ub[4] := 0.05;  ub[5] := 1e20;      ub[6] := 1e20;

	    lb[0] := -0.01;     lb[1] := -0.1;  lb[2] := -0.01; lb[3] := -0.04; lb[4] := -0.1;  lb[5] := -0.01;     lb[6] := -0.01;


	    lc1[0] := 1; lc1[1] := 1; lc1[2] := 1; lc1[3] := 1; lc1[4] := 1; lc1[5] := 1; lc1[6] := 1;

	    lc2[0] := 0.15; lc2[1] := 0.04; lc2[2] := 0.02; lc2[3] := 0.04; lc2[4] := 0.02; lc2[5] := 0.01; lc2[6] := 0.03;

	    lc3[0] := 0.03; lc3[1] := 0.05; lc3[2] := 0.08; lc3[3] := 0.02; lc3[4] := 0.06; lc3[5] := 0.01; lc3[6] := 0;

	    lc4[0] := 0.02; lc4[1] := 0.04; lc4[2] := 0.01; lc4[3] := 0.02; lc4[4] := 0.02; lc4[5] := 0;    lc4[6] := 0;

	    lc5[0] := 0.02; lc5[1] := 0.03; lc5[2] := 0;    lc5[3] := 0;    lc5[4] := 0.01; lc5[5] := 0;    lc5[6] := 0;

	    lc6[0] := 0.70; lc6[1] := 0.75; lc6[2] := 0.8;  lc6[3] := 0.75; lc6[4] := 0.8;  lc6[5] := 0.97; lc6[6] := 0;

	    lc7[0] := 0.02; lc7[1] := 0.06; lc7[2] := 0.08; lc7[3] := 0.12; lc7[4] := 0.02; lc7[5] := 0.01; lc7[6] := 0.97;

	    // Целевая функция

	    LP.CriterionFunction := CF;

	    // Границы области

	    Bound := LP.Boundary;

	    // Нижняя граница области

	    Bound.BoundaryLower := Lb;

	    // Верхняя граница области

	    Bound.BoundaryUpper := Ub;

	    // Первый коэффициент линейного ограничения

	    LinC1 := LP.LinearConstraints.Add;

	    LinC1.Value := LC1;

	    // Линейное ограничение снизу

	    LinC1.BoundaryLower := -0.13;

	    // Линейное ограничение сверху

	    LinC1.BoundaryUpper := -0.13;


	    // Второй коэффициент линейного ограничения

	    LinC2 := LP.LinearConstraints.Add;

	    LinC2.Value := LC2;

	    // Линейное ограничение снизу

	    LinC2.BoundaryLower := -inft;

	    // Линейное ограничение сверху

	    LinC2.BoundaryUpper := -0.0049;


	    // Третий коэффициент линейного ограничения

	    LinC3 := LP.LinearConstraints.Add;

	    LinC3.Value := LC3;


    // Линейное ограничение снизу

    LinC3.BoundaryLower := -inft;

    // Линейное ограничение сверху

    LinC3.BoundaryUpper := -0.0064;


    // Четвертый коэффициент линейного ограничения

    LinC4 := LP.LinearConstraints.Add;

    LinC4.Value := LC4;

    // Линейное ограничение снизу

    LinC4.BoundaryLower := -inft;

    // Линейное ограничение сверху

    LinC4.BoundaryUpper := -0.0037;


    // Пятый коэффициент линейного ограничения

    LinC5 := LP.LinearConstraints.Add;

    LinC5.Value := LC5;

    // Линейное ограничение снизу

    LinC5.BoundaryLower := -inft;

    // Линейное ограничение сверху

    LinC5.BoundaryUpper := -0.0012;


    // Шестой коэффициент линейного ограничения

    LinC6 := LP.LinearConstraints.Add;

    LinC6.Value := LC6;

    // Линейное ограничение снизу

    LinC6.BoundaryLower := -0.0992;

    // Линейное ограничение сверху

    LinC6.BoundaryUpper := inft;


    // Седьмой коэффициент линейного ограничения

    LinC7 := LP.LinearConstraints.Add;

    LinC7.Value := LC7;

    // Линейное ограничение снизу

    LinC7.BoundaryLower := -0.003;

    // Линейное ограничение сверху

    LinC7.BoundaryUpper := 0.002;

    // Расчёт модели

    Res := LP.Execute;

    // Наличие ошибок

    Debug.WriteLine("Статус выполнения: " + LP.Errors);

    Debug.WriteLine("== Значение целевой функции ==");

    OptVal := LP.OptimalFunctionValue;

    Debug.WriteLine(OptVal.ToString);

    Debug.WriteLine("== Решение ==");

    Sol := LP.Solution;

    For i := 0 To N - 1 Do

        d := Sol[i];

        Debug.WriteLine(i.ToString + ": " + d.ToString);

    End For;

    Debug.WriteLine("== Общие Ограничения: ==");

    d := 0;

    LPBL := Bound.BoundaryLower;

    LPBU := Bound.BoundaryUpper;

    LPLM := Bound.LagrangeMultiplier;

    For i := 0 To N - 1 Do

        d := LP.Solution[i];

        Debug.WriteLine(i.ToString + ": ");

        Debug.WriteLine(LPBL[i].ToString + "<=" + d.ToString + "<= " + LPBU[i].ToString);

        Debug.WriteLine("Множитель Лагранжа: " + LPLM[i].ToString);

        Debug.WriteLine("Эталонный множитель Лагранжа: " + LagrMultEtalon1[i].ToString);

        Debug.WriteLine("  ");

    End For;

    Debug.WriteLine("   ");

    Debug.WriteLine("== Линейные ограничения ==");

    For i := 0 To LP.LinearConstraints.Count - 1 Do

        LCon1 := LP.LinearConstraints.Item(i);

        Debug.WriteLine(i.ToString + ": " + LCon1.BoundaryLower.ToString + " <= " + LCon1.Result.ToString + " <= " + LCon1.BoundaryUpper.ToString);

        Debug.WriteLine("Множитель Лагранжа: " + LCon1.LagrangeMultiplier.ToString);

        Debug.WriteLine("Эталонный множитель Лагранжа: " + LagrMultEtalon2[i].ToString);

        Debug.WriteLine("  ");

    End For;

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведены:


	- наличие ошибок расчёта;


	- значение целевой функции;


	- результаты расчёта модели: общие и линейные ограничения и множители
	 Лагранжа.


См. также:


[ISlLinearConstraint](ISlLinearConstraint.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
