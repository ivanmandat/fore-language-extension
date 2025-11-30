# DateTime.Day

DateTime.Day
-


# DateTime.Day


## Синтаксис


Day: Integer;


## Описание


Свойство Day возвращает число
 месяца из текущей переменной.


## Пример


	Sub UserProc;

	Var

	    i, i1: Integer;

	    DT, DT1: DateTime;

	Begin

	    DT := DateTime.Parse("30.03.2002 00:00:00");

	    DT1 := DateTime.Parse("25.03.2002 00:00:00");

	    i := DT.Day;

	    i1 := DT1.Day;

	End Sub UserProc;


После выполнения примера в переменных «i» и «i1» будут содержаться значения
 30 и 25 соответственно.


См. также:


[DateTime](DateTime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
