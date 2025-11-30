# IMsBinaryRegressionTransform.UseDefaultInitValues

IMsBinaryRegressionTransform.UseDefaultInitValues
-


# IMsBinaryRegressionTransform.UseDefaultInitValues


## Синтаксис


		UseDefaultInitValues: Boolean;


## Описание


Свойство UseDefaultInitValues
 определяет признак использования начальных приближений, заданных по умолчанию.


## Комментарии


Допустимые значения:


	- True. По умолчанию.
	 Для расчёта используются начальные приближения, заданные по умолчанию.
	 Начальные приближения для коэффициентов и константы равны нулю;


	- False. Для расчёта используются
	 начальные приближения, заданные пользователем в свойстве [IMsBinaryRegressionTransform.Explanatories.Item(i).InitValue](../IMsCompositeFormulaTermSet/IMsCompositeFormulaTermSet.InitValue.htm).
	 Если в модели значение константы оценивается, то начальные приближения
	 также задаются в свойстве [IMsBinaryRegressionTransform.ConstantInitValue](IMsBinaryRegressionTransform.ConstantInitValue.htm).


## Пример


Использование свойства приведено в примере для [IMsBinaryRegressionTransform.BinaryDistr](IMsBinaryRegressionTransform.BinaryDistr.htm).


См. также:


[IMsBinaryRegressionTransform](IMsBinaryRegressionTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
