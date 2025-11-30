# Char.IsDigit

Char.IsDigit
-


# Char.IsDigit


## Синтаксис


IsDigit: Boolean;


## Описание


Свойство IsDigit возвращает
 признак содержания в переменной десятичного числа.


## Комментарии


Допустимые значения:


	- True. Значение является
	 числовым значением;


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

	    b := c.IsDigit;

	    b1 := c1.IsDigit;

	    b2 := c2.IsDigit;

	    b3 := c3.IsDigit;

	End Sub UserProc;


После выполнения примера в переменной «b2» будет содержаться значение
 True, а в переменных «b», «b1» и «b3» значение False.


См. также:


[Char](Char.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
