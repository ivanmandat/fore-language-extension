# INeuralNetwork.GetLearnRate

INeuralNetwork.GetLearnRate
-


# INeuralNetwork.GetLearnRate


## Синтаксис


GetLearnRate(layerIndex: Integer): Double;


## Параметры


layerIndex. Индекс слоя.


## Описание


Метод GetLearnRate возвращает значение коэффициента обучения для указанного слоя.


## Комментарии


Метод применяется только для самоорганизующихся карт Кохонена.


Коэффициент обучения определяет: насколько быстро нейроны обучаются. Обычно, к концу обучения данный коэффициент стремится к нулю.


Индексация слоев сквозная и начинается с нуля.


Использование метода приведено в примере для [INeuralNetwork.SetLearnRateEx](INeuralNetwork.SetLearnRateEx.htm).


См. также:


[INeuralNetwork](INeuralNetwork.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
