# INonLinearExplanatory.Retrospective

INonLinearExplanatory.Retrospective
-


# INonLinearExplanatory.Retrospective


## Синтаксис


Retrospective: Array;


## Описание


Свойство Retrospective определяет
 значения переменной до начала оптимизации.


## Комментарии


Для определения значения переменной используйте свойство [INonLinearExplanatory.Series](INonLinearExplanatory.Series.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Cp.


	Sub UserProc;

	Var

	    Optima: NonLinearOptimization;

	    Vars: INonLoVariables;

	    Vrbl: INonLoVariable;

	    VarConstr: IVarConstraint;

	    VarConstrs: IVarConstraints;

	    Expl: INonLinearExplanatory;

	    Res: INonLoResults;

	    Constr : INonLoConstraint;

	    RetroA, RetroX, RetroZ: Array[1] Of Double;

	    explar: Array[4] Of Double;

	    Funstions: Array[2] Of String;

	    TimeInterval, i, j: Integer;

	    Val: Double;

	    s: String;

	    Trajectory: Array Of Double;

	Begin

	    Optima := New NonLinearOptimization.Create;

	    RetroA[0] := 2000;

	    RetroX[0] := 0;

	    RetroZ[0] := 0;

	    // Переменные и ограничения

	    Vars := Optima.Variables;

	    Vars.Clear;

	    Vrbl := Vars.Add("A");

	    Vrbl.Retrospective := RetroA;

	    Vrbl.CoefficientsOrder := "a[t];a[t-1];a[t-2];a[t-3]";

	    Vrbl := Vars.Add("Z");

	    Vrbl.Retrospective := RetroZ;

	    Vrbl.CoefficientsOrder := "z[t];z[t-1];z[t-2];z[t-3]";

	    VarConstrs := Vrbl.Constraints;

	    // Управляющая переменная

	    Vrbl := Vars.Add("X");

	    Vrbl.Retrospective := RetroX;

	    Vrbl.ControlVariable := True;

	    Vrbl.CoefficientsOrder := "x[t];x[t-1];x[t-2];x[t-3]";

	    VarConstrs := Vrbl.Constraints;

	    // Ограничение на переменную

	    TimeInterval := 4;

	    For i:=0 To TimeInterval-1 Do

	        VarConstr := VarConstrs.Add;

	        VarConstr.LowerBound := 0;

	        VarConstr.UpperBound := 1000;

	        VarConstr.Lag := i;

	    End For;

	    // Объясняющая переменная

	    Optima.Explanatories.Clear;

	    Expl := Optima.Explanatories.Add;

	    Expl.VariableName := "scen";

	    Expl.Series := explar;

	    Expl.CoefficientsOrder := "scen[t];scen[t-1]";

	    For i:=0 To explar.Length-1 Do

	        explar[i]:=0;

	    End For;

	    Expl.Retrospective := explar;

	    // Уравнение нелинейной оптимизации

	    Funstions := New string[2];

	    Funstions[0] := "0.5 * a[t-1]-0.4*x[t-1]+scen[t-1]";

	    Funstions[1] := "z[t-1]+2*a[t]+x[t]";

	    Optima.Equations := Funstions;

	    // Ограничения нелинейной оптимизации

	    Optima.Constraints.Clear;

	    Constr:=Optima.Constraints.Add;

	    Constr.Expression :="a[t]-x[t]";

	    Constr.LowerBound :="0";

	    // Целевая функция

	    Optima.CriterionFunction := "z[t]";

	    // Количество интервалов

	    Optima.NodesCount := 8;

	    // Максимальное число итераций

	    Optima.MaxIterationsCount := 150;

	    // Метод поиска решения

	    Optima.MethodType := CpNonLinearMethodType.SequentialQP;

	    // Параметры метоа дифференциальной революции

	    Optima.DifferEvolutionParams.PopulationSize := 100;

	    Optima.DifferEvolutionParams.MaxGeneration := 200;

	    Optima.DifferEvolutionParams.CrossProb := 0.60;

	    Optima.DifferEvolutionParams.DiffScale := 0.50;

	    Optima.DifferEvolutionParams.EvolutionStrategy := DiffEvolutionStrategyType.Best1Bin;

	    // Точность решения

	    Optima.Tolerance :=  0.001;

	    // Тип экстремума

	    Optima.Extremum := ExtremumType.Maximum;

	    // Расчёт модели:

	    Res := Optima.Evaluate(TimeInterval) As INonLoResults;

	    Debug.WriteLine("Статус : " + Res.Status.ToString);

	    Debug.WriteLine("Ошибка : " + Res.ErrorMsg);

	    Debug.WriteLine("Оптимальное значение: " + Res.OptimalValue.ToString);

	    Debug.WriteLine("Оптимальное значение по итерациям:");

	    If res.Status = 0 Then

	        For i := 0 To Res.ObjValByIter.Length - 1 Do

	            Debug.WriteLine(Res.ObjValByIter[i]);

	        End For;

	    End If;

	    s := "     ";

	    For j := 1 To Vars.Count Do

	        Vrbl := Vars.Item(j - 1);

	        s := s + Vrbl.Id + "     ";

	    End For;

	    s:= s + "Trajectory";

	    Debug.WriteLine(s);

	    If Res.Status = 0 Then

	        For i := 1 To TimeInterval Do

	            s := "t=" + i.ToString + ", ";

	            For j := 1 To Vars.Count Do

	                Vrbl := Vars.Item(j - 1);

	                Val := Res.VarValues(Vrbl.Id)[i - 1];

	                s := s + Val.ToString + ", ";

	            End For;

	            Trajectory := res.CriterionFunctionTrajectory;

	            s:= s + Trajectory[i-1].ToString;

	            Debug.WriteLine(s);

	        End For;

	    End If;

	End Sub UserProc;


В результате выполнения примера в окно консоли будет выведено:


Статус : 0


Ошибка : Нет ошибки


Оптимальное значение:
 3875.00000000001


Оптимальное значение
 по итерациям:


3750


3870,36758872495


3870,40603555176


3874,99999253258


3875,00000000001


     A
     Z     X     Trajectory


t=1, 1000, 2000, 0, 2000


t=2, 500, 3000, 0, 3000


t=3, 250, 3500, 0, 3500


t=4, 125, 3875.00000001261,
 125.000000000008, 3875.00000000001


См. также:


[INonLinearExplanatory](INonLinearExplanatory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
