# TargetAutoSearchType

TargetAutoSearchType
-


# TargetAutoSearchType


## Описание


Перечисление TargetAutoSearchType
 используется для определения типа целевой задачи.


Используется следующими свойствами:


	- [ICpTargetAdjustment.AutoSearchType](../Interface/ICpTargetAdjustment/ICpTargetAdjustment.AutoSearchType.htm);


	- [IMsTargetProblem.AutoSearchType](kems.chm::/Interface/IMsTargetProblem/IMsTargetProblem.AutoSearchType.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 MinError. Минимизация суммы
		 квадратов отклонений траектории целевой функции от заданной траектории.


		 1
		 ExactSol. Поиск точного
		 решения. Допустимая точка множества равенств и неравенств.


		 2
		 Minimum. Минимизация
		 целевой функции.


		 3
		 Maximum. Максимизация
		 целевой функции.


## Комментарии


При выборе значения MinError
 происходит максимальное приближение траектории целевой функции к заданной
 траектории. Для задания траектории, которой должна соответствовать целевая
 функция, используйте свойство [ICpTargetAdjustment.TargetTrajectory](../Interface/ICpTargetAdjustment/ICpTargetAdjustment.TargetTrajectory.htm). В результате [ITargetResults.OptimalValue](../Interface/ITargetResults/ITargetResults.OptimalValue.htm)
 будет содержать сумму квадратов отклонений полученной траектории от заданной.


См. также:


[Перечисления
 сборки Cp](KeCp_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
