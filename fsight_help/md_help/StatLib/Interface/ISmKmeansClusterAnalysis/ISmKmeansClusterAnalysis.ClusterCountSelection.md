# ISmKmeansClusterAnalysis.ClusterCountSelection

ISmKmeansClusterAnalysis.ClusterCountSelection
-


# ISmKmeansClusterAnalysis.ClusterCountSelection


## Синтаксис


ClusterCountSelection: [ClusterCountSelectionType](../../Enums/ClusterCountSelectionType.htm);


## Описание


Свойство ClusterCountSelection
 определяет метод выбора числа кластеров.


## Комментарии


При значении [ClusterCountSelectionType](../../Enums/ClusterCountSelectionType.htm).Fixed
 для определения числа кластеров, на которое требуется разбить множество
 объектов, используйте свойство [ISmKmeansClusterAnalysis.ClusterCount](ISmKmeansClusterAnalysis.ClusterCount.htm).


При значении [ClusterCountSelectionType](../../Enums/ClusterCountSelectionType.htm).VarDisAutoSelection
 или [ClusterCountSelectionType](../../Enums/ClusterCountSelectionType.htm).RAlgorithmAutoSelection
 для определения максимального и минимального числа кластеров, среди которых
 будет производиться выбор оптимального, используйте свойства [ISmKmeansClusterAnalysis.ClusterCountMax](ISmKmeansClusterAnalysis.ClusterCountMax.htm)
 и [ISmKmeansClusterAnalysis.ClusterCountMin](ISmKmeansClusterAnalysis.ClusterCountMin.htm)
 соответственно. Итоговое число кластеров будет записано в [ISmKmeansClusterAnalysis.ClusterCount](ISmKmeansClusterAnalysis.ClusterCount.htm).


## Пример


Использование свойства приведено в примере для [ISmKmeansClusterAnalysis.FuzzyMembership](ISmKmeansClusterAnalysis.FuzzyMembership.htm).


См. также:


[ISmKmeansClusterAnalysis](ISmKmeansClusterAnalysis.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
