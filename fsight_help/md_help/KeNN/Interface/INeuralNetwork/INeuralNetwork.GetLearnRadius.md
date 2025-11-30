# INeuralNetwork.GetLearnRadius

INeuralNetwork.GetLearnRadius
-


# INeuralNetwork.GetLearnRadius


## Синтаксис


GetLearnRadius(layerIndex: Integer): Integer;


## Параметры


layerIndex. Индекс слоя.


## Описание


Метод GetLearnRadius возвращает
 значение шага обучения для указанного слоя.


## Комментарии


Метод применяется только для самоорганизующихся карт Кохонена.


Шаг обучения - это количество нейронов вокруг «победителя», которые
 будут сдвинуты и обучены. Обычно, к концу обучения шаг стремится к нулю.


Индексация слоев сквозная и начинается с нуля.


Использование метода приведено в примере для [INeuralNetwork.SetLearnRateEx](INeuralNetwork.SetLearnRateEx.htm).


См. также:


[INeuralNetwork](INeuralNetwork.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
