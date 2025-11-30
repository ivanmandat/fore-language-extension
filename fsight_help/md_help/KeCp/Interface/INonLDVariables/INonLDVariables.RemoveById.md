# INonLDVariables.RemoveById

INonLDVariables.RemoveById
-


# INonLDVariables.RemoveById


## Синтаксис


RemoveById(Id: String): Boolean;


## Параметры


Id. Идентификатор удаляемой
 переменной.


## Описание


Метод RemoveById осуществляет
 удаление переменной из коллекции по ее идентификатору. Метод возвращает
 значение True, если удаление прошло
 успешно.


## Пример


Для выполнения примера предполагается наличие переменной «Optima», содержащей
 систему нелинейных уравнений и параметры ее расчета. В систему уравнений
 должна входить переменная с идентификатором «x1».


Добавьте ссылки на системные сборки: Cp.


	Sub UserProc;

	Var

	    Optima: NonLinearDecomposition;

	    PeriodL, j, i: Integer;

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

	        For j := 0 To Vars.Count - 1 Do

	            Vrbl := Vars.Item(j);

	            Debug.WriteLine("Переменная: " + Vrbl.Id);

	            For i := 0 To PeriodL - 1 Do

	                Val := Res.VarValues(Vrbl.Id)[i];

	                Debug.WriteLine(Val);

	            End For;

	            Debug.WriteLine("-----");

	        End For;

	        Vars.RemoveById("x1");

	    End If;

	End Sub UserProc;


После выполнения примера будет создана и рассчитана система нелинейных
 уравнений. Рассчитанные переменные системы будут выведены в окно консоли,
 затем переменная «x1» будет удалена из коллекции.


См. также:


[INonLDVariables](INonLDVariables.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
