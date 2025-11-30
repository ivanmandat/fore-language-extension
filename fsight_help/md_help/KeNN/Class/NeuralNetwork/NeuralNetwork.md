# NeuralNetwork

NeuralNetwork
-


# NeuralNetwork


Сборка: NN;


## Описание


Класс NeuralNetwork предназначен для работы с искусственными нейронными сетями.


## Комментарии


Используя данный класс, можно создать, обучить и использовать сеть обратного распространения или самоорганизующуюся карту Кохонена.


## Методы объекта класса, унаследованные от [INeuralNetwork](../../Interface/INeuralNetwork/INeuralNetwork.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ApplyConvexCombinationFactor](../../Interface/INeuralNetwork/INeuralNetwork.ApplyConvexCombinationFactor.htm)
		 Метод ApplyConvexCombinationFactor
		 применяет выпуклое комбинаторное преобразование к входным элементам
		 сети.


		 ![](../../Sub_Image.gif)
		 [CreateNetwork](../../Interface/INeuralNetwork/INeuralNetwork.CreateNetwork.htm)
		 Метод CreateNetwork
		 создает нейронную сеть по заданному строковому представлению.


		 ![](../../Sub_Image.gif)
		 [CreateNetworkEx](../../Interface/INeuralNetwork/INeuralNetwork.CreateNetworkEx.htm)
		 Метод CreateNetworkEx
		 создает нейронную сеть по заданным параметрам.


		 ![](../../Sub_Image.gif)
		 [DeleteNetwork](../../Interface/INeuralNetwork/INeuralNetwork.DeleteNetwork.htm)
		 Метод DeleteNetwork
		 удаляет нейронную сеть.


		 ![](../../Sub_Image.gif)
		 [DeltasMinimumReachedBP](../../Interface/INeuralNetwork/INeuralNetwork.DeltasMinimumReachedBP.htm)
		 Метод DeltasMinimumReachedBP
		 возвращает признак того, что значение delta
		 достигло заданного уровня.


		 ![](../../Sub_Image.gif)
		 [ExportSynapses](../../Interface/INeuralNetwork/INeuralNetwork.ExportSynapses.htm)
		 Метод ExportSynapses
		 возвращает строковое представление сети.


		 ![](../../Sub_Image.gif)
		 [GetClosestNeuron](../../Interface/INeuralNetwork/INeuralNetwork.GetClosestNeuron.htm)
		 Метод GetClosestNeuron
		 возвращает индекс нейрона, вектор веса которого меньше всего отличается
		 от тестируемого входного вектора.


		 ![](../../Sub_Image.gif)
		 [GetError](../../Interface/INeuralNetwork/INeuralNetwork.GetError.htm)
		 Метод GetError возвращает
		 код последней ошибки нейронной сети.


		 ![](../../Sub_Image.gif)
		 [GetInputValues](../../Interface/INeuralNetwork/INeuralNetwork.GetInputValues.htm)
		 Метод GetInputValues
		 возвращает вещественный массив входных значений сети.


		 ![](../../Sub_Image.gif)
		 [GetLearnRadius](../../Interface/INeuralNetwork/INeuralNetwork.GetLearnRadius.htm)
		 Метод GetLearnRadius
		 возвращает значение шага обучения для указанного слоя.


		 ![](../../Sub_Image.gif)
		 [GetLearnRate](../../Interface/INeuralNetwork/INeuralNetwork.GetLearnRate.htm)
		 Метод GetLearnRate
		 возвращает значение коэффициента обучения для указанного слоя.


		 ![](../../Sub_Image.gif)
		 [GetMaximumWeightDelta](../../Interface/INeuralNetwork/INeuralNetwork.GetMaximumWeightDelta.htm)
		 Метод GetMaximumWeightDelta
		 возвращает максимальное значение delta
		 среди всех весов синапсов.


		 ![](../../Sub_Image.gif)
		 [GetNumberOfInputs](../../Interface/INeuralNetwork/INeuralNetwork.GetNumberOfInputs.htm)
		 Метод GetNumberOfInputs
		 возвращает количество входов сети.


		 ![](../../Sub_Image.gif)
		 [GetNumberOfLayers](../../Interface/INeuralNetwork/INeuralNetwork.GetNumberOfLayers.htm)
		 Метод GetNumberOfLayers
		 возвращает число слоев в нейронной сети.


		 ![](../../Sub_Image.gif)
		 [GetNumberOfOutputs](../../Interface/INeuralNetwork/INeuralNetwork.GetNumberOfOutputs.htm)
		 Метод GetNumberOfOutputs
		 возвращает число выходов сети.


		 ![](../../Sub_Image.gif)
		 [GetOutputValues](../../Interface/INeuralNetwork/INeuralNetwork.GetOutputValues.htm)
		 Метод GetOutputValues
		 возвращает массив выходных значений сети.


		 ![](../../Sub_Image.gif)
		 [GetOutputWidth](../../Interface/INeuralNetwork/INeuralNetwork.GetOutputWidth.htm)
		 Метод GetOutputWidth возвращает
		 число строк в выходном слое самоорганизующейся карты Кохонена.


		 ![](../../Sub_Image.gif)
		 [GetRowWidth](../../Interface/INeuralNetwork/INeuralNetwork.GetRowWidth.htm)
		 Метод GetRowWidth возвращает
		 число строк в выходном слое самоорганизующейся карты Кохонена.


		 ![](../../Sub_Image.gif)
		 [GetRowWidthEx](../../Interface/INeuralNetwork/INeuralNetwork.GetRowWidthEx.htm)
		 Метод GetRowWidthEx возвращает
		 число строк в указанном слое самоорганизующейся карты Кохонена.


		 ![](../../Sub_Image.gif)
		 [GetSynapse](../../Interface/INeuralNetwork/INeuralNetwork.GetSynapse.htm)
		 Метод GetSynapse возвращает
		 значение веса указанного синапса.


		 ![](../../Sub_Image.gif)
		 [GetUseVectorScalar](../../Interface/INeuralNetwork/INeuralNetwork.GetUseVectorScalar.htm)
		 Метод GetUseVectorScalar
		 возвращает признак того, используется ли алгоритм скалярного умножения
		 векторов для вычисления расстояния между нейронами указанного
		 слоя.


		 ![](../../Sub_Image.gif)
		 [ImportSynapses](../../Interface/INeuralNetwork/INeuralNetwork.ImportSynapses.htm)
		 Метод ImportSynapses
		 загружает значения весов синапсов из строкового представления.


		 ![](../../Sub_Image.gif)
		 [InitSynapses](../../Interface/INeuralNetwork/INeuralNetwork.InitSynapses.htm)
		 Метод InitSynapses
		 задает значения весов синапсов для указанного слоя по заданным
		 параметрам.


		 ![](../../Sub_Image.gif)
		 [InitSynapsesConvex](../../Interface/INeuralNetwork/INeuralNetwork.InitSynapsesConvex.htm)
		 Метод InitSynapsesConvex задает
		 значения весов синапсов используя алгоритм выпуклой комбинации.


		 ![](../../Sub_Image.gif)
		 [InitSynapsesConvexEx](../../Interface/INeuralNetwork/INeuralNetwork.InitSynapsesConvexEx.htm)
		 Метод InitSynapsesConvexEx
		 задает значения весов синапсов для указанного слоя используя
		 алгоритм выпуклой комбинации.


		 ![](../../Sub_Image.gif)
		 [LearnBack](../../Interface/INeuralNetwork/INeuralNetwork.LearnBack.htm)
		 Метод LearnBack выполняет
		 итерацию по обучению сети обратного распространения.


		 ![](../../Sub_Image.gif)
		 [LearnSOFM](../../Interface/INeuralNetwork/INeuralNetwork.LearnSOFM.htm)
		 Метод LearnSOFM выполняет
		 обучение самоорганизующейся карты Кохонена.


		 ![](../../Sub_Image.gif)
		 [NormalizeInputValues](../../Interface/INeuralNetwork/INeuralNetwork.NormalizeInputValues.htm)
		 Метод NormalizeInputValues
		 нормализует входные данные сети.


		 ![](../../Sub_Image.gif)
		 [NormalizeInputValuesEx](../../Interface/INeuralNetwork/INeuralNetwork.NormalizeInputValuesEx.htm)
		 Метод NormalizeInputValuesEx
		 нормализует входные данные указанного слоя.


		 ![](../../Sub_Image.gif)
		 [NormalizeSynapses](../../Interface/INeuralNetwork/INeuralNetwork.NormalizeSynapses.htm)
		 Метод NormalizeSynapses
		 нормализует значения весов синапсов всех слоев сети.


		 ![](../../Sub_Image.gif)
		 [NormalizeSynapsesEx](../../Interface/INeuralNetwork/INeuralNetwork.NormalizeSynapsesEx.htm)
		 Метод NormalizeSynapsesEx
		 нормализует значения весов для синапсов указанного слоя.


		 ![](../../Sub_Image.gif)
		 [PropagateBP](../../Interface/INeuralNetwork/INeuralNetwork.PropagateBP.htm)
		 Метод PropagateBP выполняет
		 распространение сигнала в сети обратного распространения.


		 ![](../../Sub_Image.gif)
		 [PropagateSOFM](../../Interface/INeuralNetwork/INeuralNetwork.PropagateSOFM.htm)
		 Метод PropagateSOFM
		 распространяет сигнал по самоорганизующейся сети Кохонена.


		 ![](../../Sub_Image.gif)
		 [SetInputValues](../../Interface/INeuralNetwork/INeuralNetwork.SetInputValues.htm)
		 Метод SetInputValues
		 устанавливает входные значения сети.


		 ![](../../Sub_Image.gif)
		 [SetInputValuesConvex](../../Interface/INeuralNetwork/INeuralNetwork.SetInputValuesConvex.htm)
		 Метод SetInputValuesConvex
		 устанавливает входные значения сети с использованием выпуклого
		 комбинаторного преобразования.


		 ![](../../Sub_Image.gif)
		 [SetInputValuesConvexEx](../../Interface/INeuralNetwork/INeuralNetwork.SetInputValuesConvexEx.htm)
		 Метод SetInputValuesConvexEx
		 устанавливает входные значения сети с использованием выпуклого
		 комбинаторного преобразования и возможностью нормализации.


		 ![](../../Sub_Image.gif)
		 [SetLearnRadius](../../Interface/INeuralNetwork/INeuralNetwork.SetLearnRadius.htm)
		 Метод SetLearnRadius
		 устанавливает шаг обучения сети.


		 ![](../../Sub_Image.gif)
		 [SetLearnRadiusEx](../../Interface/INeuralNetwork/INeuralNetwork.SetLearnRadiusEx.htm)
		 Метод SetLearnRadiusEx устанавливает
		 шаг обучения сети.


		 ![](../../Sub_Image.gif)
		 [SetLearnRate](../../Interface/INeuralNetwork/INeuralNetwork.SetLearnRate.htm)
		 Метод SetLearnRate
		 устанавливает коэффициент обучения.


		 ![](../../Sub_Image.gif)
		 [SetLearnRateEx](../../Interface/INeuralNetwork/INeuralNetwork.SetLearnRateEx.htm)
		 Метод SetLearnRateEx устанавливает
		 коэффициент обучения для указанного слоя.


		 ![](../../Sub_Image.gif)
		 [SetMju](../../Interface/INeuralNetwork/INeuralNetwork.SetMju.htm)
		 Метод SetMju устанавливает
		 коэффициент момента инерции для обучения всех слоев сети обратного
		 распространения.


		 ![](../../Sub_Image.gif)
		 [SetMjuEx](../../Interface/INeuralNetwork/INeuralNetwork.SetMjuEx.htm)
		 Метод SetMjuEx устанавливает
		 коэффициент момента инерции обучения для указанного слоя сети
		 обратного распространения.


		 ![](../../Sub_Image.gif)
		 [SetNju](../../Interface/INeuralNetwork/INeuralNetwork.SetNju.htm)
		 Метод SetNju устанавливает
		 скорость обучения сети с обратным распространением.


		 ![](../../Sub_Image.gif)
		 [SetNjuEx](../../Interface/INeuralNetwork/INeuralNetwork.SetNjuEx.htm)
		 Метод SetNjuEx устанавливает
		 скорость обучения для указанного слоя сети с обратным распространением.


		 ![](../../Sub_Image.gif)
		 [SetOutputWidth](../../Interface/INeuralNetwork/INeuralNetwork.SetOutputWidth.htm)
		 Метод SetOutputWidth устанавливает
		 число строк в выходном слое самоорганизующейся карты Кохонена.


		 ![](../../Sub_Image.gif)
		 [SetRowWidth](../../Interface/INeuralNetwork/INeuralNetwork.SetRowWidth.htm)
		 Метод SetRowWidth устанавливает
		 число строк в выходном слое самоорганизующейся карты Кохонена.


		 ![](../../Sub_Image.gif)
		 [SetRowWidthEx](../../Interface/INeuralNetwork/INeuralNetwork.SetRowWidthEx.htm)
		 Метод SetRowWidthEx устанавливает
		 число строк в указанном слое самоорганизующейся карты Кохонена.


		 ![](../../Sub_Image.gif)
		 [SetSigmoidAlpha](../../Interface/INeuralNetwork/INeuralNetwork.SetSigmoidAlpha.htm)
		 Метод SetSigmoidAlpha
		 устанавливает значение коэффициента Alpha
		 для сигмоидальных функций распространения сигнала в сети.


		 ![](../../Sub_Image.gif)
		 [SetSigmoidFuncs](../../Interface/INeuralNetwork/INeuralNetwork.SetSigmoidFuncs.htm)
		 Метод SetSigmoidFuncs
		 устанавливает тип распространения сигнала в сети.


		 ![](../../Sub_Image.gif)
		 [SetSigmoidFuncsEx](../../Interface/INeuralNetwork/INeuralNetwork.SetSigmoidFuncsEx.htm)
		 Метод SetSigmoidFuncs
		 устанавливает тип распространения сигнала в сети для указанного
		 слоя.


		 ![](../../Sub_Image.gif)
		 [SetSynapse](../../Interface/INeuralNetwork/INeuralNetwork.SetSynapse.htm)
		 Метод SetSynapse
		 устанавливает значение веса указанного синапса.


		 ![](../../Sub_Image.gif)
		 [SetUseVectorScalar](../../Interface/INeuralNetwork/INeuralNetwork.SetUseVectorScalar.htm)
		 Метод SetUseVectorScalar
		 определяет, применять ли алгоритм скалярного умножения векторов
		 для вычисления расстояния между нейронами.


		 ![](../../Sub_Image.gif)
		 [SetUseVectorScalarEx](../../Interface/INeuralNetwork/INeuralNetwork.SetUseVectorScalarEx.htm)
		 Метод SetUseVectorScalarEx
		 определяет, применять ли алгоритм скалярного умножения векторов
		 для вычисления расстояния между нейронами указанного слоя.


См. также:


[Классы сборки NN](../KeNN_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
