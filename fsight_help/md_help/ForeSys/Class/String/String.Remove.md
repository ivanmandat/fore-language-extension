# String.Remove

String.Remove
-


# String.Remove


## Синтаксис


Remove(Source: String; Start: Integer; Length: Integer):
 String;


## Параметры


Source. Исходная строка;


Start. Позиция, начиная с которой
 будет происходить удаление;


Length. Количество удаляемых
 символов.


## Описание


Метод Remove удаляет указанное
 количество символов, начиная с заданной позиции в исходной строке.


## Пример


	Sub UserProc;

	Var

	    s, s1, s2: String;

	Begin

	    s := "abcDef";

	    s1 := String.Remove(s, 3, 1);

	    s2 := String.Remove(s, 3, 5);

	End Sub UserProc;


После выполнения примера в переменной «s1» будет
 содержаться значение «abcef», а в переменной «s2» значение «abc».


См. также:


[String](String.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
