# String.PadLeft

String.PadLeft
-


# String.PadLeft


## Синтаксис


PadLeft(Source: String; Length: Integer; [PaddingChar:
 Char = " "]): String;


## Параметры


Source. Исходная строка;


Length. Длина, которую приобретет
 исходная строка, после добавления символов (длина исходной строки + количество
 добавляемых символов);


PaddingChar. Добавляемый символ.


## Описание


Метод PadLeft добавляет определенное
 количество указанных символов, передаваемых посредством параметра PaddingChar, слева к исходной строке,
 передаваемой посредством параметра Source.


## Пример


	Sub UserProc;

	Var

	    s, s1: String;

	Begin

	    s := "abcdef";

	    s1 := String.PadLeft(s, s.Length + 2, 'X');

	End Sub UserProc;


После выполнения примера в переменной «s» будет
 содержаться значение «XXabсdef».


См. также:


[String](String.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
