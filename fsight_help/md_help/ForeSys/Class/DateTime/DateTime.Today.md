# DateTime.Today

DateTime.Today
-


# DateTime.Today


## Синтаксис


Today: DateTime;


## Описание


Метод Today возвращает текущую
 дату.


## Пример


	Sub UserProc;

	Var

	    DT: DateTime;

	    s: String;

	Begin

	    DT := DateTime.Today;

	    s := DT.ToString;

	End Sub UserProc;


После выполнения примера в переменной «DT» будет содержаться текущая
 дата, а в переменной «s» будут содержаться текущая дата, преобразованная
 к строковому типу.


См. также:


[DateTime](DateTime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
