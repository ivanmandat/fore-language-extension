# ChartSerieGroupRule

ChartSerieGroupRule
-


# ChartSerieGroupRule


## Описание


Перечисление ChartSerieGroupRule
 содержит правила группировки рядов для вторичной диаграммы.


Используется следующими свойствами и методами:


	- [IChartCircleExInfo.GroupingRule](../Interface/IChartCircleExInfo/IChartCircleExInfo.GroupingRule.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Position. Группируется
		 указанное количество рядов, начиная с конца коллекции рядов [IChartSeries](../Interface/IChartSeries/IChartSeries.htm).
		 Установка количества рядов осуществляется с помощью свойства [ICircleInfoEx.GroupingValue](../Interface/IChartCircleExInfo/IChartCircleExInfo.GroupingValue.htm).


		 1
		 Value. Группируются
		 все ряды, значение которых меньше указанного. Значение устанавливается
		 с помощью свойства [ICircleInfoEx.GroupingValue](../Interface/IChartCircleExInfo/IChartCircleExInfo.GroupingValue.htm).


		 2
		 Part. Группируются
		 все ряды, доля которых в сумме значений меньше указанной. Значение
		 доли устанавливается с помощью свойства [ICircleInfoEx.GroupingValue](../Interface/IChartCircleExInfo/IChartCircleExInfo.GroupingValue.htm).


		 3
		 Custom. Группируются
		 все ряды, указанные с помощью свойства [ICircleInfoEx.CustomSerieGroup](../Interface/IChartCircleExInfo/IChartCircleExInfo.CustomSerieGroup.htm).


		 4
		 TotalPart. Группируются
		 ряды, значение суммарной доли которых не больше указанной. Суммирование
		 начинается с рядов, имеющих наименьшие значения, производится
		 по порядку возрастания значений. Значение доли устанавливается
		 с помощью свойства [ICircleInfoEx.GroupingValue](../Interface/IChartCircleExInfo/IChartCircleExInfo.GroupingValue.htm).


		 5
		 SmallestValues. Группируются
		 ряды с самыми маленькими значениями, кроме количества рядов в
		 основной диаграмме, заданного свойством [IChartCircleExInfo.GroupingValue](../Interface/IChartCircleExInfo/IChartCircleExInfo.GroupingValue.htm).


См. также:


[Перечисления сборки Chart](Enums_built_Chart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
