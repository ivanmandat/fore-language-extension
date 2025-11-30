# ICalcLinearOptimizationBlock.IsValidStub

ICalcLinearOptimizationBlock.IsValidStub
-


# ICalcLinearOptimizationBlock.IsValidStub


## Синтаксис


IsValidStub(Stub: [IVariableStub](KeCubes.chm::/Interface/IVariableStub/IVariableStub.htm)):
 Boolean;


## Параметры


Stub. Источник данных.


## Описание


Метод IsValidStub возвращает
 признак соответствия источника данных целевой функции.


## Комментарии


Соответствие проверяется путём поиска измерений источника целевой функции
 в структуре источника данных. Если хотя бы одно измерение отсутствует,
 то метод возвращает значение False.


Допустимые значения:


	- True. Источник данных
	 соответствует целевой функции;


	- False. Источник данных
	 не соответствует целевой функции.


См. также:


[ICalcLinearOptimizationBlock](ICalcLinearOptimizationBlock.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
