# DateTime.Year

DateTime.Year
-


# DateTime.Year


## Синтаксис


Year: Integer;


## Описание


Свойство Year возвращает номер
 года из текущей переменной.


## Пример


	Sub UserProc;

	Var

	    i: Integer;

	    DT: DateTime;

	Begin

	    DT := DateTime.Parse("30.03.2004 00:00:00");

	    DT := DateTime.AddYears(DT, -4);

	    i := DT.Year;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться значение
 2000.


См. также:


[DateTime](DateTime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
