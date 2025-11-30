# INeuralNetwork.SetInputValuesConvexEx

INeuralNetwork.SetInputValuesConvexEx
-


# INeuralNetwork.SetInputValuesConvexEx


## Синтаксис


SetInputValuesConvexEx(Var InputValues: Array; alfa:
 Double; doNormalize: Boolean);


## Параметры


InputValues. Вещественный массив
 входных значений сети.


alfa. Коэффициент преобразования.
 Значение в диапазоне [0.0; 1.0].


doNormalize. Параметр определяет,
 выполнять ли нормализацию входных значений.


## Описание


Метод SetInputValuesConvexEx
 устанавливает входные значения сети с использованием выпуклого комбинаторного
 преобразования и возможностью нормализации.


## Комментарии


Выпуклое комбинаторное преобразование выполняется по формуле:


Vi = alfa(t)
 * Vi + (1-alfa(t)) * (1/sqrt(число_входов_сети))


Допустимые значения параметра doNormalize:


	- True. Входные значения
	 будут нормализованы. Последовательное выполнение методов [INeuralNetwork.SetInputValuesConvex](INeuralNetwork.SetInputValuesConvex.htm)
	 и [INeuralNetwork.NormalizeInputValues](INeuralNetwork.NormalizeInputValues.htm)
	 аналогично выполнению SetInputValuesConvexEx
	 с параметром doNormalize равным
	 True;


	- False. Входные значения
	 не нормализуются.


## Пример


В качестве примера приведена функция, на вход которой подается нейронная
 сеть (параметр Net). Для выполнения
 примера добавьте ссылки на системные сборки «NN» и «MathFin».


			Function m_SetInputValuesConvexEx(Net: NeuralNetwork): NeuralNetwork;

Var

    InputCount, i: Integer;

    InputVal: Array Of Double;

Begin

    InputCount := Net.GetNumberOfInputs;

    InputVal := New Double[InputCount];

    For i := 0 To InputVal.Length - 1 Do

        InputVal[i] := math.RandBetween(0.1, 1.0);

    End For;

    Net.SetInputValuesConvexEx(InputVal, 0.2, True);

    Return Net;

End Function m_SetInputValuesConvexEx;


После выполнения примера входные значения сети будут заданы с использованием
 выпуклого комбинаторного преобразования. Данные будут нормализованы.


См. также:


[INeuralNetwork](INeuralNetwork.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
