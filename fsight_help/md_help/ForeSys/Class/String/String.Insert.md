# String.Insert

String.Insert
-


# String.Insert


## Синтаксис


Insert(Source: String; Start: Integer; Value: String):
 String;


## Параметры


Source. Исходная строка;


Start. Позиция вставки подстроки;


Value. Подстрока.


## Описание


Метод Insert осуществляет вставку
 подстроки, передаваемой посредством параметра Value,
 в исходную строку, передаваемую в параметре Source,
 начиная с позиции, указанной в параметре Start,
 в исходной строке.


Если значение параметра Start
 превышает длину исходной строки (параметр Source),
 то вставка производится в конец исходной строки.


## Пример


	Sub UserProc;

	Var

	    s, s1, s2, s3: String;

	Begin

	    s := "abcdef";

	    s1 := "X";

	    s2 := String.Insert(s, 2, s1);

	    s3 := String.Insert(s, 20, s1);

	End Sub UserProc;


После выполнения примера в переменной «s2» будет
 содержаться значение «abXcdef», а в переменной «s3» значение «abcdefX».


См. также:


[String](String.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
