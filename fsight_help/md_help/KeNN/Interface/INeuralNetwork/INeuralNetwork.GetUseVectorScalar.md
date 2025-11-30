# INeuralNetwork.GetUseVectorScalar

INeuralNetwork.GetUseVectorScalar
-


# INeuralNetwork.GetUseVectorScalar


## Синтаксис


GetUseVectorScalar(layerIndex: Integer): Boolean;


## Параметры


layerIndex. Индекс слоя.


## Описание


Метод GetUseVectorScalar возвращает
 признак того, используется ли алгоритм скалярного умножения векторов для
 вычисления расстояния между нейронами указанного слоя.


## Комментарии


GetUseVectorScalar применяется
 только для самоорганизующихся сетей Кохонена. Допустимые значения:


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
