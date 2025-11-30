# String.PadRight

String.PadRight
-


# String.PadRight


## Синтаксис


PadRight(Source: String; Length: Integer; [PaddingChar:
 Char = " "]): String;


## Параметры


Source. Исходная строка;


Length. Длина, которую приобретет
 исходная строка, после добавления символов (длина исходной строки + количество
 добавляемых символов);


PaddingChar. Добавляемый символ.


## Описание


Метод PadRight добавляет определенное
 количество указанных символов, передаваемых посредством параметра PaddingChar, справа к исходной строке,
 передаваемой посредством параметра Source.


## Пример


	Sub UserProc;

	Var

	    s, s1: String;

	Begin

	    s := "abcdef";

	    s1 := String.PadRight(s, s.Length + 2, 'X');

	End Sub UserProc;


После выполнения примера в переменной «s» будет
 содержаться значение «abсdefXX».


См. также:


[String](String.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
