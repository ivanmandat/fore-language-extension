# INeuralNetwork.LearnBack

INeuralNetwork.LearnBack
-


# INeuralNetwork.LearnBack


## Синтаксис


LearnBack(Var InputValues: Array; Var outputValues:
 Array);


## Параметры


InputValues. Вещественный массив
 входных значений.


outputValues. Вещественный
 массив опорных выходных значений.


## Описание


Метод LearnBack выполняет итерацию
 по обучению сети обратного распространения.


## Комментарии


Одна итерация называется эпохой обучения. Краткий алгоритм:


	- используя текущие значения весов синапсов, рассчитываются выходные
	 значения;


	- рассчитанные выходные значения сравниваются с опорными выходными
	 значениями. Определяется значение ошибки;


	- используя значение ошибки, вычисляется значение delta,
	 применяемое для коррекции весов синапсов. См. [INeuralNetwork.DeltasMinimumReachedBP](INeuralNetwork.DeltasMinimumReachedBP.htm)
	 и [INeuralNetwork.GetMaximumWeightDelta](INeuralNetwork.GetMaximumWeightDelta.htm);


	- производится коррекция весов синапсов.


Итерации продолжаются заданное число раз или до достижения заданной
 точности сети, т.е. пока delta
 не станет достаточна мала.


## Пример


В качестве примера приведена функция, выполняющая обучение сети. На
 вход функции подается сеть обратного распространения: параметр Net.


Добавьте ссылки на системные сборки: IO, NN.


	Function m_BPTrain(Net: NeuralNetwork): NeuralNetwork;

	Var

	    epoch, sampleNumber, i: Integer;

	    NumberOfOut, NumberOfInp: Integer;

	    inputs, outputs: Array Of Double;

	    TextW: ITextWriter;

	Begin

	    TextW := File.OpenTextWriter("C:\BPTrain.txt", True);

	    TextW.Encoding := CodePage.UTF8;

	    NumberOfOut := Net.GetNumberOfOutputs;

	    outputs := New Double[NumberOfOut];

	    NumberOfInp := Net.GetNumberOfInputs;

	    inputs := New Double[NumberOfInp];

	    For epoch := 1 To 3000 Do

	        For sampleNumber := 1 To NumberOfOut Do

	            // Устанавливаем входные значения

	            For i := 0 To NumberOfInp - 1 Do

	                inputs[i] := 0.5;

	            End For;

	            // Устанавливаем выходные значения

	            For i := 0 To NumberOfOut - 1 Do

	                outputs[i] := 0.5;

	            End For;

	            // Задаем параметры обучения

	            Net.SetNju(0.1);

	            Net.SetMju(0);

	            // Обучаем сеть

	            Net.LearnBack(inputs, outputs);

	            TextW.WriteLnString("Эпоха обучения: '" + epoch.ToString + "'");

	            TextW.WriteLnString("  максимальное значение delta: " + net.GetMaximumWeightDelta.ToString);

	            TextW.WriteLnString("  выходные данные: ");

	            outputs := Net.GetOutputValues;

	            For i := 0 To NumberOfOut - 1 Do

	                TextW.WriteLnString("  " + outputs[i].ToString);

	            End For;

	            // Проверяем, обучилась ли сеть

	            If Net.DeltasMinimumReachedBP(0.0001) Then

	                Return Net;

	            End If

	        End For;

	    End For;

	    TextW.Flush;

	    Return Net;

	End Function m_BPTrain;


После выполнения примера сеть будет обучена по заданным параметрам.
 Меняющиеся выходные данные и значение delta
 будут выведены в файл BPTrain.txt.


См. также:


[INeuralNetwork](INeuralNetwork.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
