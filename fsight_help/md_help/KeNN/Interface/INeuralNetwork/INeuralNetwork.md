# INeuralNetwork

INeuralNetwork
-


# INeuralNetwork


Сборка: NN;


## Описание


Интерфейс INeuralNetwork предназначен
 для работы с искусственными нейронными сетями.


## Иерархия наследования


           INeuralNetwork


## Комментарии


Используя данный интерфейс, можно создать, обучить и использовать сеть
 обратного распространения или самоорганизующуюся карту Кохонена.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ApplyConvexCombinationFactor](INeuralNetwork.ApplyConvexCombinationFactor.htm)
		 Метод ApplyConvexCombinationFactor
		 применяет выпуклое комбинаторное преобразование к входным элементам
		 сети.


		 ![](../../Sub_Image.gif)
		 [CreateNetwork](INeuralNetwork.CreateNetwork.htm)
		 Метод CreateNetwork
		 создает нейронную сеть по заданному строковому представлению.


		 ![](../../Sub_Image.gif)
		 [CreateNetworkEx](INeuralNetwork.CreateNetworkEx.htm)
		 Метод CreateNetworkEx
		 создает нейронную сеть по заданным параметрам.


		 ![](../../Sub_Image.gif)
		 [DeleteNetwork](INeuralNetwork.DeleteNetwork.htm)
		 Метод DeleteNetwork
		 удаляет нейронную сеть.


		 ![](../../Sub_Image.gif)
		 [DeltasMinimumReachedBP](INeuralNetwork.DeltasMinimumReachedBP.htm)
		 Метод DeltasMinimumReachedBP
		 возвращает признак того, что значение delta
		 достигло заданного уровня.


		 ![](../../Sub_Image.gif)
		 [ExportSynapses](INeuralNetwork.ExportSynapses.htm)
		 Метод ExportSynapses
		 возвращает строковое представление сети.


		 ![](../../Sub_Image.gif)
		 [GetClosestNeuron](INeuralNetwork.GetClosestNeuron.htm)
		 Метод GetClosestNeuron
		 возвращает индекс нейрона, вектор веса которого меньше всего отличается
		 от тестируемого входного вектора.


		 ![](../../Sub_Image.gif)
		 [GetError](INeuralNetwork.GetError.htm)
		 Метод GetError возвращает
		 код последней ошибки нейронной сети.


		 ![](../../Sub_Image.gif)
		 [GetInputValues](INeuralNetwork.GetInputValues.htm)
		 Метод GetInputValues
		 возвращает вещественный массив входных значений сети.


		 ![](../../Sub_Image.gif)
		 [GetLearnRadius](INeuralNetwork.GetLearnRadius.htm)
		 Метод GetLearnRadius
		 возвращает значение шага обучения для указанного слоя.


		 ![](../../Sub_Image.gif)
		 [GetLearnRate](INeuralNetwork.GetLearnRate.htm)
		 Метод GetLearnRate
		 возвращает значение коэффициента обучения для указанного слоя.


		 ![](../../Sub_Image.gif)
		 [GetMaximumWeightDelta](INeuralNetwork.GetMaximumWeightDelta.htm)
		 Метод GetMaximumWeightDelta
		 возвращает максимальное значение delta
		 среди всех весов синапсов.


		 ![](../../Sub_Image.gif)
		 [GetNumberOfInputs](INeuralNetwork.GetNumberOfInputs.htm)
		 Метод GetNumberOfInputs
		 возвращает количество входов сети.


		 ![](../../Sub_Image.gif)
		 [GetNumberOfLayers](INeuralNetwork.GetNumberOfLayers.htm)
		 Метод GetNumberOfLayers
		 возвращает число слоев в нейронной сети.


		 ![](../../Sub_Image.gif)
		 [GetNumberOfOutputs](INeuralNetwork.GetNumberOfOutputs.htm)
		 Метод GetNumberOfOutputs
		 возвращает число выходов сети.


		 ![](../../Sub_Image.gif)
		 [GetOutputValues](INeuralNetwork.GetOutputValues.htm)
		 Метод GetOutputValues
		 возвращает массив выходных значений сети.


		 ![](../../Sub_Image.gif)
		 [GetOutputWidth](INeuralNetwork.GetOutputWidth.htm)
		 Метод GetOutputWidth возвращает
		 число строк в выходном слое самоорганизующейся карты Кохонена.


		 ![](../../Sub_Image.gif)
		 [GetRowWidth](INeuralNetwork.GetRowWidth.htm)
		 Метод GetRowWidth возвращает
		 число строк в выходном слое самоорганизующейся карты Кохонена.


		 ![](../../Sub_Image.gif)
		 [GetRowWidthEx](INeuralNetwork.GetRowWidthEx.htm)
		 Метод GetRowWidthEx возвращает
		 число строк в указанном слое самоорганизующейся карты Кохонена.


		 ![](../../Sub_Image.gif)
		 [GetSynapse](INeuralNetwork.GetSynapse.htm)
		 Метод GetSynapse возвращает
		 значение веса указанного синапса.


		 ![](../../Sub_Image.gif)
		 [GetUseVectorScalar](INeuralNetwork.GetUseVectorScalar.htm)
		 Метод GetUseVectorScalar
		 возвращает признак того, используется ли алгоритм скалярного умножения
		 векторов для вычисления расстояния между нейронами указанного
		 слоя.


		 ![](../../Sub_Image.gif)
		 [ImportSynapses](INeuralNetwork.ImportSynapses.htm)
		 Метод ImportSynapses
		 загружает значения весов синапсов из строкового представления.


		 ![](../../Sub_Image.gif)
		 [InitSynapses](INeuralNetwork.InitSynapses.htm)
		 Метод InitSynapses
		 задает значения весов синапсов для указанного слоя по заданным
		 параметрам.


		 ![](../../Sub_Image.gif)
		 [InitSynapsesConvex](INeuralNetwork.InitSynapsesConvex.htm)
		 Метод InitSynapsesConvex задает
		 значения весов синапсов используя алгоритм выпуклой комбинации.


		 ![](../../Sub_Image.gif)
		 [InitSynapsesConvexEx](INeuralNetwork.InitSynapsesConvexEx.htm)
		 Метод InitSynapsesConvexEx
		 задает значения весов синапсов для указанного слоя используя
		 алгоритм выпуклой комбинации.


		 ![](../../Sub_Image.gif)
		 [LearnBack](INeuralNetwork.LearnBack.htm)
		 Метод LearnBack выполняет
		 итерацию по обучению сети обратного распространения.


		 ![](../../Sub_Image.gif)
		 [LearnSOFM](INeuralNetwork.LearnSOFM.htm)
		 Метод LearnSOFM выполняет
		 обучение самоорганизующейся карты Кохонена.


		 ![](../../Sub_Image.gif)
		 [NormalizeInputValues](INeuralNetwork.NormalizeInputValues.htm)
		 Метод NormalizeInputValues
		 нормализует входные данные сети.


		 ![](../../Sub_Image.gif)
		 [NormalizeInputValuesEx](INeuralNetwork.NormalizeInputValuesEx.htm)
		 Метод NormalizeInputValuesEx
		 нормализует входные данные указанного слоя.


		 ![](../../Sub_Image.gif)
		 [NormalizeSynapses](INeuralNetwork.NormalizeSynapses.htm)
		 Метод NormalizeSynapses
		 нормализует значения весов синапсов всех слоев сети.


		 ![](../../Sub_Image.gif)
		 [NormalizeSynapsesEx](INeuralNetwork.NormalizeSynapsesEx.htm)
		 Метод NormalizeSynapsesEx
		 нормализует значения весов для синапсов указанного слоя.


		 ![](../../Sub_Image.gif)
		 [PropagateBP](INeuralNetwork.PropagateBP.htm)
		 Метод PropagateBP выполняет
		 распространение сигнала в сети обратного распространения.


		 ![](../../Sub_Image.gif)
		 [PropagateSOFM](INeuralNetwork.PropagateSOFM.htm)
		 Метод PropagateSOFM
		 распространяет сигнал по самоорганизующейся сети Кохонена.


		 ![](../../Sub_Image.gif)
		 [SetInputValues](INeuralNetwork.SetInputValues.htm)
		 Метод SetInputValues
		 устанавливает входные значения сети.


		 ![](../../Sub_Image.gif)
		 [SetInputValuesConvex](INeuralNetwork.SetInputValuesConvex.htm)
		 Метод SetInputValuesConvex
		 устанавливает входные значения сети с использованием выпуклого
		 комбинаторного преобразования.


		 ![](../../Sub_Image.gif)
		 [SetInputValuesConvexEx](INeuralNetwork.SetInputValuesConvexEx.htm)
		 Метод SetInputValuesConvexEx
		 устанавливает входные значения сети с использованием выпуклого
		 комбинаторного преобразования и возможностью нормализации.


		 ![](../../Sub_Image.gif)
		 [SetLearnRadius](INeuralNetwork.SetLearnRadius.htm)
		 Метод SetLearnRadius
		 устанавливает шаг обучения сети.


		 ![](../../Sub_Image.gif)
		 [SetLearnRadiusEx](INeuralNetwork.SetLearnRadiusEx.htm)
		 Метод SetLearnRadiusEx устанавливает
		 шаг обучения сети.


		 ![](../../Sub_Image.gif)
		 [SetLearnRate](INeuralNetwork.SetLearnRate.htm)
		 Метод SetLearnRate
		 устанавливает коэффициент обучения.


		 ![](../../Sub_Image.gif)
		 [SetLearnRateEx](INeuralNetwork.SetLearnRateEx.htm)
		 Метод SetLearnRateEx устанавливает
		 коэффициент обучения для указанного слоя.


		 ![](../../Sub_Image.gif)
		 [SetMju](INeuralNetwork.SetMju.htm)
		 Метод SetMju устанавливает
		 коэффициент момента инерции для обучения всех слоев сети обратного
		 распространения.


		 ![](../../Sub_Image.gif)
		 [SetMjuEx](INeuralNetwork.SetMjuEx.htm)
		 Метод SetMjuEx устанавливает
		 коэффициент момента инерции обучения для указанного слоя сети
		 обратного распространения.


		 ![](../../Sub_Image.gif)
		 [SetNju](INeuralNetwork.SetNju.htm)
		 Метод SetNju устанавливает
		 скорость обучения сети с обратным распространением.


		 ![](../../Sub_Image.gif)
		 [SetNjuEx](INeuralNetwork.SetNjuEx.htm)
		 Метод SetNjuEx устанавливает
		 скорость обучения для указанного слоя сети с обратным распространением.


		 ![](../../Sub_Image.gif)
		 [SetOutputWidth](INeuralNetwork.SetOutputWidth.htm)
		 Метод SetOutputWidth устанавливает
		 число строк в выходном слое самоорганизующейся карты Кохонена.


		 ![](../../Sub_Image.gif)
		 [SetRowWidth](INeuralNetwork.SetRowWidth.htm)
		 Метод SetRowWidth устанавливает
		 число строк в выходном слое самоорганизующейся карты Кохонена.


		 ![](../../Sub_Image.gif)
		 [SetRowWidthEx](INeuralNetwork.SetRowWidthEx.htm)
		 Метод SetRowWidthEx устанавливает
		 число строк в указанном слое самоорганизующейся карты Кохонена.


		 ![](../../Sub_Image.gif)
		 [SetSigmoidAlpha](INeuralNetwork.SetSigmoidAlpha.htm)
		 Метод SetSigmoidAlpha
		 устанавливает значение коэффициента Alpha
		 для сигмоидальных функций распространения сигнала в сети.


		 ![](../../Sub_Image.gif)
		 [SetSigmoidFuncs](INeuralNetwork.SetSigmoidFuncs.htm)
		 Метод SetSigmoidFuncs
		 устанавливает тип распространения сигнала в сети.


		 ![](../../Sub_Image.gif)
		 [SetSigmoidFuncsEx](INeuralNetwork.SetSigmoidFuncsEx.htm)
		 Метод SetSigmoidFuncs
		 устанавливает тип распространения сигнала в сети для указанного
		 слоя.


		 ![](../../Sub_Image.gif)
		 [SetSynapse](INeuralNetwork.SetSynapse.htm)
		 Метод SetSynapse
		 устанавливает значение веса указанного синапса.


		 ![](../../Sub_Image.gif)
		 [SetUseVectorScalar](INeuralNetwork.SetUseVectorScalar.htm)
		 Метод SetUseVectorScalar
		 определяет, применять ли алгоритм скалярного умножения векторов
		 для вычисления расстояния между нейронами.


		 ![](../../Sub_Image.gif)
		 [SetUseVectorScalarEx](INeuralNetwork.SetUseVectorScalarEx.htm)
		 Метод SetUseVectorScalarEx
		 определяет, применять ли алгоритм скалярного умножения векторов
		 для вычисления расстояния между нейронами указанного слоя.


См. также:


[Интерфейсы
 сборки NN](../KeNN_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
