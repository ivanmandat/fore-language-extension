# INeuralNetwork.PropagateSOFM

INeuralNetwork.PropagateSOFM
-


# INeuralNetwork.PropagateSOFM


## Синтаксис


PropagateSOFM;


## Описание


Метод PropagateSOFM распространяет сигнал по самоорганизующейся сети Кохонена.


## Комментарии


Данный метод использует распространение входного вектора через сеть Кохонена для вычисления расстояния между нейронами сети и входным вектором. После распространения сигнала входной вектор классифицирован. Для получения его класса используйте метод [INeuralNetwork.GetClosestNeuron](INeuralNetwork.GetClosestNeuron.htm) (перед вызовом сеть должна быть обучена.


Использование метода приведено в примере для [INeuralNetwork.LearnSOFM](INeuralNetwork.LearnSOFM.htm).


См. также:


[INeuralNetwork](INeuralNetwork.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
