# ICrossValidationPerformanceScores.PerformanceMatrix

ICrossValidationPerformanceScores.PerformanceMatrix
-


# ICrossValidationPerformanceScores.PerformanceMatrix


## Синтаксис


PerformanceMatrix: Array;


## Описание


Свойство PerformanceMatrix
 возвращает корректную классификацию.


## Комментарии


Число строк в массиве PerformanceMatrix
 - это число блоков при кросс-валидации по K
 блокам или число тестов при кросс-валидации последовательным случайным
 разбиением.


Число столбцов в массиве PerformanceMatrix
 - это число категорий в зависимом признаке.


Каждое значение PerformanceMatrix
 - это доля угаданных значений категории, соответствующих столбцу, при
 кросс-валидации по K блокам или
 случайный тест, который соответствует строке при кросс-валидации последовательным
 случайным разбиением.


Например, значение PerformanceMatrix
 с координатами [3,1] равно 0.6 и используется кросс-валидация по K блокам. Значит,
 когда четвертый блок был тестовым, 60% значений зависимой переменной,
 принадлежащих первой категории, были предсказаны верно.


## Пример


Использование свойства приведено в примере для [ISmGradientBoostedTree.ClassificationSummary](../ISmGradientBoostedTree/ISmGradientBoostedTree.ClassificationSummary.htm).


См. также:


[ICrossValidationPerformanceScores](ICrossValidationPerformanceScores.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
