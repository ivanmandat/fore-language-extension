# IEaxChart.ArePointsDrillable

IEaxChart.ArePointsDrillable
-


# IEaxChart.ArePointsDrillable


## Синтаксис


ArePointsDrillable(SeriesIndices: Array; PointsIndices:
 Array; DrillType: [EaxDrillType](../../Enums/EaxDrillType.htm)):
 Boolean;


## Параметры


SeriesIndeces. Целочисленный
 массив, содержащий индексы рядов диаграммы;


PointIndeces. Целочисленный
 массив, содержащий индексы точек диаграммы;


DrillType. Способ детализации
 данных.


## Описание


Метод ArePointsDrillable определяет
 возможность детализации по указанным точкам диаграммы.


## Комментарии


Допустимые значения:


	- True. Детализация возможна;


	- False. Детализация невозможна.


Для детализации данных используйте метод [IEaxChart.DrillPoints](IEaxChart.DrillPoints.htm).


## Пример


Использование метода приведено в примере для [IEaxChart.DrillPoints](IEaxChart.DrillPoints.htm).


См. также:


[IEaxChart](IEaxChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
