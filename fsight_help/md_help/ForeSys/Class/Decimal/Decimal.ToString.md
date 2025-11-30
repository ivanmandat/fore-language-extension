# Decimal.ToString

Decimal.ToString
-


# Decimal.ToString


## Синтаксис


ToString: String;


## Описание


Свойство ToString возвращает
 значение текущей переменной, преобразованное к строковому типу.


## Пример


	Sub UserProc;

	Var

	    b: Boolean;

	    d: Decimal;

	    s: String;

	Begin

	    d := 123;

	    b := True;

	    s := d.ToString + b.ToString;

	    Debug.WriteLine(s);

	End Sub UserProc;


После выполнения примера в консоль будет выведено
 значение «123True».


См. также:


[Decimal](Decimal.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
