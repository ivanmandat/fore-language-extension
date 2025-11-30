# INeuralNetwork.DeltasMinimumReachedBP

INeuralNetwork.DeltasMinimumReachedBP
-


# INeuralNetwork.DeltasMinimumReachedBP


## Синтаксис


DeltasMinimumReachedBP(MaximumLimitValue: Double):
 Boolean;


## Параметры


MaximumLimitValue. Значение
 delta.


## Описание


Метод DeltasMinimumReachedBP
 возвращает признак того, что значение delta
 достигло заданного уровня.


## Комментарии


Метод используется только для сетей обратного распространения. Допустимые
 значения:


	- True. Значение delta для всех весов синапсов меньше,
	 чем MaximumLimitValue. Процесс
	 обучения окончен;


	- False. Максимальное
	 значение delta для весов
	 синапсов больше, чем MaximumLimitValue.
	 Для получения максимального значения delta
	 используйте [INeuralNetwork.GetMaximumWeightDelta](INeuralNetwork.GetMaximumWeightDelta.htm).


DeltasMinimumReachedBP можно
 вызывать после каждого выполнения метода [INeuralNetwork.LearnBack](INeuralNetwork.LearnBack.htm)
 для контроля процесса обучения.


Использование метода приведено в примере для [INeuralNetwork.LearnBack](INeuralNetwork.LearnBack.htm).


См. также:


[INeuralNetwork](INeuralNetwork.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
