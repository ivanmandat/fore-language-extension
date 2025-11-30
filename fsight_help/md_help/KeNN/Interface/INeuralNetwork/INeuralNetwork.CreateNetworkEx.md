# INeuralNetwork.CreateNetworkEx

INeuralNetwork.CreateNetworkEx
-


# INeuralNetwork.CreateNetworkEx


## Синтаксис


CreateNetworkEx(


numberOfLayers: Integer;


numberOfInputs: Integer;


Var numberOfNeuronsInLayers:
 Array;


initializeSynapsysMaxValue:
 Double;


NeuronSigmoidFuncsType:
 Integer);


## Параметры


numberOfLayers. Число слоев
 в создаваемой сети. Обычно сеть состоит из двух слоев нейронов.


numberOfInputs. Число входных
 элементов сети. Каждый нейрон первого слоя будет содержать данное число
 синапсов.


numberOfNeuronsInLayers. Целочисленный
 массив числа нейронов в каждом слое. Если сеть состоит из двух слоев,
 то массив должен содержать два элемента.


initializeSynapsysMaxValue.
 Неотрицательное значение для инициализации синапсов каждого нейрона.


NeuronSigmoidFuncsType. Тип
 функции распространения сигнала в сети.


## Описание


Метод CreateNetworkEx создает
 нейронную сеть по заданным параметрам.


## Комментарии


Для созданной сети можно начать процесс обучения, после чего она будет
 готова для работы. Сеть может быть использована для сетей с обратным распространением
 ошибки и для самоорганизующейся сети Кохонена.


После создания сети синапсы могут быть инициализированы с помощью метода
 [INeuralNetwork.SetSynapse](INeuralNetwork.SetSynapse.htm)
 или [INeuralNetwork.ImportSynapses](INeuralNetwork.ImportSynapses.htm).


От типа распространения сигнала зависит диапазон выходных значений сети.
 Допустимые значения параметра NeuronSigmoidFuncsType:


	- 0. По умолчанию. Будет
	 использована экспоненциальная функция (сигмоидальная). Диапазон выходных
	 значений будет смещен: [-0.5; 0.5];


	- 1. Используется пороговая
	 функция, возвращающая true,
	 если вычисленное значение меньше нуля, и false,
	 если больше. Соответственно, выходные значения будут состоять из нулей
	 и единиц;


	- 2. Функция гиперболического
	 тангенса (подобна сигмоидальной). Диапазон выходных значений: [-1.0;
	 1.0];


	- 3. Экспоненциальная
	 функция (сигмоидальная). Диапазон выходных значений будет смещен:
	 [-0.5; 0.5];


	- 4. Экспоненциальная
	 функция (сигмоидальная). Диапазон выходных значений: [0.0; 1.0];


	- 5. Экспоненциальная
	 функция (биполярная сигмоидальная). Диапазон выходных значений: [-1.0;
	 1.0].


## Пример


Для выполнения примера предполагается наличие в файловой системе файла
 C:\NetDefenition.txt.


Добавьте ссылки на системные сборки: IO, NN.


	Function m_CreateNetworkEx: NeuralNetwork;

	Var

	    Net: NeuralNetwork;

	    ar: Array[2] Of Integer;

	    SynVal: Double;

	    TextW: ITextWriter;

	Begin

	    Net := New NeuralNetwork.Create;

	    ar[0] := 3;

	    ar[1] := 2;

	    Net.CreateNetworkEx(2, 2, ar, 0.5, 3);

	    TextW := File.OpenTextWriter("C:\NetDefenition.txt", True);

	    TextW.Encoding := CodePage.UTF8;

	    TextW.WriteLnString(Net.ExportSynapses);

	    SynVal := Net.GetSynapse(0, 0, 0);

	    SynVal := SynVal + 0.05;

	    Net.SetSynapse(SynVal, 0, 0, 0);

	    TextW.WriteLnString("----------------");

	    TextW.WriteLnString(Net.ExportSynapses);

	    TextW.Flush;

	    Return Net;

	End Function m_CreateNetworkEx;


В примере создается нейронная сеть, состоящая из двух слоев. Первый
 слой содержит три нейрона. Каждый нейрон содержит два входных элемента.
 Второй слой состоит из двух нейронов. Вес первого синапса для первого
 нейрона первого слоя будет получен и увеличен. Описание сети до и после
 изменения значения веса синапса будет выведено в указанный файл.


См. также:


[INeuralNetwork](INeuralNetwork.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
