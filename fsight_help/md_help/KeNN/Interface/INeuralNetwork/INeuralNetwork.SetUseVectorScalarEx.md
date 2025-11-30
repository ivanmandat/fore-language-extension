# INeuralNetwork.SetUseVectorScalarEx

INeuralNetwork.SetUseVectorScalarEx
-


# INeuralNetwork.SetUseVectorScalarEx


## Синтаксис


SetUseVectorScalarEx(useScalar: Boolean; layerIndex:
 Integer): Boolean;


## Параметры


useScalar. Признак использования алгоритма скалярного умножения векторов.


layerIndex. Индекс слоя.


## Описание


Метод SetUseVectorScalarEx определяет,
 применять ли алгоритм скалярного умножения векторов для вычисления расстояния
 между нейронами указанного слоя.


## Комментарии


Метод применяется только для самоорганизующихся сетей Кохонена и возвращает
 предыдущее значение параметра useScalar.
 Допустимые значения параметра useScalar:


	- True. Применяется алгоритм
	 скалярного умножения векторов;


	- False. Применяются евклидовы
	 расстояния.


Индексация слоев сквозная и начинается с нуля.


## Пример


Использование метода приведено в примере для [INeuralNetwork.SetLearnRateEx](INeuralNetwork.SetLearnRateEx.htm).


См. также:


[INeuralNetwork](INeuralNetwork.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
