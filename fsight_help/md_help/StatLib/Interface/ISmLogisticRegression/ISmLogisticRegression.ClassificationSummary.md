# ISmLogisticRegression.ClassificationSummary

ISmLogisticRegression.ClassificationSummary
-


# ISmLogisticRegression.ClassificationSummary


## Синтаксис


ClassificationSummary: Array;


## Описание


Свойство ClassificationSummary
 возвращает сводные результаты классификации.


## Комментарии


Результаты классификации представляют собой квадратную матрицу, число
 строк и столбцов которой равно двум. Строки матрицы соответствуют фактическим
 значениям признака для анализа, столбцы - предсказанным значениям из [IDataMining.FilledDependent](../IDataMining/IDataMining.FilledDependent.htm).


Каждый элемент матрицы ClassificationSummary -
 это количество объектов из исходной выборки, фактически относящихся к
 категории, соответствующей строке, для которых предсказано, что они относятся
 к категории, соответствующей столбцу, в котором этот элемент находится.


Соответственно, чем меньше элементов лежит вне главной диагонали матрицы ClassificationSummary, тем лучше
 качество классификации и тем лучше модель предсказывает категории объектов.


## Пример


Использование свойства приведено в примере для [ISmLogisticRegression.Probabilities](ISmLogisticRegression.Probabilities.htm).


См. также:


[ISmLogisticRegression](ISmLogisticRegression.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
