# String.Right

String.Right
-


# String.Right


## Синтаксис


Right(Source: String; Count: Integer): String;


## Параметры


Source. Строка;


Count. Количество символов
 с правого края строки.


## Описание


Метод Right возвращает указанное
 количество символов с правого края строки.


## Комментарии


Для получения символов с левого края строки используйте метод [String.Left](String.Left.htm).


## Пример


	Sub UserProc;

	Var

	    s1, s2: String;

	    i: Integer;

	Begin

	    s1 := "Calculator";

	    i := 4;

	    // Получаем символы строки

	    s2 := String.Right(s1, i);

	    Debug.WriteLine("Right(""" + s1 + "; " + i.ToString + """) = " + s2);

	End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены четыре
 первых символа с правого края строки «Calculator».


См. также:


[String](String.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
