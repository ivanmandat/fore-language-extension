# DateTime.DayOfWeek

DateTime.DayOfWeek
-


# DateTime.DayOfWeek


## Синтаксис


DayOfWeek: Integer;


## Описание


Свойство DayOfWeek возвращает
 номер дня недели в текущей переменной.


## Комментарии


Допустимые значения:


1 - Понедельник;


2 - Вторник;


3 - Среда;


4 - Четверг;


5 - Пятница;


6 - Суббота;


0 - Воскресенье.


## Пример


	Sub UserProc;

	Var

	    DT: DateTime;

	    i, i1: Integer;

	Begin

	    DT := DateTime.Now;

	    i := DT.DayOfWeek;

	    DT := DateTime.AddMonths(DT, 1);

	    i1 := DT.DayOfWeek;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться номер дня
 текущей недели, а в переменной «i1» будет содержаться номер дня недели,
 соответствующего текущему числу через месяц.


См. также:


[DateTime](DateTime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
