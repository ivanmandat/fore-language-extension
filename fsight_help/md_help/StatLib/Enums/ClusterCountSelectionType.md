# ClusterCountSelectionType

ClusterCountSelectionType
-


# ClusterCountSelectionType


## Описание


Перечисление ClusterCountSelectionType
 используется для определения метода выбора числа кластеров.


Используется следующим свойством:


	- [ISmKmeansClusterAnalysis.ClusterCountSelection](../Interface/ISmKmeansClusterAnalysis/ISmKmeansClusterAnalysis.ClusterCountSelection.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 ![](../Element%20Enums.gif)
		 0
		 Fixed. Задается пользователем.


		 ![](../Element%20Enums.gif)
		 1
		 VarDisAutoSelection.
		 Автоподбор алгоритмом Variance Distance. Алгоритм основан на вычислении
		 вариации значений признаков в выборке, применим только к нечёткой
		 кластеризации.


		 ![](../Element%20Enums.gif)
		 2
		 RAlgorithmAutoSelection.
		 Автоподбор R-алгоритмом. Алгоритм основан на анализе устойчивости
		 альтернативных классификаций к допустимым модификациям исходной
		 выборки.
		Примечание.
		 Число уникальных объектов кластеризации для автоподбора R-алгоритмом
		 должно быть больше 5.


См. также:


[Перечисления
 сборки Stat](StatLib_Enums.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
