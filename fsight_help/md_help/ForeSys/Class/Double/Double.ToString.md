# Double.ToString

Double.ToString
-


# Double.ToString


## Синтаксис


ToString: String;


## Описание


Свойство ToString возвращает
 значение текущей переменной, преобразованное к строковому типу.


## Пример


	Sub UserProc;

	Var

	    I: Integer;

	    B: Boolean;

	    D: Double;

	    S: String;

	Begin

	    I := 123;

	    B := True;

	    D := 1.245;

	    S := i.ToString + b.ToString + d.ToString;

	End Sub UserProc;


После выполнения примера в переменной «S» будет
 содержаться значение «123True1.2450000000000001».


См. также:


[Double](Double.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
