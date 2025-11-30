# INeuralNetwork.InitSynapsesConvexEx

INeuralNetwork.InitSynapsesConvexEx
-


# INeuralNetwork.InitSynapsesConvexEx


## Синтаксис


InitSynapsesConvexEx(layerIndex: Integer);


## Параметры


layerIndex. Индекс слоя.


## Описание


Метод InitSynapsesConvexEx задает значения весов синапсов для указанного слоя используя алгоритм выпуклой комбинации.


## Комментарии


InitSynapsesConvexEx генерирует значения для синапсов всех нейронов указанного слоя по формуле:


1 / sqrt(количество_синапсов)


Также данная формула используется, если обучение самоорганизующейся сети Кохонена осуществляется при помощи метода выпуклой комбинации.


Индексация слоев сквозная и начинается с нуля.


Для задания значений весов синапсов также можно использовать методы:


-
[INeuralNetwork.SetSynapse](INeuralNetwork.SetSynapse.htm);


-
[INeuralNetwork.InitSynapses](INeuralNetwork.InitSynapses.htm);


-
[INeuralNetwork.InitSynapsesConvex](INeuralNetwork.InitSynapsesConvex.htm).


Использование метода приведено в примере для [INeuralNetwork.InitSynapses](INeuralNetwork.InitSynapses.htm).


См. также:


[INeuralNetwork](INeuralNetwork.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
