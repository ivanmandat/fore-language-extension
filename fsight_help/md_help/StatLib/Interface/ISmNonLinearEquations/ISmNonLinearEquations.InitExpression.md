# ISmNonLinearEquations.InitExpression

ISmNonLinearEquations.InitExpression
-


# ISmNonLinearEquations.InitExpression


## Синтаксис


InitExpression: Integer;


## Описание


Метод InitExpression осуществляет
 проверку корректности введенных переменных и уравнений без выполнения
 статистического метода.


## Комментарии


Если входные параметры заданы корректно, то возвращает значение «0», иначе возвращает код ошибки,
 просмотреть которую можно с помощью свойства [IStatMethod.ErrorByStatus](../IStatMethod/IStatMethod.ErrorByStatus.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    Eqs: ISmNonLinearEquations;

    Funcs: Array[0..2] Of String;

    inits: Array[0..2] Of Double;

Begin

    Eqs := New SmNonLinearEquations.Create;

    funcs[0] := "X1-22+0.5*X2-X3";

    funcs[1] := "X2-26.5+2*X1+0.5*X3";

    funcs[2] := "X3+9-X1+6*X2";

    Eqs.Functions := Funcs;

    Eqs.CoefficientsOrder := "X1;X2";

    Eqs.CalcInitExpressionMode := CalcInitExpressionType.Manual;

    inits[0] := 10; //x1

    inits[1] := 7; //x2

    inits[2] := -1; //x3

    Eqs.InitApproximation := inits;

    Eqs.MethodType := NonLinearEquationsType.MinErrorGaussNewtonMethod;

    Eqs.Tolerance := 0.0001;

    Debug.WriteLine("Код ошибки: " + Eqs.InitExpression.ToString);

    Debug.WriteLine(Eqs.ErrorByStatus(Eqs.InitExpression));

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведен код и текст
 ошибки:


Код ошибки: 102


Error 102: Количество начальных приближений не равно
 числу коэффициентов


См. также:


[ISmNonLinearEquations](ISmNonLinearEquations.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
