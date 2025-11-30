# Char.IsLetterOrDigit

Char.IsLetterOrDigit
-


# Char.IsLetterOrDigit


## Синтаксис


IsLetterOrDigit: Boolean;


## Описание


Свойство IsLetterOrDigit возвращает
 признак содержания в переменной буквы алфавита, либо десятичного числа.


## Комментарии


Допустимые значения


	- True. Значение является
	 буквой алфавита или числом;


	- False. Во всех остальных
	 случаях.


## Пример


	Sub UserProc;

	Var

	    c, c1, c2, c3: Char;

	    b, b1, b2, b3: Boolean;

	Begin

	    c := 'a';

	    c1 := 'A';

	    c2 := '4';

	    c3 := '+';

	    b := c.IsLetterOrDigit;

	    b1 := c1.IsLetterOrDigit;

	    b2 := c2.IsLetterOrDigit;

	    b3 := c3.IsLetterOrDigit;

	End Sub UserProc;


После выполнения примера в переменных «b», «b1» и «b2» будут находиться
 значения True, а в переменной «b3» значение False.


См. также:


[Char](Char.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
