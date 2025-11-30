# IMsValueAtRiskTransform

IMsValueAtRiskTransform
-


# IMsValueAtRiskTransform


Сборка: Ms;


## Описание


Интерфейс IMsValueAtRiskTransform
 предназначен для работы с параметрами расчёта модели «Value-At-Risk».


## Иерархия наследования


           [IMsMethod](../IMsMethod/IMsMethod.htm)


           IMsValueAtRiskTransform


## Комментарии


Value-At-Risk (VaR) - стоимостная мера риска. Это выраженная в денежных
 единицах оценка величины, которую не превысят ожидаемые в течение периода
 времени потери с заданной вероятностью. Также называется показателем «16:15».


VaR характеризуется тремя параметрами:


	- временной горизонт. [ForecastingHorizon](IMsValueAtRiskTransform.ForecastingHorizon.htm);


	- доверительный интервал. [ConfidenceLevel](IMsValueAtRiskTransform.ConfidenceLevel.htm);


	- базовая валюта, в которой измеряется показатель.


Расчет величины риска осуществляется по методологии VaR несколькими
 методами. Для определения метода используйте [MethodType](IMsValueAtRiskTransform.MethodType.htm).


VaR считается только в дневной динамике.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Backtesting](IMsValueAtRiskTransform.Backtesting.htm)
		 Свойство Backtesting
		 возвращает параметры бэктестинга.


		 ![](../../Property_Image.gif)
		 [ConfidenceLevel](IMsValueAtRiskTransform.ConfidenceLevel.htm)
		 Свойство ConfidenceLevel определяет
		 значимость доверительных границ.


		 ![](../../Property_Image.gif)
		 [DistinguishLongShortPositions](IMsValueAtRiskTransform.DistinguishLongShortPositions.htm)
		 Свойство DistinguishLongShortPositions
		 определяет, различать ли длинные и короткие позиции.


		 ![](../../Property_Image.gif)
		 [ForecastingHorizon](IMsValueAtRiskTransform.ForecastingHorizon.htm)
		 Свойство ForecastingHorizon определяет
		 временной горизонт прогнозирования.


		 ![](../../Property_Image.gif)
		 [InstrumentDistribution](IMsValueAtRiskTransform.InstrumentDistribution.htm)
		 Свойство InstrumentDistribution определяет
		 распределение по финансовым инструментам.


		 ![](../../Property_Image.gif)
		 [InstrumentsDimension](IMsValueAtRiskTransform.InstrumentsDimension.htm)
		 Свойство InstrumentsDimension определяет
		 измерение финансовых инструментов.


		 ![](../../Property_Image.gif)
		 [LambdaEMWA](IMsValueAtRiskTransform.LambdaEMWA.htm)
		 Свойство LambdaEMWA определяет
		 значение лямбды EMWA.


		 ![](../../Property_Image.gif)
		 [LogarithmicProfit](IMsValueAtRiskTransform.LogarithmicProfit.htm)
		 Свойство LogarithmicProfit определяет,
		 использовать ли логарифмическую доходность.


		 ![](../../Property_Image.gif)
		 [MethodType](IMsValueAtRiskTransform.MethodType.htm)
		 Свойство MethodType
		 определяет метод расчёта модели.


		 ![](../../Property_Image.gif)
		 [MissingData](IMsValueAtRiskTransform.MissingData.htm)
		 Свойство MissingData
		 возвращает метод обработки пропусков.


		 ![](../../Property_Image.gif)
		 [OrganizationsDimension](IMsValueAtRiskTransform.OrganizationsDimension.htm)
		 Свойство OrganizationsDimension определяет
		 измерение организаций.


		 ![](../../Property_Image.gif)
		 [Portfolio](IMsValueAtRiskTransform.Portfolio.htm)
		 Свойство Portfolio определяет
		 терм, соответствующий переменной с данными «портфеля».


		 ![](../../Property_Image.gif)
		 [RandomWalk](IMsValueAtRiskTransform.RandomWalk.htm)
		 Свойство RandomWalk определяет,
		 использовать ли гипотезу о случайном блуждании.


		 ![](../../Property_Image.gif)
		 [StockPrices](IMsValueAtRiskTransform.StockPrices.htm)
		 Свойство StockPrices определяет
		 терм, соответствующий переменной с данными финансовых инструментах.


		 ![](../../Property_Image.gif)
		 [UseCholeskyFactorization](IMsValueAtRiskTransform.UseCholeskyFactorization.htm)
		 Свойство UseCholeskyFactorization определяет,
		 использовать ли факторизацию Холецкого.


		 ![](../../Property_Image.gif)
		 [UseFillGaps](IMsValueAtRiskTransform.UseFillGaps.htm)
		 Свойство UseFillGaps определяет,
		 использовать ли обработку пропусков.


		 ![](../../Property_Image.gif)
		 [ValueAtRisk](IMsValueAtRiskTransform.ValueAtRisk.htm)
		 Свойство ValueAtRisk определяет
		 терм, соответствующий переменной с результатами расчёта метода.


		 ![](../../Property_Image.gif)
		 [ZeroMean](IMsValueAtRiskTransform.ZeroMean.htm)
		 Свойство ZeroMean определяет,
		 использовать ли гипотезу о нулевом среднем.


## Свойства, унаследованные от [IMsMethod](../IMsMethod/IMsMethod.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CalculateSeries](../IMsMethod/IMsMethod.CalculateSeries.htm)
		 Свойство CalculateSeries
		 возвращает данные, полученные в результате расчета модели.


		 ![](../../Property_Image.gif)
		 [InversionInfo](../IMsMethod/IMsMethod.InversionInfo.htm)
		 Свойство InversionInfo
		 возвращает параметры начального преобразования, применяемого к
		 переменной.


		 ![](../../Property_Image.gif)
		 [ObservationsCount](../IMsMethod/IMsMethod.ObservationsCount.htm)
		 Свойство ObservationsCount
		 возвращает число наблюдений модели.


		 ![](../../Property_Image.gif)
		 [PeriodAlignment](../IMsMethod/IMsMethod.PeriodAlignment.htm)
		 Свойство PeriodAlignment
		 возвращает тип расчета метода относительно периода.


		 ![](../../Property_Image.gif)
		 [Series](../IMsMethod/IMsMethod.Series.htm)
		 Свойство Series возвращает
		 набор возможных рядов, используемых методом при расчете.


		 ![](../../Property_Image.gif)
		 [StatMethod](../IMsMethod/IMsMethod.StatMethod.htm)
		 Свойство StatMethod
		 возвращает информацию о статистическом методе, используемом для
		 расчета модели.


		 ![](../../Property_Image.gif)
		 [Summary](../IMsMethod/IMsMethod.Summary.htm)
		 Свойство Summary возвращает
		 статистические характеристики, рассчитанные для модели.


		 ![](../../Property_Image.gif)
		 [SupportsR](../IMsMethod/IMsMethod.SupportsR.htm)
		 Свойство SupportsR
		 определяет, возможен ли расчет метода с помощью R.


		 ![](../../Property_Image.gif)
		 [Type](../IMsMethod/IMsMethod.Type.htm)
		 Свойство Type возвращает
		 тип метода, используемого для расчета модели.


		 ![](../../Property_Image.gif)
		 [UseR](../IMsMethod/IMsMethod.UseR.htm)
		 Свойство UseR
		 определяет, используется ли при расчете метода подключение к R.


## Методы, унаследованные от [IMsMethod](../IMsMethod/IMsMethod.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Execute](../IMsMethod/IMsMethod.Execute.htm)
		 Метод Execute осуществляет
		 расчет модели и возвращает результаты расчета.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
