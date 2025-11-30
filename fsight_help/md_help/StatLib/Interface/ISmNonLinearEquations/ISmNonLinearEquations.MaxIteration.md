# ISmNonLinearEquations.MaxIteration

ISmNonLinearEquations.MaxIteration
-


# ISmNonLinearEquations.MaxIteration


## Синтаксис


MaxIteration: Integer;


## Описание


Свойство MaxIteration определяет
 максимальное число итераций, за которое должен осуществляться поиск решения.


## Комментарии


Свойство UseDerivatives не учитывается,
 если для решения системы нелинейных уравнений используется модификация
 гибридного алгоритма, реализованного в библиотеке математических методов
 MINPACK-1, т.е. [ISmNonLinearEquations.MethodType](ISmNonLinearEquations.MethodType.htm)
 = NonLinearEquationsType.HMethod.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    Eqs: ISmNonLinearEquations;

	    Funcs: Array [0..2] Of String;

	    inits: Array[0..2] Of Double;

	    res: Integer;


	    Sub Print(Data: Array Of Double);

	    Var

	        i: Integer;

	        CI: ICultureInfo;

	    Begin

	        CI := CultureInfo.Current;

	        Debug.WriteLine("---Begin---");

	        For i := 0 To Data.Length - 1 Do

	            If Double.IsNan(Data[i]) Then

	                Debug.WriteLine("---empty---");

	            Else

	                Debug.WriteLine(i.ToString + ", " + CI.FormatDoublePrec(Data[i], 4));

	            End If;

	        End For;

	        Debug.WriteLine("---End---");

	    End Sub Print;

	Begin

	    Eqs := New SmNonLinearEquations.Create As ISmNonLinearEquations;

	    funcs[0] := "X1-22+0.5*X2-X3";

	    funcs[1] := "X2-26.5+2*X1+0.5*X3";

	    funcs[2] := "X3+9-X1+6*X2";

	    Eqs.Functions := Funcs;

	    Eqs.CoefficientsOrder := "X1;X2;X3";

	    inits[0] := 10; //x1

	    inits[1] := 0; //x2

	    inits[2] := -1; //x3

	    Eqs.InitApproximation := inits;

	    Eqs.MethodType := NonLinearEquationsType.MinErrorMethod;

	    Eqs.MaxIteration := 1000;

	    res := Eqs.Execute;

	    If res <> 0 Then

	        Debug.WriteLine(Eqs.Errors);

	    Else

	        Print(Eqs.Solution);

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведено решение для системы
 нелинейных уравнений:


Выполнение модуля начато


---Begin---


0, 13,9999


1, 2,0000


2, -7,0002


---End---


Выполнение модуля завершено


См. также:


[ISmNonLinearEquations](ISmNonLinearEquations.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
