# IAlgorithmSettings

IAlgorithmSettings
-


# IAlgorithmSettings


Сборка: Algo;


## Описание


Интерфейс IAlgorithmSettings
 предназначен для настройки алгоритма расчёта.


## Иерархия наследования


           IAlgorithmSettings


## Комментарии


Настройки алгоритма расчёта можно разделить на две группы:


	- [настройки
	 выполнения расчёта](CalculationAlgorithm.chm::/Desktop/Work/Perform_calculations.htm);


	- [настройки
	 периода расчёта алгоритма](CalculationAlgorithm.chm::/Desktop/Work/Calculation_period_management.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CheckArithmeticErrors](IAlgorithmSettings.CheckArithmeticErrors.htm)
		 Свойство CheckArithmeticErrors
		 определяет признак проверки арифметических операций, используемых
		 в [формулах
		 расчёта](CalculationAlgorithm.chm::/Desktop/Calculation_block/Formula.htm).


		 ![](../../Property_Image.gif)
		 [IsDirty](IAlgorithmSettings.IsDirty.htm)
		 Свойство IsDirty возвращает
		 признак наличия изменений в настройках алгоритма расчёта.


		 ![](../../Property_Image.gif)
		 [MultiThreadedCalc](IAlgorithmSettings.MultiThreadedCalc.htm)
		 Свойство MultiThreadedCalc
		 определяет использование многопоточного расчёта алгоритма для
		 ускорения расчёта [блоков
		 расчёта](CalculationAlgorithm.chm::/Desktop/Calculation_block/Calculation_unit.htm) и [блоков
		 контроля](CalculationAlgorithm.chm::/Desktop/Control_Block/Control_Block.htm).


		 ![](../../Property_Image.gif)
		 [NonPointwiseCalcMode](IAlgorithmSettings.NonPointwiseCalcMode.htm)
		 Свойство NonPointwiseCalcMode
		 определяет способ расчёта [блоков
		 агрегации](CalculationAlgorithm.chm::/Desktop/Aggregation_block/Aggregation_block.htm) при использовании поточечного расчёта
		 алгоритма.


		 ![](../../Property_Image.gif)
		 [PeriodControlEnd](IAlgorithmSettings.PeriodControlEnd.htm)
		 Свойство PeriodControlEnd
		 возвращает настройки даты окончания расчёта.


		 ![](../../Property_Image.gif)
		 [PeriodControlStart](IAlgorithmSettings.PeriodControlStart.htm)
		 Свойство PeriodControlStart
		 возвращает настройки даты начала расчёта.


		 ![](../../Property_Image.gif)
		 [PointwiseCalc](IAlgorithmSettings.PointwiseCalc.htm)
		 Свойство PointwiseCalc
		 определяет признак использования поточечного расчёта алгоритма.


		 ![](../../Property_Image.gif)
		 [SaveData](IAlgorithmSettings.SaveData.htm)
		 Свойство SaveData определяет
		 сохранение результата расчёта алгоритма или отдельных блоков в
		 базу данных.


См. также:


[Интерфейсы
 сборки Algo](../KeAlgo_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
