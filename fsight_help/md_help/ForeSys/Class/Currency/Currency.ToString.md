# Currency.ToString

Currency.ToString
-


# Currency.ToString


## Синтаксис


ToString: String;


## Описание


Свойство ToString возвращает
 значение текущей переменной, преобразованное к строковому типу.


## Пример


	Sub UserProc;

	Var

	    b: Boolean;

	    c: Currency;

	    s: String;

	Begin

	    c := 123;

	    b := True;

	    s := c.ToString + b.ToString;

	End Sub UserProc;


После выполнения примера в переменной «S» будет содержаться значение
 «123True».


См. также:


[Currency](Currency.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
