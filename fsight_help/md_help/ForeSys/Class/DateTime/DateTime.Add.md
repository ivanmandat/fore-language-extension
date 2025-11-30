# DateTime.Add

DateTime.Add
-


# DateTime.Add


## Синтаксис


Add(Value: DateTime; Increment: TimeSpan): DateTime;


## Параметры


Value. Дата, которую необходимо
 увеличить;


Increment. Значение, на которое
 будет увеличена указанная дата.


## Описание


Метод Add увеличивает дату на
 указанное значение.


## Пример


	Sub UserProc;

	Var

	    DT, DT1: DateTime;

	Begin

	    DT := DateTime.Parse("01.01.2002 00:00:00");

	    DT1 := DateTime.Add(DT, TimeSpan.Compose(2, 2, 2, 2, 2));

	End Sub UserProc;


После выполнения примера в переменной «DT1» будет находиться значение
 «DT», увеличенное на 2 дня, 2 часа, 2 минуты, 2 секунды и 2 миллисекунды.


См. также:


[DateTime](DateTime.htm) | [DateTime.Subtract](DateTime.Subtract.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
