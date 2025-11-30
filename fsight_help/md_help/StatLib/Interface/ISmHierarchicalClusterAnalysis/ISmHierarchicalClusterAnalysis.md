# ISmHierarchicalClusterAnalysis

ISmHierarchicalClusterAnalysis
-


# ISmHierarchicalClusterAnalysis


Сборка: Stat;


## Описание


Интерфейс ISmHierarchicalClusterAnalysis
 предназначен для работы с параметрами иерархического кластерного анализа.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmHierarchicalClusterAnalysis


## Комментарии


Иерархический кластерный анализ - метод разбиения множества многомерных
 объектов на однородные группы, относящийся к классу агломеративных методов.
 Агломеративные методы последовательно объединяют отдельные объекты в кластеры.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [ClusterCount](ISmHierarchicalClusterAnalysis.ClusterCount.htm)
		 Свойство ClusterCount
		 определяет число кластеров, на которое нужно разбить множество
		 объектов.


		 ![](../../Property.gif)
		 [ClusterLink](ISmHierarchicalClusterAnalysis.ClusterLink.htm)
		 Свойство ClusterLink
		 определяет способ расчета расстояния между кластерами.


		 ![](../../Property.gif)
		 [Clusters](ISmHierarchicalClusterAnalysis.Clusters.htm)
		 Свойство Clusters возвращает
		 последовательность кластеров.


		 ![](../../Property.gif)
		 [ClustersCompositionOrder](ISmHierarchicalClusterAnalysis.ClustersCompositionOrder.htm)
		 Свойство ClustersCompositionOrder
		 возвращает последовательность составления кластеров.


		 ![](../../Property.gif)
		 [CreateDendrogram](ISmHierarchicalClusterAnalysis.CreateDendrogram.htm)
		 Свойство CreateDendogram
		 определяет создание дендрограммы, расчёт массивов объектов и расстояние
		 между кластерами.


		 ![](../../Property.gif)
		 [DendrogramOrientation](ISmHierarchicalClusterAnalysis.DendrogramOrientation.htm)
		 Свойство DendrogramOrientation
		 определяет ориентацию дендрограммы.


		 ![](../../Property.gif)
		 [Distance](ISmHierarchicalClusterAnalysis.Distance.htm)
		 Свойство Distance определяет
		 параметры расчёта расстояний между объектами.


		 ![](../../Property.gif)
		 [Dord](ISmHierarchicalClusterAnalysis.Dord.htm)
		 Свойство Dord возвращает
		 расстояния между кластерами в момент объединения.


		 ![](../../Property.gif)
		 [HCStoppingCriterion](ISmHierarchicalClusterAnalysis.HCStoppingCriterion.htm)
		 Свойство HCStoppingCriterion
		 определяет критерий останова.


		 ![](../../Property.gif)
		 [Iord](ISmHierarchicalClusterAnalysis.Iord.htm)
		 Свойство Iord возвращает
		 объекты в порядке построения дендрограммы.


		 ![](../../Property.gif)
		 [Membership](ISmHierarchicalClusterAnalysis.Membership.htm)
		 Свойство Membership
		 возвращает принадлежность к кластерам.


		 ![](../../Property.gif)
		 [MissingData](ISmHierarchicalClusterAnalysis.MissingData.htm)
		 Свойство MissingData
		 возвращает параметры метода обработки пропусков.


		 ![](../../Property.gif)
		 [Objects](ISmHierarchicalClusterAnalysis.Objects.htm)
		 Свойство Objects определяет
		 список показателей.


		 ![](../../Property.gif)
		 [ThresholdClusterDistance](ISmHierarchicalClusterAnalysis.ThresholdClusterDistance.htm)
		 Свойство ThresholdClusterDistance
		 определяет пороговое значение расстояний между кластерами.


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


[Интерфейсы сборки Stat](../Interfaces.htm) |
 [Иерархический
 кластерный анализ](Lib.chm::/04_Other_models/Lib_HierarhClustering.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
