# SmKmeansClusterAnalysis

SmKmeansClusterAnalysis
-


# SmKmeansClusterAnalysis


## Описание


Класс SmKmeansClusterAnalysis реализует алгоритм кластеризации методом к-средних. Метод разбивает множество многомерных объектов на однородные группы.


## Свойства, унаследованные от [ISmKmeansClusterAnalysis](../../Interface/ISmKmeansClusterAnalysis/ISmKmeansClusterAnalysis.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [ClusterCount](../../Interface/ISmKmeansClusterAnalysis/ISmKmeansClusterAnalysis.ClusterCount.htm)
		 Свойство ClusterCount
		 определяет число кластеров, на которое нужно разбить множество
		 объектов.


		 ![](../../Property.gif)
		 [ClusterCountMax](../../Interface/ISmKmeansClusterAnalysis/ISmKmeansClusterAnalysis.ClusterCountMax.htm)
		 Свойство ClusterCountMax
		 определяет максимальное число кластеров при использовании автоподбора.


		 ![](../../Property.gif)
		 [ClusterCountMin](../../Interface/ISmKmeansClusterAnalysis/ISmKmeansClusterAnalysis.ClusterCountMin.htm)
		 Свойство ClusterCountMin
		 определяет минимальное число кластеров при использовании
		 автоподбора.


		 ![](../../Property.gif)
		 [ClusterCountSelection](../../Interface/ISmKmeansClusterAnalysis/ISmKmeansClusterAnalysis.ClusterCountSelection.htm)
		 Свойство ClusterCountSelection
		 определяет метод выбора числа кластеров.


		 ![](../../Property.gif)
		 [Clusters](../../Interface/ISmKmeansClusterAnalysis/ISmKmeansClusterAnalysis.Clusters.htm)
		 Свойство Clusters возвращает
		 информацию о разбиении на кластеры.


		 ![](../../Property.gif)
		 [Distances](../../Interface/ISmKmeansClusterAnalysis/ISmKmeansClusterAnalysis.Distances.htm)
		 Свойство Distances
		 возвращает расстояния объектов до центров кластеров, к которым
		 они принадлежат.


		 ![](../../Property.gif)
		 [ExcludeRepeated](../../Interface/ISmKmeansClusterAnalysis/ISmKmeansClusterAnalysis.ExcludeRepeated.htm)
		 Свойство ExcludeRepeated
		 определяет, исключаются ли повторяющиеся элементы из выборки
		 перед проведением кластеризации.


		 ![](../../Property.gif)
		 [FuzzyMembership](../../Interface/ISmKmeansClusterAnalysis/ISmKmeansClusterAnalysis.FuzzyMembership.htm)
		 Свойство FuzzyMembership
		 определяет вероятностную матрицу принадлежностей объектов к каждому
		 кластеру.


		 ![](../../Property.gif)
		 [InitCenters](../../Interface/ISmKmeansClusterAnalysis/ISmKmeansClusterAnalysis.InitCenters.htm)
		 Свойство InitCenters
		 определяет вариант выбора начальных центров кластеров.


		 ![](../../Property.gif)
		 [IsFuzzy](../../Interface/ISmKmeansClusterAnalysis/ISmKmeansClusterAnalysis.IsFuzzy.htm)
		 Свойство IsFuzzy определяет,
		 использовать ли метод нечёткой кластеризации.


		 ![](../../Property.gif)
		 [KModesDistance](../../Interface/ISmKmeansClusterAnalysis/ISmKmeansClusterAnalysis.KModesDistance.htm)
		 Свойство KModesDistance
		 определяет способ расчета расстояния между объектами при кластеризации
		 методом K-мод.


		 ![](../../Property.gif)
		 [MaxIt](../../Interface/ISmKmeansClusterAnalysis/ISmKmeansClusterAnalysis.MaxIt.htm)
		 Свойство MaxIt определяет
		 максимальное число итераций, за которое должен осуществляться
		 поиск решения.


		 ![](../../Property.gif)
		 [Membership](../../Interface/ISmKmeansClusterAnalysis/ISmKmeansClusterAnalysis.Membership.htm)
		 Свойство Membership
		 возвращает принадлежность объектов к кластерам.


		 ![](../../Property.gif)
		 [Modification](../../Interface/ISmKmeansClusterAnalysis/ISmKmeansClusterAnalysis.Modification.htm)
		 Свойство Modification
		 определяет тип используемого алгоритма.


## Свойства, унаследованные от [IStatMethod](../../Interface/IStatMethod/IStatMethod.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [DisplayName](../../Interface/IStatMethod/IStatMethod.DisplayName.htm)
		 Свойство DisplayName
		 возвращает внешнее наименование метода.


		 ![](../../Property.gif)
		 [ErrorByStatus](../../Interface/IStatMethod/IStatMethod.ErrorByStatus.htm)
		 Свойство ErrorByStatus
		 возвращает сообщение об ошибке по ее номеру.


		 ![](../../Property.gif)
		 [Errors](../../Interface/IStatMethod/IStatMethod.Errors.htm)
		 Свойство Errors возвращает
		 сообщение обо всех ошибках и предупреждениях.


		 ![](../../Property.gif)
		 [Name](../../Interface/IStatMethod/IStatMethod.Name.htm)
		 Свойство Name возвращает
		 внутреннее наименование метода.


		 ![](../../Property.gif)
		 [PerformanceTime](../../Interface/IStatMethod/IStatMethod.PerformanceTime.htm)
		 Свойство PerformanceTime
		 возвращает время выполнения метода.


		 ![](../../Property.gif)
		 [Status](../../Interface/IStatMethod/IStatMethod.Status.htm)
		 Свойство Status возвращает
		 статус выполнения метода.


		 ![](../../Property.gif)
		 [SupportsR](../../Interface/IStatMethod/IStatMethod.SupportsR.htm)
		 Свойство SupportsR
		 возвращает признак поддержки расчета статистического метода через
		 пакет R.


		 ![](../../Property.gif)
		 [UseR](../../Interface/IStatMethod/IStatMethod.UseR.htm)
		 Свойство UseR определяет,
		 будет ли расчет статистического метода производиться через
		 пакет R.


		 ![](../../Property.gif)
		 [WarningByStatus](../../Interface/IStatMethod/IStatMethod.WarningByStatus.htm)
		 Свойство WarningByStatus
		 возвращает текст предупреждения по его номеру.


		 ![](../../Property.gif)
		 [Warnings](../../Interface/IStatMethod/IStatMethod.Warnings.htm)
		 Свойство Warnings возвращает предупреждения, возникшие при расчёте метода.


		 ![](../../Property.gif)
		 [WarningsCount](../../Interface/IStatMethod/IStatMethod.WarningsCount.htm)
		 Свойство WarningsCount
		 возвращает число предупреждений, возникших при расчёте метода.


		 ![](../../Property.gif)
		 [WarningsNumbers](../../Interface/IStatMethod/IStatMethod.WarningsNumbers.htm)
		 Свойство WarningsNumbers возвращает номера предупреждений, возникших при расчёте метода.


## Методы, унаследованные от [IStatMethod](../../Interface/IStatMethod/IStatMethod.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub.gif)
		 [Clone](../../Interface/IStatMethod/IStatMethod.Clone.htm)
		 Метод Clone клонирует
		 объект статистического метода.


		 ![](../../Sub.gif)
		 [Execute](../../Interface/IStatMethod/IStatMethod.Execute.htm)
		 Метод Execute осуществляет
		 выполнение статистического метода.


		 ![](../../Sub.gif)
		 [LoadFromXML](../../Interface/IStatMethod/IStatMethod.LoadFromXML.htm)
		 Метод LoadFromXML осуществляет
		 загрузку настроек статистического метода из XML-кода.


		 ![](../../Sub.gif)
		 [SaveToXML](../../Interface/IStatMethod/IStatMethod.SaveToXML.htm)
		 Метод SaveToXML осуществляет
		 выгрузку настроек статистического метода в XML-код.


См. также:


[Классы сборки Stat](../StatClass.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
