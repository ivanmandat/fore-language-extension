# MDCalculationSliceFilterType

MDCalculationSliceFilterType
-


# MDCalculationSliceFilterType


## Описание


Перечисление MDCalculationSliceFilterType
 содержит способы фильтрации элементов, по которым будет производиться
 многомерный расчет.


Используется следующими свойствами и методами:


	- [IMDCalculationSliceFilter.Type](../Interface/IMDCalculationSliceFilter/IMDCalculationSliceFilter.Type.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None.
		 Способ фильтрации не определен.


		 1
		 Selection.
		 Фильтрация с помощью отметки в измерении. Расчет будет производиться
		 по элементам, которые присутствуют в [отметке](../Interface/IMDCalculationSliceFilter/IMDCalculationSliceFilter.Selection.htm)
		 указанного измерения и по которым имеются формулы.


		 2
		 SQL. Фильтрация
		 с помощью SQL-условия. Расчет будет производиться по элементам,
		 удовлетворяющим [SQL-условию](../Interface/IMDCalculationSliceFilter/IMDCalculationSliceFilter.SQL.htm).


См. также:


[Перечисления сборки Cubes](KeCubes_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
