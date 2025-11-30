# INeuralNetwork.GetClosestNeuron

INeuralNetwork.GetClosestNeuron
-


# INeuralNetwork.GetClosestNeuron


## Синтаксис


GetClosestNeuron: Integer;


## Описание


Метод GetClosestNeuron возвращает
 индекс нейрона, вектор веса которого меньше всего отличается от тестируемого
 входного вектора.


## Комментарии


GetClosestNeuron применяется
 только для самоорганизующихся карт Кохонена.


После создания и обучения самоорганизующаяся карта Кохонена может классифицировать
 подаваемый входной вектор и определить его класс. Классом называется возвращаемый
 индекс нейрона. Общее число классов равно числу нейронов в выходном слое
 сети и может быть получено при помощи метода [INeuralNetwork.GetNumberOfOutputs](INeuralNetwork.GetNumberOfOutputs.htm).


Самоорганизующаяся карта Кохонена может быть представлена линейно (все
 нейроны входного слоя образуют единственную строку) или в виде двухмерной
 карты (нейроны входного слоя образуют прямоугольник или квадрат). По умолчанию
 используется линейное представление, но его можно изменить, задав число
 строк методом [INeuralNetwork.SetRowWidth](INeuralNetwork.SetRowWidth.htm)
 или [INeuralNetwork.SetRowWidthEx](INeuralNetwork.SetRowWidthEx.htm).
 Например, первый слой сети состоит из 20 нейронов. Если указать, что слой
 содержит 4 строки, то карта будет представлена в виде прямоугольника со
 сторонами 4x5 нейронов. Обучение и работа с картой будет вестись в соответствии
 с заданной логической структурой. Получить текущее число строк карты можно
 используя метод [INeuralNetwork.GetRowWidth](INeuralNetwork.GetRowWidth.htm)
 или [INeuralNetwork.GetRowWidthEx](INeuralNetwork.GetRowWidthEx.htm).


Обычно самоорганизующаяся карта Кохонена состоит из одного слоя нейронов.
 Данный слой является одновременно входным и выходным. Сети с большим числом
 слоев непредсказуемы и необучаемы.


Пример использования метода GetClosestNeuron:


	- создать сеть. Метод [INeuralNetwork.CreateNetwork](INeuralNetwork.CreateNetwork.htm)
	 или [INeuralNetwork.CreateNetworkEx](INeuralNetwork.CreateNetworkEx.htm);


	- задать веса синапсов. Метод [INeuralNetwork.InitSynapses](INeuralNetwork.InitSynapses.htm),
	 [INeuralNetwork.InitSynapsesConvex](INeuralNetwork.InitSynapsesConvex.htm)
	 или [INeuralNetwork.InitSynapsesConvexEx](INeuralNetwork.InitSynapsesConvexEx.htm);


	- методом [INeuralNetwork.SetRowWidth](INeuralNetwork.SetRowWidth.htm)
	 задать число строк карты;


	- обучить сеть. Методы [INeuralNetwork.LearnSOFM](INeuralNetwork.LearnSOFM.htm)
	 и [INeuralNetwork.PropagateSOFM](INeuralNetwork.PropagateSOFM.htm);


После этого можно классифицировать тестируемые входные векторы. Вызовите
 [INeuralNetwork.PropagateSOFM](INeuralNetwork.PropagateSOFM.htm),
 затем GetClosestNeuron.


## Пример


В качестве примера приведен метод, на вход которого подается самоорганизующаяся
 карта Кохонена (параметр Net).


Добавьте ссылки на системные сборки: IO, NN.


	Sub m_SetRowWidth(Net: NeuralNetwork);

	Var

	    epoch, i, NumberOfInp, j: Integer;

	    OutputRes, InpData: Array Of Double;

	    TextW: ITextWriter;

	Begin

	    TextW := File.OpenTextWriter("C:\LearnRes.txt", True);

	    TextW.Encoding := CodePage.UTF8;

	    If Net.GetRowWidth = 1 Then

	        Net.SetRowWidth(2);

	    End If;

	    Net.InitSynapsesConvex;

	    For epoch := 1 To 100 Do

	        Net.PropagateSOFM;

	        Net.LearnSOFM;

	        OutputRes := Net.GetOutputValues;

	        TextW.WriteLnString("Эпоха обучения '" + epoch.ToString + "'. Выходные значения:");

	        For i := 0 To OutputRes.Length - 1 Do

	            TextW.WriteLnString("  " + OutputRes[i].ToString);

	        End For;

	    End For;

	    TextW.WriteLnString("Обучение завершено");

	    TextW.WriteLnString("------------------");

	    TextW.WriteLnString("Классификация");

	    TextW.WriteLnString("Число классов: " + Net.GetNumberOfOutputs.ToString);

	    NumberOfInp := Net.GetNumberOfInputs;

	    InpData := New Double[NumberOfInp];

	    For i := 0 To 5 Do

	        TextW.WriteLnString("Входной вектор '" + i.ToString + "': ");

	        For j := 0 To NumberOfInp - 1 Do

	            InpData[j] := i + j * 0.33;

	            TextW.WriteLnString("  " + InpData[j].ToString);

	        End For;

	        Net.SetInputValuesConvex(InpData, 1);

	        Net.PropagateSOFM;

	        TextW.WriteLnString("  Класс: " + Net.GetClosestNeuron.ToString);

	    End For;

	    TextW.Flush;

	    Net.DeleteNetwork;

	End Sub m_SetRowWidth;


После вызова метода карта Кохонена будет преобразована в решетку (если
 она имела линейный вид). Также карта будет обучена. Выходные данные, меняющиеся
 в процессе обучения, будут выведены в файл LearnRes.txt. Затем будут протестированы
 шесть векторов. Их данные и класс также будут выведены в файл. После классификации
 векторов карта будет уничтожена.


См. также:


[INeuralNetwork](INeuralNetwork.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
