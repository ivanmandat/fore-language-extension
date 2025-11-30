# IMsBinaryRegressionTransform.ConstantInitValue

IMsBinaryRegressionTransform.ConstantInitValue
-


# IMsBinaryRegressionTransform.ConstantInitValue


## Синтаксис


		ConstantInitValue: Double;


## Описание


Свойство ConstantInitValue
 определяет начальное значение константы.


## Комментарии


Начальное значение константы учитывается в расчёте, если выполняются
 следующие условия:


	- Используется автоматическая оценка её значения, то есть свойство
	 [IMsBinaryRegressionTransform.ConstantMode](IMsBinaryRegressionTransform.ConstantMode.htm)
	 имеет значение [InterceptMode.AutoEstimate](StatLib.chm::/Enums/InterceptMode.htm).


	- Свойство [IMsBinaryRegressionTransform.UseDefaultInitValues](IMsBinaryRegressionTransform.UseDefaultInitValues.htm)
	 имеет значение False.


## Пример


Использование свойства приведено в примере для [IMsBinaryRegressionTransform.BinaryDistr](IMsBinaryRegressionTransform.BinaryDistr.htm).


См. также:


[IMsBinaryRegressionTransform](IMsBinaryRegressionTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
