# DateTime.AddYears

DateTime.AddYears
-


# DateTime.AddYears


## Синтаксис


AddYears(Value: DateTime; Count: Integer): DateTime;


## Параметры


Value. Исходная дата;


Count. Количество добавляемых
 лет.


## Описание


Метод AddYears добавляет к исходной
 дате указанное количество лет.


## Пример


	Sub UserProc;

	Var

	    DT, DT1, DT2: DateTime;

	Begin

	    DT := DateTime.Parse("01.01.2004 00:00:00");

	    DT1 := DateTime.AddYears(DT, 1);

	    DT2 := DateTime.AddYears(DT, -3);

	End Sub UserProc;


В результате, в переменных «DT», «DT1» и «DT2» будут находиться значения:


«DT» - «01.01.2004»


«DT1» - «01.01.2005»


«DT2» - «01.01.2001»


См. также:


[DateTime](DateTime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
