# Double.IsPositiveInfinity

Double.IsPositiveInfinity
-


# Double.IsPositiveInfinity


## Синтаксис


IsPositiveInfinity(Value: Double): Boolean;


## Параметры


Value. Проверяемое значение
 вещественного типа.


## Описание


Метод IsPositiveInfinity осуществляет
 проверку эквивалентности значения переменной положительной бесконечности.


## Комментарии


Допустимые значения:


	- True. Значение переменной
	 эквивалентно положительной бесконечности;


	- False. Значение
	 переменной не эквивалентно положительной бесконечности.


## Пример


	Sub UserProc;

	Var

	    B: Boolean;

	    D: Double;

	Begin

	    D := Double.PositiveInfinity ;

	    B := Double.IsPositiveInfinity(D);

	End Sub UserProc;


После выполнения примера в переменной «B» будет содержаться признак,
 определяющий эквивалентно ли значение переменной «D» положительной бесконечности,
 т.е. значению 1.#INF.


См. также:


[Double](Double.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
