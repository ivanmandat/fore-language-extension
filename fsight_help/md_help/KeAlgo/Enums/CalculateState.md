# CalculateState

CalculateState
-


# CalculateState


## Описание


Перечисление CalculateState
 используется для определения состояния [расчёта
 алгоритма](CalculationAlgorithm.chm::/Desktop/Work/Perform_calculations.htm).


Используется следующим свойством:


	- [IAlgorithmCalculationAsyncResult.State](../Interface/IAlgorithmCalculationAsyncResult/IAlgorithmCalculationAsyncResult.State.htm);


	- [IAlgorithmCalculationAsyncDebug.State](../Interface/IAlgorithmCalculationAsyncDebug/IAlgorithmCalculationAsyncDebug.State.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 NotStarted. Расчёт
		 алгоритма не запущен.


		 1
		 Initialization. Выполнение
		 инициализации.


		 2
		 Running. Расчёт
		 алгоритма выполняется.


		 3
		 PausedOnDebug. Расчёт
		 приостановлен перед продолжением расчёта следующего объекта.
		Примечание.
		 Возможно только при [отладке расчёта
		 алгоритма](CalculationAlgorithm.chm::/Desktop/Work/Debug.htm).


		 4
		 PausedOnError. Расчёт
		 приостановлен при возникновении ошибки. Продолжение расчёта зависит
		 от действия, выбранного для решения ошибки.


		 5
		 Stoped. Расчёт алгоритма
		 остановлен.


		 6
		 Aborted. Расчёт алгоритма
		 прерван.


См. также:


[Перечисления
 сборки Algo](KeAlgo_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
