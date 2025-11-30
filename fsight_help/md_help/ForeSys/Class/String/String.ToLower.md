# String.ToLower

String.ToLower
-


# String.ToLower


## Синтаксис


ToLower(Source: String): String;


## Параметры


Source. Исходная строка.


## Описание


Метод ToLower переводит все
 символы указанной строки в нижний регистр.


## Пример


	Sub UserProc;

	Var

	    s, s1: String;

	Begin

	    s := "aBcDeF";

	    s1 := String.ToLower(s);

	End Sub UserProc;


После выполнения примера в переменной «s1» будет
 содержаться строка «s», все символы которой переведены в нижний регистр:
 «abcdef».


См. также:


[String](String.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
