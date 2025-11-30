# INeuralNetwork.SetSigmoidAlpha

INeuralNetwork.SetSigmoidAlpha
-


# INeuralNetwork.SetSigmoidAlpha


## Синтаксис


SetSigmoidAlpha(newAlphaValue: Double);


## Параметры


newAlphaValue. Значение коэффициента Alpha.


## Описание


Метод SetSigmoidAlpha устанавливает значение коэффициента Alpha для сигмоидальных функций распространения сигнала в сети.


## Комментарии


Для выполнения метода SetSigmoidAlpha все нейроны в сети должны использовать одну функцию распространения сигнала в сети.


Функция распространения сигнала указывается при создании сети методом [INeuralNetwork.CreateNetworkEx](INeuralNetwork.CreateNetworkEx.htm). Для изменения типа функции предназначены методы [INeuralNetwork.SetSigmoidFuncs](INeuralNetwork.SetSigmoidFuncs.htm) и [INeuralNetwork.SetSigmoidFuncsEx](INeuralNetwork.SetSigmoidFuncsEx.htm).


## Пример


В качестве примера приведена функция, на вход которой подается нейронная сеть (параметр Net). Для выполнения примера добавьте ссылку на системную сборку «NN».


			Function m_SetSigmoidAlpha(Net: NeuralNetwork): NeuralNetwork;

Begin

    Net.SetSigmoidFuncs(4);

    Net.SetSigmoidAlpha(0.25);

    Return Net;

End Function m_SetSigmoidAlpha;


После выполнения примера для всех нейронов сети будет использоваться экспоненциальная сигмоидальная функция и определен коэффициент Alpha.


См. также:


[INeuralNetwork](INeuralNetwork.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
