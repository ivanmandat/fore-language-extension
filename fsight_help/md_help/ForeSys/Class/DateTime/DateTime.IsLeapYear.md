# DateTime.IsLeapYear

DateTime.IsLeapYear
-


# DateTime.IsLeapYear


## Синтаксис


IsLeapYear(Year: Integer): Boolean;


## Параметры


Year.
 Год, который необходимо проверить.


## Описание


Метод IsLeapYear возвращает
 признак високосного года.


## Пример


	Sub UserProc;

	Var

	    b, b1: Boolean;

	Begin

	    b := DateTime.IsLeapYear(2000);

	    b1 := DateTime.IsLeapYear(2001);

	End Sub UserProc;


После выполнения примера в переменной «b» будет содержаться значение
 «True», а в переменной «b1» - значение «False».


См. также:


[DateTime](DateTime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
