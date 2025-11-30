# INonLDVariables.Remove

INonLDVariables.Remove
-


# INonLDVariables.Remove


## Синтаксис


Remove(Index: Integer): Boolean;


## Параметры


Index. Индекс удаляемой переменной.


## Описание


Метод Remove осуществляет удаление
 переменной из коллекции по ее индексу. Метод возвращает значение True, если удаление прошло
 успешно.


## Пример


Для выполнения примера предполагается наличие переменной «Optima», содержащей
 систему нелинейных уравнений и параметры ее расчета.


Добавьте ссылки на системные сборки: Cp.


	Sub UserProc;

	Var

	    Optima: NonLinearDecomposition;

	    PeriodL, j: Integer;

	    Vars: INonLDVariables;

	    Res: INonLoResults;

	Begin

	    // Расчет системы

	    PeriodL := 4;

	    Res := Optima.Evaluate(PeriodL) As INonLoResults;

	    Debug.WriteLine(Res.ErrorMsg);

	    // Вывод результатов

	    If (Res.Status = 0) Then

	        Vars := Optima.Variables;

	        For j := 0 To Vars.Count - 1 Do

	            Vars.Remove(0);

	        End For;

	    End If;

	End Sub UserProc;


После выполнения примера будет создана и рассчитана система нелинейных
 уравнений. Коллекция переменных будет очищена.


См. также:


[INonLDVariables](INonLDVariables.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
