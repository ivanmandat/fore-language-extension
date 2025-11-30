# SmCensoredTruncatedRegression

SmCensoredTruncatedRegression
-


# SmCensoredTruncatedRegression


Сборка: Stat;


## Описание


Класс SmCensoredTruncatedRegression
 предназначен для расчета линейной регрессии с урезанными или цензурированными
 данными.


## Свойства объекта класса, унаследованные от [ISmCensoredTruncatedRegression](../../Interface/ISmCensoredTruncatedRegression/ISmCensoredTruncatedRegression.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [DistributionType](../../Interface/ISmCensoredTruncatedRegression/ISmCensoredTruncatedRegression.DistributionType.htm)
		 Свойство DistributionType
		 определяет тип распределения ошибок.


		 ![](../../Property.gif)
		 [Explained](../../Interface/ISmCensoredTruncatedRegression/ISmCensoredTruncatedRegression.Explained.htm)
		 Свойство Explained
		 определяет объясняемый ряд.


		 ![](../../Property.gif)
		 [Explanatories](../../Interface/ISmCensoredTruncatedRegression/ISmCensoredTruncatedRegression.Explanatories.htm)
		 Свойство Explanatories
		 возвращает коллекцию объясняющих рядов.


		 ![](../../Property.gif)
		 [Fitted](../../Interface/ISmCensoredTruncatedRegression/ISmCensoredTruncatedRegression.Fitted.htm)
		 Свойство Fitted возвращает
		 модельный ряд.


		 ![](../../Property.gif)
		 [Forecast](../../Interface/ISmCensoredTruncatedRegression/ISmCensoredTruncatedRegression.Forecast.htm)
		 Свойство Forecast возвращает
		 прогнозный ряд.


		 ![](../../Property.gif)
		 [LatentFitted](../../Interface/ISmCensoredTruncatedRegression/ISmCensoredTruncatedRegression.LatentFitted.htm)
		 Свойство LatentFitted
		 возвращает латентный модельный ряд.


		 ![](../../Property.gif)
		 [LatentForecast](../../Interface/ISmCensoredTruncatedRegression/ISmCensoredTruncatedRegression.LatentForecast.htm)
		 Свойство LatentForecast
		 возвращает латентный прогнозный ряд.


		 ![](../../Property.gif)
		 [LeftBound](../../Interface/ISmCensoredTruncatedRegression/ISmCensoredTruncatedRegression.LeftBound.htm)
		 Свойство LeftBound
		 возвращает левую (нижнюю) границу отсечения для наблюдений.


		 ![](../../Property.gif)
		 [MaxIteration](../../Interface/ISmCensoredTruncatedRegression/ISmCensoredTruncatedRegression.MaxIteration.htm)
		 Свойство MaxIteration
		 определяет максимальное число итераций, за которое должен быть
		 рассчитан метод.


		 ![](../../Property.gif)
		 [MissingData](../../Interface/ISmCensoredTruncatedRegression/ISmCensoredTruncatedRegression.MissingData.htm)
		 Свойство MissingData
		 определяет метод обработки пропусков.


		 ![](../../Property.gif)
		 [ModelCoefficients](../../Interface/ISmCensoredTruncatedRegression/ISmCensoredTruncatedRegression.ModelCoefficients.htm)
		 Свойство ModelCoefficients
		 возвращает параметры коэффициентов модели.


		 ![](../../Property.gif)
		 [ModelPeriod](../../Interface/ISmCensoredTruncatedRegression/ISmCensoredTruncatedRegression.ModelPeriod.htm)
		 Свойство ModelPeriod
		 возвращает параметры периода идентификации метода.


		 ![](../../Property.gif)
		 [ModelType](../../Interface/ISmCensoredTruncatedRegression/ISmCensoredTruncatedRegression.ModelType.htm)
		 Свойство ModelType
		 определяет тип модели.


		 ![](../../Property.gif)
		 [Residuals](../../Interface/ISmCensoredTruncatedRegression/ISmCensoredTruncatedRegression.Residuals.htm)
		 Свойство Residuals
		 возвращает ряд остатков.


		 ![](../../Property.gif)
		 [RightBound](../../Interface/ISmCensoredTruncatedRegression/ISmCensoredTruncatedRegression.RightBound.htm)
		 Свойство RightBound
		 возвращает правую (верхнюю) границу отсечения для наблюдений.


		 ![](../../Property.gif)
		 [Sigma](../../Interface/ISmCensoredTruncatedRegression/ISmCensoredTruncatedRegression.Sigma.htm)
		 Свойство Sigma возвращает
		 значение сигма.


		 ![](../../Property.gif)
		 [SigmaSE](../../Interface/ISmCensoredTruncatedRegression/ISmCensoredTruncatedRegression.SigmaSE.htm)
		 Свойство SigmaSE возвращает
		 значение стандартной ошибки сигма.


		 ![](../../Property.gif)
		 [SigmaZStatErr](../../Interface/ISmCensoredTruncatedRegression/ISmCensoredTruncatedRegression.SigmaZStatErr.htm)
		 Свойство SigmaZStatErr
		 возвращает значение ошибки Z-статистики сигма.


		 ![](../../Property.gif)
		 [SigmaZStatProbErr](../../Interface/ISmCensoredTruncatedRegression/ISmCensoredTruncatedRegression.SigmaZStatProbErr.htm)
		 Свойство SigmaZStatProbErr
		 возвращает значение вероятности ошибки Z-статистики сигма.


		 ![](../../Property.gif)
		 [SummaryStatistics](../../Interface/ISmCensoredTruncatedRegression/ISmCensoredTruncatedRegression.SummaryStatistics.htm)
		 Свойство SummaryStatistics
		 возвращает значения статистических характеристик.


		 ![](../../Property.gif)
		 [Tolerance](../../Interface/ISmCensoredTruncatedRegression/ISmCensoredTruncatedRegression.Tolerance.htm)
		 Свойство Tolerance
		 определяет точность расчёта метода.


## Свойства объекта класса, унаследованные от [IStatMethod](../../Interface/IStatMethod/IStatMethod.htm)


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


## Методы объекта класса, унаследованные от [IStatMethod](../../Interface/IStatMethod/IStatMethod.htm)


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
