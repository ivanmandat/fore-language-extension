# INeuralNetwork.SetInputValuesConvex

INeuralNetwork.SetInputValuesConvex
-


# INeuralNetwork.SetInputValuesConvex


## Синтаксис


SetInputValuesConvex(Var InputValues: Array; alfa: Double);


## Параметры


InputValues. Вещественный массив входных значений сети.


alfa. Коэффициент преобразования. Значение в диапазоне [0.0; 1.0].


## Описание


Метод SetInputValuesConvex устанавливает входные значения сети с использованием выпуклого комбинаторного преобразования.


## Комментарии


Выпуклое комбинаторное преобразование выполняется по формуле:


Vi = alfa(t) * Vi + (1-alfa(t)) * (1/sqrt(число_входов_сети))


Данный метод позволяет сделать процесс обучения самоорганизующихся карт Кохонена более точным. В начале обучения коэффициент alfa приблизительно равен нулю и все входные значения приблизительно равны. В дальнейшем значение коэффициента alfa стремится к единице и входные значения становятся более различными.


Последовательное выполнение методов [NeuralNetwork.SetInputValues](INeuralNetwork.SetInputValues.htm) и [INeuralNetwork.ApplyConvexCombinationFactor](INeuralNetwork.ApplyConvexCombinationFactor.htm) аналогично выполнению SetInputValuesConvex.


## Пример


В качестве примера приведена функция, на вход которой подается нейронная сеть (параметр Net). Для выполнения примера добавьте ссылки на системные сборки «NN» и «MathFin».


			Function m_SetInputValuesConvex(Net: NeuralNetwork): NeuralNetwork;

Var

    InputCount, i: Integer;

    InputVal: Array Of Double;

Begin

    InputCount := Net.GetNumberOfInputs;

    InputVal := New Double[InputCount];

    For i := 0 To InputVal.Length - 1 Do

        InputVal[i] := math.RandBetween(0.1, 1.0);

    End For;

    Net.SetInputValuesConvex(InputVal, 0.2);

    Return Net;

End Function m_SetInputValuesConvex;


После выполнения примера входные значения сети будут заданы с использованием выпуклого комбинаторного преобразования.


См. также:


[INeuralNetwork](INeuralNetwork.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
