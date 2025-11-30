# INeuralNetwork.CreateNetwork

INeuralNetwork.CreateNetwork
-


# INeuralNetwork.CreateNetwork


## Синтаксис


CreateNetwork(networkDefinition: String);


## Параметры


networkDefinition. Параметры
 создаваемой сети, представленные в строковом виде.


## Описание


Метод CreateNetwork создает
 нейронную сеть по заданному строковому представлению.


## Комментарии


Новая сеть не будет создана, если в networkDefinition
 указаны неверные параметры.


Метод [INeuralNetwork.ExportSynapses](INeuralNetwork.ExportSynapses.htm)
 возвращает параметры сети в строковом представлении.


## Пример


Для выполнения примера добавьте ссылку на системную сборку «NN».


			Sub UserProc;

Var

    network: NeuralNetwork;

    networkDefinition: String;

Begin

    network := New NeuralNetwork.Create;

    networkDefinition := "layers: 1 6 3 ";

    networkDefinition := networkDefinition + "funcs: 3 ";

    networkDefinition := networkDefinition + "layer 0: 6 3 ";

    networkDefinition := networkDefinition + "neuron 0: 7 ";

    networkDefinition := networkDefinition + "syn 0: 0.408248 ";

    networkDefinition := networkDefinition + "syn 1: 0.408248 ";

    networkDefinition := networkDefinition + "syn 2: 0.408248 ";

    networkDefinition := networkDefinition + "syn 3: 0.408248 ";

    networkDefinition := networkDefinition + "syn 4: 0.408248 ";

    networkDefinition := networkDefinition + "syn 5: 0.408248 ";

    networkDefinition := networkDefinition + "syn 6: -0.074854 ";

    networkDefinition := networkDefinition + "neuron 1: 7";

    networkDefinition := networkDefinition + "syn 0: 0.408248 ";

    networkDefinition := networkDefinition + "syn 1: 0.408248 ";

    networkDefinition := networkDefinition + "syn 2: 0.408248 ";

    networkDefinition := networkDefinition + "syn 3: 0.408248 ";

    networkDefinition := networkDefinition + "syn 4: 0.408248 ";

    networkDefinition := networkDefinition + "syn 5: 0.408248 ";

    networkDefinition := networkDefinition + "syn 6: 0.006767 ";

    networkDefinition := networkDefinition + "neuron 2: 7 ";

    networkDefinition := networkDefinition + "syn 0: 0.408248 ";

    networkDefinition := networkDefinition + "syn 1: 0.408248 ";

    networkDefinition := networkDefinition + "syn 2: 0.408248 ";

    networkDefinition := networkDefinition + "syn 3: 0.408248 ";

    networkDefinition := networkDefinition + "syn 4: 0.408248 ";

    networkDefinition := networkDefinition + "syn 5: 0.408248 ";

    networkDefinition := networkDefinition + "syn 6: 0.244263";

    network.CreateNetwork(networkDefinition);

End Sub UserProc;


После выполнения примера по указанным параметрам будет создана нейронная
 сеть.


См. также:


[INeuralNetwork](INeuralNetwork.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
