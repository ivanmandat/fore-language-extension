# MissingDataMethod

MissingDataMethod
-


# MissingDataMethod


## Описание


Перечисление MissingDataMethod
 содержит методы обработки пропусков.


Используется следующими свойствами и методами:


	- [IModelling.Collapse](kems.chm::/Interface/IModelling/IModelling.Collapse.htm);


	- [IModelling.Interpolate](kems.chm::/Interface/IModelling/IModelling.Interpolate.htm);


	- [IMissingData.Method](../Interface/IMissingData/IMissingData.Method.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 ![](../Enums.gif)
		 0
		 SampleAverage. Среднее
		 по выборке. Пустые значения ряда вычисляются как среднее по выборке.


		 ![](../Enums.gif)
		 1
		 NPointsAverage. Среднее
		 по N соседним точкам. Пустые значения ряда вычисляются как среднее
		 по N соседним точкам.


		 ![](../Enums.gif)
		 2
		 PrevValue. Предыдущее
		 значение. Пустые значения ряда заменяются предыдущим непустым
		 значением.


		 ![](../Enums.gif)
		 3
		 LinInterpolation. Линейная
		 интерполяция по соседним точкам.


		 ![](../Enums.gif)
		 4
		 LinTrend. Линейный
		 тренд.


		 ![](../Enums.gif)
		 5
		 AnyValue. Произвольное
		 значение. Пустые значения ряда заменяются случайным числом из
		 интервала [минимальное значение ряда; максимальное значение ряда].


		 ![](../Enums.gif)
		 6
		 Casewise. Расчеты ведутся
		 без учета отсутствующих значений ряда.


		 ![](../Enums.gif)
		 7
		 Geometric. Геометрическая
		 интерполяция.


		 ![](../Enums.gif)
		 8
		 SpecifiedValue. Указанное
		 значение.


		 ![](../Enums.gif)
		 9
		 Spline. Интерполяция
		 кубическими сплайнами.


		 ![](../Enums.gif)
		 10
		 Pattern. По шаблону.
		 Для вычисления пустых значений ряда используется интерполяция
		 по шаблону, заданному другим рядом.


		 ![](../Enums.gif)
		 11
		 Overlay. Значениями
		 заданного ряда.


		 ![](../Enums.gif)
		 12
		 GrowthRate. Темп роста.


		 ![](../Enums.gif)
		 13
		 PreviousGrowthRate.
		 Темп роста к предыдущему периоду.


		 ![](../Enums.gif)
		 14
		 SucceedingValue. Следующее
		 значение.


		 ![](../Enums.gif)
		 15
		 SucceedingGrowthRate.
		 Темп роста к следующему периоду.


		 ![](../Enums.gif)
		 16
		 None. Обработка пропусков
		 не используется.


## Комментарии


NPointsAverage. В [IMissingData.MethodParameter](../Interface/IMissingData/IMissingData.MethodParameter.htm)
 необходимо задать N - количество соседних точек.


Geometric. Если значения около
 пропущенных точек имеют разные знаки, или хотя бы одно из значений равно
 нулю, то заполнение пропусков не производится.


Casewise. Метод является многофакторным,
 то есть отсутствующие значения проверяются у всех факторов. Необходимо
 помнить, что отсутствующие значения также выкидываются и из объясняемого
 ряда.


SpecifiedValue. В [IMissingData.SpecifiedValue](../Interface/IMissingData/IMissingData.SpecifiedValue.htm) необходимо
 задать значение, которым будут заполняться пропуски.


Pattern. В [IMissingData.SpecifiedVector](../Interface/IMissingData/IMissingData.SpecifiedVector.htm) необходимо
 задать шаблонный ряд.


Overlay. В [IMissingData.SpecifiedVector](../Interface/IMissingData/IMissingData.SpecifiedVector.htm)
 необходимо задать ряд, из которого будут браться значения.


PreviousGrowthRate. SucceedingGrowthRate.
 Число периодов определяет значение свойства [IMissingData.MethodParameter](../Interface/IMissingData/IMissingData.MethodParameter.htm).


После применения методов Pattern,
 Overlay, SucceedingValue,
 PreviousGrowthRate, SucceedingGrowthRate
 в обрабатываемом ряде могут оставаться пропуски.


См. также:


[Перечисления сборки Stat](StatLib_Enums.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
