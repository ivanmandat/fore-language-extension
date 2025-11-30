# String.TrimEnd

String.TrimEnd
-


# String.TrimEnd


## Синтаксис


TrimEnd(Source: String): String;


## Параметры


Source. Исходная строка.


## Описание


Метод TrimEnd удаляет все пробелы,
 имеющиеся в конце строки.


## Комментарии


Дополнительную информацию о символах, относящихся к категории пробелов,
 можно найти в MSDN в описании метода [String.Trim](http://msdn.microsoft.com/ru-ru/library/t97s7bs3.aspx).


## Пример


	Sub UserProc;

	Var

	    s, s1: String;

	Begin

	    s := " abcdef ";

	    s1 := String.TrimEnd(s);

	End Sub UserProc;


После выполнения примера в переменной «s1» будет
 содержаться значение « abcdef».


См. также:


[String](String.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
