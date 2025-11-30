# INeuralNetwork.SetLearnRadiusEx

INeuralNetwork.SetLearnRadiusEx
-


# INeuralNetwork.SetLearnRadiusEx


## Синтаксис


SetLearnRadiusEx(newLearnRadius: Integer; layerIndex:
 Integer): Integer;


## Параметры


newLearnRadius.
 Шаг обучения.


layerIndex. Индекс слоя.


## Описание


Метод SetLearnRadiusEx устанавливает
 шаг обучения сети.


## Комментарии


SetLearnRadiusEx возвращает
 значение предыдущего шага обучения и применяется только для самоорганизующихся
 карт Кохонена.


Значение шага может изменяться от нуля до количества нейронов в сети.
 Шаг обучения - это количество нейронов вокруг «победителя», которые будут
 сдвинуты и обучены. Обычно, к концу обучения шаг стремится к нулю.


Индексация слоев сквозная и начинается с нуля.


Использование метода приведено в примере для [INeuralNetwork.SetLearnRateEx](INeuralNetwork.SetLearnRateEx.htm).


См. также:


[INeuralNetwork](INeuralNetwork.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
