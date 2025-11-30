# ISmNonLinearEquations.CoefficientsOrder

ISmNonLinearEquations.CoefficientsOrder
-


# ISmNonLinearEquations.CoefficientsOrder


## Синтаксис


CoefficientsOrder: String;


## Описание


Свойство CoefficientsOrder определяет
 порядок коэффициентов.


## Комментарии


Если коэффициентов несколько, то они указываются через точку с запятой
 «;».


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    Eqs: ISmNonLinearEquations;

    Funcs: Array[0..2] Of String;

    inits: Array[0..2] Of Double;

    res, i: Integer;

Begin

    Eqs := New SmNonLinearEquations.Create;

    // Задаем нелинейные уравнения

    funcs[0] := "X1-22+0.5*X2-X3";

    funcs[1] := "X2-26.5+2*X1+0.5*X3";

    funcs[2] := "X3+9-X1+6*X2";

    Eqs.Functions := Funcs;

    // Задаем порядок коэффициентов

    Eqs.CoefficientsOrder := "X1;X2;X3";

    // Задаем начальные приближения

    inits[0] := 10; //x1

    inits[1] := 0; //x2

    inits[2] := -1; //x3

    Eqs.InitApproximation := inits;

    // Задаем метод решения системы

    Eqs.MethodType := NonLinearEquationsType.HMethod;

    // Выполняем расчет

    res := Eqs.Execute;

    If res <> 0 Then

        Debug.WriteLine(Eqs.Errors);

    // Выводим результаты расчета

    Else

        Debug.WriteLine("Решение: ");

        Debug.Indent;

        For i := 0 To Eqs.Functions.Length - 1 Do

            Debug.WriteLine(i.ToString + ". " + Eqs.Solution[i].ToString);

        End For;

        Debug.Unindent;

        Debug.WriteLine("Фактически использованные начальные приближения:");

        Debug.Indent;

        For i := 0 To Eqs.InitApproximationActual.Length - 1 Do

            Debug.WriteLine(i.ToString + ". " + Eqs.InitApproximationActual[i].ToString);

        End For;

        Debug.Unindent;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведено решение для системы
 нелинейных уравнений и фактически использованные начальные приближения.


См. также:


[ISmNonLinearEquations](ISmNonLinearEquations.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
