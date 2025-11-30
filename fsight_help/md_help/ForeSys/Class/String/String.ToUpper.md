# String.ToUpper

String.ToUpper
-


# String.ToUpper


## Синтаксис


ToUpper(Source: String): String;


## Параметры


Source.
 Исходная строка.


## Описание


Метод ToUpper переводит все
 символы указанной строки в верхний регистр.


## Пример


	Sub UserProc;

	Var

	    s, s1: String;

	Begin

	    s := "aBcDeF";

	    s1 := String.ToUpper(s);

	End Sub UserProc;


После выполнения примера в переменной «s1» будет
 содержаться строка «s», все символы которой переведены в верхний регистр:
 «ABCDEF».


См. также:


[String](String.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
