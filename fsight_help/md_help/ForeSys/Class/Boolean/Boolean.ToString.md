# Boolean.ToString

Boolean.ToString
-


# Boolean.ToString


## Синтаксис


ToString: String;


## Описание


Свойство ToString возвращает
 значение переменной, преобразованное к строковому типу данных.


## Пример


	Sub UserProc;

	Var

	    b: Boolean;

	    i: Integer;

	    s: String;

	Begin

	    i := 123;

	    b := True;

	    s := i.ToString + b.ToString;

	End Sub UserProc;


После выполнения примера в переменной s будет содержаться значение «123True».


См. также:


[Boolean](Boolean.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
