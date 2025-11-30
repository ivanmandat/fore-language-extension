# SmPooledModel

SmPooledModel
-


# SmPooledModel


## Описание


Класс SmPooledModel реализует
 алгоритм [регрессии
 на панельных данных](Lib.chm::/01_Regression_models/UiModelling_PooledModel.htm).


## Свойства, унаследованные от [ISmPooledModel](../../Interface/ISmPooledModel/ISmPooledModel.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [ARMA](../../Interface/ISmPooledModel/ISmPooledModel.ARMA.htm)


		 Свойство ARMA возвращает
		 параметры авторегрессии и скользящего среднего.


		 ![](../../Property.gif)
		 [CovarianceMatrix](../../Interface/ISmPooledModel/ISmPooledModel.CovarianceMatrix.htm)


		 Свойство CovarianceMatrix
		 возвращает значения ковариационной матрицы.


		 ![](../../Property.gif)
		 [CrossSection](../../Interface/ISmPooledModel/ISmPooledModel.CrossSection.htm)


		 Свойство CrossSection
		 определяет тип модели для регрессии на панельных данных.


		 ![](../../Property.gif)
		 [CrossSectionSD](../../Interface/ISmPooledModel/ISmPooledModel.CrossSectionSD.htm)


		 Свойство CrossSectionSD
		 возвращает стандартное отклонение групповых ошибок.


		 ![](../../Property.gif)
		 [CrossSectionSDinit](../../Interface/ISmPooledModel/ISmPooledModel.CrossSectionSDinit.htm)


		 Свойство CrossSectionSDinit
		 определяет перекрёстное стандартное отклонение.


		 ![](../../Property.gif)
		 [Effects](../../Interface/ISmPooledModel/ISmPooledModel.Effects.htm)


		 Свойство Effects возвращает
		 рассчитанные эффекты.


		 ![](../../Property.gif)
		 [EffectsInits](../../Interface/ISmPooledModel/ISmPooledModel.EffectsInits.htm)


		 Свойство EffectsInits
		 определяет начальные значения эффектов для расчета без оценивания.


		 ![](../../Property.gif)
		 [Explained](../../Interface/ISmPooledModel/ISmPooledModel.Explained.htm)


		 Свойство Explained
		 определяет объясняемую переменную.


		 ![](../../Property.gif)
		 [Explanatories](../../Interface/ISmPooledModel/ISmPooledModel.Explanatories.htm)


		 Свойство Explanatories
		 определяет объясняющие переменные.


		 ![](../../Property.gif)
		 [Fitted](../../Interface/ISmPooledModel/ISmPooledModel.Fitted.htm)


		 Свойство Fitted возвращает
		 модельные ряды.


		 ![](../../Property.gif)
		 [Forecast](../../Interface/ISmPooledModel/ISmPooledModel.Forecast.htm)


		 Свойство Forecast определяет
		 параметры прогнозного ряда.


		 ![](../../Property.gif)
		 [GLSWeights](../../Interface/ISmPooledModel/ISmPooledModel.GLSWeights.htm)


		 Свойство GLSWeights
		 определяет тип автоматически рассчитываемых весов.


		 ![](../../Property.gif)
		 [IdiosyncraticSD](../../Interface/ISmPooledModel/ISmPooledModel.IdiosyncraticSD.htm)


		 Свойство IdiosyncraticSD
		 возвращает идиосинкразическое стандартное отклонение.


		 ![](../../Property.gif)
		 [IdiosyncraticSDinit](../../Interface/ISmPooledModel/IsmPooledModel.IdiosyncraticSDinit.htm)


		 Свойство IdiosyncraticSDinit
		 определяет рассчитанные спецификации случайных эффектов для расчета
		 без оценивания.


		 ![](../../Property.gif)
		 [MissingData](../../Interface/ISmPooledModel/ISmPooledModel.MissingData.htm)


		 Свойство MissingData
		 определяет параметры обработки пропусков.


		 ![](../../Property.gif)
		 [ModelCoefficients](../../Interface/ISmPooledModel/ISmPooledModel.ModelCoefficients.htm)


		 Свойство ModelCoefficients
		 возвращает параметры коэффициентов модели.


		 ![](../../Property.gif)
		 [ModelPeriod](../../Interface/ISmPooledModel/ISmPooledModel.ModelPeriod.htm)


		 Свойство ModelPeriod
		 определяет параметры периода идентификации.


		 ![](../../Property.gif)
		 [RandomEffectsMethod](../../Interface/ISmPooledModel/ISmPooledModel.RandomEffectsMethod.htm)


		 Свойство RandomEffectsMethod определяет
		 метод расчета случайных эффектов.


		 ![](../../Property.gif)
		 [Residuals](../../Interface/ISmPooledModel/ISmPooledModel.Residuals.htm)


		 Свойство Residuals
		 возвращает ряды остатков.


		 ![](../../Property.gif)
		 [SummaryStatistics](../../Interface/ISmPooledModel/ISmPooledModel.SummaryStatistics.htm)


		 Свойство SummaryStatistics
		 возвращает статистические характеристики.


		 ![](../../Property.gif)
		 [WeightedSummaryStatistics](../../Interface/ISmPooledModel/ISmPooledModel.WeightedSummaryStatistics.htm)


		 Свойство WeightedSummaryStatistics
		 возвращает взвешенные описательные статистики модели.


		 ![](../../Property.gif)
		 [Weights](../../Interface/ISmPooledModel/ISmPooledModel.Weights.htm)


		 Свойство Weights возвращает
		 веса, используемые при расчете модели.


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
