# ISmKmeansClusterAnalysis.ExcludeRepeated

ISmKmeansClusterAnalysis.ExcludeRepeated
-


# ISmKmeansClusterAnalysis.ExcludeRepeated


## Синтаксис


ExcludeRepeated: Boolean;


## Описание


Свойство ExcludeRepeated определяет,
 исключаются ли повторяющиеся элементы из выборки перед проведением
 кластеризации.


## Комментарии


Свойство актуально, если [ISmKmeansClusterAnalysis.IsFuzzy](ISmKmeansClusterAnalysis.IsFuzzy.htm) = False. Дополнительная обработка
 влияет на время расчета. Учёт повторяющихся элементов влияет на координаты
 центров кластеров.


Допустимые значения:


	- True. Значение по умолчанию.
	 Повторяющиеся элементы исключаются из выборки перед проведением кластеризации;


	- False. Входные данные
	 не подвергаются предварительной обработке.


## Пример


Использование свойства приведено в примере для [ISmKmeansClusterAnalysis.Distances](ISmKmeansClusterAnalysis.Distances.htm).


См. также:


[ISmKmeansClusterAnalysis](ISmKmeansClusterAnalysis.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
