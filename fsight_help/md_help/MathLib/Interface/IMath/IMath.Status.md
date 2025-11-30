# IMath.Status

IMath.Status
-


# IMath.Status


## Синтаксис


Status: Integer;


## Описание


Свойство Status возвращает код ошибки. Если ошибки не было возвращает «0».


## Пример


	Sub UserProc;

	Var

	    a: Double;

	    Result: Integer;

	Begin

	    a := Math.Sqrt(-10);

	    Result := Math.Status;

	End Sub UserProc;


В результате выполнения примера в переменной «Result» будет находиться
 код ошибки «7».


См. также:


[IMath](IMath.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
