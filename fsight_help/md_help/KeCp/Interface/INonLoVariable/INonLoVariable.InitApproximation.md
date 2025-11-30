# INonLoVariable.InitApproximation

INonLoVariable.InitApproximation
-


# INonLoVariable.InitApproximation


## Синтаксис


InitApproximation: Array;


## Описание


Свойство InitApproximation определяет
 массив начальных приближений для управляющей переменной.


## Комментарии


Если количества элементов в массиве недостаточно для выполнения расчета,
 то в качестве значений недостающих элементов берется значение свойства
 [IVarConstraint.LowerBound](../IVarConstraint/IVarConstraint.LowerBound.htm).
 Если значение свойства [IVarConstraint.LowerBound](../IVarConstraint/IVarConstraint.LowerBound.htm)
 не определено, то начальное приближение берется равным «0,01».


## Пример


Добавьте ссылку на системную сборку Cp.


	Sub UserProc;

	Var

	    Optima: NonLinearOptimization;

	    Vars: INonLoVariables; //список переменных

	    Vrbl: INonLoVariable; //переменная

	    VarConstr: IVarConstraint; //ограничение на переменную

	    VarConstrs: IVarConstraints; //список ограничений на переменную

	    RetroX1: Array[3] Of Double;

	    RetroX2: Array[3] Of Double;

	    RetroU: Array[3] Of Double;

	    RetroV: Array[3] Of Double;

	    Funstions: Array[2] Of String;

	    InitAp: Array[3] Of Double;

	    Res: INonLoResults;

	    TimeInterval: Integer;

	    s: String;

	    ci: ICultureInfo;

	    j, i: Integer;

	    val: Double;

	Begin

	    Optima := New NonLinearOptimization.Create;

	    // Значения переменных

	    RetroX1[0] := 2;

	    RetroX1[1] := 2.1;

	    RetroX1[2] := 2.2;

	    RetroX2[0] := 1;

	    RetroX2[1] := 0.9;

	    RetroX2[2] := 0;

	    RetroU[0] := 1;

	    RetroU[1] := 1.5;

	    RetroU[2] := 0;

	    RetroV[0] := 0.5;

	    RetroV[1] := 0.75;

	    RetroV[2] := 0;

	    // Переменные и ограничения

	    Vars := Optima.Variables;

	    Vrbl := Vars.Add("x1");

	    Vrbl.Retrospective := RetroX1;

	    Vrbl.CoefficientsOrder := "x1[t];x1[t-1];x1[t-2];x1[t-3]";

	    VarConstrs := Vrbl.Constraints;

	    VarConstr := VarConstrs.Add;

	    VarConstr.LowerBound := -101;

	    VarConstr.UpperBound := 101;

	    VarConstr.Lag := 3;

	    VarConstr := VarConstrs.Add;

	    VarConstr.LowerBound := -102;

	    VarConstr.UpperBound := 102;

	    VarConstr.Lag := 2;

	    VarConstr := VarConstrs.Add;

	    VarConstr.LowerBound := -10030;

	    VarConstr.UpperBound := 10030;

	    VarConstr.Lag := 1;

	    VarConstr := VarConstrs.Add;

	    VarConstr.LowerBound := -13040;

	    VarConstr.UpperBound := 13040;

	    VarConstr.Lag := 0;

	    Vars := Optima.Variables;

	    Vrbl := Vars.Add("x2");

	    Vrbl.Retrospective := RetroX2;

	    Vrbl.CoefficientsOrder := "x2[t];x2[t-1];x2[t-2]";

	    VarConstrs := Vrbl.Constraints;

	    VarConstr := VarConstrs.Add;

	    VarConstr.LowerBound := -201;

	    VarConstr.UpperBound := 201;

	    VarConstr.Lag := 3;

	    VarConstr := VarConstrs.Add;

	    VarConstr.LowerBound := -202;

	    VarConstr.UpperBound := 202;

	    VarConstr.Lag := 2;

	    VarConstr := VarConstrs.Add;

	    VarConstr.LowerBound := -203;

	    VarConstr.UpperBound := 203;

	    VarConstr.Lag := 1;

	    VarConstr := VarConstrs.Add;

	    VarConstr.LowerBound := -12040;

	    VarConstr.UpperBound := 12040;

	    VarConstr.Lag := 0;

	    //Управляющая переменная

	    Vars := Optima.Variables;

	    Vrbl := Vars.Add("u");

	    Vrbl.Name := "Управляющая переменная 1";

	    Vrbl.Retrospective := RetroU;

	    Vrbl.ControlVariable := True;

	    Vrbl.CoefficientsOrder := "u[t];u[t-1]";

	    For i := 0 To 2 Do

	        InitAp[i] := 0.1 * i;

	    End For;

	    Vrbl.InitApproximation := InitAp;

	    VarConstrs := Vrbl.Constraints;

	    For i := 0 To 3 Do

	        VarConstr := VarConstrs.Add;

	        VarConstr.LowerBound := 0;

	        VarConstr.UpperBound := 1;

	        VarConstr.Lag := i;

	    End For;

	    //Управляющая переменная

	    Vars := Optima.Variables;

	    Vrbl := Vars.Add("v");

	    Vrbl.Name := "Управляющая переменная 2";

	    Vrbl.Retrospective := RetroV;

	    Vrbl.ControlVariable := True;

	    Vrbl.CoefficientsOrder := "v[t];v[t-1]";

	    For i := 0 To 2 Do

	        InitAp[i] := 8.8 * i;

	    End For;

	    Vrbl.InitApproximation := InitAp;

	    VarConstrs := Vrbl.Constraints;

	    For i := 0 To 3 Do

	        VarConstr := VarConstrs.Add;

	        VarConstr.LowerBound := 0.8;

	        VarConstr.UpperBound := 4;

	        VarConstr.Lag := i;

	    End For;

	    Funstions := New string[2];

	    Funstions[0] := "0.3 * x1[t-1] + 0.1 * x2[t-2] + u[t-1] * x1[t-1] *x2[t-1]";

	    Funstions[1] := "-0.2 * x1[t-1] + 0.4 *x2[t-1] + (x1[t-1] * x2[t-2])/v[t-1]";

	    Optima.Equations := Funstions;

	    Optima.CriterionFunction := "x1[t] * x1[t] - x1[t] * x2[t]";

	    TimeInterval := 4;

	    Optima.NodesCount := 2;

	    Optima.MaxIterationsCount := 5000;

	    Optima.MethodType := CpNonLinearMethodType.SequentialQP;

	    Optima.Tolerance := 0.1;

	    Optima.Extremum := ExtremumType.Maximum;

	    Res := Optima.Evaluate(TimeInterval) As INonLoResults;

	    s := "Оптимальное значение: " + Res.OptimalValue.ToString;

	    Debug.WriteLine(s);

	    s := "     ";

	    For j := 1 To Vars.Count Do

	        Vrbl := Vars.Item(j - 1);

	        s := s + Vrbl.Id + "        ";

	    End For;

	    Debug.WriteLine(s);

	    ci := CultureInfo.Current;

	    For i := 1 To TimeInterval Do

	        s := "t=" + i.ToString + ", ";

	        For j := 1 To Vars.Count Do

	            Vrbl := Vars.Item(j - 1);

	            Val := Res.VarValues(Vrbl.Id)[i - 1];

	            s := s + ci.FormatDoublePrec(Val, 6) + ", ";

	        End For;

	        Debug.WriteLine(s);

	    End For;

	    s := "Статус : " + Res.Status.ToString;

	    Debug.WriteLine(s);

	    s := "Ошибка : " + Res.ErrorMsg;

	    Debug.WriteLine(s);

	End Sub UserProc;


После выполнения примера результаты расчетов будут выведены в окно консоли:


Оптимальное значение:- 5222824.6794125168

     x1        x2        u        v

t=1, 2,690000, 3,600000, 1,000000, 0,800000,

t=2, 10,591000, 4,264500, 1,000000, 0,800000,

t=3, 48,702620, 47,247100, 1,000000, 4,000000,

t=4, 2 316,094770, 61,081568, 0,000000, 0,800000,

Статус : 21

Ошибка: Решение найдено, но последовательность итераций не сошлась с требуемой точностью


См. также:


[INonLoVariable](INonLoVariable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
