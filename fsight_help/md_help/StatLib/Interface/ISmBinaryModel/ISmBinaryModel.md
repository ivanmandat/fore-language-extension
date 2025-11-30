# ISmBinaryModel

ISmBinaryModel
-


# ISmBinaryModel


Сборка: Stat;


## Описание


Интерфейс ISmBinaryModel определяет
 параметры метода бинарной регрессии.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmBinaryModel


## Комментарии


Данный метод осуществляет оценку коэффициентов регрессионной модели,
 в которой зависимая переменная принимает два значения: 0 или 1. В рамках
 метода реализованы две модели «logit» и «probit».


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [BinaryDistr](ISmBinaryModel.BinaryDistr.htm)
		 Свойство BinaryDistr
		 определяет тип модели.


		 ![](../../Property.gif)
		 [BinaryExplained](ISmBinaryModel.BinaryExplained.htm)
		 Свойство BinaryExplained
		 определяет объясняемый ряд.


		 ![](../../Property.gif)
		 [BinaryFitted](ISmBinaryModel.BinaryFitted.htm)
		 Свойство BinaryFitted
		 возвращает бинарный модельный ряд.


		 ![](../../Property.gif)
		 [BinaryForecast](ISmBinaryModel.BinaryForecast.htm)
		 Свойство BinaryForecast
		 возвращает бинарный прогнозный ряд.


		 ![](../../Property.gif)
		 [ClassificationCutOff](ISmBinaryModel.ClassificationCutOff.htm)
		 Свойство ClassificationCutOff
		 определяет значение для деления на группы.


		 ![](../../Property.gif)
		 [CovarianceMatrix](ISmBinaryModel.CovarianceMatrix.htm)
		 Свойство CovarianceMatrix
		 возвращает значения ковариационной матрицы.


		 ![](../../Property.gif)
		 [Explanatories](ISmBinaryModel.Explanatories.htm)
		 Свойство Explanatories
		 возвращает объясняющие ряды.


		 ![](../../Property.gif)
		 [Fitted](ISmBinaryModel.Fitted.htm)
		 Свойство Fitted возвращает
		 модельный ряд.


		 ![](../../Property.gif)
		 [Forecast](ISmBinaryModel.Forecast.htm)
		 Свойство Forecast возвращает
		 прогнозный ряд.


		 ![](../../Property.gif)
		 [GuessingTable](ISmBinaryModel.GuessingTable.htm)
		 Свойство GuessingTable
		 возвращает коллекцию значений, описывающих качество подбора бинарной
		 модели.


		 ![](../../Property.gif)
		 [MaxIteration](ISmBinaryModel.MaxIteration.htm)
		 Свойство MaxIteration
		 определяет максимальное число итераций, за которое должен осуществиться
		 поиск решения.


		 ![](../../Property.gif)
		 [MissingData](ISmBinaryModel.MissingData.htm)
		 Свойство MissingData
		 возвращает параметры метода обработки пропусков.


		 ![](../../Property.gif)
		 [ModelCoefficients](ISmBinaryModel.ModelCoefficients.htm)
		 Свойство ModelCoefficients
		 возвращает параметры коэффициентов модели.


		 ![](../../Property.gif)
		 [ModelPeriod](ISmBinaryModel.ModelPeriod.htm)
		 Свойство ModelPeriod
		 возвращает параметры периода идентификации.


		 ![](../../Property.gif)
		 [OptimizationMethod](ISmBinaryModel.OptimizationMethod.htm)
		 Свойство OptimizationMethod
		 определяет используемый метод оптимизации.


		 ![](../../Property.gif)
		 [ProbabilityFitted](ISmBinaryModel.ProbabilityFitted.htm)
		 Свойство ProbabilityFitted
		 возвращает вероятностный модельный ряд.


		 ![](../../Property.gif)
		 [ProbabilityForecast](ISmBinaryModel.ProbabilityForecast.htm)
		 Свойство ProbabilityForecast
		 возвращает вероятностный прогнозный ряд.


		 ![](../../Property.gif)
		 [ProbabilityLowerConfidenceLevel](ISmBinaryModel.ProbabilityLowerConfidenceLevel.htm)
		 Свойство ProbabilityLowerConfidenceLevel
		 возвращает нижнюю доверительную границу для вероятностного прогнозного
		 ряда.


		 ![](../../Property.gif)
		 [ProbabilityUpperConfidenceLevel](ISmBinaryModel.ProbabilityUpperConfidenceLevel.htm)
		 Свойство ProbabilityUpperConfidenceLevel
		 возвращает верхнюю доверительную границу для вероятностного
		 прогнозного ряда.


		 ![](../../Property.gif)
		 [RelevanceMeasure](ISmBinaryModel.RelevanceMeasure.htm)
		 Свойство RelevanceMeasure
		 возвращает критерии качества бинарной классификации.


		 ![](../../Property.gif)
		 [Residuals](ISmBinaryModel.Residuals.htm)
		 Свойство Residuals
		 возвращает ряд остатков.


		 ![](../../Property.gif)
		 [SummaryStatistics](ISmBinaryModel.SummaryStatistics.htm)
		 Свойство SummaryStatistics
		 возвращает статистические характеристики.


		 ![](../../Property.gif)
		 [Tolerance](ISmBinaryModel.Tolerance.htm)
		 Свойство Tolerance
		 определяет точность вычислений.


		 ![](../../Property.gif)
		 [UseDefaultInitValues](ISmBinaryModel.UseDefaultInitValues.htm)
		 Свойство UseDefaultInitValues
		 определяет, использовать ли начальные приближения, заданные по
		 умолчанию.


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
 | [Бинарная
 регрессия](Lib.chm::/01_Regression_models/UiModelling_BinaryModel.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
