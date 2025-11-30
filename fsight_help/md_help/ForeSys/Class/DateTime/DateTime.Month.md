# DateTime.Month

DateTime.Month
-


# DateTime.Month


## Синтаксис


Month: Integer;


## Описание


Свойство Month возвращает номер
 месяца из текущей переменной.


## Пример


	Sub UserProc;

	Var

	    i: Integer;

	    DT: DateTime;

	Begin

	    DT := DateTime.Parse("30.03.2002 00:00:00");

	    DT := DateTime.AddMonths(DT, 3);

	    i := DT.Month;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться значение
 6.


См. также:


[DateTime](DateTime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
