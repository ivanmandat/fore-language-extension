# DateTime.AddMonths

DateTime.AddMonths
-


# DateTime.AddMonths


## Синтаксис


AddMonths(Value: DateTime; Count: Integer): DateTime;


## Параметры


Value. Исходная дата;


Count. Количество добавляемых
 месяцев.


## Описание


Метод AddMonths добавляет к
 исходной дате указанное количество месяцев.


## Пример


	Sub UserProc;

	Var

	    DT, DT1, DT2: DateTime;

	Begin

	    DT := DateTime.Parse("01.01.2004 00:00:00");

	    DT1 := DateTime.AddMonths(DT, 1);

	    DT2 := DateTime.AddMonths(DT, 14);

	End Sub UserProc;


В результате, в переменных «DT», «DT1» и «DT2» будут находиться значения:


«DT» - «01.01.2004»


«DT1» - «01.02.2004»


«DT2» - «01.03.2005»


См. также:


[DateTime](DateTime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
