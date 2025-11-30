# ICpNonLinearOptimization.Explanatories

ICpNonLinearOptimization.Explanatories
-


# ICpNonLinearOptimization.Explanatories


## Синтаксис


Explanatories: [INonLinearExplanatories](../INonLinearExplanatories/INonLinearExplanatories.htm);


## Описание


Свойство Explanatories возвращает
 коллекцию объясняющих (сценарных) переменных.


## Комментарии


Элементы коллекции реализованы интерфейсом [INonLinearExplanatory](../INonLinearExplanatory/INonLinearExplanatory.htm).
 Значения каждой переменной должны быть заданы до расчета метода.


## Пример


Ниже приведено описание процедуры, задающей все необходимые параметры
 для расчета методом нелинейной оптимизации. Используются две объясняющие
 переменные: «i» и «j», для каждой из которых будут заданы значения и коэффициенты.


Для выполнения примера необходимо добавить ссылку на системную сборку
 «Cp».


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

	    ValuesI: Array[4] Of Double;

	    Funstions: Array[2] Of String;

	    Res: INonLoResults;

	    TimeInterval: Integer;

	    s: String;

	    ci: ICultureInfo;

	    j, i: Integer;

	    val: Double;

	    Expl: INonLinearExplanatory;

	Begin

	    Optima := New NonLinearOptimization.Create;

	    // Задаем значения переменных

	    RetroX1[0] := 2; RetroX2[0] := 1;

	    RetroX1[1] := 2.1; RetroX2[1] := 0.9;

	    RetroX1[2] := 2.2; RetroX2[2] := 0;

	    RetroU[0] := 1;      RetroV[0] := 0.5;

	    RetroU[1] := 1.5; RetroV[1] := 0.75;

	    RetroU[2] := 0;      RetroV[2] := 0;

	    // Задаем переменную «x1»

	    Vars := Optima.Variables;

	    Vrbl := Vars.Add("x1");

	    Vrbl.Retrospective := RetroX1;

	    Vrbl.CoefficientsOrder := "x1[t];x1[t-1];x1[t-2];x1[t-3]";

	    VarConstrs := Vrbl.Constraints;

	    // Задаем ограничения на переменную «x1»

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

	    // Задаем переменную «x2»

	    Vars := Optima.Variables;

	    Vrbl := Vars.Add("x2");

	    Vrbl.Retrospective := RetroX2;

	    Vrbl.CoefficientsOrder := "x2[t];x2[t-1];x2[t-2]";

	    VarConstrs := Vrbl.Constraints;

	    // Задаем ограничения на переменную «x2»

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

	    // Задаем управляющую переменную «u» и ограничения на нее

	    Vars := Optima.Variables;

	    Vrbl := Vars.Add("u");

	    Vrbl.Retrospective := RetroU;

	    Vrbl.ControlVariable := True;

	    Vrbl.CoefficientsOrder := "u[t];u[t-1]";

	    VarConstrs := Vrbl.Constraints;

	    For i := 0 To 3 Do

	        VarConstr := VarConstrs.Add;

	        VarConstr.LowerBound := 0;

	        VarConstr.UpperBound := 1;

	        VarConstr.Lag := i;

	    End For;

	    // Задаем управляющую переменную «v» и ограничения на нее

	    Vars := Optima.Variables;

	    Vrbl := Vars.Add("v");

	    Vrbl.Retrospective := RetroV;

	    Vrbl.ControlVariable := True;

	    Vrbl.CoefficientsOrder := "v[t];v[t-1]";

	    VarConstrs := Vrbl.Constraints;

	    For i := 0 To 3 Do

	        VarConstr := VarConstrs.Add;

	        VarConstr.LowerBound := 0.8;

	        VarConstr.UpperBound := 4;

	        VarConstr.Lag := i;

	    End For;

	    // Задаем объясняющий ряд «i»

	    Expl := Optima.Explanatories.Add;

	    Expl.VariableName := "i";

	    Expl.CoefficientsOrder := "i[t]";

	    ValuesI := New Double[4];

	    ValuesI[0] := 11;

	    ValuesI[1] := 11;

	    ValuesI[2] := 11;

	    ValuesI[3] := 11;

	    Expl.Series := ValuesI;


    // Задаем объясняющий ряд «j»

    Expl := Optima.Explanatories.Add;

    Expl.VariableName := "j";

    Expl.CoefficientsOrder := "j[t]";

    ValuesI := New Double[4];

    ValuesI[0] := -1;

    ValuesI[1] := -1;

    ValuesI[2] := -1;

    ValuesI[3] := -1;

    Expl.Series := ValuesI;

    // Задаем способ
 вычисления фазовых переменных

    Optima.VariablesCalculationTechnique := StateVariablesCalculationTechniqueType.IterativeCalculation;

    // Задаем уравнения и целевую функцию нелинейной оптимизации

    Funstions := New string[2];

    Funstions[0] := "0.3 * x1[t-1] + 0.1 * x2[t-2] + u[t-1] * x1[t-1] *x2[t-1] + i[t]+j[t]";

    Funstions[1] := "-0.2 * x1[t-1] + 0.4 *x2[t-1] + (x1[t-1] * x2[t-2])/v[t-1]+i[t]+j[t]";

    Optima.Equations := Funstions;

    Optima.CriterionFunction := "x1[t] * x1[t] - x1[t] * x2[t]+i[t]+j[t]";

    // Задаем метод оптимизации и прочие параметры

    TimeInterval := 4;

    Optima.NodesCount := 2;

    Optima.MaxIterationsCount := 150;

    Optima.MethodType := CpNonLinearMethodType.SequentialQP;

    Optima.Tolerance := 0.05;

    Optima.Extremum := ExtremumType.Maximum;

    // Осуществляем расчет

    Res := Optima.Evaluate(TimeInterval) As INonLoResults;

    If Res.Status = 0 Then

        // Выводим результаты

        s := "Оптимальное значение: " + Res.OptimalValue.ToString;

        Debug.WriteLine(s);

        s := "      ";

        For j := 1 To Vars.Count Do

            Vrbl := Vars.Item(j - 1);

            s := s + Vrbl.Id + "         ";

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

    Else

        Debug.WriteLine(Res.ErrorMsg);

    End If;

End Sub UserProc;


После выполнения примера результаты расчета будут выведены в окно консоли:


Оптимальное значение: 1249.3495956170168

      x1         x2         u         v

t=1, 12,690000, 13,600000, 0,000000, 4,000000,

t=2, 13,907000, 16,074500, 0,000000, 4,000000,

t=3, 15,532100, 60,932200, 0,000000, 4,000000,

t=4, 16,267080, 93,684352, 0,000000, 0,800000,


См. также:


[ICpNonLinearOptimization](ICpNonLinearOptimization.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
