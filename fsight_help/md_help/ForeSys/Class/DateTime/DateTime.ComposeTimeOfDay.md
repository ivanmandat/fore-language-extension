# DateTime.ComposeTimeOfDay

DateTime.ComposeTimeOfDay
-


# DateTime.ComposeTimeOfDay


## Синтаксис


ComposeTimeOfDay(


Hour: Integer;


Minute: Integer;


Second: Integer;


Millisecond: Integer):
 DateTime;


## Параметры


Hour. Исходный час;


Minute. Исходная минута;


Second. Исходная секунда;


Millisecond. Исходная миллисекунда.


## Описание


Метод ComposeTimeOfDay формирует
 значение времени из указанных входных параметров.


## Пример


	Sub UserProc;

	Var

	    DT: DateTime;

	Begin

	    DT := DateTime.ComposeTimeOfDay(14, 20, 5, 15);

	End Sub UserProc;


После выполнения примера в переменной «DT» будет содержаться время 14:20:05.
 Значение даты у этой переменной будет минимальной.


См. также:


[DateTime](DateTime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
