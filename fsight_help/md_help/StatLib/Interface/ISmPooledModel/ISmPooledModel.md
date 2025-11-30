# ISmPooledModel

ISmPooledModel
-


# ISmPooledModel


Сборка: Stat;


## Описание


Интерфейс ISmPooledModel определяет
 параметры регрессии на панельных данных.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmPooledModel


## Комментарии


Панельные данные представляют
 собой прослеженные во времени пространственные микроэкономические выборки,
 т.е. они состоят из наблюдений одних и тех же экономических единиц, которые
 осуществляются в последовательные периоды времени.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [ARMA](ISmPooledModel.ARMA.htm)


		 Свойство ARMA возвращает
		 параметры авторегрессии и скользящего среднего.


		 ![](../../Property.gif)
		 [CovarianceMatrix](ISmPooledModel.CovarianceMatrix.htm)


		 Свойство CovarianceMatrix
		 возвращает значения ковариационной матрицы.


		 ![](../../Property.gif)
		 [CrossSection](ISmPooledModel.CrossSection.htm)


		 Свойство CrossSection
		 определяет тип модели для регрессии на панельных данных.


		 ![](../../Property.gif)
		 [CrossSectionSD](ISmPooledModel.CrossSectionSD.htm)


		 Свойство CrossSectionSD
		 возвращает стандартное отклонение групповых ошибок.


		 ![](../../Property.gif)
		 [CrossSectionSDinit](ISmPooledModel.CrossSectionSDinit.htm)


		 Свойство CrossSectionSDinit
		 определяет перекрёстное стандартное отклонение.


		 ![](../../Property.gif)
		 [Effects](ISmPooledModel.Effects.htm)


		 Свойство Effects возвращает
		 рассчитанные эффекты.


		 ![](../../Property.gif)
		 [EffectsInits](ISmPooledModel.EffectsInits.htm)


		 Свойство EffectsInits
		 определяет начальные значения эффектов для расчета без оценивания.


		 ![](../../Property.gif)
		 [Explained](ISmPooledModel.Explained.htm)


		 Свойство Explained
		 определяет объясняемую переменную.


		 ![](../../Property.gif)
		 [Explanatories](ISmPooledModel.Explanatories.htm)


		 Свойство Explanatories
		 определяет объясняющие переменные.


		 ![](../../Property.gif)
		 [Fitted](ISmPooledModel.Fitted.htm)


		 Свойство Fitted возвращает
		 модельные ряды.


		 ![](../../Property.gif)
		 [Forecast](ISmPooledModel.Forecast.htm)


		 Свойство Forecast определяет
		 параметры прогнозного ряда.


		 ![](../../Property.gif)
		 [GLSWeights](ISmPooledModel.GLSWeights.htm)


		 Свойство GLSWeights
		 определяет тип автоматически рассчитываемых весов.


		 ![](../../Property.gif)
		 [IdiosyncraticSD](ISmPooledModel.IdiosyncraticSD.htm)


		 Свойство IdiosyncraticSD
		 возвращает идиосинкразическое стандартное отклонение.


		 ![](../../Property.gif)
		 [IdiosyncraticSDinit](IsmPooledModel.IdiosyncraticSDinit.htm)


		 Свойство IdiosyncraticSDinit
		 определяет рассчитанные спецификации случайных эффектов для расчета
		 без оценивания.


		 ![](../../Property.gif)
		 [MissingData](ISmPooledModel.MissingData.htm)


		 Свойство MissingData
		 определяет параметры обработки пропусков.


		 ![](../../Property.gif)
		 [ModelCoefficients](ISmPooledModel.ModelCoefficients.htm)


		 Свойство ModelCoefficients
		 возвращает параметры коэффициентов модели.


		 ![](../../Property.gif)
		 [ModelPeriod](ISmPooledModel.ModelPeriod.htm)


		 Свойство ModelPeriod
		 определяет параметры периода идентификации.


		 ![](../../Property.gif)
		 [RandomEffectsMethod](ISmPooledModel.RandomEffectsMethod.htm)


		 Свойство RandomEffectsMethod определяет
		 метод расчета случайных эффектов.


		 ![](../../Property.gif)
		 [Residuals](ISmPooledModel.Residuals.htm)


		 Свойство Residuals
		 возвращает ряды остатков.


		 ![](../../Property.gif)
		 [SummaryStatistics](ISmPooledModel.SummaryStatistics.htm)


		 Свойство SummaryStatistics
		 возвращает статистические характеристики.


		 ![](../../Property.gif)
		 [WeightedSummaryStatistics](ISmPooledModel.WeightedSummaryStatistics.htm)


		 Свойство WeightedSummaryStatistics
		 возвращает взвешенные описательные статистики модели.


		 ![](../../Property.gif)
		 [Weights](ISmPooledModel.Weights.htm)


		 Свойство Weights возвращает
		 веса, используемые при расчете модели.


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
 | [Регрессия
 на панельных данных](Lib.chm::/01_Regression_models/UiModelling_PooledModel.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
