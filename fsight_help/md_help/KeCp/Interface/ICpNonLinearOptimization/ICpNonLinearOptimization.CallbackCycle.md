# ICpNonLinearOptimization.CallbackCycle

ICpNonLinearOptimization.CallbackCycle
-


# ICpNonLinearOptimization.CallbackCycle


## Синтаксис


CallbackCycle: [ICallbackCycle](../ICallbackCycle/ICallbackCycle.htm);


## Описание


Свойство CallbackCycle определяет
 обработчик, используемый для расчета управляющих переменных.


## Комментарии


Переменная является управляющей, если свойство [INonLoVariable.ControlVariable](../INonLoVariable/INonLoVariable.ControlVariable.htm)
 имеет значение True.


## Пример


Для выполнения примера добавьте ссылку на системную сборку «Cp». Также
 в примере используется класс MyCallbackCycle,
 описание которого приведено в [ICallbackCycle.Execute](../ICallbackCycle/ICallbackCycle.Execute.htm).


	Sub UserProc;

	Var

	    Optima: NonLinearOptimization;

	    Vars: INonLoVariables; //список переменных

	    Vrbl: INonLoVariable; //переменная

	    VarConstr: IVarConstraint; //ограничение на переменную

	    VarConstrs: IVarConstraints; //список ограничений на переменную

	    Constraints: INonLoConstraints; //ограничение

	    Constraint: INonLoConstraint; //список ограничений

	    RetroX1: Array Of double;

	    RetroX2: Array Of double;

	    RetroU: Array Of double;

	    RetroV: Array Of double;

	    InitApproximation: Array Of double;

	    Funstions: Array[2] Of string;

	    s: string;

	    T, i: integer;

	    MyCallBackC: MyCallBackCycle;

	    Res: INonLoResults;

	Begin

	    T := 4;

	    Optima := New NonLinearOptimization.Create;

	    // Переменные с ретроспективой

	    RetroX1 := New double[T];

	    RetroX2 := New double[T];

	    RetroU := New double[T];

	    RetroV := New double[T];

	    InitApproximation := New Double[T];

	    // Значения переменных с ретроспективой

	    For i := 0 To T - 1 Do

	        RetroX1[i] := 0.8 + i / 5;

	        RetroX2[i] := 0.85 + i / 4;

	        RetroU[i] := 0.9 + i / 10;

	        RetroV[i] := 0.95 + i / 10;

	    End For;

	    // Переменные и ограничения

	    Vars := Optima.Variables;

	    // 1-я переменная

	    Vrbl := Vars.Add("x1");

	    Vrbl.Retrospective := RetroX1;

	    Vrbl.CoefficientsOrder := "x1[t];x1[t-1]";

	    VarConstrs := Vrbl.Constraints;

	    For i := 0 To T - 1 Do

	        VarConstr := VarConstrs.Add;

	        VarConstr.LowerBound := -10 - i / 100;

	        VarConstr.UpperBound := 10 + i / 100;

	        VarConstr.Lag := i + 1;

	    End For;

	    // 2-я переменная

	    Vrbl := Vars.Add("x2");

	    Vrbl.Retrospective := RetroX2;

	    Vrbl.CoefficientsOrder := "x2[t];x2[t-1]";

	    VarConstrs := Vrbl.Constraints;

	    For i := 0 To T - 1 Do

	        VarConstr := VarConstrs.Add;

	        VarConstr.LowerBound := -100 - i;

	        VarConstr.UpperBound := 100 + i;

	        VarConstr.Lag := i + 1;

	    End For;

	    // 1-я управляющая переменная

	    For i := 0 To T - 1 Do

	        InitApproximation[i] := 1.2 + (i + 1) / 100;

	    End For;

	    Vars := Optima.Variables;

	    Vrbl := Vars.Add("u");

	    Vrbl.Retrospective := RetroU;

	    Vrbl.ControlVariable := True;

	    Vrbl.CoefficientsOrder := "u[t];u[t-1]";

	    Vrbl.InitApproximation := InitApproximation;

	    VarConstrs := Vrbl.Constraints;

	    For i := 0 To T - 1 Do

	        VarConstr := VarConstrs.Add;

	        VarConstr.LowerBound := 1;

	        VarConstr.UpperBound := 2;

	        VarConstr.Lag := i;

	    End For;

	    // 2-я управляющая переменная

	    For i := 0 To T - 1 Do

	        InitApproximation[i] := 1.5 + (i + 1) / 100;

	    End For;

	    Vars := Optima.Variables;

	    Vrbl := Vars.Add("v");

	    Vrbl.Retrospective := RetroV;

	    Vrbl.ControlVariable := True;

	    Vrbl.CoefficientsOrder := "v[t];v[t-1]";

	    Vrbl.InitApproximation := InitApproximation;

	    VarConstrs := Vrbl.Constraints;

	    For i := 0 To T - 1 Do

	        VarConstr := VarConstrs.Add;

	        VarConstr.LowerBound := 0.8;

	        VarConstr.UpperBound := 7;

	        VarConstr.Lag := i;

	    End For;

	    // Уравнения нелинейной оптимизации

	    Funstions := New string[2];

	    Funstions[0] := "0.3 * x1[t-1] + 0.1 * x2[t-1] + u[t-1] * x1[t-1] *x2[t-1]";

	    Funstions[1] := "(-0.2) * x1[t-1] + 0.4 *x2[t-1] + (x1[t-1] * x2[t-1])/(v[t]+1)";

	    Optima.Equations := Funstions;

	    // Целевая функция

	    Optima.CriterionFunction := "x1[t] + x2[t-1] - u[t]";

	    // Тип экстремума

	    Optima.Extremum := ExtremumType.Minimum;

	    // Максимальное число итераций

	    Optima.MaxIterationsCount := 150;

	    // Точность решения

	    Optima.Tolerance := 0.0001;

	    // Метод поиска решений

	    Optima.MethodType := CpNonLinearMethodType.SequentialQP;

	    // Количество интервалов

	    Optima.NodesCount := 2;

	    // Ограничения нелинейной оптимизации

	    Constraints := Optima.Constraints;

	    Constraint := Constraints.Add;

	    Constraint.UpperBound := "4";

	    Constraint.Expression := "v[t] + u[t] + x1[t]*0.001";

	    Constraint.LowerBound := "2";

	    // Обработчик для расчета значений управляющих
	 переменных

	    MyCallBackC := New MyCallbackCycle.Create;

	    Optima.CallbackCycle := MyCallBackC;

	    Res := Optima.Evaluate(T) As INonLoResults;

	    If res.Status = 0 Then

	        s := "Оптимальное значение: " + Res.OptimalValue.ToString;

	    Else

	        s := "Ошибка : " + Res.ErrorMsg;

	    End If;

	    Debug.WriteLine(s);

	End Sub UserProc;


Результат: выполняется расчёт нелинейной оптимизации, для расчёта управляющих
 переменных используется пользовательский обработчик.


См. также:


[ICpNonLinearOptimization](ICpNonLinearOptimization.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
