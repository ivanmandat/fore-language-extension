# LPMethodType

LPMethodType
-


# LPMethodType


## Описание


Перечисление LPMethodType используется
 для определения метода решения задачи линейного программирования для внешней
 библиотеки lpsolve версии 5.5.


Используется следующим свойством:


	- [ISmLinearProgramming.MethodType](../Interface/ISmLinearProgramming/ISmLinearProgramming.MethodType.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 ![](../Element%20Enums.gif)
		 5
		 SimplexPrimalPrimal.
		 На первой и второй фазах решения задачи линейного программирования
		 используется прямой симплекс-метод.


		 ![](../Element%20Enums.gif)
		 6
		 SimplexDualPrimal.
		 На первой фазе решения задачи используется двойственный симплекс-метод
		 и прямой - на второй фазе.


		 ![](../Element%20Enums.gif)
		 9
		 SimplexPrimalDual.
		 На первой фазе решения задачи используется прямой симплекс-метод
		 и двойственный - на второй фазе.


		 ![](../Element%20Enums.gif)
		 10
		 SimplexDualDual. На
		 первой и второй фазах решения задачи линейного программирования
		 используется двойственный симплекс-метод.


См. также:


[Перечисления
 сборки Stat](StatLib_Enums.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
