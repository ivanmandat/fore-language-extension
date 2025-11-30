# IMDCalculationFormulaOperand

IMDCalculationFormulaOperand
-


# IMDCalculationFormulaOperand


## Описание


Интерфейс IMDCalculationFormulaOperand
 содержит базовые свойства и методы операнда формулы, по которой будет
 производиться расчет.


Для определения параметров операнда, в зависимости от значения свойства
 [Kind](IMDCalculationFormulaOperand.Kind.htm), необходимо привести
 переменную, содержащую операнд, к соответствующему интерфейсу:


	- [IMDCalculationFormulaBinaryOperation](../IMDCalculationFormulaBinaryOperation/IMDCalculationFormulaBinaryOperation.htm)


	- [IMDCalculationFormulaConstantValue](../IMDCalculationFormulaConstantValue/IMDCalculationFormulaConstantValue.htm)


	- [IMDCalculationFormulaDatePeriod](../IMDCalculationFormulaDatePeriod/IMDCalculationFormulaDatePeriod.htm)


	- [IMDCalculationFormulaDelimiter](../IMDCalculationFormulaDelimiter/IMDCalculationFormulaDelimiter.htm)


	- [IMDCalculationFormulaElement](../IMDCalculationFormulaElement/IMDCalculationFormulaElement.htm)


	- [IMDCalculationFormulaFunctionCall](../IMDCalculationFormulaFunctionCall/IMDCalculationFormulaFunctionCall.htm)


	- [IMDCalculationFormulaUnaryOperation](../IMDCalculationFormulaUnaryOperation/IMDCalculationFormulaUnaryOperation.htm)


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Index](IMDCalculationFormulaOperand.Index.htm)


		 Свойство Index возвращает
		 индекс позиции операнда в формуле.


		 ![](../../Property_Image.gif)
		 [Kind](IMDCalculationFormulaOperand.Kind.htm)


		 Свойство Kind возвращает
		 тип операнда.


		 ![](../../Property_Image.gif)
		 [Text](IMDCalculationFormulaOperand.Text.htm)


		 Свойство Text возвращает
		 текстовое представление операнда.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateCopy](IMDCalculationFormulaOperand.CreateCopy.htm)


		 Метод CreateCopy создает
		 копию операнда.


См. также:


[Интерфейсы сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
