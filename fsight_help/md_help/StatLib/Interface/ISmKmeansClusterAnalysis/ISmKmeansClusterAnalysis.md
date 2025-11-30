# ISmKmeansClusterAnalysis

ISmKmeansClusterAnalysis
-


# ISmKmeansClusterAnalysis


Сборка: Stat;


## Описание


Интерфейс ISmKmeansClusterAnalysis
 определяет параметры кластеризации методом k-средних.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmKmeansClusterAnalysis


## Комментарии


Метод k-средних расчленяет
 группы на отдельные объекты (дивизимный метод).


Для кластеризации категориальных данных методом K-мод
 используйте свойство [ISmKmeansClusterAnalysis.Modification](ISmKmeansClusterAnalysis.Modification.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [ClusterCount](ISmKmeansClusterAnalysis.ClusterCount.htm)
		 Свойство ClusterCount
		 определяет число кластеров, на которое нужно разбить множество
		 объектов.


		 ![](../../Property.gif)
		 [ClusterCountMax](ISmKmeansClusterAnalysis.ClusterCountMax.htm)
		 Свойство ClusterCountMax
		 определяет максимальное число кластеров при использовании автоподбора.


		 ![](../../Property.gif)
		 [ClusterCountMin](ISmKmeansClusterAnalysis.ClusterCountMin.htm)
		 Свойство ClusterCountMin
		 определяет минимальное число кластеров при использовании
		 автоподбора.


		 ![](../../Property.gif)
		 [ClusterCountSelection](ISmKmeansClusterAnalysis.ClusterCountSelection.htm)
		 Свойство ClusterCountSelection
		 определяет метод выбора числа кластеров.


		 ![](../../Property.gif)
		 [Clusters](ISmKmeansClusterAnalysis.Clusters.htm)
		 Свойство Clusters возвращает
		 информацию о разбиении на кластеры.


		 ![](../../Property.gif)
		 [Distances](ISmKmeansClusterAnalysis.Distances.htm)
		 Свойство Distances
		 возвращает расстояния объектов до центров кластеров, к которым
		 они принадлежат.


		 ![](../../Property.gif)
		 [ExcludeRepeated](ISmKmeansClusterAnalysis.ExcludeRepeated.htm)
		 Свойство ExcludeRepeated
		 определяет, исключаются ли повторяющиеся элементы из выборки
		 перед проведением кластеризации.


		 ![](../../Property.gif)
		 [FuzzyMembership](ISmKmeansClusterAnalysis.FuzzyMembership.htm)
		 Свойство FuzzyMembership
		 определяет вероятностную матрицу принадлежностей объектов к каждому
		 кластеру.


		 ![](../../Property.gif)
		 [InitCenters](ISmKmeansClusterAnalysis.InitCenters.htm)
		 Свойство InitCenters
		 определяет вариант выбора начальных центров кластеров.


		 ![](../../Property.gif)
		 [IsFuzzy](ISmKmeansClusterAnalysis.IsFuzzy.htm)
		 Свойство IsFuzzy определяет,
		 использовать ли метод нечёткой кластеризации.


		 ![](../../Property.gif)
		 [KModesDistance](ISmKmeansClusterAnalysis.KModesDistance.htm)
		 Свойство KModesDistance
		 определяет способ расчета расстояния между объектами при кластеризации
		 методом K-мод.


		 ![](../../Property.gif)
		 [MaxIt](ISmKmeansClusterAnalysis.MaxIt.htm)
		 Свойство MaxIt определяет
		 максимальное число итераций, за которое должен осуществляться
		 поиск решения.


		 ![](../../Property.gif)
		 [Membership](ISmKmeansClusterAnalysis.Membership.htm)
		 Свойство Membership
		 возвращает принадлежность объектов к кластерам.


		 ![](../../Property.gif)
		 [Modification](ISmKmeansClusterAnalysis.Modification.htm)
		 Свойство Modification
		 определяет тип используемого алгоритма.


## Свойства, унаследованные от [IStatMethod](../IStatMethod/IStatMethod.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [DisplayName](../IStatMethod/IStatMethod.DisplayName.htm)
		 Свойство DisplayName
		 возвращает внешнее наименование метода.


		 ![](../../Property.gif)
		 [ErrorByStatus](../IStatMethod/IStatMethod.ErrorByStatus.htm)
		 Свойство ErrorByStatus
		 возвращает сообщение об ошибке по ее номеру.


		 ![](../../Property.gif)
		 [Errors](../IStatMethod/IStatMethod.Errors.htm)
		 Свойство Errors возвращает
		 сообщение обо всех ошибках и предупреждениях.


		 ![](../../Property.gif)
		 [Name](../IStatMethod/IStatMethod.Name.htm)
		 Свойство Name возвращает
		 внутреннее наименование метода.


		 ![](../../Property.gif)
		 [PerformanceTime](../IStatMethod/IStatMethod.PerformanceTime.htm)
		 Свойство PerformanceTime
		 возвращает время выполнения метода.


		 ![](../../Property.gif)
		 [Status](../IStatMethod/IStatMethod.Status.htm)
		 Свойство Status возвращает
		 статус выполнения метода.


		 ![](../../Property.gif)
		 [SupportsR](../IStatMethod/IStatMethod.SupportsR.htm)
		 Свойство SupportsR
		 возвращает признак поддержки расчета статистического метода через
		 пакет R.


		 ![](../../Property.gif)
		 [UseR](../IStatMethod/IStatMethod.UseR.htm)
		 Свойство UseR определяет,
		 будет ли расчет статистического метода производиться через
		 пакет R.


		 ![](../../Property.gif)
		 [WarningByStatus](../IStatMethod/IStatMethod.WarningByStatus.htm)
		 Свойство WarningByStatus
		 возвращает текст предупреждения по его номеру.


		 ![](../../Property.gif)
		 [Warnings](../IStatMethod/IStatMethod.Warnings.htm)
		 Свойство Warnings возвращает предупреждения, возникшие при расчёте метода.


		 ![](../../Property.gif)
		 [WarningsCount](../IStatMethod/IStatMethod.WarningsCount.htm)
		 Свойство WarningsCount
		 возвращает число предупреждений, возникших при расчёте метода.


		 ![](../../Property.gif)
		 [WarningsNumbers](../IStatMethod/IStatMethod.WarningsNumbers.htm)
		 Свойство WarningsNumbers возвращает номера предупреждений, возникших при расчёте метода.


## Методы, унаследованные от [IStatMethod](../IStatMethod/IStatMethod.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub.gif)
		 [Clone](../IStatMethod/IStatMethod.Clone.htm)
		 Метод Clone клонирует
		 объект статистического метода.


		 ![](../../Sub.gif)
		 [Execute](../IStatMethod/IStatMethod.Execute.htm)
		 Метод Execute осуществляет
		 выполнение статистического метода.


		 ![](../../Sub.gif)
		 [LoadFromXML](../IStatMethod/IStatMethod.LoadFromXML.htm)
		 Метод LoadFromXML осуществляет
		 загрузку настроек статистического метода из XML-кода.


		 ![](../../Sub.gif)
		 [SaveToXML](../IStatMethod/IStatMethod.SaveToXML.htm)
		 Метод SaveToXML осуществляет
		 выгрузку настроек статистического метода в XML-код.


См. также:


[Интерфейсы сборки Stat](../Interfaces.htm)
 | [Кластеризация
 методом k-средних](Lib.chm::/04_Other_models/Lib_kMeans.htm)
 | [Кластеризация
 методом К-мод](Lib.chm::/06_DataMining/Lib_kModes.htm) | [Определение
 категорий](DataMining.chm::/Master/Methods/DataMining_CategDetect.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
