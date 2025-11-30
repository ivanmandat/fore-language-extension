# IAlgorithmSettings.PointwiseCalc

IAlgorithmSettings.PointwiseCalc
-


# IAlgorithmSettings.PointwiseCalc


## Синтаксис


PointwiseCalc: Boolean;


## Описание


Свойство PointwiseCalc определяет
 признак использования поточечного расчёта алгоритма.


## Комментарии


Допустимые значения:


	- True. Расчёт алгоритма
	 выполняется поточечно. При использовании поточечного расчёта алгоритма
	 определите способ расчёта [блоков
	 агрегации](CalculationAlgorithm.chm::/Desktop/Aggregation_block/Aggregation_block.htm) с помощью свойства [IAlgorithmSettings.NonPointwiseCalcMode](IAlgorithmSettings.NonPointwiseCalcMode.htm);


	- False. По умолчанию.
	 Расчёт алгоритма выполняется векторно.


Для получения подробной информации о поточечном расчёте обратитесь к
 разделу «[Расчёт
 алгоритма](CalculationAlgorithm.chm::/Desktop/Work/Perform_calculations.htm)».


## Пример


Использование свойства приведено в примере для [IAlgorithmSettings.CheckArithmeticErrors](IAlgorithmSettings.CheckArithmeticErrors.htm).


См. также:


[IAlgorithmSettings](IAlgorithmSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
