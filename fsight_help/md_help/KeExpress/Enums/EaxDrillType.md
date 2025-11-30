# EaxDrillType

EaxDrillType
-


# EaxDrillType


## Описание


Перечисление EaxDrillType содержит
 способы детализации данных.


Используется следующими свойствами и методами:


	- [IEaxChart.ArePointsDrillable](../Interface/IEaxChart/IEaxChart.ArePointsDrillable.htm);


	- [IEaxChart.DrillPoint](../Interface/IEaxChart/IEaxChart.DrillPoint.htm);


	- [IEaxChart.DrillPoints](../Interface/IEaxChart/IEaxChart.DrillPoints.htm);


	- [IEaxChart.DrillSerie](../Interface/IEaxChart/IEaxChart.DrillSerie.htm);


	- [IEaxChart.DrillSeries](../Interface/IEaxChart/IEaxChart.DrillSeries.htm);


	- [IEaxChart.IsPointDrillable](../Interface/IEaxChart/IEaxChart.IsPointDrillable.htm);


	- [IEaxChart.IsSeriesDrillable](../Interface/IEaxChart/IEaxChart.IsSeriesDrillable.htm);


	- [IEaxChart.SerieDrillable](../Interface/IEaxChart/IEaxChart.SerieDrillable.htm);


	- [IEaxGrid.IsCellDrillable](../Interface/IEaxGrid/IEaxGrid.IsCellDrillable.htm);


	- [IEaxGrid.IsRangeDrillable](../Interface/IEaxGrid/IEaxGrid.IsRangeDrillable.htm);


	- [IEaxGrid.DrillCell](../Interface/IEaxGrid/IEaxGrid.DrillCell.htm);


	- [IEaxGrid.DrillRange](../Interface/IEaxGrid/IEaxGrid.DrillRange.htm);


	- [IEaxVisualizer.CanDrillObjectives](../Interface/IEaxVisualizer/IEaxVisualizer.CanDrillObjectives.htm);


	- [IEaxVisualizer.DrillObjectives](../Interface/IEaxVisualizer/IEaxVisualizer.DrillObjectives.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 1
		 Down. Детализация
		 данных с проваливанием на один уровень вниз по уровням элементов
		 измерения.


		 2
		 Up. Детализация данных
		 с возвратом на один уровень вверх по уровням элементов измерения.


		 4
		 ToFixed. Детализация
		 с фиксацией измерения. При данном виде детализации измерение перемещается
		 в список фиксированных. Если детализации производится по нескольким
		 элементам, то по ним будет включена агрегация данных.


		 8
		 IntoFixed. Детализация с
		 проваливанием в фиксированное измерение.


		 16
		 OutOfFixed. Детализация
		 данных с возвратом на один уровень вверх из измерения боковика.


		 32
		 DownThrough. Детализация
		 с проваливанием в реляционную таблицу.


		 64
		 UpThrough. Детализация
		 с проваливаем из реляционной таблицы.


См. также:


[Перечисления
 сборки Express](KeExpress_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
