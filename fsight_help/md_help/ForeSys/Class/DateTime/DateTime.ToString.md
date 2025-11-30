# DateTime.ToString

DateTime.ToString
-


# DateTime.ToString


## Синтаксис


ToString: String;


## Описание


Свойство ToString возвращает
 значение текущей переменной, преобразованное к строковому типу.


## Пример


	Sub UserProc;

	Var

	    DT: DateTime;

	    s: String;

	Begin

	    DT := DateTime.Parse("01.01.2004 00:00:00");

	    s := DT.ToString;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться значение
 «01.01.2004 00:00:00».


См. также:


[DateTime](DateTime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
