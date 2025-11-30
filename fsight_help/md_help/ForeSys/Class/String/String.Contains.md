# String.Contains

String.Contains
-


# String.Contains


## Синтаксис


		Contains(Source: String, SubStr: String):
		 Boolean;


## Параметры


Source. Исходная строка;


SubStr. Искомая подстрока.


## Описание


Метод Contains возвращает признак
 наличия искомой подстроки в исходной строке.


## Комментарии


Допустимые значения:


	- True. Искомая подстрока
	 содержится в исходной строке;


	- False. Искомая подстрока
	 не содержится в исходной строке.


Поиск искомой подстроки в исходной строке выполняется с учётом регистра.


## Пример


					Sub UserProc;

		Var

		    s1, s2: String;

		    b: Boolean;

		Begin

		    s1 := "Calculator";

		    s2 := "Calc";

		    // Проверяем наличие подстроки в исходной
		 строке

		    b := String.Contains(s1, s2);

		    Debug.WriteLine("Contains(""" + s1 + ";
		 " + s2 + """) = " + b.ToString);

		End Sub UserProc;


В результате в окно консоли будет выведен признак наличия подстроки
 «Calc» в строке «Calculator».


См. также:


[String](String.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
