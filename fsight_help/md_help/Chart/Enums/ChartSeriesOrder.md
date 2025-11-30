# ChartSeriesOrder

ChartSeriesOrder
-


# ChartSeriesOrder


## Описание


Перечисление ChartSeriesOrder
 содержит варианты порядка рядов диаграммы.


Используется следующими свойствами и методами:


	- [IChart.SeriesOrder](../Interface/IChart/IChart.SeriesOrder.htm);


В зависимости от значения свойства одно может перекрывать значения другого,
 подробности приведены в таблице.


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Forward. Порядок рядов
		 обычный, SeriesOrder
		 перекрывает AreaSeriesOrder.


		 1
		 Backward. Порядок рядов
		 обратный, SeriesOrder
		 перекрывает AreaSeriesOrder.


		 2
		 MeanSorted. Порядок
		 рядов сортированный по среднему арифметическому, SeriesOrder перекрывает AreaSeriesOrder.


		 3
		 dMeanBackSorted. Порядок
		 рядов соответствующий обратной сортировке по среднему арифметическому,
		 SeriesOrder
		 перекрывает AreaSeriesOrder.


		 4
		 ExcelLike. Порядок
		 рядов обратный ( не работает для объемного вида диаграммы), SeriesOrder
		 перекрывает AreaSeriesOrder.


		 5
		 None. Порядок рядов
		 обычный, SeriesOrder
		 не перекрывает AreaSeriesOrder.


См. также:


[Перечисления сборки Chart](Enums_built_Chart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
