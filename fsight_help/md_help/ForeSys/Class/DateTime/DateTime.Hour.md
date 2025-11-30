# DateTime.Hour

DateTime.Hour
-


# DateTime.Hour


## Синтаксис


Hour: Integer;


## Описание


Свойство Hour возвращает количество
 часов в текущей переменной.


## Пример


	Sub UserProc;

	Var

	    DT: DateTime;

	    i: Integer;

	Begin

	    DT := DateTime.Now;

	    i := DT.Hour;

	End Sub UserProc;


После выполнения примера в переменной «i» будет количество часов текущего
 времени.


См. также:


[DateTime](DateTime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
