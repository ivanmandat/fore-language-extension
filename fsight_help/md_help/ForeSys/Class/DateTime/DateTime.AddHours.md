# DateTime.AddHours

DateTime.AddHours
-


# DateTime.AddHours


## Синтаксис


AddHours(Value: DateTime; Count: Integer): DateTime;


## Параметры


Value. Исходная дата;


Count. Количество добавляемых
 часов.


## Описание


Метод AddHours добавляет к исходной
 дате указанное количество часов.


## Пример


	Sub UserProc;

	Var

	    DT, DT1, DT2, DT3, DT4: DateTime;

	Begin

	    DT := DateTime.Parse("01.01.2004 10:20:20");

	    DT1 := DateTime.AddHours(DT, 1);

	    DT2 := DateTime.AddHours(DT, -3);

	    DT3 := DateTime.AddHours(DT, 190);

	    DT4 := DateTime.AddHours(DT, -590);

	End Sub UserProc;


После выполнения примера в переменных «DT», «DT1», «DT2», «DT3» и «DT4»
 будут находиться значения:


«DT» - «01.01.2004 10:20:20»


«DT1» - «01.01.2004 11:20:20»


«DT2» - «01.01.2004 7:20:20»


«DT3» - «09.01.2004 8:20:20»


«DT4» - «07.12.2003 20:20:20»


См. также:


[DateTime](DateTime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
