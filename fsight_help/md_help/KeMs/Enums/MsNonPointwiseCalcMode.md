# MsNonPointwiseCalcMode

MsNonPointwiseCalcMode
-


# MsNonPointwiseCalcMode


## Описание


Перечисление MsNonPointwiseCalcMode
 содержит способы расчёта [моделей
 матричной агрегации](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/MatrixAggregation/MatrixAggregation.htm) или [блоков
 агрегации](CalculationAlgorithm.chm::/Desktop/Aggregation_block/Aggregation_block.htm) при использовании поточечного расчёта задачи
 моделирования или алгоритма.


Используется следующими свойствами:


	- [IAlgorithmSettings.NonPointwiseCalcMode](KeAlgo.chm::/Interface/IAlgorithmSettings/IAlgorithmSettings.NonPointwiseCalcMode.htm);


	- [IMsProblemPointwiseSettings.NonPointwiseCalcMode](../Interface/IMsProblemPointwiseSettings/IMsProblemPointwiseSettings.NonPointwiseCalcMode.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 DoNotCalc. Модели матричной
		 агрегации/блоки агрегации не будут рассчитаны.


		 1
		 CalcBefore. Модели
		 матричной агрегации/блоки агрегации будут рассчитаны до поточечного
		 расчёта задачи или алгоритма.


		 2
		 CalcAfter. По умолчанию.
		 Модели матричной агрегации/блоки агрегации будут рассчитаны после
		 поточечного расчёта задачи или алгоритма.


См. также:


[Перечисления сборки Ms](KeMs_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
