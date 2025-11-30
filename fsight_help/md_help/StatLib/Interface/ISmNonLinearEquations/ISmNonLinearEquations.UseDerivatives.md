# ISmNonLinearEquations.UseDerivatives

ISmNonLinearEquations.UseDerivatives
-


# ISmNonLinearEquations.UseDerivatives


## Синтаксис


UseDerivatives: Boolean;


## Описание


Свойство UseDerivatives определяет,
 будут ли при поиске решения использоваться аналитические производные.


## Комментарии


Допустимые значения:


	- True. Значение по умолчанию.
	 При поиске решения используются аналитические производные;


	- False. При поиске решения
	 используются численные производные.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    Eqs: ISmNonLinearEquations;

	    Funcs: Array [0..2] Of String;

	    inits: Array[0..2] Of Double;

	    res, i: Integer;

	Begin

	    Eqs := New SmNonLinearEquations.Create;

	    funcs[0] := "X1-22+0.5*X2-X3";

	    funcs[1] := "X2-26.5+2*X1+0.5*X3";

	    funcs[2] := "X3+9-X1+6*X2";

	    Eqs.Functions := Funcs;

	    Eqs.CoefficientsOrder := "X1;X2;X3";

	    inits[0] := 10; //x1

	    inits[1] := 0; //x2

	    inits[2] := -1; //x3

	    Eqs.InitApproximation := inits;

	    Eqs.MethodType := NonLinearEquationsType.HMethod;

	    Eqs.UseDerivatives := True;

	    Eqs.Tolerance := 0.0001;

	    res := Eqs.Execute;

	    If res <> 0 Then

	        Debug.WriteLine(Eqs.Errors);

	        Else

	            For i := 0 To Eqs.Functions.Length-1 Do

	                Debug.WriteLine((i+1).ToString + ". " + Eqs.Solution[i].ToString);

	            End For;

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведено решение для системы
 нелинейных уравнений:


1. 14


2. 2


3. -7


См. также:


[ISmNonLinearEquations](ISmNonLinearEquations.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
