# ITargetConstraintInfo.OptimalValue

ITargetConstraintInfo.OptimalValue
-


# ITargetConstraintInfo.OptimalValue


## Синтаксис


OptimalValue: Double;


## Описание


Свойство OptimalValue
 возвращает значение, соответствующее оптимальному решению целевой задачи.


## Комментарии


Значение доступно только после расчета целевой задачи.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Cp.


	Sub UserProc;

	Var

	    TargetAdj: ICpTargetAdjustment;

	    T: Integer;

	    RetroX1, RetroU: Array Of Double;

	    InitApproximation, Ser: Array Of Double;

	    i: Integer;

	    VarsP: ITargetPhaseVariablesArray;

	    VrblP: ITargetPhaseVariable;

	    VarConstrs: IVarTargetConstraintsArray;

	    VarConstr: IVarTargetConstraint;

	    VarsC: ITargetControlVariablesArray;

	    VrblC: ITargetControlVariable;

	    Constraints: ITargetConstraints;

	    Constraint: ITargetConstraint;

	    ConInfoArray: ITargetConstraintInfoArray;

	    ConInfo: ITargetConstraintInfo;

	    Res: ITargetResults;

	Begin

	    TargetAdj := New TargetAdjustment.Create;

	    // Задаем период

	    T := 6;


	    // Создаем переменные с ретроспективой

	    RetroX1 := New Double[T];

	    RetroU := New Double[T];

	    Ser := New Double[T];

	    // Создаем массив начальных приближений

	    InitApproximation := New Double[T];

	    // Задаем начальные значения переменных

	    For i := 0 To T - 1 Do

	        RetroX1[i] := 0.8 + i / 5;

	        RetroU[i] := 0.9 + i / 10;

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

	    VrblP.FunctionExpression := "0.3 * x1[t-1] + 0.1 * u[t-1] * x1[t-1] *u[t]";


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

	    // Задаем целевую траекторию

	    For i := 0 To T - 1 Do

	        ser[i] := i;

	    End For;

	    TargetAdj.TargetTrajectory := Ser;

	    // Задаем целевую функцию

	    TargetAdj.CriterionFunction := "x1[t] + u[t-1] - u[t] ";

	    // Задаем количество итераций

	    TargetAdj.MaxIterationsCount := 25000;

	    // Задаем точность решения

	    TargetAdj.Tolerance := 0.00001;


	    // Получаем нелинейные ограничения целевой функции

	    Constraints := TargetAdj.Constraints;

	    // Добавляем нелинейное ограничение

	    Constraint := Constraints.Add;

	    // Задаем выражение нелинейного ограничения

	    Constraint.Expression := "u[t] + x1[t]*0.001";

	    ConInfoArray := Constraint.Constraints;

	    For i := 0 To T - 1 Do

	        conInfo := ConInfoArray.Add;

	        conInfo.TimeMoment := i;

	        conInfo.LowerBound := -1.5555-i;

	        coninfo.UpperBound := 1.55555 + i;

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

	    // Выполняем расчет

	    Res := TargetAdj.Evaluate(T) As ITargetResults;

	    // Если расчет прошёл без ошибок, то выводим результаты в консоль

	    If res.Status = 0 Then

	    // Выводим оптимальное значение

	    Debug.WriteLine("Оптимальное значение:");

	    Debug.Indent;

	        Debug.WriteLine(res.OptimalValue);

	    Debug.Unindent;


	    // Выводим оптимальную траекторию целевой функции

	    Debug.WriteLine("Оптимальная траектория целевой функции:");

	    Debug.Indent;

	    For i := 0 To Res.CriterionFunctionTrajectory.Length - 1 Do

	        Debug.WriteLine(Res.CriterionFunctionTrajectory[i]);

	    End For;

	    Debug.Unindent;

	    // Выводим нелинейные ограничения

	        Debug.WriteLine("Значение, отвечающее оптимальному решению");

	        Debug.Indent;

	        For i := 0 To ConInfoArray.Count - 1 Do

	            conInfo := ConInfoArray.Item(i);

	            If conInfo.Include Then

	                Debug.WriteLine(conInfo.OptimalValue);

	            End If;

	        End For;

	        Debug.Unindent;


	        // Выводим значения нижней границы ограничения

	        Debug.WriteLine("Значения нижней границы; Статус");

	        Debug.Indent;

	        For i := 0 To ConInfoArray.Count - 1 Do

	            conInfo := ConInfoArray.Item(i);

	            If conInfo.Include Then

	                Debug.Write(conInfo.LowerBound.ToString + "; " + #9);

	                Debug.WriteLine(StatusToStr(conInfo.LowerConstraintStatus));

	            End If;

	        End For;

	        Debug.Unindent;

	        Debug.WriteLine("Значения множителя Лагранжа для нижней границы");

	        Debug.Indent;

	        For i := 0 To ConInfoArray.Count - 1 Do

	            conInfo := ConInfoArray.Item(i);

	            If conInfo.Include Then

	                Debug.WriteLine(conInfo.LowerBoundLagrangeMultiplier);

	            End If;

	        End For;


	        Debug.Unindent;

	        Debug.WriteLine("Значения верхней границы; Статус");

	        Debug.Indent;

	        For i := 0 To ConInfoArray.Count - 1 Do

	            conInfo := ConInfoArray.Item(i);

	            If conInfo.Include Then

	                Debug.Write(conInfo.UpperBound.ToString + "; " + #9);

	                Debug.WriteLine(StatusToStr(conInfo.UpperConstraintStatus));

	            End If;

	        End For;

	        Debug.Unindent;

	        Debug.WriteLine("Значения множителя Лагранжа для верхней границы");

	        Debug.Indent;

	        For i := 0 To ConInfoArray.Count - 1 Do

	            conInfo := ConInfoArray.Item(i);

	            If conInfo.Include Then

	                Debug.WriteLine(conInfo.UpperBoundLagrangeMultiplier);

	            End If;

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


В результате выполнения примера будут заданы параметры расчета задачи
 оптимизации, задача будет рассчитана, результаты выведены в окно консоли.


См. также:


[ITargetConstraintInfo](ITargetConstraintInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
