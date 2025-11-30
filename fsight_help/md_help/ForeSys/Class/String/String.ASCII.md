# String.ASCII

String.ASCII
-


# String.ASCII


## Синтаксис


ASCII(Source: String): Integer;


## Параметры


Source.
 Строка, для которой необходимо получить ASCII-код первого символа.


## Описание


Метод ASCII возвращает ASCII-код
 первого символа строки, передаваемой в качестве входного параметра.


## Комментарии


Для получения кода символа в кодировке ASCII используйте метод [Char.ASCII](../Char/Char.ASCII.htm).


## Пример


	Sub UserProc;

	Var

	    s: String;

	    i: Integer;

	Begin

	    s := "String";

	    // Получаем ASCII-код первого символа строки

	    i := String.ASCII(s);

	    Debug.WriteLine("ASCII(""" + s + """) = " + i.ToString);

	End Sub UserProc;


В результате выполнения примера в окно консоли будет выведен ASCII-код первого
 символа строки.


См. также:


[String](String.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
