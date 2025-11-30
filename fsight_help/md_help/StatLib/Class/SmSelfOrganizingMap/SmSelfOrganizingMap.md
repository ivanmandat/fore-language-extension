# SmSelfOrganizingMap

SmSelfOrganizingMap
-


# SmSelfOrganizingMap


Сборка: Stat;


## Описание


Класс SmSelfOrganizingMap предназначен
 для кластеризации данных с помощью самоорганизующихся карт Кохонена.


## Комментарии


В данном методе используется обучение без учителя, то есть результат
 зависит только от структуры входных данных. Метод работает на числовых
 значениях.


## Свойства объекта класса, унаследованные от [ISmSelfOrganizingMap](../../Interface/ISmSelfOrganizingMap/ISmSelfOrganizingMap.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [ClusterCount](../../Interface/ISmSelfOrganizingMap/ISmSelfOrganizingMap.ClusterCount.htm)
		 Свойство ClusterCount
		 определяет количество кластеров, на которые должны быть разделены
		 исходные данные.


		 ![](../../Property.gif)
		 [Clusters](../../Interface/ISmSelfOrganizingMap/ISmSelfOrganizingMap.Clusters.htm)
		 Свойство Clusters
		 возвращает кластеры, полученные в результате расчёта метода.


		 ![](../../Property.gif)
		 [Data](../../Interface/ISmSelfOrganizingMap/ISmSelfOrganizingMap.Data.htm)
		 Свойство Data возвращает
		 коллекцию рядов, предназначенных для кластеризации.


		 ![](../../Property.gif)
		 [Epoch](../../Interface/ISmSelfOrganizingMap/ISmSelfOrganizingMap.Epoch.htm)
		 Свойство Epoch
		 определяет максимальное число итераций для выполнения кластеризации.


		 ![](../../Property.gif)
		 [FinalWeights](../../Interface/ISmSelfOrganizingMap/ISmSelfOrganizingMap.FinalWeights.htm)
		 Свойство FinalWeights
		 возвращает матрицу финальных весов синапсов.


		 ![](../../Property.gif)
		 [InitialWeights](../../Interface/ISmSelfOrganizingMap/ISmSelfOrganizingMap.InitialWeights.htm)
		 Свойство InitialWeights
		 определяет матрицу весов синапсов.


		 ![](../../Property.gif)
		 [Membership](../../Interface/ISmSelfOrganizingMap/ISmSelfOrganizingMap.Membership.htm)
		 Свойство Membership
		 возвращает принадлежность объектов к кластерам.


		 ![](../../Property.gif)
		 [MissingData](../../Interface/ISmSelfOrganizingMap/ISmSelfOrganizingMap.MissingData.htm)
		 Свойство MissingData
		 определяет метод обработки пропусков, применяемый к исходным данным.


		 ![](../../Property.gif)
		 [RowWidth](../../Interface/ISmSelfOrganizingMap/ISmSelfOrganizingMap.RowWidth.htm)
		 Свойство RowWidth
		 определяет ширину сети.


		 ![](../../Property.gif)
		 [SynapsysWeights](../../Interface/ISmSelfOrganizingMap/ISmSelfOrganizingMap.SynapsysWeights.htm)
		 Свойство SynapsysWeights
		 определяет метод задания весов синапсов.


## Свойства объекта класса, унаследованные от [IStatMethod](../../Interface/IStatMethod/IStatMethod.htm)


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


## Методы объекта класса, унаследованные от [IStatMethod](../../Interface/IStatMethod/IStatMethod.htm)


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


[Классы
 сборки Stat](../StatClass.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
