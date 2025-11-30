# ICrossValidation.TrainingSetSize

ICrossValidation.TrainingSetSize
-


# ICrossValidation.TrainingSetSize


## Синтаксис


TrainingSetSize: Integer;


## Описание


Свойство TrainingSetSize определяет
 размер обучающего набора в процентах для кросс-валидации последовательным
 случайным разбиением.


## Комментарии


Свойство учитывается, если используется кросс-валидация методом последовательного
 случайного разбиения, то есть свойство [ICrossValidation.SamplingType](ICrossValidation.SamplingType.htm)
 имеет значение [CrossValidationSamplingType.RandomSampling](../../Enums/CrossValidationSamplingType.htm).


Диапазон допустимых значений: [1, 99]. Значение по умолчанию: «70».


## Пример


Использование свойства приведено в примере для [ISmGradientBoostedTree.ClassificationSummary](../ISmGradientBoostedTree/ISmGradientBoostedTree.ClassificationSummary.htm).


См. также:


[ICrossValidation](ICrossValidation.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
