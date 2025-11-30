# DateTime.AddSeconds

DateTime.AddSeconds
-


# DateTime.AddSeconds


## Синтаксис


AddSeconds(Value: DateTime; Count: Integer): DateTime;


## Параметры


Value. Исходная дата;


Count. Количество добавляемых
 секунд.


## Описание


Метод AddSeconds добавляет к
 исходной дате указанное количество секунд.


## Пример


	Sub UserProc;

	Var

	    DT, DT1, DT2, DT3, DT4: DateTime;

	Begin

	    DT := DateTime.Parse("01.01.2004 10:20:20");

	    DT1 := DateTime.AddSeconds(DT, 1);

	    DT2 := DateTime.AddSeconds(DT, 80);

	    DT3 := DateTime.AddSeconds(DT, 3600);

	    DT4 := DateTime.AddSeconds(DT, -90);

	End Sub UserProc;


В результате, в переменных «DT», «DT1», «DT2», «DT3» и «DT4» будут находиться
 значения:


«DT» - «01.01.2004 10:20:20»


«DT1» - «01.01.2004 10:20:21»


«DT2» - «01.01.2004 10:21:40»


«DT3» - «01.01.2004 11:20:20»


«DT4» - «01.01.2004 10:18:50»


См. также:


[DateTime](DateTime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
