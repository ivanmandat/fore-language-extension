# ICpNonLinearOptimization.CriterionFunction

ICpNonLinearOptimization.CriterionFunction
-


# ICpNonLinearOptimization.CriterionFunction


## Синтаксис


CriterionFunction: String;


## Описание


Свойство CriterionFunction определяет
 целевую функцию.


## Комментарии


Для определения уравнения нелинейной оптимизации используйте свойство
 [ICpNonLinearOptimization.Equations](ICpNonLinearOptimization.Equations.htm).


## Пример


Добавьте ссылку на системную сборку Cp.


	Sub
	 UserProc;

	Var

	    Optima: NonLinearOptimization;

	    Vars: INonLoVariables; //список
	 переменных

	    Vrbl: INonLoVariable; //переменная

	    VarConstr: IVarConstraint; //ограничение
	 на переменную

	    VarConstrs: IVarConstraints; //список
	 ограничений на переменную

	    RetroX1, RetroX2, RetroU: Array[3] Of Double;

	    Functions: Array[2]
	 Of String;

	    DifferEvolutionParams: IDifferEvolutionParams;

	    Res: INonLoResults;

	    ci: ICultureInfo;

	    TimeInterval, j, i: Integer;

	    val: Double;

	    s: String;

	Begin

	    Optima := New
	 NonLinearOptimization.Create;

	    RetroX1[0] :=
	 2;

	    RetroX1[1] :=
	 2.1;

	    RetroX1[2] :=
	 2.2;

	    RetroX2[0] :=
	 1;

	    RetroX2[1] :=
	 0.9;

	    RetroX2[2] :=
	 0;

	    RetroU[0] := 1;

	    RetroU[1] := 1.5;

	    RetroU[2] := 0;

	    // Переменные и ограничения

	    // Задаем переменную
	 «x1»

	    Vars := Optima.Variables;

	    Vrbl := Vars.Add("x1");

	    Vrbl.Retrospective := RetroX1;

	    Vrbl.CoefficientsOrder := "x1[t];x1[t-1];x1[t-2];x1[t-3]";

	    VarConstrs := Vrbl.Constraints;

	    // Задаем ограничения
	 на переменную «x1»

	    VarConstr := VarConstrs.Add;

	    VarConstr.LowerBound := -101;

	    VarConstr.UpperBound := 101;

	    VarConstr.Lag := 3;

	    VarConstr := VarConstrs.Add;

	    VarConstr.LowerBound := -102;

	    VarConstr.UpperBound := 102;

	    VarConstr.Lag := 2;

	    VarConstr := VarConstrs.Add;

	    VarConstr.LowerBound := -10030;

	    VarConstr.UpperBound := 10030;

	    VarConstr.Lag := 1;

	    VarConstr := VarConstrs.Add;

	    VarConstr.LowerBound := -13040;

	    VarConstr.UpperBound := 13040;

	    VarConstr.Lag := 0;

	    // Задаем переменную
	 «x2»

	    Vars := Optima.Variables;

	    Vrbl := Vars.Add("x2");

	    Vrbl.Retrospective := RetroX2;

	    Vrbl.CoefficientsOrder := "x2[t];x2[t-1];x2[t-2]";

	    VarConstrs := Vrbl.Constraints;

	    // Задаем ограничения
	 на переменную «x2»

	    VarConstr := VarConstrs.Add;

	    VarConstr.LowerBound := -201;

	    VarConstr.UpperBound := 201;

	    VarConstr.Lag := 3;

	    VarConstr := VarConstrs.Add;

	    VarConstr.LowerBound := -202;

	    VarConstr.UpperBound := 202;

	    VarConstr.Lag := 2;

	    VarConstr := VarConstrs.Add;

	    VarConstr.LowerBound := -203;

	    VarConstr.UpperBound := 203;

	    VarConstr.Lag := 1;

	    VarConstr := VarConstrs.Add;

	    VarConstr.LowerBound := -12040;

	    VarConstr.UpperBound := 12040;

	    VarConstr.Lag := 0;

	    // Задаем управляющую
	 переменную «u» и ограничения на нее

	    Vars := Optima.Variables;

	    Vrbl := Vars.Add("u");

	    Vrbl.Retrospective := RetroU;

	    Vrbl.ControlVariable := True;

	    Vrbl.CoefficientsOrder := "u[t];u[t-1]";

	    VarConstrs := Vrbl.Constraints;

	    For i := 0 To 3
	 Do

	    VarConstr := VarConstrs.Add;

	    VarConstr.LowerBound := 0;

	    VarConstr.UpperBound := 1;

	    VarConstr.Lag := i;

	    End For;

	    // Задаем уравнения и
	 целевую функцию нелинейной оптимизации

	    Functions := New
	 string[2];

	    Functions[0] :=
	 "0.3 * x1[t-1] + 0.1 * x2[t-2] + u[t-1]
	 * x1[t-1] *x2[t-1]";

	    Functions[1] :=
	 "-0.2 * x1[t-1] + 0.4 *x2[t-1] + (x1[t-1]
	 * x2[t-2]+u[t-1])";

	    Optima.Equations := Functions;

	    Optima.CriterionFunction := "x1[t]
	 * x2[t] - x1[t]";

	    TimeInterval := 4;

	    Optima.NodesCount := 2;

	    Optima.MaxIterationsCount := 1500;

	    Optima.MethodType := CpNonLinearMethodType.DifferentEvolution;

	    Optima.Tolerance := 0.00001;

	    Optima.Extremum := ExtremumType.Maximum;

	    // Задаем параметры дифференциальной
	 эволюции

	    DifferEvolutionParams := Optima.DifferEvolutionParams;

	    DifferEvolutionParams.PopulationSize := 18;

	    DifferEvolutionParams.DiffScale := 0.6;

	    DifferEvolutionParams.CrossProb := 0.4;

	    DifferEvolutionParams.MaxGeneration := 250;

	    DifferEvolutionParams.EvolutionStrategy :=
	 DiffEvolutionStrategyType.Best1Exp;

	    // Выполняем расчет и
	 выводим результаты

	    Res := Optima.Evaluate(TimeInterval)
	 As INonLoResults;

	    s := "Оптимальное
	 значение: " + Res.OptimalValue.ToString;

	    Debug.WriteLine(s);

	    s := "     ";

	    For j := 1 To Vars.Count
	 Do

	        Vrbl := Vars.Item(j
	 - 1);

	        s := s + Vrbl.Id +
	 "        ";

	    End For;

	    Debug.WriteLine(s);

	    ci := CultureInfo.Current;

	    For i := 1 To TimeInterval
	 Do

	        s := "t="
	 + i.ToString + ", ";

	        For
	 j := 1 To
	 Vars.Count Do

	            Vrbl
	 := Vars.Item(j - 1);

	            Val
	 := Res.VarValues(Vrbl.Id)[i - 1];

	            s
	 := s + ci.FormatDoublePrec(Val, 6) +
	 ", ";

	        End
	 For;

	        Debug.WriteLine(s);

	    End For;

	    s := "Статус : "
	 + Res.Status.ToString;

	    Debug.WriteLine(s);

	    s := "Ошибка : "
	 + Res.ErrorMsg;

	    Debug.WriteLine(s);

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены результаты расчетов.


См. также:


[ICpNonLinearOptimization](ICpNonLinearOptimization.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
