# INeuralNetwork.SetMjuEx

INeuralNetwork.SetMjuEx
-


# INeuralNetwork.SetMjuEx


## Синтаксис


SetMjuEx(newMju: Double; layerIndex: Integer);


## Параметры


newMju. Коэффициент момента инерции. Значение в диапазоне [0.0; 1.0].


layerIndex. Индекс слоя.


## Описание


Метод SetMjuEx устанавливает коэффициент момента инерции обучения для указанного слоя сети обратного распространения.


## Комментарии


Подробнее о моменте инерции см. [INeuralNetwork.SetMju](INeuralNetwork.SetMju.htm).


Индексация слоев сети сквозная начинается с нуля.


## Пример


В качестве примера приведена функция, на вход которой подается сеть обратного распространения (параметр Net). Для выполнения примера добавьте ссылку на системную сборку «NN».


			Function m_SetMjuNju(Net: NeuralNetwork): NeuralNetwork;

Var

    i: Integer;

Begin

    For i := 0 To Net.GetNumberOfLayers - 1 Do

        Net.SetNjuEx(0.15, i);

        Net.SetMjuEx(0.01, i);

    End For;

Return Net;

End Function m_SetMjuNju;


После выполнения примера для всех слоев сети будет установлен единый коэффициент момента инерции и единая скорость обучения.


См. также:


[INeuralNetwork](INeuralNetwork.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
