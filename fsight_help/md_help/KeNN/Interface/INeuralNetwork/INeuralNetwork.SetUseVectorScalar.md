# INeuralNetwork.SetUseVectorScalar

INeuralNetwork.SetUseVectorScalar
-


# INeuralNetwork.SetUseVectorScalar


## Синтаксис


SetUseVectorScalar(useScalar: Boolean);


## Параметры


useScalar. Признак использования
 алгоритма скалярного умножения векторов.


## Описание


Метод SetUseVectorScalar определяет,
 применять ли алгоритм скалярного умножения векторов для вычисления расстояния
 между нейронами.


## Комментарии


Метод применяется только для самоорганизующихся сетей Кохонена. Допустимые
 значения параметра useScalar:


	- True. Применяется алгоритм
	 скалярного умножения векторов;


	- False. Применяются евклидовы
	 расстояния.


## Пример


Использование метода приведено в примере для [INeuralNetwork.LearnSOFM](INeuralNetwork.LearnSOFM.htm).


См. также:


[INeuralNetwork](INeuralNetwork.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
