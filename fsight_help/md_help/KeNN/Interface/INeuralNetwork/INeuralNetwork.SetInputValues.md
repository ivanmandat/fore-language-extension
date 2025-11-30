# INeuralNetwork.SetInputValues

INeuralNetwork.SetInputValues
-


# INeuralNetwork.SetInputValues


## Синтаксис


SetInputValues(Var InputValues: Array);


## Параметры


InputValues. Вещественный массив входных значений сети.


## Описание


Метод SetInputValues устанавливает входные значения сети.


## Комментарии


Входные значения должны быть установлены перед вычислением сети.


Число элементов массива InputValues должно совпадать с числом входов сети. Если число элементов и число входов не совпадает, то при выполнении метод SetInputValues генерирует исключительную ситуацию.


## Пример


В качестве примера приведена функция, на вход которой подается нейронная сеть (параметр Net). Для выполнения примера добавьте ссылку на системную сборку «NN».


			Function n_SetInputValues(Net: NeuralNetwork): NeuralNetwork;

Var

    InputVal: Array Of Double;

    i: Integer;

Begin

    InputVal := Net.GetInputValues;

    For i := 0 To InputVal.Length - 1 Do

        InputVal[i] := InputVal[i] + 0.02 * (i + 1);

    End For;

    Net.SetInputValues(InputVal);

    net.ApplyConvexCombinationFactor(0.5);

    Return Net;

End Function n_SetInputValues;


После выполнения примера входные значения сети будут увеличены. Также к ним будет применено выпуклое комбинаторное преобразование.


См. также:


[INeuralNetwork](INeuralNetwork.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
