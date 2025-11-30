# ISmMarkovSwitchingGARCH

ISmMarkovSwitchingGARCH
-


# ISmMarkovSwitchingGARCH


Сборка: Stat;


## Описание


Интерфейс ISmMarkovSwitchingGARCH
 предназначен для работы с моделью MS-GARCH (Markov switching GARCH) с
 одним переменным параметром: среднее значение дисперсии.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmMarkovSwitchingGARCH


## Комментарии


Модель GARCH с марковским переключением представляет собой усовершенствованную
 модель GARCH, которая может описывать смену состояний дисперсии.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [ARCHCoefficients](ISmMarkovSwitchingGARCH.ARCHCoefficients.htm)
		 Свойство ARCHCoefficients
		 возвращает оценки коэффициентов авторегрессии условной
		 гетероскедастичности (ARCH) модели и их характеристики.


		 ![](../../Property.gif)
		 [ARCHOrder](ISmMarkovSwitchingGARCH.ARCHOrder.htm)
		 Свойство ARCHOrder
		 определяет порядок авторегрессии условной гетероскедастичности
		 (ARCH).


		 ![](../../Property.gif)
		 [ConditionalStateProbabilities](ISmMarkovSwitchingGARCH.ConditionalStateProbabilities.htm)
		 Свойство ConditionalStateProbabilities
		 возвращает ряд вероятностей перехода для каждого момента
		 времени.


		 ![](../../Property.gif)
		 [Explained](ISmMarkovSwitchingGARCH.Explained.htm)
		 Свойство Explained
		 определяет объясняемый ряд.


		 ![](../../Property.gif)
		 [Explanatories](ISmMarkovSwitchingGARCH.Explanatories.htm)
		 Свойство Explanatories
		 определяет объясняющие ряды.


		 ![](../../Property.gif)
		 [Fitted](ISmMarkovSwitchingGARCH.Fitted.htm)
		 Свойство Fitted
		 возвращает модельный ряд.


		 ![](../../Property.gif)
		 [Forecast](ISmMarkovSwitchingGARCH.Forecast.htm)
		 Свойство Forecast
		 возвращает параметры прогнозного ряда.


		 ![](../../Property.gif)
		 [GARCHCoefficients](ISmMarkovSwitchingGARCH.GARCHCoefficients.htm)
		 Свойство GARCHCoefficients
		 возвращает оценки коэффициентов обобщенной авторегрессии
		 условной гетероскедастичности (GARCH) модели и их характеристики.


		 ![](../../Property.gif)
		 [GARCHConst](ISmMarkovSwitchingGARCH.GARCHConst.htm)
		 Свойство GARCHConst
		 возвращает оценку константы GARCH μ0.


		 ![](../../Property.gif)
		 [GARCHConst1](ISmMarkovSwitchingGARCH.GARCHConst1.htm)
		 Свойство GARCHConst1 возвращает
		 оценку константы GARCH μ1.


		 ![](../../Property.gif)
		 [GARCHOrder](ISmMarkovSwitchingGARCH.GARCHOrder.htm)
		 Свойство GARCHOrder
		 определяет порядок обобщенной авторегрессии условной гетероскедастичности
		 (GARCH).


		 ![](../../Property.gif)
		 [MCMCParameters](ISmMarkovSwitchingGARCH.MCMCParameters.htm)
		 Свойство MCMCParameters
		 возвращает параметры алгоритма Марковской цепи Монте Карло
		 (Markov Chain Monte Carlo).


		 ![](../../Property.gif)
		 [MissingData](ISmMarkovSwitchingGARCH.MissingData.htm)
		 Свойство MissingData
		 определяет параметры обработки пропусков.


		 ![](../../Property.gif)
		 [ModelPeriod](ISmMarkovSwitchingGARCH.ModelPeriod.htm)
		 Свойство ModelPeriod
		 определяет параметры периода идентификации.


		 ![](../../Property.gif)
		 [P00](ISmMarkovSwitchingGARCH.P00.htm)
		 Свойство P00
		 возвращает оценки параметров перехода из состояния 0 в
		 0.


		 ![](../../Property.gif)
		 [P00Distribution](ISmMarkovSwitchingGARCH.P00Distribution.htm)
		 Свойство P00Distribution
		 определяет параметры распределения для вероятности перехода
		 из состояния 0 в 0.


		 ![](../../Property.gif)
		 [P11](ISmMarkovSwitchingGARCH.P11.htm)
		 Свойство P11
		 возвращает оценки параметров перехода из состояния 1 в
		 1.


		 ![](../../Property.gif)
		 [P11Distribution](ISmMarkovSwitchingGARCH.P11Distribution.htm)
		 Свойство P11Distribution
		 определяет параметры распределения для вероятности перехода
		 из состояния 1 в 1.


		 ![](../../Property.gif)
		 [RegressionCoefficients](ISmMarkovSwitchingGARCH.RegressionCoefficients.htm)
		 Свойство RegressionCoefficients
		 возвращает оценки коэффициентов модели и их характеристики.


		 ![](../../Property.gif)
		 [Residuals](ISmMarkovSwitchingGARCH.Residuals.htm)
		 Свойство Residuals
		 возвращает ряд остатков.


		 ![](../../Property.gif)
		 [ResidualsDispersion](ISmMarkovSwitchingGARCH.ResidualsDispersion.htm)
		 Свойство ResidualsDispersion
		 возвращает ряд дисперсий остатков.


		 ![](../../Property.gif)
		 [ResidualsDispersionForecast](ISmMarkovSwitchingGARCH.ResidualsDispersionForecast.htm)
		 Свойство ResidualsDispersionForecast
		 возвращает прогноз дисперсий остатков.


		 ![](../../Property.gif)
		 [SummaryStatistics](ISmMarkovSwitchingGARCH.SummaryStatistics.htm)
		 Свойство SummaryStatistics
		 возвращает описательные статистики модели.


		 ![](../../Property.gif)
		 [UseDefaultInitDistribution](ISmMarkovSwitchingGARCH.UseDefaultInitDistribution.htm)
		 Свойство UseDefaultInitDistribution
		 определяет, будут ли использоваться значения по умолчанию.


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


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
