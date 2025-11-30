# ISmDecisionTree.ClassificationSummary

ISmDecisionTree.ClassificationSummary
-


# ISmDecisionTree.ClassificationSummary


## Синтаксис


ClassificationSummary: Array;


## Описание


Свойство ClassificationSummary
 возвращает сводные результаты классификации.


## Комментарии


Результаты классификации представляют собой квадратную матрицу, число
 строк и столбцов которой равно числу категорий в [IDataMining.Dependent](../IDataMining/IDataMining.Dependent.htm),
 а также числу элементов в [ISmDecisionTree.CategoriesList](ISmDecisionTree.CategoriesList.htm).
 Строки матрицы соответствуют фактическим значениям признака для анализа,
 столбцы - предсказанным значениям из [ISmDecisionTree.FilledLearningSample](ISmDecisionTree.FilledLearningSample.htm).


Каждый элемент матрицы ClassificationSummary -
 это количество объектов из исходной выборки, фактически относящихся к
 категории, соответствующей строке, для которых предсказано, что они относятся
 к категории, соответствующей столбцу, в котором этот элемент находится.


Соответственно, чем меньше элементов лежит вне главной диагонали матрицы
 ClassificationSummary, тем лучше
 качество классификации и тем лучше модель предсказывает категории объектов.


## Пример


Использование свойства приведено в примере для [ISmDecisionTree.Tree](ISmDecisionTree.Tree.htm).


См. также:


[ISmDecisionTree](ISmDecisionTree.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
