# DateTime.Date

DateTime.Date
-


# DateTime.Date


## Синтаксис


Date: DateTime;


## Описание


Свойство Date возвращает компоненту
 даты из текущей переменной.


## Пример


	Sub UserProc;

	Var

	    DT, DT1: DateTime;

	Begin

	    DT := DateTime.Parse("30.03.2002 12:12:00");

	    DT1 := DT.Date;

	End Sub UserProc;


После выполнения примера в переменной «DT1» будет содержаться дата 30.03.2002.
 Компонента времени у переменной «DT1» будет пустой (значение «0:00:00»).


См. также:


[DateTime](DateTime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
