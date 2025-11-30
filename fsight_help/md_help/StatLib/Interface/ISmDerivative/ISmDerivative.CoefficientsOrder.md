# ISmDerivative.CoefficientsOrder

ISmDerivative.CoefficientsOrder
-


# ISmDerivative.CoefficientsOrder


## Синтаксис


CoefficientsOrder: String;


## Описание


Свойство CoefficientsOrder определяет
 переменные, используемые в функции.


## Комментарии


Функцию определяет свойство [ISmDerivative.Expression](ISmDerivative.Expression.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    AnDeriv: ISmDerivative;

    ArgVals: Array[0..3] Of Double;

    i, res, size: Integer;

Begin

    AnDeriv := New SmDerivative.Create;

    // Задаём выражение
 для дифференцирования

    AnDeriv.Expression := "A1 + A2 * A2 + A3 * A3 * A2";

    // Указываем порядок переменных

    AnDeriv.CoefficientsOrder := "A1;A2;A3;A4";

    // Задаём переменные дифференцирования

    AnDeriv.DiffVariables := "A2;A1";

    // Задаём значения переменных

    ArgVals[0] := 1.5;

    ArgVals[1] := 2.0;

    ArgVals[2] := 2.5;

    ArgVals[3] := Double.Nan;

    AnDeriv.VariablesValues := ArgVals;

    // Указываем, что рассчитываются аналитические производные

    AnDEriv.UseAnalyticCalc := True;

    res := AnDeriv.Execute;

    // Выводим результаты расчёта

    Debug.WriteLine("Статус выполнения: " + res.ToString);

    Debug.WriteLine(AnDeriv.Errors);

    For i := 0 To AnDeriv.Warnings.Length - 1 Do

        Debug.WriteLine(AnDeriv.Warnings[i]);

    End For;

    If res = 0 Then

        Debug.WriteLine("== Аналитические производные ==");

        size := AnDeriv.DerivativeExpressions.Length;

        For i := 0 To size - 1 Do

            Debug.Write("  - выражение производной: ");

            Debug.WriteLine(AnDeriv.DerivativeExpressions[i]);

            Debug.Write("  - значение производной: ");

            Debug.WriteLine(AnDeriv.DerivativeValues[i]);

            Debug.WriteLine("");

        End For;

        Debug.WriteLine("Значение функции: " + Anderiv.FunctionValue.ToString);

    End If;

    Debug.WriteLine("");

    // Указываем, что рассчитываются приближенные значения частных производных

    AnDEriv.UseAnalyticCalc := False;

    // Задаём приращение аргумента

    AnDEriv.Increment := 0.00000003;

    res := AnDeriv.Execute;

    // Выводим результаты расчёта

    Debug.WriteLine("Статус выполнения: " + res.ToString);

    Debug.WriteLine(AnDeriv.Errors);

    For i := 0 To AnDeriv.Warnings.Length - 1 Do

        Debug.WriteLine(AnDeriv.Warnings[i]);

    End For;

    If res = 0 Then

        Debug.WriteLine("== Приближенные значения частных производных ==");

        size := AnDeriv.DerivativeValues.Length;

        For i := 0 To size - 1 Do

            Debug.WriteLine(AnDeriv.DerivativeValues[i]);

        End For;

        Debug.WriteLine("Значение функции: " + Anderiv.FunctionValue.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены результаты вычисления
 функции с помощью аналитических производных и с помощью приближенных значений
 частных производных.


См. также:


[ISmDerivative](ISmDerivative.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
