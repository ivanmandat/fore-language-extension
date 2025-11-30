# INeuralNetwork.SetSynapse

INeuralNetwork.SetSynapse
-


# INeuralNetwork.SetSynapse


## Синтаксис


SetSynapse(


synapseValue: Double;


layerIdx: Integer;


neuronIdx: Integer;


synapseIndex: Integer):
 Boolean;


## Параметры


synapseValue. Новое значение
 веса синапса.


layerIdx. Индекс слоя сети.


neuronIdx. Индекс нейрона в
 слое.


synapseIndex. Индекс синапса
 в нейроне.


## Описание


Метод SetSynapse устанавливает
 значение веса указанного синапса.


## Комментарии


Метод возвращает результат выполнения. Допустимые значения:


	- True. Новое значение
	 веса синапса успешно установлено;


	- False. При выполнении
	 метода произошла ошибка. Значение веса синапса не было изменено.


Используйте метод [INeuralNetwork.GetSynapse](INeuralNetwork.GetSynapse.htm)
 для получения текущего значения веса синапса. Если вес установить равным
 нулю, то синапс не будет работать.


Индексация слоев, нейронов, синапсов сквозная и начинается с нуля. Максимальное
 значение synapseIndex совпадает
 с числом синапсов нейрона. Синапс с максимальным индексом - это «смещенный
 вход» и по умолчанию его вес равен нулю. Используя метод SetSynapse
 можно изменить значение веса для «смещенного входа».


## Пример


Использование метода приведено в примере для [INeuralNetwork.CreateNetworkEx](INeuralNetwork.CreateNetworkEx.htm).


См. также:


[INeuralNetwork](INeuralNetwork.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
