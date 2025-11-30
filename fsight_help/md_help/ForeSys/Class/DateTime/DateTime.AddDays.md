# DateTime.AddDays

DateTime.AddDays
-


# DateTime.AddDays


## Синтаксис


AddDays(Value: DateTime; Count: Integer): DateTime;


## Параметры


Value. Исходная дата;


Count. Количество добавляемых
 дней.


## Описание


Метод AddDays добавляет к исходной
 дате указанное количество дней.


## Пример


	Sub UserProc;

	Var

	    DT, DT1, DT2, DT3: DateTime;

	Begin

	    DT := DateTime.Parse("01.01.2002 00:00:00");

	    DT1 := DateTime.AddDays(DT, 1);

	    DT2 := DateTime.AddDays(DT, 48);

	    DT3 := DateTime.AddDays(DT, 368);

	End Sub UserProc;


После выполнения примера в переменных «DT», «DT1», «DT2» и «DT3» будут
 содержаться следующие значения:


«DT» - «01.01.2002»


«DT1» - «02.01.2002»


«DT2» - «18.02.2002»


«DT3» - «04.01.2003»


См. также:


[DateTime](DateTime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
