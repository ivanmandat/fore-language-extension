# String.Space

String.Space
-


# String.Space


## Синтаксис


		Space(Number: Integer): String;


## Параметры


Number.
 Количество пробелов.


## Описание


Метод Space возвращает строку
 из указанного количества пробелов.


## Комментарии


Для исключения пробелов из исходной строки используйте методы [String.Trim](String.Trim.htm),
 [String.TrimEnd](String.TrimEnd.htm), [String.TrimStart](String.TrimStart.htm).


## Пример


					Sub UserProc;

		Var

		    s: String;

		    i: Integer;

		Begin

		    i := 4;

		    // Выводим пробелы

		    s := String.Space(i);

		    Debug.WriteLine("Space(" + i.ToString + ") = " + s);

		End Sub UserProc;


В результате выполнения примера в окно консоли будет выведена строка
 из четырёх пробелов.


См. также:


[String](String.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
