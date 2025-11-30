# INeuralNetwork.NormalizeInputValues

INeuralNetwork.NormalizeInputValues
-


# INeuralNetwork.NormalizeInputValues


## Синтаксис


NormalizeInputValues: Boolean;


## Описание


Метод NormalizeInputValues нормализует
 входные данные сети.


## Комментарии


Метод возвращает результат выполнения. Допустимые значения:


	- True. Входные данные
	 нормализованы;


	- False. При выполнении
	 метода произошла ошибка. Входные данные не были нормализованы.


Нормализация входных данных осуществляется по формуле:


(Vi =
 Vi / ||V||)


## Пример


В качестве примера приведена функция, на вход которой подаются нейронная
 сеть (параметр Net) и логический
 параметр FirstLayer, определяющий
 нормализовывать ли значения весов синапсов только для первого слоя сети.
 Если FirstLayer установить в
 True, то будут нормализованы значения
 весов синапсов только для первого слоя карты. Если FirstLayer
 установить в False, то в все веса
 будут нормализованы.


Для выполнения примера добавьте ссылку на системную сборку «NN».


			Function n_Normalize(Net: NeuralNetwork; FirstLayer: Boolean): NeuralNetwork;

Begin

    If Layer Then

        // нормализуем синапсы только первого слоя сети

        Net.NormalizeSynapsesEx(0);

    Else

        // нормализуем все синапсы сети

        Net.NormalizeSynapses;

    End If;

    // нормализуем входные данные

    Net.NormalizeInputValues;

    Return Net;

End Function n_Normalize;


После выполнения примера входные данные и значения весов синапсов будут
 нормализованы.


См. также:


[INeuralNetwork](INeuralNetwork.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
