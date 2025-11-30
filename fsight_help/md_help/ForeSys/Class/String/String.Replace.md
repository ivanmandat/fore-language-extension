# String.Replace

String.Replace
-


# String.Replace


## Синтаксис


Replace(Source: String; OldValue: String; NewValue:
 String): String;


## Параметры


Source. Исходная строка;


OldValue. Подстрока, которую
 необходимо заменить на новое значение;


NewValue. Подстрока замены.


## Описание


Метод Replace осуществляет поиск
 вхождения подстроки, передаваемой посредством параметра OldValue,
 в строку Source и заменяет ее
 значением, передаваемым в параметре NewValue.


## Пример


	Sub UserProc;

	Var

	    s, s1: String;

	Begin

	    s := "abcdcefc";

	    s1 := String.Replace(s, "c", "*");

	End Sub UserProc;


После выполнения примера в переменной «s1» будет
 содержаться значение «ab*d*ef*».


См. также:


[String](String.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
