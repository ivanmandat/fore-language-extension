# ISmCensoredTruncatedRegression

ISmCensoredTruncatedRegression
-


# ISmCensoredTruncatedRegression


Сборка: Stat;


## Описание


Интерфейс ISmCensoredTruncatedRegression предназначен
 для расчета линейной регрессии с урезанными или цензурированными данными.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmCensoredTruncatedRegression


## Комментарии


Тип данных в модели (урезанные/цензурированные) определяет свойство
 [ISmCensoredTruncatedRegression.ModelType](ISmCensoredTruncatedRegression.ModelType.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [DistributionType](ISmCensoredTruncatedRegression.DistributionType.htm)
		 Свойство DistributionType
		 определяет тип распределения ошибок.


		 ![](../../Property.gif)
		 [Explained](ISmCensoredTruncatedRegression.Explained.htm)
		 Свойство Explained
		 определяет объясняемый ряд.


		 ![](../../Property.gif)
		 [Explanatories](ISmCensoredTruncatedRegression.Explanatories.htm)
		 Свойство Explanatories
		 возвращает коллекцию объясняющих рядов.


		 ![](../../Property.gif)
		 [Fitted](ISmCensoredTruncatedRegression.Fitted.htm)
		 Свойство Fitted возвращает
		 модельный ряд.


		 ![](../../Property.gif)
		 [Forecast](ISmCensoredTruncatedRegression.Forecast.htm)
		 Свойство Forecast возвращает
		 прогнозный ряд.


		 ![](../../Property.gif)
		 [LatentFitted](ISmCensoredTruncatedRegression.LatentFitted.htm)
		 Свойство LatentFitted
		 возвращает латентный модельный ряд.


		 ![](../../Property.gif)
		 [LatentForecast](ISmCensoredTruncatedRegression.LatentForecast.htm)
		 Свойство LatentForecast
		 возвращает латентный прогнозный ряд.


		 ![](../../Property.gif)
		 [LeftBound](ISmCensoredTruncatedRegression.LeftBound.htm)
		 Свойство LeftBound
		 возвращает левую (нижнюю) границу отсечения для наблюдений.


		 ![](../../Property.gif)
		 [MaxIteration](ISmCensoredTruncatedRegression.MaxIteration.htm)
		 Свойство MaxIteration
		 определяет максимальное число итераций, за которое должен быть
		 рассчитан метод.


		 ![](../../Property.gif)
		 [MissingData](ISmCensoredTruncatedRegression.MissingData.htm)
		 Свойство MissingData
		 определяет метод обработки пропусков.


		 ![](../../Property.gif)
		 [ModelCoefficients](ISmCensoredTruncatedRegression.ModelCoefficients.htm)
		 Свойство ModelCoefficients
		 возвращает параметры коэффициентов модели.


		 ![](../../Property.gif)
		 [ModelPeriod](ISmCensoredTruncatedRegression.ModelPeriod.htm)
		 Свойство ModelPeriod
		 возвращает параметры периода идентификации метода.


		 ![](../../Property.gif)
		 [ModelType](ISmCensoredTruncatedRegression.ModelType.htm)
		 Свойство ModelType
		 определяет тип модели.


		 ![](../../Property.gif)
		 [Residuals](ISmCensoredTruncatedRegression.Residuals.htm)
		 Свойство Residuals
		 возвращает ряд остатков.


		 ![](../../Property.gif)
		 [RightBound](ISmCensoredTruncatedRegression.RightBound.htm)
		 Свойство RightBound
		 возвращает правую (верхнюю) границу отсечения для наблюдений.


		 ![](../../Property.gif)
		 [Sigma](ISmCensoredTruncatedRegression.Sigma.htm)
		 Свойство Sigma возвращает
		 значение сигма.


		 ![](../../Property.gif)
		 [SigmaSE](ISmCensoredTruncatedRegression.SigmaSE.htm)
		 Свойство SigmaSE возвращает
		 значение стандартной ошибки сигма.


		 ![](../../Property.gif)
		 [SigmaZStatErr](ISmCensoredTruncatedRegression.SigmaZStatErr.htm)
		 Свойство SigmaZStatErr
		 возвращает значение ошибки Z-статистики сигма.


		 ![](../../Property.gif)
		 [SigmaZStatProbErr](ISmCensoredTruncatedRegression.SigmaZStatProbErr.htm)
		 Свойство SigmaZStatProbErr
		 возвращает значение вероятности ошибки Z-статистики сигма.


		 ![](../../Property.gif)
		 [SummaryStatistics](ISmCensoredTruncatedRegression.SummaryStatistics.htm)
		 Свойство SummaryStatistics
		 возвращает значения статистических характеристик.


		 ![](../../Property.gif)
		 [Tolerance](ISmCensoredTruncatedRegression.Tolerance.htm)
		 Свойство Tolerance
		 определяет точность расчёта метода.


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
 | [Линейная
 регрессия с урезанными и цензурированными данными](Lib.chm::/01_Regression_models/Lib_LR_censored_trunc.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
