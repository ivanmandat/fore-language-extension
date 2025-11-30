# INonLDVariables.Clear

INonLDVariables.Clear
-


# INonLDVariables.Clear


## Синтаксис


Clear;


## Описание


Метод Clear осуществляет удаление
 всех переменных из коллекции.


## Комментарии


Для удаления переменной из коллекции по ее индексу используйте метод
 [INonLDVariables.Remove](INonLDVariables.Remove.htm).


## Пример


Добавьте ссылку на системную сборку Cp.


	Sub UserProc;

	Var

	    Optima: NonLinearDecomposition;

	    Vars: INonLDVariables;

	    Vrbl: INonLDVariable;

	Begin

	    Optima := New NonLinearDecomposition.Create;

	    Vars := Optima.Variables;

	    Vrbl := Vars.Add("x1");

	    Vrbl := Vars.Add("x2");

	    Vars.Clear;

	    Debug.Writeline("Переменных в коллекции: " + Vars.Count);

	End Sub UserProc;


В результате выполнения примера будут удалены все переменные из коллекции.
 В окно консоли будет выведен размер коллекции.


См. также:


[INonLDVariables](INonLDVariables.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
