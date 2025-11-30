# IEaxChart.IsPointDrillable

IEaxChart.IsPointDrillable
-


# IEaxChart.IsPointDrillable


## Синтаксис


IsPointDrillable(SerieIndex: Integer; PointIndex:
 Integer; DrillType: [EaxDrillType](../../Enums/EaxDrillType.htm));


## Параметры


SerieIndex. Индекс ряда;


PointIndex. Индекс точки ряда;


DrillType. Способ детализации
 данных.


## Описание


Метод IsPointDrillable определяет
 возможность детализации по указанной точке диаграммы.


## Комментарии


Допустимые значения:


	- True. Детализация возможна;


	- False. Детализация невозможна.


Для детализации данных по указанной точке диаграммы используйте метод
 [IEaxChart.DrillPoint](IEaxChart.DrillPoint.htm).


## Пример


Использование метода приведено в примере для [IEaxChart.DrillPoint](IEaxChart.DrillPoint.htm).


См. также:


[IEaxChart](IEaxChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
