# DateTime.Compose

DateTime.Compose
-


# DateTime.Compose


## Синтаксис


Compose(


Year: Integer;


Month: Integer;


Day: Integer;


Hour: Integer;


Minute: Integer;


Second: Integer;


Millisecond: Integer):
 DateTime;


## Параметры


Year. Исходный год;


Month. Исходный месяц;


Day. Исходный день;


Hour. Исходный час;


Minute. Исходная минута;


Second. Исходная секунда;


Millisecond. Исходная миллисекунда.


## Описание


Метод Compose формирует значение
 даты и времени из указанных входных параметров.


## Комментарии


Указываемые компоненты даты и времени должны соответствовать допустимому
 диапазону, который установлен для типа данных [DateTime](Fore.chm::/03_dataTypesFore_DataTypes.htm).
 При указании даты меньше допустимой автоматически формируется дата, к
 которой добавлено текущее столетие. При указании даты больше допустимой
 - генерируется исключительная ситуация.


## Пример


	Sub UserProc;

	Var

	    DT: DateTime;

	Begin

	    DT := DateTime.Compose(2004, 1, 21, 14, 20, 5, 15);

	End Sub UserProc;


После выполнения примера в переменной «DT» будет содержаться дата 21.01.2004
 и время 14:20:05.


См. также:


[DateTime](DateTime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
