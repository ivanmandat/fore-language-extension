# IEaxChart.SerieDrillable

IEaxChart.SerieDrillable
-


# IEaxChart.SerieDrillable


## Синтаксис


SerieDrillable(SerieIndex: Integer; [DrillType:
 [EaxDrillType](../../Enums/EaxDrillType.htm) = 1]): Boolean;


## Параметры


SerieIndex.
 Индекс ряда диаграммы;


DrillType.
 Способ детализации данных.


## Описание


Свойство SerieDrillable определяет,
 возможно ли произвести детализацию данных по указанному ряду диаграммы.


## Комментарии


Допустимые значения:


	- True. Детализация возможна;


	- False. Детализация невозможна.


Для детализации данных используйте метод [IEaxChart.DrillSerie](IEaxChart.DrillSerie.htm).


## Пример


Использование свойства приведено в примере для [IEaxChart.DrillSerie](IEaxChart.DrillSerie.htm).


См. также:


[IEaxChart](IEaxChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
