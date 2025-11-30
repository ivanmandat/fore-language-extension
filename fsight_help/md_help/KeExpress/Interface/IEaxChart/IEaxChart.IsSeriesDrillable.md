# IEaxChart.IsSeriesDrillable

IEaxChart.IsSeriesDrillable
-


# IEaxChart.IsSeriesDrillable


## Синтаксис


IsSeriesDrillable(SeriesIndexes: Array; [DrillType:
 [EaxDrillType](../../Enums/EaxDrillType.htm) = 1]): Boolean;


## Параметры


SeriesIndexes. Целочисленный
 массив, содержащий индексы рядов диаграммы;


DrillType. Способ детализации
 данных.


## Описание


Метод IsSeriesDrillable определяет
 возможность детализации по указанным рядам диаграммы.


## Комментарии


Допустимые значения:


	- True. Детализация возможна;


	- False. Детализация невозможна.


Для детализации данных используйте метод [IEaxChart.DrillSeries](IEaxChart.DrillSeries.htm).


## Пример


Использование метода приведено в примере для [IEaxChart.DrillSeries](IEaxChart.DrillSeries.htm).


См. также:


[IEaxChart](IEaxChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
