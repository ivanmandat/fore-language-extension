# Integer.ToString

Integer.ToString
-


# Integer.ToString


## Синтаксис


ToString: String;


## Описание


Свойство ToString возвращает
 значение текущей переменной, преобразованное к строковому типу.


## Пример


	Sub UserProc;

	Var

	    i: Integer;

	    b: Boolean;

	    s: String;

	Begin

	    i := 123;

	    b := True;

	    s := i.ToString + b.ToString;

	End Sub UserProc;


После выполнения примера в переменной «S» будет
 содержаться значение «123True».


См. также:


[Integer](Integer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
