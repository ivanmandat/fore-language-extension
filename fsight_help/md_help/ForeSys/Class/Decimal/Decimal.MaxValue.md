# Decimal.MaxValue

Decimal.MaxValue
-


# Decimal.MaxValue


## Синтаксис


MaxValue: Decimal;


## Описание


Свойство MaxValue возвращает
 максимальное значение типа Decimal.


## Пример


	Sub UserProc;

	Var

	    d: Decimal;

	Begin

	    d := Decimal.MaxValue;

	    Debug.WriteLine("Максимальное значение типа Decimal:" + d.ToString);

	End Sub UserProc;


После выполнения примера в консоль будет выведено
 максимальное значение типа Decimal, т.е. значение 7,922816E+28.


См. также:


[Decimal](Decimal.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
