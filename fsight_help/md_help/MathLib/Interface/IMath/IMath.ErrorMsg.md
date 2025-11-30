# IMath.ErrorMsg

IMath.ErrorMsg
-


# IMath.ErrorMsg


## Синтаксис


ErrorMsg: String;


## Описание


Свойство ErrorMsg возвращает информационное сообщение об ошибке. Если ошибки не было возвращает «Нет ошибки».


## Пример


	Sub UserProc;

	Var

	    a: Double;

	    Result: String;

	Begin

	    a := Math.Sqrt(-10);

	    Result := Math.ErrorMsg;

	End Sub UserProc;


В результате выполнения примера в переменной «Result» будет находиться
 информационное сообщение об ошибке «Значение параметра должно быть >=0».


См. также:


[IMath](IMath.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
