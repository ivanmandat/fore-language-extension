# DateTime.Second

DateTime.Second
-


# DateTime.Second


## Синтаксис


Second: Integer;


## Описание


Свойство Second возвращает количество
 секунд в текущей переменной.


## Пример


	Sub UserProc;

	Var

	    i: Integer;

	    DT: DateTime;

	Begin

	    DT := DateTime.Now;

	    i := DT.Second;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 секунд из переменной «DT».


См. также:


[DateTime](DateTime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
