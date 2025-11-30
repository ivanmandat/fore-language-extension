# DateTime.Subtract

DateTime.Subtract
-


# DateTime.Subtract


## Синтаксис


Subtract(Value: DateTime; Decrement: TimeSpan):
 DateTime;


## Параметры


Value. Дата, которую необходимо
 уменьшить;


Decrement. Значение, на которое
 будет уменьшена указанная дата.


## Описание


Метод Subtract уменьшает дату,
 передаваемую посредством входного параметра Value,
 на значение, передаваемое в параметре Decrement.


## Пример


	Sub UserProc;

	Var

	    d, d1: DateTime;

	Begin

	    d := DateTime.Parse("01.01.2002 00:00:00");

	    d1 := DateTime.Subtract(d, Timespan.Compose(2, 2, 2, 2, 2));

	End Sub UserProc;


После выполнения примера в переменной «d1» будет содержаться значение
 «d», уменьшенное на 2 дня, 2 часа, 2 минуты, 2 секунды и 2 миллисекунды.


См. также:


[DateTime](DateTime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
