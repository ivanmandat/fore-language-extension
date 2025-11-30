# ICrossValidation.NumberOfRandomTests

ICrossValidation.NumberOfRandomTests
-


# ICrossValidation.NumberOfRandomTests


## Синтаксис


NumberOfRandomTests: Integer;


## Описание


Свойство NumberOfRandomTests
 определяет число повторений процедуры кросс-валидации для кросс-валидации
 последовательным случайным разбиением.


## Комментарии


Свойство учитывается, если используется кросс-валидация методом последовательного
 случайного разбиения, то есть свойство [ICrossValidation.SamplingType](ICrossValidation.SamplingType.htm)
 имеет значение [CrossValidationSamplingType.RandomSampling](../../Enums/CrossValidationSamplingType.htm).


Значение по умолчанию: «10».


## Пример


Использование свойства приведено в примере для [ISmGradientBoostedTree.ClassificationSummary](../ISmGradientBoostedTree/ISmGradientBoostedTree.ClassificationSummary.htm).


См. также:


[ICrossValidation](ICrossValidation.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
