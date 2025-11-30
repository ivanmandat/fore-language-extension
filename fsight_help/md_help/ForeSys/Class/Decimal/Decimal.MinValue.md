# Decimal.MinValue

Decimal.MinValue
-


# Decimal.MinValue


## Синтаксис


MinValue: Decimal;


## Описание


Свойство MinValue возвращает
 минимальное значение типа Decimal.


## Пример


	Sub UserProc;

	Var

	    d: Decimal;

	Begin

	    d := Decimal.MinValue;

	    Debug.WriteLine("Минимальное значение типа Decimal:" + d.ToString);

	End Sub UserProc;


После выполнения примера в консоль будет выведено минимальное значение
 типа Decimal, т.е. значение 7,922816E+28.


См. также:


[Decimal](Decimal.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
