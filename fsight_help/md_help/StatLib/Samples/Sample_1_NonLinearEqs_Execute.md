# Расчет системы нелинейных уравнений

Расчет системы нелинейных уравнений
-


# Расчет системы нелинейных уравнений


В данном примере рассмотрено создание системы нелинейных уравнений:


	- X1-(1-0.2*X2-0.1*X3)


	- X2-(1.2-0.1*X1-0.2*X3)


	- X3-(0.8-0.1*X1-0.1*X2)


Система будет рассчитана модифицированным методом простых итераций с
 параметрами:


	- максимальное число итераций - 1000


	- точность решения - 0.00000000001.


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    Eqs: ISmNonLinearEquations;

    Funcs: Array[3] Of String;

    inits: Array[3] Of Double;

    d: Double;

    i, res: Integer;

Begin

    Eqs := New SmNonLinearEquations.Create As ISmNonLinearEquations;

    // Задаем уравнения

    funcs[0] := "X1-(1-0.2*X2-0.1*X3)";

    funcs[1] := "X2-(1.2-0.1*X1-0.2*X3)";

    funcs[2] := "X3-(0.8-0.1*X1-0.1*X2)";

    Eqs.Functions := Funcs;

    // Задаем начальные приближения

    inits[0] := -1000;

    inits[1] := 120000;

    inits[2] := 0.8;

    Eqs.InitApproximation := inits;

    // Задаем порядок коэффициентов

    Eqs.CoefficientsOrder := "X1;X2;X3";

    // Задаем максимальное число итераций, за которое должен осуществляться поиск решения

    Eqs.MaxIteration := 1000;

    // Задаем точность решения

    Eqs.Tolerance := 0.00000000001;

    // Задаем метод расчета системы

    Eqs.MethodType := NonLinearEquationsType.IterationsMethod;

    // Выполнение расчета

    res := Eqs.Execute;

    Debug.WriteLine(Eqs.Errors);

    // Вывод результатов

    If (res = 0) Then

        For i := 0 To (Eqs.Solution.Length - 1) Do

            d := Eqs.Solution[i];

            Debug.WriteLine("Значение X" + (i + 1).ToString + ": " + d.ToString);

        End For;

        Debug.WriteLine("Значения функций:");

        For i := 0 To Eqs.FunctionValues.Length - 1 Do

            d := Eqs.FunctionValues[i];

            Debug.WriteLine(Eqs.Functions[i] + " = " + d.ToString);

        End For;

    End If;

End Sub UserProc;


После выполнения примера будет создана система нелинейных уравнений.
 Затем она будет рассчитана с заданными параметрами. Результаты будут выведены
 в окно консоли:


Выполнение модуля начато


Нет ошибок


Значение X1: 0.737172774869517


Значение X2: 1.00104712041883


Значение X3: 0.626178010471165


Значения функций:


X1-(1-0.2*X2-0.1*X3) = 3.99458244260131e-13


X2-(1.2-0.1*X1-0.2*X3) = 1.59872115546023e-14


X3-(0.8-0.1*X1-0.1*X2) = 0


Выполнение модуля завершено


См. также:


[Примеры](Samples_main.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
