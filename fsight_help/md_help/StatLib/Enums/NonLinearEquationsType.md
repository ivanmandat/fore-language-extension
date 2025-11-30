# NonLinearEquationsType

NonLinearEquationsType
-


# NonLinearEquationsType


## Описание


Перечисление NonLinearEquationsType содержит методы расчета системы нелинейных уравнений.


Используется следующими свойствами и методами:


-
[ICpNonLinearDecomposition.MethodType](KeCp.chm::/Interface/ICpNonLinearDecomposition/ICpNonLinearDecomposition.MethodType.htm);


-
[ISmNonLinearEquations.MethodType](../Interface/ISmNonLinearEquations/ISmNonLinearEquations.MethodType.htm);


-
[IMsNonLinearEquationsTransform.MethodType](KeMs.chm::/Interface/IMsNonLinearEquationsTransform/IMsNonLinearEquationsTransform.MethodType.htm);


## Допустимые значения


 Значение
 Краткое описание


 ![](../Enums.gif)
 0
 HMethod. Для решения исходной системы используется модификация гибридного алгоритма, реализованного в библиотеке математических методов MINPACK-1.


 ![](../Enums.gif)
 1
 MinErrorMethod. Решается задача нахождения минимума функции с n числом переменных.


 ![](../Enums.gif)
 2
 NewtonMethod. Решение исходной системы уравнений находится путем итераций по уравнениям с нахождением частных производных. Итерации продолжаются пока не выполнено заданное число итераций, или не достигнута требуемая точность решения.


 ![](../Enums.gif)
 3
 IterationsMethod. Для решения исходной системы используется модифицированный метод простых итераций.


 ![](../Enums.gif)
 4
 MinErrorGaussNewtonMethod. Используется минимизация суммы квадратов модифицированным методом Ньютона.


См. также:


[Перечисления сборки Stat](StatLib_Enums.htm) | [Методы решения системы нелинейных уравнений](Lib.chm::/04_Other_models/UiModelling_LonLinearEq_method.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
