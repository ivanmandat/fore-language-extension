# String.Concat

String.Concat
-


# String.Concat


## Синтаксис


Concat(Val1: String; Val2: String): String;


## Параметры


Val1. Первая подстрока для
 объединения;


Val2. Вторая подстрока для
 объединения.


## Описание


Метод Concat объединяет в одну
 строку две подстроки, передаваемых посредством параметров Val1
 и Val2.


## Пример


	Sub UserProc;

	Var

	    s, s1, s2: string;

	Begin

	    s1 := "abc";

	    s2 := "def";

	    s := String.Concat(s1, s2);

	End Sub UserProc;


В результате выполнения примера, в переменной
 «s» будет находиться значение «abсdef».


См. также:


[String](String.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
