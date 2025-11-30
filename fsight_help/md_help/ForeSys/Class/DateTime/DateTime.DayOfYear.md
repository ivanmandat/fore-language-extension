# DateTime.DayOfYear

DateTime.DayOfYear
-


# DateTime.DayOfYear


## Синтаксис


DayOfYear: Integer;


## Описание


Свойство DayOfYear возвращает
 номер дня текущей переменной, начиная с начала года.


## Пример


	Sub UserProc;

	Var

	    DT: DateTime;

	    i: Integer;

	Begin

	    DT := DateTime.Now;

	    i := DT.DayOfYear;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться номер дня
 в текущем году.


См. также:


[DateTime](DateTime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
