# CubeDimensionFilterMethod

CubeDimensionFilterMethod
-


# CubeDimensionFilterMethod


## Описание


Перечисление CubeDimensionFilterMethod
 содержит методы фильтрации запроса по измерению.


Используется следующими свойствами и методами:


	- [ICubeDimensionQueryStrategy.FilterMethod](../Interface/ICubeDimensionQueryStrategy/ICubeDimensionQueryStrategy.FilterMethod.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Default.
		 Метод выбирается ядром платформы.


		 1
		 FetchAll.
		 Извлекать все записи независимо от отметки.


		 2
		 RatioBased.
		 Фильтровать в зависимости от размера отметки (в процентах к общему
		 числу элементов).


		 3
		 QuantityBased.
		 Фильтровать в зависимости от количества отмеченных элементов.


		 4
		 InExpression.
		 Фильтровать по условию IN.


		 16
		 UseTempTable.
		 Использовать временную таблицу.


		 18
		 RatioBasedUseTempTable.
		 Фильтровать в зависимости от размера отметки (в процентах к общему
		 числу элементов) и использовать временную таблицу.


		 19
		 QuantityBasedUseTempTable.
		 Фильтровать в зависимости от количества отмеченных элементов и
		 использовать временную таблицу.


См. также:


[Перечисления сборки Cubes](KeCubes_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
