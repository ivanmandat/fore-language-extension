# INonLDVariables.FindById

INonLDVariables.FindById
-


# INonLDVariables.FindById


## Синтаксис


FindById(Id:String): [INonLDVariable](../INonLDVariable/INonLDVariable.htm);


## Параметры


Id. Идентификатор искомой переменной.


## Описание


Метод FindById осуществляет
 поиск переменной в коллекции по ее идентификатору.


## Пример


Для выполнения примера предполагается наличие переменной «Optima», содержащей
 систему нелинейных уравнений и параметры ее расчета. В систему уравнений
 должна входить переменная с идентификатором «x1».


Добавьте ссылки на системные сборки: Cp.


	Sub UserProc;

	Var

	    Optima: NonLinearDecomposition;

	    PeriodL, i: Integer;

	    Vars: INonLDVariables;

	    Vrbl: INonLDVariable;

	    Res: INonLoResults;

	    val: Double;

	Begin

	    // Расчет системы

	    PeriodL := 4;

	    Res := Optima.Evaluate(PeriodL) As INonLoResults;

	    Debug.WriteLine(Res.ErrorMsg);

	    // Вывод результатов

	    If (Res.Status = 0) Then

	        Vars := Optima.Variables;

	        Vrbl := Vars.FindById("x1");

	        Debug.WriteLine("Переменная: x1");

	        For i := 0 To PeriodL - 1 Do

	            Val := Res.VarValues(Vrbl.Id)[i];

	            Debug.WriteLine(Val);

	        End For;

	    End If;

	End Sub UserProc;


После выполнения примера будет создана и рассчитана система нелинейных
 уравнений. Данные переменной «x1» будут выведены в окно консоли.


См. также:


[INonLDVariables](INonLDVariables.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
