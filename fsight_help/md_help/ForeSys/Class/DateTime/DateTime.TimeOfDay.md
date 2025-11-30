# DateTime.TimeOfDay

DateTime.TimeOfDay
-


# DateTime.TimeOfDay


## Синтаксис


TimeOfDay: DateTime;


## Описание


Свойство TimeOfDay возвращает
 компоненту времени из текущей переменной.


## Пример


	Sub UserProc;

	Var

	    DT, DT1: DateTime;

	Begin

	    DT := DateTime.Parse("30.03.2002 14:15:20");

	    DT1 := DT.TimeOfDay;

	End Sub UserProc;


После выполнения примера в переменной «DT» будет содержаться дата, полученная
 путем преобразования из указанной символьной строки. В переменной «DT1»
 будет содержаться компонента времени из даты «DT».


См. также:


[DateTime](DateTime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
