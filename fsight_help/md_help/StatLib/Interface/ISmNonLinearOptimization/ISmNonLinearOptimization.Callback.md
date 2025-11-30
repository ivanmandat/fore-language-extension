# ISmNonLinearOptimization.Callback

ISmNonLinearOptimization.Callback
-


# ISmNonLinearOptimization.Callback


## Синтаксис


Callback: [ICallbackNLOptimization](../ICallbackNLOptimization/ICallbackNLOptimization.htm);


## Описание


Свойство Callback определяет
 пользовательский класс, используемый для расчёта значений переменных,
 целевой функции и нелинейных ограничений.


## Комментарии


Если используется свойство Callback
 и если задано [ISmNonLinearOptimization.UseDerivatives](ISmNonLinearOptimization.UseDerivatives.htm) = True, то для вычисления производных
 будут использоваться методы GetObjFunPartialDeriv
 и GetConstraintPartialDeriv, определенные
 в [Callback](../ICallbackNLOptimization/ICallbackNLOptimization.GetConstraintPartialDeriv.htm#callbacknlo),
 а если задано [ISmNonLinearOptimization.UseDerivatives](ISmNonLinearOptimization.UseDerivatives.htm) = False, для получения значений производных
 будет вычисляться градиент функции.


Для получения значения целевой функции используйте свойство [ISmNonLinearOptimization.OptimalFunctionValue](ISmNonLinearOptimization.OptimalFunctionValue.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


В примере используется пользовательский класс CallBackNLO,
 описание которого приведено в [ICallbackNLOptimization.GetConstraintPartialDeriv](../ICallbackNLOptimization/ICallbackNLOptimization.GetConstraintPartialDeriv.htm#callbacknlo).


			Sub UserProc;

Var

    nlo: ISmNonLinearOptimization;

    lb, ub: Array[0..3] Of Double;

    LinConCfs: Array[0..3] Of Double;

    LinCons: ISlLinearConstraints;

    LinCon: ISlLinearConstraint;

    NonLinCons: INonLinearConstraints;

    NonLinCon: INonLinearConstraint;

    CallBack : CallBackNLO;

    i, res: Integer;

    lcv: Array[4] Of Double;

    OptVal: Double;

Begin

    nlo := New SmNonLinearOptimization.Create;

    For i := 0 To 3 Do

        lb[i] := 1;

        ub[i] := 5;

        LinConCfs[i] := 1;

    End For;

    // Параметры области определения:

    nlo.Boundary.BoundaryLower := lb;

    nlo.Boundary.BoundaryUpper := ub;

    // Порядок коэффициентов:

    nlo.CoefficientsOrder := "x1;x2;x3;x4";

    // Параметры линейных ограничений:

    LinCons := nlo.LinearConstraints;

    LinCons.Clear;

    LinCon := LinCons.Add;

    LinCon.BoundaryLower := -10e20;

    LinCon.BoundaryUpper := 20;

    LinConCfs[0] := 1;

    LinConCfs[1] := 1;

    LinConCfs[2] := 1;

    LinConCfs[3] := 1;

    LinCon.Value := LinConCfs;

    // Максимальное число итераций и точность:

    nlo.MaxIteration := 75;

    nlo.Tolerance := 0.001;

    // Параметры нелинейных ограничений:

    NonLinCons := nlo.NonLinearConstraints;

    NonLinCons.Clear;

    NonLinCon := NonLinCons.Add;

    NonLinCon.BoundaryLower := -10e20;

    NonLinCon.BoundaryUpper := 40;

    NonLinCon := NonLinCons.Add;

    NonLinCon.BoundaryLower := 25;

    NonLinCon.BoundaryUpper := 10e21;

    // Параметры линейного ограничения:

    LinCon := LinCons.Add;

    lcv[0] := 1; lcv[1] := 1; lcv[2] := 1; lcv[3] := 1;

    LinCon.Value := lcv;

    LinCon.BoundaryLower := -10;

    LinCon.BoundaryUpper := 9;

    // CallBack:

    CallBack := New CallBackNLO.Create;

    Callback.MAXCOUNT := 1000;

    Callback.CallCount := 0;

    nlo.Callback := CallBack;

    // Расчёт задачи:

    res := nlo.Execute;

    If res <> 0 Then

        Debug.WriteLine(nlo.Errors);

        Else

            Debug.WriteLine("=== Значение целевой функции ===");

            Debug.Indent;

            OptVal := nlo.OptimalFunctionValue;

            Debug.WriteLine(OptVal.ToString);

            Debug.Unindent;

            Debug.WriteLine("=== Решение ===");

            Debug.Indent;

            For i := 0 To nlo.Solution.Length - 1 Do

                Debug.WriteLine(i.ToString + ", " + nlo.Solution[i].ToString)

            End For;

            Debug.Unindent;

            Debug.WriteLine("=== Градиент целевой функции ===");

            Debug.Indent;

            For i := 0 To nlo.FunctionGradient.Length - 1 Do

                Debug.WriteLine(i.ToString + ", " + nlo.FunctionGradient[i].ToString);

            End For;

            Debug.Unindent;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены результаты расчетов:


	- значение целевой функции;


	- решение;


	- градиент целевой функции.


См. также:


[ISmNonLinearOptimization](ISmNonLinearOptimization.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
