# SkipErrorState

SkipErrorState
-


# SkipErrorState


## Описание


Перечисление SkipErrorState
 используется для исправления возникших ошибок при [расчёте
 алгоритма](CalculationAlgorithm.chm::/Desktop/Work/Perform_calculations.htm).


Используется следующим свойством:


	- [IAlgorithmBaseExecutor.ErrorState](../Interface/IAlgorithmBaseExecutor/IAlgorithmBaseExecutor.ErrorState.htm);


	- [IAlgorithmCalculateErrorEvent.ErrorState](../Interface/IAlgorithmCalculateErrorEvent/IAlgorithmCalculateErrorEvent.ErrorState.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None. Расчёт алгоритма
		 с ошибками.


		 1
		 Ignore. Пропуск
		 текущей ошибки.


		 2
		 IgnoreCurrent. Пропуск
		 текущей ошибки и всех последующих аналогичных ошибок.


		 3
		 IgnoreAll. Пропуск
		 всех ошибок.


		 4
		 Abort. Прерывание расчёта
		 алгоритма.


См. также:


[Перечисления
 сборки Algo](KeAlgo_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
