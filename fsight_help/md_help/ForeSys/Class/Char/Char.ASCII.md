# Char.ASCII

Char.ASCII
-


# Char.ASCII


## Синтаксис


ASCII(Source: Char): Integer;


## Параметры


Source. Символ, для которого
 необходимо получить ASCII-код.


## Описание


Метод ASCII возвращает ASCII-код
 символа, передаваемого в качестве входного параметра.


## Комментарии


Для получения кода первого символа строки в кодировке ASCII используйте
 метод [String.ASCII](../String/String.ASCII.htm).


## Пример


	Sub UserProc;

	Var

	    c: Char;

	    i: Integer;

	Begin

	    c := 'a';

	    // Получаем ASCII-код символа

	    i := Char.ASCII(c);

	    Debug.WriteLine("ASCII('" + c + "') = " + i.ToString);

	End Sub UserProc;


В результате выполнения примера в окно консоли будет выведен ASCII-код символа.


См. также:


[Char](Char.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
