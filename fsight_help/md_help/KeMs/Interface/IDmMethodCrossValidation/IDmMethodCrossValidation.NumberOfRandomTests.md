# IDmMethodCrossValidation.NumberOfRandomTests

IDmMethodCrossValidation.NumberOfRandomTests
-


# IDmMethodCrossValidation.NumberOfRandomTests


## Синтаксис


		NumberOfRandomTests: Integer;


## Описание


Свойство NumberOfRandomTests
 определяет число повторений процедуры кросс-валидации.


## Комментарии


Свойство учитывается, если используется кросс-валидация методом последовательного
 случайного разбиения, то есть свойство [IDmMethodCrossValidation.SamplingType](IDmMethodCrossValidation.SamplingType.htm)
 имеет значение [CrossValidationSamplingType.RandomSampling](StatLib.chm::/Enums/CrossValidationSamplingType.htm).


Диапазон допустимых значений: [1, 231-1].


Значение по умолчанию: «10».


## Пример


Использование свойства приведено в примере для [IDmLogisticRegression.Threshold](../IDmLogisticRegression/IDmLogisticRegression.Threshold.htm).


См. также:


[IDmMethodCrossValidation](IDmMethodCrossValidation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
