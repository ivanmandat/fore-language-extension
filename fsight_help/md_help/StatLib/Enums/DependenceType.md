# DependenceType

DependenceType
-


# DependenceType


## Описание


Перечисление DependenceType
 содержит виды зависимостей для универсального тренда.


Используется следующими свойствами и методами:


	- [IDependenceForms](../Interface/IDependenceForms/IDependenceForms.htm);


	- [IModelling.Extrapolate](KeMs.chm::/Interface/IModelling/IModelling.Extrapolate.htm);


	- [IMsCurveEstimationTransform.ExtrapolateType](KeMs.chm::/Interface/IMsCurveEstimationTransform/IMsCurveEstimationTransform.ExtrapolateType.htm);


	- [ITsInversionInfo.Dependence](KeTransform.chm::/Interface/ITsInversionInfo/ITsInversionInfo.Dependence.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 *
		 0
		 Linear. Линейная.


		 ![](../Enums.gif)
		 1
		 Quadratic. Квадратичная.


		 ![](../Enums.gif)
		 2
		 Polynomial. Полиномиальная.


		 ![](../Enums.gif)
		 3
		 Compound. Составная.


		 ![](../Enums.gif)
		 4
		 Growth. Уравнение роста.


		 ![](../Enums.gif)
		 5
		 Logarithmic. Логарифмическая.


		 ![](../Enums.gif)
		 6
		 Hyperbolic. Гиперболическая.


		 ![](../Enums.gif)
		 7
		 Exponential. Экспоненциальная.


		 ![](../Enums.gif)
		 8
		 Inverse. Обратная.


		 ![](../Enums.gif)
		 9
		 Power. Степенная.


		 ![](../Enums.gif)
		 10
		 Logistic. Логистическая.


		 ![](../Enums.gif)
		 11
		 SquareRoot. Квадратный
		 корень.


		 ![](../Enums.gif)
		 12
		 LogParabolic. Логарифмически-параболическая.


		 ![](../Enums.gif)
		 65281
		 PreviousValue. Форма
		 экстраполяции тренда: предыдущее значение.


		 ![](../Enums.gif)
		 65282
		 Value. Форма экстраполяции
		 тренда: указанное значение.


		 ![](../Enums.gif)
		 65535
		 Undefined. Форма экстраполяции
		 тренда не указана.


## Комментарии


PreviousValue, Value,
 Undefined. Экстраполяция - приближённое
 определение значений функции f*(*x*) в точках *x*, лежащих
 вне отрезка [*x*0,*x**n*], по её
 значениям в точках *x*0 < *x*1 <
 ... < *x**n*.


См. также:


[Перечисления сборки Stat](StatLib_Enums.htm)
 | [Тренд
 с подбором функциональной зависимости](Lib.chm::/02_Time_series_analysis/UiModelling_TrendCurveEstimation.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
