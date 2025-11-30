# INeuralNetwork.InitSynapses

INeuralNetwork.InitSynapses
-


# INeuralNetwork.InitSynapses


## Синтаксис


InitSynapses(MaxAbsoluteValue: Double; layerIndex: Integer);


## Параметры


MaxAbsoluteValue. Максимальное значение веса синапса.


layerIndex. Индекс слоя.


## Описание


Метод InitSynapses задает значения весов синапсов для указанного слоя по заданным параметрам.


## Комментарии


InitSynapses генерирует значения для синапсов всех нейронов указанного слоя. Индексация слоев сквозная и начинается с нуля.


Для задания значений весов синапсов также можно использовать методы:


-
[INeuralNetwork.SetSynapse](INeuralNetwork.SetSynapse.htm);


-
[INeuralNetwork.InitSynapsesConvex](INeuralNetwork.InitSynapsesConvex.htm);


-
[INeuralNetwork.InitSynapsesConvexEx](INeuralNetwork.InitSynapsesConvexEx.htm).


## Пример


В качестве примера приведена функция, на вход которой подаются нейронная сеть (параметр Net) и логический параметр Layer, определяющий метод генерации весов. Если Layer установить в True, то для генерации значений весов синапсов различных слоев будут использоваться различные методы. Если Layer установить в False, то в все веса будут сгенерированы одним методом.


Для выполнения примера добавьте ссылку на системную сборку «NN».


			Function m_InitSynapses(Net: NeuralNetwork; Layer: Boolean): NeuralNetwork;

Var

    lCount, i: Integer;

Begin

    If Layer Then

        // инициализируем синапсы разными методами
        lCount := Net.GetNumberOfLayers;

        For i := 0 To lCount - 1 Do

            net.InitSynapsesConvexEx(i);

        End For;

        Net.InitSynapses(0.9, lCount - 1);

    Else

        // инициализируем все синапсы одним методом
        Net.InitSynapsesConvex;

    End If;

    Return Net;

End Function m_InitSynapses;


После выполнения примера значения весов синапсов будут сгенерированы выбранным методом.


См. также:


[INeuralNetwork](INeuralNetwork.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
