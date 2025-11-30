# MsInterpolateType

MsInterpolateType
-


# MsInterpolateType


## Описание


Перечисление MsInterpolateType
 используется для определения метода интерполяции, применяемого к моделируемой
 переменной в модели «Интерполяция».


Используется следующими свойствами:


	- [IModelling.Interpolate](../Interface/IModelling/IModelling.Interpolate.htm);


	- [IMsInterpolateTransform.MethodType](../Interface/IMsInterpolateTransform/IMsInterpolateTransform.MethodType.htm);


	- [IMsInterpolateTransformationMethod.InterpolateType](../Interface/IMsInterpolateTransformationMethod/IMsInterpolateTransformationMethod.InterpolateType.htm).


## Описание


		 Значение


		 Краткое
		 описание


		 0
		 Repeat_. Значения результирующей
		 динамики будут повторять значения динамики модели.


		 1
		 Prorate. Для моделирования
		 будет использована равномерная интерполяция.


		 2
		 Linear. Для моделирования
		 будет использована линейная интерполяция.


		 3
		 Geometric. Для моделирования
		 будет использована геометрическая интерполяция.


		 4
		 Spline. Для моделирования
		 будет использована интерполяция кубическими сплайнами.


		 5
		 Lagrange. Для моделирования
		 будет использована интерполяция многочленом Лагранжа.


		 6
		 Polynomial. Для моделирования
		 будет использована полиноминальная интерполяция. Степень полинома
		 определяется свойством [IMsInterpolateTransform.MethodParameter](../Interface/IMsInterpolateTransform/IMsInterpolateTransform.MethodParameter.htm).


		 7
		 Pattern. Для моделирования
		 будет использована интерполяция по шаблону. Для данного метода
		 необходимо определить вид шаблона ([IMsInterpolateTransform.PatternType](../Interface/IMsInterpolateTransform/IMsInterpolateTransform.PatternType.htm))
		 и образцовый ряд ([IMsInterpolateTransform.Specified](../Interface/IMsInterpolateTransform/IMsInterpolateTransform.Specified.htm)).


		 8
		 First. Значение первой
		 точки результирующей динамики будет совпадать со значением точки
		 на исходной динамике. Значения в остальных точках результирующей
		 динамики остаются пустыми.


		 9
		 Last. Значение последней
		 точки результирующей динамики будет совпадать со значением точки
		 на исходной динамике. Значения в остальных точках результирующей
		 динамики остаются пустыми.


См. также:


[Перечисления сборки Ms](KeMs_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
