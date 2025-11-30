# IVarTargetConstraint.Include

IVarTargetConstraint.Include
-


# IVarTargetConstraint.Include


## Синтаксис


Include: Boolean;


## Описание


Свойство Include определяет,
 активно ли ограничение.


## Комментарии


Допустимые значения:


	- True. Значение по умолчанию.
	 Ограничение активно;


	- False. Ограничение не
	 используется.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Cp.


	Sub UserProc;

	Var

	    TargetAdj: ICpTargetAdjustment;

	    T: Integer;

	    RetroX1, RetroX2, RetroU, RetroV: Array Of Double;

	    InitApproximation, Ser: Array Of Double;

	    i, j: Integer;

	    VarsP: ITargetPhaseVariablesArray;

	    VrblP: ITargetPhaseVariable;

	    VarConstrs: IVarTargetConstraintsArray;

	    VarConstr: IVarTargetConstraint;

	    VarsC: ITargetControlVariablesArray;

	    VrblC: ITargetControlVariable;

	    Res: ITargetResults;

	    Val: Double;

	Begin

	    TargetAdj := New TargetAdjustment.Create;

	    // Задаем период

	    T := 6;


	    // Создаем переменные с ретроспективой

	    RetroX1 := New Double[T];

	    RetroX2 := New Double[T];

	    RetroU := New Double[T];

	    RetroV := New Double[T];

	    Ser := New Double[T];

	    // Создаем массив начальных приближений

	    InitApproximation := New Double[T];

	    // Задаем начальные приближения и значения переменных с ретроспективой

	    For i := 0 To T - 1 Do

	        RetroX1[i] := 0.8 + i / 5;

	        RetroX2[i] := 0.85 + i / 4;

	        RetroU[i] := 0.9 + i / 10;

	        RetroV[i] := 0.95 + i / 10;

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

	        VarConstr.LowerBound := -0.5- i / 100;

	        VarConstr.UpperBound := 0.5 + i / 100;

	        If (i = 2) Then

	            VarConstr.LowerBoundFixed := False;

	        End If;

	        // Указываем текущий момент времени

	        VarConstr.TimeMoment := i;

	    End For;

	    // Задаем уравнение динамики

	    VrblP.FunctionExpression := "0.3 * x1[t-1] + 0.1 * u[t-1] * x1[t-1]";

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

	        VarConstr.LowerBound := -1 - i / 10;

	        VarConstr.UpperBound := 1 + i / 10;

	        If (i = 0) Then

	            VarConstr.UpperBoundFixed := False;

	        End If;

	        // Задаем текущий момент времени

	        VarConstr.TimeMoment := i;

	    End For;


	    // Задаем целевую траекторию

	    For i := 0 To T - 1 Do

	        ser[i] := i;

	    End For;

	    TargetAdj.TargetTrajectory := Ser;

	    // Задаем целевую функцию

	    TargetAdj.CriterionFunction := "x1[t] + x1[t-1] / u[t]";

	    // Задаем количество итераций

	    TargetAdj.MaxIterationsCount := 25000;

	    // Задаем точность решения

	    TargetAdj.Tolerance := 0.00001;

	    // Задаем тип задачи

	    TargetAdj.AutoSearchType := TargetAutoSearchType.MinError;

	    // Задаем количество циклов

	    TargetAdj.AutoAdjustMaxIter := 10;

	    // Задаем приемлемую точность

	    TargetAdj.AutoAdjustSatisfactoryTolerance := 1.01;

	    // Задаем число ограничений удалённых за одну итерацию

	    TargetAdj.AutoAdjustRemoveCount := 2;

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

	        Debug.WriteLine("");

	        Debug.WriteLine("Значения управляющей переменной '" + VrblC.Id + "':");

	        Debug.Indent;

	        For i := 1 To T Do

	            Val := Res.VarValues(VrblC.Id)[i - 1];

	            Debug.WriteLine(i.ToString + ": " + Val.ToString);

	        End For;

	        // Выводим ограничения управляющей переменной

	        Debug.WriteLine("");

	        Debug.WriteLine("Ограничения управляющей переменной '" + VrblC.Id + "':");

	        Debug.Indent;

	        VarConstrs := VrblC.Constraints;

	        WriteConstraint(VarConstrs);

	        Debug.Unindent; Debug.Unindent;

	    End For;


	    // Выводим значения фазовых переменных

	    For j := 1 To VarsP.Count Do

	        VrblP := VarsP.Item(j - 1);

	        Debug.WriteLine("");

	        Debug.WriteLine("Значения фазовой переменной '" + VrblP.Id + "':");

	        Debug.Indent;

	        For i := 1 To T Do

	            Val := Res.VarValues(VrblP.Id)[i - 1];

	            Debug.WriteLine(i.ToString + ": " + Val.ToString);

	        End For;

	        // Выводим ограничения фазовой переменной

	        Debug.WriteLine("");

	        Debug.WriteLine("Ограничения фазовой переменной '" + VrblP.Id + "':");

	        Debug.Indent;

	        VarConstrs := VrblP.Constraints;

	        WriteConstraint(VarConstrs);

	        Debug.Unindent;

	    End For;

	    // Выводим оптимальную траекторию целевой функции

	    Debug.WriteLine("");

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


	// Функция для вывода статуса

	Function StatusToStr(Status: TargetConstraintStatusType): String;

	Var

	    s: String;

	Begin

	    Select Case Status

	        Case TargetConstraintStatusType.Disabled: s := "Снято";

	        Case TargetConstraintStatusType.NotReached: s := "Не достигнуто";

	        Case TargetConstraintStatusType.Reached: s := "Достигнуто";

	    End Select;

	    Return s;

	End Function StatusToStr;


	// Процедура для вывода границ ограничений переменных

	Sub WriteConstraint(VarConstrs: IVarTargetConstraintsArray);

	Var

	    i: Integer;

	    VarConstr: IVarTargetConstraint;

	Begin

	    // Выводим значения нижней границы ограничения

	    Debug.WriteLine("Значения нижней границы; Статус");

	    Debug.Indent;

	    For i := 0 To VarConstrs.Count - 1 Do

	        VarConstr := VarConstrs.Item(i);

	        If VarConstr.Include Then

	            Debug.Write(VarConstr.LowerBound.ToString + "; " + #9);

	            Debug.WriteLine(StatusToStr(VarConstr.LowerConstraintStatus));

	        End If;

	    End For;

	    Debug.Unindent;

	    Debug.WriteLine("Значения множителя Лагранжа для нижней границы");

	    Debug.Indent;

	    For i := 0 To VarConstrs.Count - 1 Do

	        VarConstr := VarConstrs.Item(i);

	        If VarConstr.Include Then

	            Debug.WriteLine(VarConstr.LowerBoundLagrangeMultiplier);

	        End If;

	    End For;

	    Debug.Unindent;

	    Debug.WriteLine("Значения верхней границы; Статус");

	    Debug.Indent;

	    For i := 0 To VarConstrs.Count - 1 Do

	        VarConstr := VarConstrs.Item(i);

	        If VarConstr.Include Then

	            Debug.Write(VarConstr.UpperBound.ToString + "; " + #9);

	            Debug.WriteLine(StatusToStr(VarConstr.UpperConstraintStatus));

	        End If;

	    End For;


	    Debug.Unindent;

	    Debug.WriteLine("Значения множителя Лагранжа для верхней границы");

	    Debug.Indent;

	    For i := 0 To VarConstrs.Count - 1 Do

	        VarConstr := VarConstrs.Item(i);

	        If VarConstr.Include Then

	            Debug.WriteLine(VarConstr.UpperBoundLagrangeMultiplier);

	        End If;

	    End For;

	    Debug.Unindent;

	End Sub WriteConstraint;


В результате выполнения примера будут заданы параметры расчета задачи
 оптимизации, задача будет рассчитана, результаты выведены в окно консоли.


См. также:


[IVarTargetConstraint](IVarTargetConstraint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
