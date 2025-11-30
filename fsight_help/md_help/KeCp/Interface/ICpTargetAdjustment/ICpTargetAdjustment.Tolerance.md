# ICpTargetAdjustment.Tolerance

ICpTargetAdjustment.Tolerance
-


# ICpTargetAdjustment.Tolerance


## Синтаксис


Tolerance: Double;


## Описание


Свойство Tolerance определяет
 точность решения.


## Комментарии


Значение по умолчанию - «0,0001».


## Пример


Для выполнения примера добавьте ссылку на системную сборку Cp.


В примере используется пользовательский класс MyCallBackCycle.
 Реализация данного класса приведена в примере для [ICallbackCycle.Execute](../ICallbackCycle/ICallbackCycle.Execute.htm).


	Sub UserProc;

	Var

	    TargetAdj: ICpTargetAdjustment;

	    T: Integer;

	    RetroX1, RetroX2, RetroU, RetroV: Array Of Double;

	    InitApproximation, ValuesI, ValuesJ: Array Of Double;

	    i, j: Integer;

	    VarsP: ITargetPhaseVariablesArray;

	    VrblP: ITargetPhaseVariable;

	    VarConstrs: IVarTargetConstraintsArray;

	    VarConstr: IVarTargetConstraint;

	    VarsC: ITargetControlVariablesArray;

	    VrblC: ITargetControlVariable;

	    Expls: INonLinearExplanatories;

	    Expl: INonLinearExplanatory;

	    Ser: Array[4] Of Double;

	    Constraints: ITargetConstraints;

	    Constraint: ITargetConstraint;

	    ConInfoArray: ITargetConstraintInfoArray;

	    ConInfo: ITargetConstraintInfo;

	    Res: ITargetResults;

	    Val: Double;

	    MyCallBackC: MyCallBackCycle;

	Begin

	    TargetAdj := New TargetAdjustment.Create;

	    // Задаем период

	    T := 6;


	    // Создаем переменные с ретроспективой

	    RetroX1 := New Double[T];

	    RetroX2 := New Double[T];

	    RetroU := New Double[T];

	    RetroV := New Double[T];

	    ValuesI := New Double[T];

	    ValuesJ := New Double[T];

	    // Создаем массив начальных приближений

	    InitApproximation := New Double[T];

	    // Задаем начальные значения переменных

	    For i := 0 To T - 1 Do

	        RetroX1[i] := 0.8 + i / 5;

	        RetroX2[i] := 0.85 + i / 4;

	        RetroU[i] := 0.9 + i / 10;

	        RetroV[i] := 0.95 + i / 10;

	        ValuesI[i] := 0.6 + i / 8;

	        ValuesJ[i] := 0.7 + i / 6;

	    End For;

	    // Получаем фазовые переменные

	    VarsP := TargetAdj.PhaseVariables;

	    // Добавляем фазовую переменную x1

	    VrblP := VarsP.Add("x1");

	    VrblP.Name := "x1";

	    // Задаем ретроспективные значения

	    VrblP.Retrospective := RetroX1;


	    // Задаем порядок переменных

	    VrblP.CoefficientsOrder := "x1[t];x1[t-1]";

	    // Получаем ограничения фазовой переменной

	    VarConstrs := VrblP.Constraints;

	    For i := 0 To T - 1 Do

	        // Создаём новое ограничение

	        VarConstr := VarConstrs.Add;

	        // Задаем границы

	        VarConstr.LowerBound := -10 - i / 100;

	        VarConstr.UpperBound := 10 + i / 100;

	        // Указываем текущий момент времени

	        VarConstr.TimeMoment := i;

	    End For;

	    // Задаем уравнение динамики

	    VrblP.FunctionExpression := "0.3 * x1[t-1] + 0.1 * x2[t-1] + u[t-1] * x1[t-1] *x2[t-1]";


	    // Добавляем фазовую переменную x2

	    VrblP := VarsP.Add("x2");

	    VrblP.Name := "x2";

	    VrblP.Retrospective := RetroX2;

	    VrblP.CoefficientsOrder := "x2[t];x2[t-1]";

	    VarConstrs := VrblP.Constraints;

	    For i := 0 To T - 1 Do

	        VarConstr := VarConstrs.Add;

	        VarConstr.LowerBound := -100-i;

	        VarConstr.UpperBound := 100+i;

	        VarConstr.TimeMoment := i;

	    End For;

	    VrblP.FunctionExpression := "(-0.2) * x1[t-1] + 0.4 *x2[t-1] + (x1[t-1] * x2[t-1])/(v[t]+1)";

	    // Получаем управляющие переменные

	    VarsC := TargetAdj.ControlVariables;

	    // Добавляем управляющую переменную u

	    VrblC := VarsC.Add("u");

	    VrblC.Name := "u";

	    // Задаем ретороспективные значения

	    VrblC.Retrospective := RetroU;


	    // Задаем порядок коэффициентов

	    VrblC.CoefficientsOrder := "u[t];u[t-1]";

	    // Задаем значения начальных приближений

	    For i := 0 To T - 1 Do

	        InitApproximation[i] := 1.2 + (i + 1) / 100;

	    End For;

	    VrblC.InitApproximation := InitApproximation;

	    // Получаем ограничения управляющей переменной

	    VarConstrs := VrblC.Constraints;

	    For i := 0 To T - 1 Do

	        // Добавляем ограничение

	        VarConstr := VarConstrs.Add;

	        // Задаем границы ограничения

	        VarConstr.LowerBound := 1;

	        VarConstr.UpperBound := 2;

	        // Задаем текущий момент времени

	        VarConstr.TimeMoment := i;

	    End For;


	    // Добавляем управляющую переменную v

	    VrblC := VarsC.Add("v");

	    VrblC.Name := "v";

	    VrblC.Retrospective := RetroV;

	    VrblC.CoefficientsOrder := "v[t];v[t-1]";

	    For i:=0 To T-1 Do

	        InitApproximation[i] := 1.5+ (i+1)/100;

	    End For;

	    VrblC.InitApproximation := InitApproximation;

	    VarConstrs := VrblC.Constraints;

	    For i := 0 To T - 1 Do

	        VarConstr := VarConstrs.Add;

	        VarConstr.LowerBound := 0.8;

	        VarConstr.UpperBound := 7;

	        VarConstr.TimeMoment := i;

	    End For;

	    // Получаем объясняющие ряды

	    Expls := TargetAdj.Explanatories;

	    // Задаем объясняющий ряд i

	    Expl := Expls.Add;

	    Expl.VariableName := "i";

	    Expl.CoefficientsOrder := "i[t]";

	    Expl.Series := ValuesI;

	    // Задаем объясняющий ряд j

	    Expl := Expls.Add;

	    Expl.VariableName := "j";

	    Expl.CoefficientsOrder := "j[t]";

	    Expl.Series := ValuesJ;


	    // Задаем целевую траекторию

	    ser[0] := 1;

	    ser[1] := 2;

	    ser[2] := 3;

	    ser[3] := 4;

	    TargetAdj.TargetTrajectory := Ser;

	    // Задаем целевую функцию

	    TargetAdj.CriterionFunction := "x1[t] + x2[t-1] - u[t] + i[t] + j[t]";

	    // Задаем количество итераций

	    TargetAdj.MaxIterationsCount := 25000;

	    // Задаем точность решения

	    TargetAdj.Tolerance := 0.00001;

	    // Получаем нелинейные ограничения целевой функции

	    Constraints := TargetAdj.Constraints;

	    // Добавляем нелинейное ограничение

	    Constraint := Constraints.Add;


	    // Задаем выражение нелинейного ограничения

	    Constraint.Expression := "v[t] + u[t] + x1[t]*0.001";

	    ConInfoArray := Constraint.Constraints;

	    For i := 0 To T - 1 Do

	        conInfo := ConInfoArray.Add;

	        conInfo.TimeMoment := i;

	        conInfo.LowerBound := -10.5555;

	        coninfo.UpperBound := 10.55555;

	        coninfo.LowerBoundFixed := False;

	        coninfo.UpperBoundFixed := False;

	    End For;

	    // Задаем тип задачи

	    TargetAdj.AutoSearchType := TargetAutoSearchType.MinError;

	    // Задаем количество циклов

	    TargetAdj.AutoAdjustMaxIter := 10;

	    // Задаем приемлемую точность

	    TargetAdj.AutoAdjustSatisfactoryTolerance := 1.01;

	    // Задаем число ограничений удалённых за одну итерацию

	    TargetAdj.AutoAdjustRemoveCount := 2;


	    // Задаем обработчик для расчета значений управляющих переменных

	    MyCallBackC := New MyCallbackCycle.Create;

	    TargetAdj.CallbackCycle := MyCallBackC;

	    // Выполняем расчет

	    Res := TargetAdj.Evaluate(T) As ITargetResults;

	    // Если расчет прошёл без ошибок, то выводим результаты в консоль

	    If res.Status = 0 Then

	    // Выводим оптимальное значение

	    Debug.WriteLine("Оптимальное значение:");

	    Debug.Indent;

	    Debug.WriteLine(res.OptimalValue);

	    Debug.Unindent;

	    // Выводим значения управляющих переменных

	    For j := 1 To VarsC.Count Do

	        VrblC := VarsC.Item(j - 1);

	        Debug.WriteLine("Значения управляющей переменной '" + VrblC.Id + "':");

	        Debug.Indent;

	        For i := 1 To T Do

	            Val := Res.VarValues(VrblC.Id)[i - 1];

	            Debug.WriteLine(i.ToString + ": " + Val.ToString);

	        End For;

	        Debug.Unindent;

	    End For;


	    // Выводим значения фазовых переменных

	    For j := 1 To VarsP.Count Do

	        VrblP := VarsP.Item(j - 1);

	        Debug.WriteLine("Значения фазовой переменной '" + VrblP.Id + "':");

	        Debug.Indent;

	        For i := 1 To T Do

	            Val := Res.VarValues(VrblP.Id)[i - 1];

	            Debug.WriteLine(i.ToString + ": " + Val.ToString);

	        End For;

	        Debug.Unindent;

	    End For;

	    // Выводим прогресс изменения целевой функции в процессе решения

	    // задачи нелинейного программирования

	    Debug.WriteLine("Прогресс изменения целевой функции в процессе решения" +

	        " задачи нелинейного программирования:");

	    Debug.Indent;

	    For i := 0 To Res.ObjValByIter.Length - 1 Do

	        Debug.WriteLine(Res.ObjValByIter[i]);

	    End For;

	    Debug.Unindent;

	    // Выводим прогресс изменения целевой функции в процессе

	    // последовательного ослабления границ

	    Debug.WriteLine("Прогресс изменения целевой функции в процессе" +

	        " последовательного ослабления границ:");

	    Debug.Indent;

	    For i := 0 To Res.ObjValByAdjustIter.Length - 1 Do

	        Debug.WriteLine(Res.ObjValByAdjustIter[i]);

	    End For;

	    Debug.Unindent;


	    // Выводим оптимальную траекторию целевой функции

	    Debug.WriteLine("Оптимальная траектория целевой функции:");

	    Debug.Indent;

	    For i := 0 To Res.CriterionFunctionTrajectory.Length - 1 Do

	        Debug.WriteLine(Res.CriterionFunctionTrajectory[i]);

	    End For;

	    Debug.Unindent;

	    // Если расчёт завершился с ошибкой, то выводим её текст

	    Else

	        Debug.WriteLine(res.ErrorMsg);

	    End If;

	End Sub UserProc;


В результате выполнения примера будут заданы параметры расчета задачи
 оптимизации, задача будет рассчитана, результаты выведены в окно консоли.


См. также:


[ICpTargetAdjustment](ICpTargetAdjustment.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
