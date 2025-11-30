# Double.IsNegativeInfinity

Double.IsNegativeInfinity
-


# Double.IsNegativeInfinity


## Синтаксис


IsNegativeInfinity(Value: Double): Boolean;


## Параметры


Value. Проверяемое значение
 вещественного типа.


## Описание


Метод IsNegativeInfinity осуществляет
 проверку эквивалентности значения переменной отрицательной бесконечности.


## Комментарии


Допустимые значения:


	- True. Значение переменной
	 эквивалентно отрицательной бесконечности;


	- False. Значение
	 переменной не эквивалентно отрицательной бесконечности.


## Пример


	Sub UserProc;

	Var

	    B: Boolean;

	    D: Double;

	Begin

	    D := Double.NegativeInfinity ;

	    B := Double.IsNegativeInfinity(D);

	End Sub UserProc;


После выполнения примера в переменной «B» будет храниться признак, определяющий,
 эквивалентно ли значение переменной «D» отрицательной бесконечности, т.е. значению
 -1.#INF.


См. также:


[Double](Double.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
