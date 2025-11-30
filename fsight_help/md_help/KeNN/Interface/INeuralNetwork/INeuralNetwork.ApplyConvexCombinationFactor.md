# INeuralNetwork.ApplyConvexCombinationFactor

INeuralNetwork.ApplyConvexCombinationFactor
-


# INeuralNetwork.ApplyConvexCombinationFactor


## Синтаксис


ApplyConvexCombinationFactor(alfa: Double);


## Параметры


alfa. Коэффициент преобразования. Значение в диапазоне [0.0; 1.0].


## Описание


Метод ApplyConvexCombinationFactor применяет выпуклое комбинаторное преобразование к входным элементам сети.


## Комментарии


Выпуклое комбинаторное преобразование выполняется по формуле:


Vi = alfa(t) * Vi + (1-alfa(t)) * (1/sqrt(число_входов_сети))


Методы [INeuralNetwork.SetInputValuesConvex](INeuralNetwork.SetInputValuesConvex.htm) и [INeuralNetwork.SetInputValuesConvexEx](INeuralNetwork.SetInputValuesConvexEx.htm) выполняют данное преобразование.


Перед вызовом ApplyConvexCombinationFactor должны быть заданы входные значения сети. Для этого используйте один из методов:


-
[INeuralNetwork.SetInputValues](INeuralNetwork.SetInputValues.htm);


-
[INeuralNetwork.SetInputValuesConvex](INeuralNetwork.SetInputValuesConvex.htm);


-
[INeuralNetwork.SetInputValuesConvexEx](INeuralNetwork.SetInputValuesConvexEx.htm).


Обычно, значение коэффициента alfa меняется в течение всего процесса обучения сети. Это делает обучение более точным.


Использование метода приведено в примере для [INeuralNetwork.SetInputValues](INeuralNetwork.SetInputValues.htm).


См. также:


[INeuralNetwork](INeuralNetwork.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
