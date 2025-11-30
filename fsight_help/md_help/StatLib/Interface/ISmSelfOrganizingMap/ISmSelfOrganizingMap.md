# ISmSelfOrganizingMap

ISmSelfOrganizingMap
-


# ISmSelfOrganizingMap


Сборка: Stat;


## Описание


Интерфейс ISmSelfOrganizingMap предназначен
 для кластеризации данных с помощью самоорганизующихся карт Кохонена.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmSelfOrganizingMap


## Комментарии


В данном методе используется обучение без учителя, то есть результат
 зависит только от структуры входных данных. Метод работает на числовых
 значениях.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [ClusterCount](ISmSelfOrganizingMap.ClusterCount.htm)
		 Свойство ClusterCount
		 определяет количество кластеров, на которые должны быть разделены
		 исходные данные.


		 ![](../../Property.gif)
		 [Clusters](ISmSelfOrganizingMap.Clusters.htm)
		 Свойство Clusters
		 возвращает кластеры, полученные в результате расчёта метода.


		 ![](../../Property.gif)
		 [Data](ISmSelfOrganizingMap.Data.htm)
		 Свойство Data возвращает
		 коллекцию рядов, предназначенных для кластеризации.


		 ![](../../Property.gif)
		 [Epoch](ISmSelfOrganizingMap.Epoch.htm)
		 Свойство Epoch
		 определяет максимальное число итераций для выполнения кластеризации.


		 ![](../../Property.gif)
		 [FinalWeights](ISmSelfOrganizingMap.FinalWeights.htm)
		 Свойство FinalWeights
		 возвращает матрицу финальных весов синапсов.


		 ![](../../Property.gif)
		 [InitialWeights](ISmSelfOrganizingMap.InitialWeights.htm)
		 Свойство InitialWeights
		 определяет матрицу весов синапсов.


		 ![](../../Property.gif)
		 [Membership](ISmSelfOrganizingMap.Membership.htm)
		 Свойство Membership
		 возвращает принадлежность объектов к кластерам.


		 ![](../../Property.gif)
		 [MissingData](ISmSelfOrganizingMap.MissingData.htm)
		 Свойство MissingData
		 определяет метод обработки пропусков, применяемый к исходным данным.


		 ![](../../Property.gif)
		 [RowWidth](ISmSelfOrganizingMap.RowWidth.htm)
		 Свойство RowWidth
		 определяет ширину сети.


		 ![](../../Property.gif)
		 [SynapsysWeights](ISmSelfOrganizingMap.SynapsysWeights.htm)
		 Свойство SynapsysWeights
		 определяет метод задания весов синапсов.


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
 [Самоорганизующиеся
 карты Кохонена](Lib.chm::/06_DataMining/Lib_SOM.htm) | [Определение
 категорий](DataMining.chm::/Master/Methods/DataMining_CategDetect.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
