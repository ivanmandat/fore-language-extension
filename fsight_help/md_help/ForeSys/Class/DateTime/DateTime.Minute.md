# DateTime.Minute

DateTime.Minute
-


# DateTime.Minute


## Синтаксис


Minute: Integer;


## Описание


Свойство Minute возвращает количество
 минут в текущей переменной.


## Пример


	Sub UserProc;

	Var

	    DT: DateTime;

	    i, i1: Integer;

	Begin

	    DT := DateTime.Now;

	    DT := DateTime.AddMinutes(DT, 10);

	    i := DT.Minute;

	    DT := DateTime.AddMinutes(DT, -15);

	    i1 := DT.Minute;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 минут текущего времени, увеличенных на 10, а в переменной «i1» - количество
 минут текущего времени, уменьшенных на 5.


См. также:


[DateTime](DateTime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
