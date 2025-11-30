# INeuralNetwork.PropagateBP

INeuralNetwork.PropagateBP
-


# INeuralNetwork.PropagateBP


## Синтаксис


PropagateBP;


## Описание


Метод PropagateBP выполняет
 распространение сигнала в сети обратного распространения.


## Комментарии


Сигнал - это входной вектор. В процессе его распространения рассчитываются
 выходные значения нейронов. Данные значения - результат работы сети. Для
 получения выходных значений используйте метод [INeuralNetwork.GetOutputValues](INeuralNetwork.GetOutputValues.htm).


При выполнении метода [INeuralNetwork.LearnBack](INeuralNetwork.LearnBack.htm)
 он неявно вызывает PropagateBP.


## Пример


В качестве примера приведена функция, на вход которой подается обученная
 сеть обратного распространения (параметр Net).


Добавьте ссылки на системные сборки: IO, NN.


	Function m_BPTest(Net: NeuralNetwork): NeuralNetwork;

	Var

	    TextW: ITextWriter;

	    i, NumberOfInp: Integer;

	    inputs, outputs: Array Of Double;

	Begin

	    TextW := File.OpenTextWriter("C:\BPTest.txt", True);

	    TextW.Encoding := CodePage.UTF8;

	    NumberOfInp := Net.GetNumberOfInputs;

	    inputs := New Double[NumberOfInp];

	    For i := 0 To NumberOfInp - 1 Do

	        inputs[i] := 0.5;

	    End For;

	    Net.SetInputValues(inputs);

	    Net.PropagateBP;

	    outputs := Net.GetOutputValues;

	    For i := 0 To outputs.Length - 1 Do

	        TextW.WriteLnString(outputs[i].ToString);

	    End For;

	    TextW.Flush;

	    Return Net;

	End Function m_BPTest;


После выполнения примера обученная сеть протестирует заданные входные
 данные. Результаты работы сети будут выведены в файл C:\BPTest.txt.


См. также:


[INeuralNetwork](INeuralNetwork.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
