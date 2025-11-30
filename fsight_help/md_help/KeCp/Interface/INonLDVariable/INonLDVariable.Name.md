# INonLDVariable.Name

INonLDVariable.Name
-


# INonLDVariable.Name


## Синтаксис


Name: String;


## Описание


Свойство Name определяет наименование
 переменной.


## Пример


В данном примере создается следующая система нелинейных уравнений:


	- искомые переменные: «x1», «x2»;


	- управляющие переменные: «u», «v»;


	- уравнения, образующие систему:


		- 0.3 * x1[t-1] + 0.1 * x2[t+1] + u[t-1] * x1[t+1] *x2[t-1];


		- -0.2 * x1[t-1] + 0.4 *x2[t+1] + (x1[t+1] * x2[t-1])/(v[t-1]+1).


Добавьте ссылки на системные сборки: Cp, Stat.


	VSub UserProc;

	Var

	    Optima: NonLinearDecomposition;

	    PeriodL, j, i: Integer;

	    Vars: INonLDVariables;

	    Vrbl: INonLDVariable;

	    RetroX1, ForestX1: Array Of Double;

	    RetroX2, ForestX2: Array Of Double;

	    RetroU, ForestU: Array Of Double;

	    RetroV, ForestV, InitApproximation: Array Of Double;

	    Funstions: Array Of String;

	    Res: INonLoResults;

	    val: Double;

	Begin

	    Optima := New NonLinearDecomposition.Create;

	    // Задаем величину периода расчета

	    PeriodL := 4;

	    RetroX1 := New Double[PeriodL]; ForestX1 := New Double[PeriodL];

	    RetroX2 := New Double[PeriodL]; ForestX2 := New Double[PeriodL];

	    RetroU := New Double[PeriodL]; ForestU := New Double[PeriodL];

	    RetroV := New Double[PeriodL]; ForestV := New Double[PeriodL];

	    InitApproximation := New Double[PeriodL];

	    For i := 0 To PeriodL - 1 Do

	        RetroX1[i] := -2.1 - i; ForestX1[i] := 1.9 + i;

	        RetroX2[i] := -2.2 - i; ForestX2[i] := 1.8 + i;

	        RetroU[i] := -2.3 - i; ForestU[i] := 1.7 + i;

	        RetroV[i] := -2.4 - i; ForestV[i] := 1.6 + i;

	        InitApproximation[i] := 0.1;

	    End For;

	    // Добавление 1-й переменной

	    Vars := Optima.Variables;

	    Vrbl := Vars.Add("x1");

	    Vrbl.Name := "Первая искомая переменная";

	    Vrbl.Retrospective := RetroX1;

	    Vrbl.CoefficientsOrderRetrospective := "x1[t];x1[t-1]";

	    Vrbl.Forestall := ForestX1;

	    Vrbl.CoefficientsOrderForestall := "x1[t];x1[t+1]";

	    Vrbl.InitApproximation := InitApproximation;

	    // Добавление 2-й переменной

	    Vars := Optima.Variables;

	    Vrbl := Vars.Add("x2");

	    Vrbl.Name := "Вторая искомая переменная";

	    Vrbl.Retrospective := RetroX2;

	    Vrbl.CoefficientsOrderRetrospective := "x2[t];x2[t-1]";

	    Vrbl.Forestall := ForestX2;

	    Vrbl.CoefficientsOrderForestall := "x2[t];x2[t+1]";

	    Vrbl.InitApproximation := InitApproximation;

	    // Задание начальных приближений для 1-й управляющей переменной

	    For i := 0 To PeriodL - 1 Do

	        InitApproximation[i] := 1.5 * (i + 1);

	    End For;

	    // Добавление 1-й управляющей переменной

	    Vars := Optima.Variables;

	    Vrbl := Vars.Add("u");

	    Vrbl.Retrospective := RetroU;

	    Vrbl.CoefficientsOrderRetrospective := "u[t];u[t-1]";

	    Vrbl.Forestall := ForestU;

	    Vrbl.CoefficientsOrderForestall := "u[t];u[t+1]";

	    Vrbl.ControlVariable := True;

	    Vrbl.InitApproximation := InitApproximation;

	    // Задание начальных приближений для 2-й управляющей переменной

	    For i := 0 To PeriodL - 1 Do

	        InitApproximation[i] := 2 * (i + 1);

	    End For;

	    // Добавление 2-й управляющей переменной

	    Vars := Optima.Variables;

	    Vrbl := Vars.Add("v");

	    Vrbl.Retrospective := RetroV;

	    Vrbl.CoefficientsOrderRetrospective := "v[t];v[t-1]";

	    Vrbl.Forestall := ForestV;

	    Vrbl.CoefficientsOrderForestall := "v[t];v[t+1]";

	    Vrbl.ControlVariable := True;

	    Vrbl.InitApproximation := InitApproximation;

	    // Составление системы нелинейных уравнений

	    Funstions := New String[2];

	    Funstions[0] := "0.3 * x1[t-1] + 0.1 * x2[t+1] + u[t-1] * x1[t+1] *x2[t-1]";

	    Funstions[1] := "-0.2 * x1[t-1] + 0.4 *x2[t+1] + (x1[t+1] * x2[t-1])/(v[t-1]+1)";

	    Optima.Equations := Funstions;

	    Optima.NodesCount := 2;

	    Optima.Extremum := ExtremumType.Minimum;

	    Optima.MaxIteration := 250;

	    Optima.Tolerance := 0.000001;

	    Optima.MethodType := NonLinearEquationsType.HMethod;

	    // Расчет системы

	    Res := Optima.Evaluate(PeriodL) As INonLoResults;

	    Debug.WriteLine(Res.ErrorMsg);

	    // Вывод результатов

	    If (Res.Status = 0) Then

	        Vars := Optima.Variables;

	        For j := 0 To Vars.Count - 1 Do

	            Vrbl := Vars.Item(j);

	            Debug.WriteLine("Переменная: " + Vrbl.Id);

	            For i := 0 To PeriodL - 1 Do

	                Val := Res.VarValues(Vrbl.Id)[i];

	                Debug.WriteLine(Val);

	            End For;

	            Debug.WriteLine("-----");

	        End For;

	    End If;

	End Sub UserProc;


После выполнения примера будет создана и рассчитана система нелинейных
 уравнений. Результаты расчетов будут выведены в окно консоли.


См. также:


[INonLDVariable](INonLDVariable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
