# SmMarkovSwitchingGARCH

SmMarkovSwitchingGARCH
-


# SmMarkovSwitchingGARCH


Сборка: Stat;


## Описание


Класс SmMarkovSwitchingGARCH
 предназначен для работы с моделю MS-GARCH (Markov switching GARCH) с одним
 переменным параметром: среднее значение дисперсии.


## Комментарии


Модель GARCH с марковским переключением представляет собой усовершенствованную
 модель GARCH, которая может описывать смену состояний дисперсии.


## Свойства, унаследованные от [ISmMarkovSwitchingGARCH](../../Interface/ISmMarkovSwitchingGARCH/ISmMarkovSwitchingGARCH.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [ARCHCoefficients](../../Interface/ISmMarkovSwitchingGARCH/ISmMarkovSwitchingGARCH.ARCHCoefficients.htm)
		 Свойство ARCHCoefficients
		 возвращает оценки коэффициентов авторегрессии условной
		 гетероскедастичности (ARCH) модели и их характеристики.


		 ![](../../Property.gif)
		 [ARCHOrder](../../Interface/ISmMarkovSwitchingGARCH/ISmMarkovSwitchingGARCH.ARCHOrder.htm)
		 Свойство ARCHOrder
		 определяет порядок авторегрессии условной гетероскедастичности
		 (ARCH).


		 ![](../../Property.gif)
		 [ConditionalStateProbabilities](../../Interface/ISmMarkovSwitchingGARCH/ISmMarkovSwitchingGARCH.ConditionalStateProbabilities.htm)
		 Свойство ConditionalStateProbabilities
		 возвращает ряд вероятностей перехода для каждого момента
		 времени.


		 ![](../../Property.gif)
		 [Explained](../../Interface/ISmMarkovSwitchingGARCH/ISmMarkovSwitchingGARCH.Explained.htm)
		 Свойство Explained
		 определяет объясняемый ряд.


		 ![](../../Property.gif)
		 [Explanatories](../../Interface/ISmMarkovSwitchingGARCH/ISmMarkovSwitchingGARCH.Explanatories.htm)
		 Свойство Explanatories
		 определяет объясняющие ряды.


		 ![](../../Property.gif)
		 [Fitted](../../Interface/ISmMarkovSwitchingGARCH/ISmMarkovSwitchingGARCH.Fitted.htm)
		 Свойство Fitted
		 возвращает модельный ряд.


		 ![](../../Property.gif)
		 [Forecast](../../Interface/ISmMarkovSwitchingGARCH/ISmMarkovSwitchingGARCH.Forecast.htm)
		 Свойство Forecast
		 возвращает параметры прогнозного ряда.


		 ![](../../Property.gif)
		 [GARCHCoefficients](../../Interface/ISmMarkovSwitchingGARCH/ISmMarkovSwitchingGARCH.GARCHCoefficients.htm)
		 Свойство GARCHCoefficients
		 возвращает оценки коэффициентов обобщенной авторегрессии
		 условной гетероскедастичности (GARCH) модели и их характеристики.


		 ![](../../Property.gif)
		 [GARCHConst](../../Interface/ISmMarkovSwitchingGARCH/ISmMarkovSwitchingGARCH.GARCHConst.htm)
		 Свойство GARCHConst
		 возвращает оценку константы GARCH μ0.


		 ![](../../Property.gif)
		 [GARCHConst1](../../Interface/ISmMarkovSwitchingGARCH/ISmMarkovSwitchingGARCH.GARCHConst1.htm)
		 Свойство GARCHConst1 возвращает
		 оценку константы GARCH μ1.


		 ![](../../Property.gif)
		 [GARCHOrder](../../Interface/ISmMarkovSwitchingGARCH/ISmMarkovSwitchingGARCH.GARCHOrder.htm)
		 Свойство GARCHOrder
		 определяет порядок обобщенной авторегрессии условной гетероскедастичности
		 (GARCH).


		 ![](../../Property.gif)
		 [MCMCParameters](../../Interface/ISmMarkovSwitchingGARCH/ISmMarkovSwitchingGARCH.MCMCParameters.htm)
		 Свойство MCMCParameters
		 возвращает параметры алгоритма Марковской цепи Монте Карло
		 (Markov Chain Monte Carlo).


		 ![](../../Property.gif)
		 [MissingData](../../Interface/ISmMarkovSwitchingGARCH/ISmMarkovSwitchingGARCH.MissingData.htm)
		 Свойство MissingData
		 определяет параметры обработки пропусков.


		 ![](../../Property.gif)
		 [ModelPeriod](../../Interface/ISmMarkovSwitchingGARCH/ISmMarkovSwitchingGARCH.ModelPeriod.htm)
		 Свойство ModelPeriod
		 определяет параметры периода идентификации.


		 ![](../../Property.gif)
		 [P00](../../Interface/ISmMarkovSwitchingGARCH/ISmMarkovSwitchingGARCH.P00.htm)
		 Свойство P00
		 возвращает оценки параметров перехода из состояния 0 в
		 0.


		 ![](../../Property.gif)
		 [P00Distribution](../../Interface/ISmMarkovSwitchingGARCH/ISmMarkovSwitchingGARCH.P00Distribution.htm)
		 Свойство P00Distribution
		 определяет параметры распределения для вероятности перехода
		 из состояния 0 в 0.


		 ![](../../Property.gif)
		 [P11](../../Interface/ISmMarkovSwitchingGARCH/ISmMarkovSwitchingGARCH.P11.htm)
		 Свойство P11
		 возвращает оценки параметров перехода из состояния 1 в
		 1.


		 ![](../../Property.gif)
		 [P11Distribution](../../Interface/ISmMarkovSwitchingGARCH/ISmMarkovSwitchingGARCH.P11Distribution.htm)
		 Свойство P11Distribution
		 определяет параметры распределения для вероятности перехода
		 из состояния 1 в 1.


		 ![](../../Property.gif)
		 [RegressionCoefficients](../../Interface/ISmMarkovSwitchingGARCH/ISmMarkovSwitchingGARCH.RegressionCoefficients.htm)
		 Свойство RegressionCoefficients
		 возвращает оценки коэффициентов модели и их характеристики.


		 ![](../../Property.gif)
		 [Residuals](../../Interface/ISmMarkovSwitchingGARCH/ISmMarkovSwitchingGARCH.Residuals.htm)
		 Свойство Residuals
		 возвращает ряд остатков.


		 ![](../../Property.gif)
		 [ResidualsDispersion](../../Interface/ISmMarkovSwitchingGARCH/ISmMarkovSwitchingGARCH.ResidualsDispersion.htm)
		 Свойство ResidualsDispersion
		 возвращает ряд дисперсий остатков.


		 ![](../../Property.gif)
		 [ResidualsDispersionForecast](../../Interface/ISmMarkovSwitchingGARCH/ISmMarkovSwitchingGARCH.ResidualsDispersionForecast.htm)
		 Свойство ResidualsDispersionForecast
		 возвращает прогноз дисперсий остатков.


		 ![](../../Property.gif)
		 [SummaryStatistics](../../Interface/ISmMarkovSwitchingGARCH/ISmMarkovSwitchingGARCH.SummaryStatistics.htm)
		 Свойство SummaryStatistics
		 возвращает описательные статистики модели.


		 ![](../../Property.gif)
		 [UseDefaultInitDistribution](../../Interface/ISmMarkovSwitchingGARCH/ISmMarkovSwitchingGARCH.UseDefaultInitDistribution.htm)
		 Свойство UseDefaultInitDistribution
		 определяет, будут ли использоваться значения по умолчанию.


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


[Классы
 сборки Stat](../StatClass.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
