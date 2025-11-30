# Char.IsLetter

Char.IsLetter
-


# Char.IsLetter


## Синтаксис


IsLetter: Boolean;


## Описание


Свойство IsLetter возвращает
 признак содержания в переменной буквы алфавита.


## Комментарии


Допустимые значения:


	- True. Значение является
	 буквой алфавита;


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

	    b := c.IsLetter;

	    b1 := c1.IsLetter;

	    b2 := c2.IsLetter;

	    b3 := c3.IsLetter;

	End Sub UserProc;


После выполнения примера в переменных «b» и «b1» будет находиться значение
 True, а в переменных «b2» и «b3» значение False.


См. также:


[Char](Char.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
