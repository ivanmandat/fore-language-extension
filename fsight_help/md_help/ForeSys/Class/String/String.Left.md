# String.Left

String.Left
-


# String.Left


## Синтаксис


		Left(Source: String; Count: Integer): String;


## Параметры


Source. Cтрока;


Count. Количество символов
 с левого края строки.


## Описание


Метод Left возвращает
 указанное количество символов с левого края строки.


## Комментарии


Для получения символов с правого края строки используйте метод [String.Right](String.Right.htm).


## Пример


					Sub UserProc;

		Var

		    s1, s2: String;

		    i: Integer;

		Begin

		    s1 := "Calculator";

		    i := 4;

		    // Получаем символы строки

		    s2 := String.Left(s1, i);

		    Debug.WriteLine("Left(""" + s1 + "; " + i.ToString + """) = " + s2);

		End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены четыре
 первых символа с левого края строки «Calculator».


См. также:


[String](String.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
