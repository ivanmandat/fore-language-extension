# String.Trim

String.Trim
-


# String.Trim


## Синтаксис


Trim(Source: String): String;


## Параметры


Source.
 Исходная строка.


## Описание


Метод Trim удаляет все пробелы
 в начале и в конце указанной строки.


## Комментарии


При работе данного метода используется .NET Framework метод [String.Trim](http://msdn.microsoft.com/ru-ru/library/t97s7bs3.aspx),
 удаляющий символы пробелов, определенные стандартом Юникод. Список символов,
 которые относятся к категории пробелов, можно найти в MSDN в описании
 метода [String.Trim](http://msdn.microsoft.com/ru-ru/library/t97s7bs3.aspx).


## Пример


	Sub UserProc;

	Var

	    s, s1: String;

	Begin

	    s := " abcdef ";

	    s1 := String.Trim(s);

	End Sub UserProc;


После выполнения примера в переменной «s1» будет
 содержаться значение «abcdef».


См. также:


[String](String.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
