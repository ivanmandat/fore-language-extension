# INeuralNetwork.SetRowWidthEx

INeuralNetwork.SetRowWidthEx
-


# INeuralNetwork.SetRowWidthEx


## Синтаксис


SetRowWidthEx(newWidth: Integer; layerIndex: Integer): Integer;


## Параметры


newWidth. Число строк.


layerIndex. Индекс слоя.


## Описание


Метод SetRowWidthEx устанавливает число строк в указанном слое самоорганизующейся карты Кохонена.


## Комментарии


Индексация слоев сквозная и начинается с нуля. Метод SetRowWidthEx возвращает возвращает текущее число строк в выходном слое карты и подобен методу [INeuralNetwork.SetRowWidth](INeuralNetwork.SetRowWidth.htm).


## Пример


В качестве примера приведена функция, на вход которой подается самоорганизующаяся карта Кохонена (параметр Net). Для выполнения примера добавьте ссылки на системную сборку «NN».


			Function m_SetRowEx(Net: NeuralNetwork): NeuralNetwork;

Var

    layerCount, i: Integer;

Begin

    layerCount := Net.GetNumberOfLayers;

    For i := 1 To layerCount - 1 Do

        If Net.GetRowWidthEx(i) = 1 Then

            Net.SetRowWidthEx(2, i);

        End If;

    End For;

    Return Net;

End Function m_SetRowEx;


После выполнения примера для всех слоев карты Кохонена будет установлено число строк.


См. также:


[INeuralNetwork](INeuralNetwork.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
