# ICrossValidation.NumberOfFolds

ICrossValidation.NumberOfFolds
-


# ICrossValidation.NumberOfFolds


## Синтаксис


NumberOfFolds: Integer;


## Описание


Свойство NumberOfFolds определяет
 количество блоков для кросс-валидации по K
 блокам.


## Комментарии


Свойство учитывается, если используется кросс-валидация по K
 блокам, то есть свойство [ICrossValidation.SamplingType](ICrossValidation.SamplingType.htm)
 имеет значение [CrossValidationSamplingType.Kfold](../../Enums/CrossValidationSamplingType.htm).


Диапазон допустимых значений: [1,
 количество наблюдений]. Значение по умолчанию: «5».


## Пример


Использование свойства приведено в примере для [ISmBackPropagation.DeltasMinimum](../ISmBackPropagation/ISmBackPropagation.DeltasMinimum.htm).


См. также:


[ICrossValidation](ICrossValidation.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
