# DateTime.AddMinutes

DateTime.AddMinutes
-


# DateTime.AddMinutes


## Синтаксис


AddMinutes(Value: DateTime; Count: Integer): DateTime;


## Параметры


Value. Исходная дата;


Count. Количество добавляемых
 минут.


## Описание


Метод AddMinutes добавляет к
 исходной дате указанное количество минут.


## Пример


	Sub UserProc;

	Var

	    DT, DT1, DT2, DT3, DT4: DateTime;

	Begin

	    DT := DateTime.Parse("01.01.2004 10:20:20");

	    DT1 := DateTime.AddMinutes(DT, 10);

	    DT2 := DateTime.AddMinutes(DT, -20);

	    DT3 := DateTime.AddMinutes(DT, 190);

	    DT4 := DateTime.AddMinutes(DT, -2300);

	End Sub UserProc;


В результате, в переменных «DT», «DT1», «DT2», «DT3» и «DT4» будут находиться
 значения:


«DT» - «01.01.2004 10:20:20»


«DT1» - «01.01.2004 10:30:20»


«DT2» - «01.01.2004 10:00:20»


«DT3» - «01.01.2004 13:30:20»


«DT4» - «30.12.2003 20:00:20»


См. также:


[DateTime](DateTime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
