# ILinearRegressionAutoSelection.Results

ILinearRegressionAutoSelection.Results
-


# ILinearRegressionAutoSelection.Results


## Синтаксис


Results: Array;


## Описание


Свойство Results возвращает
 результат автоподбора регрессоров.


## Комментарии


Возвращаемый вектор индексов будет содержать только нули или единицы:


	- 1 - соответствующий регрессор включен
	 в набор факторов;


	- 0 - не включен.


В набор будут включены те факторы, которые выдают лучшее значение заданного
 критерия.


## Пример


Использование свойства приведено в примере для [ISmLinearRegress.AutoSelection](../ISmLinearRegress/ISmLinearRegress.AutoSelection.htm).


См. также:


[ILinearRegressionAutoSelection](ILinearRegressionAutoSelection.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
