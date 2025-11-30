# INeuralNetwork.SetLearnRadius

INeuralNetwork.SetLearnRadius
-


# INeuralNetwork.SetLearnRadius


## Синтаксис


SetLearnRadius(newLearnRadius: Integer);


## Параметры


newLearnRadius. Шаг обучения.


## Описание


Метод SetLearnRadius устанавливает
 шаг обучения сети.


## Комментарии


Метод применяется только для самоорганизующихся карт Кохонена.


Значение шага может изменяться от нуля до количества нейронов в сети.


Шаг обучения - это количество нейронов вокруг «победителя», которые
 будут сдвинуты и обучены. Обычно, к концу обучения шаг стремится к нулю.


Использование метода приведено в примере для [INeuralNetwork.LearnSOFM](INeuralNetwork.LearnSOFM.htm).


См. также:


[INeuralNetwork](INeuralNetwork.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
