# INeuralNetwork.SetRowWidth

INeuralNetwork.SetRowWidth
-


# INeuralNetwork.SetRowWidth


## Синтаксис


SetRowWidth(newWidth: Integer): Integer;


## Параметры


newWidth. Число строк.


## Описание


Метод SetRowWidth устанавливает число строк в выходном слое самоорганизующейся карты Кохонена.


## Комментарии


SetRowWidth аналог метода [INeuralNetwork.SetOutputWidth](INeuralNetwork.SetOutputWidth.htm) и возвращает текущее число строк в выходном слое карты.


Самоорганизующаяся карта Кохонена может быть представлена линейно (все нейроны входного слоя образуют единственную строку) или в виде двухмерной карты (нейроны входного слоя образуют прямоугольник или квадрат). По умолчанию используется линейное представление, но его можно изменить, задав число строк методом SetRowWidth или [INeuralNetwork.SetRowWidthEx](INeuralNetwork.SetRowWidthEx.htm). Например, первый слой сети состоит из 20 нейронов. Если указать, что слой содержит 4 строки, то карта будет представлена в виде прямоугольника со сторонами 4x5 нейронов. Обучение и работа с картой будет вестись в соответствии с заданной логической структурой. Получить текущее число строк карты можно используя метод [INeuralNetwork.GetRowWidth](INeuralNetwork.GetRowWidth.htm) или [INeuralNetwork.GetRowWidthEx](INeuralNetwork.GetRowWidthEx.htm).


Использование метода приведено в примере для [INeuralNetwork.GetClosestNeuron](INeuralNetwork.GetClosestNeuron.htm).


См. также:


[INeuralNetwork](INeuralNetwork.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
