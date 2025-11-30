# DateTime.DaysInMonth

DateTime.DaysInMonth
-


# DateTime.DaysInMonth


## Синтаксис


DaysInMonth(Month: Integer; Year: Integer): Integer;


## Параметры


Month. Номер месяца в указанном
 году;


Year. Год.


## Описание


Метод DaysInMonth возвращает
 количество дней в указанном месяце указанного года.


## Комментарии


В случае указания некорректных данных генерируется исключительная ситуация.


## Пример


	Sub UserProc;

	Var

	    i, i1: Integer;

	Begin

	    i := DateTime.DaysInMonth(1, 2003);

	    i1 := DateTime.DaysInMonth(2, 2008);

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться значение
 «31» - количество дней в январе 2003 г., в переменной «i1» - «29» количество
 дней в феврале 2008 г.


См. также:


[DateTime](DateTime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
