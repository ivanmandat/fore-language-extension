# ISmBoxConstrainedOptimization.Callback

ISmBoxConstrainedOptimization.Callback
-


# ISmBoxConstrainedOptimization.Callback


## Синтаксис


Callback: [ICallbackNLOptimization](../ICallbackNLOptimization/ICallbackNLOptimization.htm);


## Описание


Свойство Callback определяет
 пользовательский класс, используемый для расчёта значений переменных и
 целевой функции.


## Комментарии


Если используется свойство Callback
 и если задано [ISmBoxConstrainedOptimization.UseDerivatives](ISmBoxConstrainedOptimization.UseDerivatives.htm) = True, то для вычисления производных
 будут использоваться методы GetObjFunPartialDeriv
 и GetConstraintPartialDeriv, определенные
 в [Callback](../ICallbackNLOptimization/ICallbackNLOptimization.GetConstraintPartialDeriv.htm#callbackbco),
 а если задано [ISmBoxConstrainedOptimization.UseDerivatives](ISmBoxConstrainedOptimization.UseDerivatives.htm) = False, для получения значений производных
 будет вычисляться градиент функции.


Для получения значения целевой функции используйте свойство [ISmBoxConstrainedOptimization.OptimalFunctionValue](ISmBoxConstrainedOptimization.OptimalFunctionValue.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


В примере используется пользовательский класс CallBackBCO,
 описание которого приведено в [ICallbackNLOptimization.GetConstraintPartialDeriv](../ICallbackNLOptimization/ICallbackNLOptimization.GetConstraintPartialDeriv.htm#callbackbco).


			Sub UserProc;

Var

    p1: SmBoxConstrainedOptimization;

    CallBack : CallBackBCO;

    ub, lb, init: Array[3] Of Double;

    res, i: Integer;

Begin

    p1 := New SmBoxConstrainedOptimization.Create;

    ub[0] := 5;  ub[1] := 2;  ub[2] := 1;

    lb[0] := -1; lb[1] := -1; lb[2] := -1;

    // Область определения:

    p1.Boundary.BoundaryUpper := ub;

    p1.Boundary.BoundaryLower := lb;

    // Порядок коэффициентов:

    p1.CoefficientsOrder := "a;b;c";

    // Целевая функция:

    p1.FunctionString := "a-4*b+2*c";

    // Начальные приближения:

    init[0]:=0; init[1]:=-0.5; init[2]:=1;

    p1.InitApproximation:=init;

    // Использование производных:

    p1.UseDerivatives := False;

    // CallBack:

    CallBack := New CallBackBCO.Create;

    Callback.MAXCOUNT := 1000;

    Callback.CallCount := 0;

    p1.Callback := CallBack;

    // Максимальное число итераций и точность:

    p1.MaxIteration := 500;

    p1.Tolerance := 0.00001;

    res := p1.Execute;

    If res=0 Then

        Debug.WriteLine("=== Целевая функция ===");

        Debug.Indent;

        Debug.WriteLine("CF = " + p1.FunctionString);

        Debug.WriteLine(lb[0].ToString + " <= a <= " + ub[0].ToString);

        Debug.WriteLine(lb[1].ToString + " <= b <= " + ub[1].ToString);

        Debug.WriteLine(lb[2].ToString + " <= c <= " + ub[2].ToString);

        Debug.WriteLine("Значение целевой функции: " + p1.OptimalFunctionValue.ToString);

        Debug.WriteLine("Значения целевой функции по итерациям:");

        For i := 0 To p1.ObjValByIter.Length - 1 Do

            Debug.WriteLine(i.ToString + ". " + p1.ObjValByIter[i].ToString);

        End For;

        Debug.Unindent;

        Debug.WriteLine("=== Решение ===");

        Debug.Indent;

        For i := 0 To p1.Solution.Length - 1 Do

            Debug.WriteLine(i.ToString + ". " + p1.Solution[i].ToString);

        End For;

        Debug.Unindent;

        Debug.WriteLine("=== Градиент целевой функции ===");

        Debug.Indent;

        For i := 0 To p1.FunctionGradient.Length - 1 Do

            Debug.WriteLine(i.ToString + ". " + p1.FunctionGradient[i].ToString);

        End For;

        Debug.Unindent;

        Else

            Debug.WriteLine(p1.Errors);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены:


	- выражение для целевой функции;


	- значения целевой функции;


	- решение;


	- градиент целевой функции.


См. также:


[ISmBoxConstrainedOptimization](ISmBoxConstrainedOptimization.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
