# SmGARCH

SmGARCH
-


# SmGARCH


## Описание


Класс SmGARCH реализует алгоритм авторегрессионной условно гетероскедастичной модели (GARCH-модель).


## Свойства, унаследованные от [ISmGARCH](../../Interface/ISmGARCH/ISmGARCH.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [ARCHOrder](../../Interface/ISmGARCH/ISmGARCH.ARCHOrder.htm)


		 Свойство ARCHOrder
		 определяет порядок авторегрессии условной гетероскедастичности.


		 ![](../../Property.gif)
		 [ARMA](../../Interface/ISmGARCH/ISmGARCH.ARMA.htm)


		 Свойство ARMA возвращает
		 параметры авторегрессии и скользящего среднего.


		 ![](../../Property.gif)
		 [AssymetryOrder](../../Interface/ISmGARCH/ISmGARCH.AssymetryOrder.htm)


		 Свойство AssymetryOrder
		 определяет порядок асимметрии.


		 ![](../../Property.gif)
		 [CovarianceMatrix](../../Interface/ISmGARCH/ISmGARCH.CovarianceMatrix.htm)


		 Свойство CovarianceMatrix
		 возвращает значения ковариационной матрицы.


		 ![](../../Property.gif)
		 [Explained](../../Interface/ISmGARCH/ISmGARCH.Explained.htm)


		 Свойство Explained
		 определяет параметры объясняемого ряда.


		 ![](../../Property.gif)
		 [Explanatories](../../Interface/ISmGARCH/ISmGARCH.Explanatories.htm)


		 Свойство Explanatories
		 определяет объясняющие ряды.


		 ![](../../Property.gif)
		 [Fitted](../../Interface/ISmGARCH/ISmGARCH.Fitted.htm)


		 Свойство Fitted возвращает
		 модельный ряд.


		 ![](../../Property.gif)
		 [Forecast](../../Interface/ISmGARCH/ISmGARCH.Forecast.htm)


		 Свойство Forecast определяет
		 параметры прогнозного ряда.


		 ![](../../Property.gif)
		 [GARCHCoefficients](../../Interface/ISmGARCH/ISmGARCH.GARCHCoefficients.htm)


		 Свойство GARCHCoefficients
		 возвращает оценки коэффициентов авторегрессии условной гетероскедастичности
		 и обобщенной авторегрессии условной гетероскедастичности.


		 ![](../../Property.gif)
		 [GARCHOrder](../../Interface/ISmGARCH/ISmGARCH.GARCHOrder.htm)


		 Свойство GARCHOrder
		 определяет порядок обобщенной авторегрессии условной гетероскедастичности.


		 ![](../../Property.gif)
		 [GARCHSpec](../../Interface/ISmGARCH/ISmGARCH.GARCHSpec.htm)


		 Свойство GARCHSpec
		 определяет тип модели GARCH.


		 ![](../../Property.gif)
		 [Intercept](../../Interface/ISmGARCH/ISmGARCH.Intercept.htm)


		 Свойство Intercept
		 определяет параметры константы модели.


		 ![](../../Property.gif)
		 [LikelihoodFunctionValue](../../Interface/ISmGARCH/ISmGARCH.LikelihoodFunctionValue.htm)


		 Свойство LikelihoodFunctionValue
		 возвращает оптимальное значение функции правдоподобия.


		 ![](../../Property.gif)
		 [MaxIteration](../../Interface/ISmGARCH/ISmGARCH.MaxIteration.htm)


		 Свойство MaxIteration
		 определяет максимальное число итераций для метода оптимизации.


		 ![](../../Property.gif)
		 [MissingData](../../Interface/ISmGARCH/ISmGARCH.MissingData.htm)


		 Свойство MissingData
		 определяет параметры обработки пропусков.


		 ![](../../Property.gif)
		 [ModelPeriod](../../Interface/ISmGARCH/ISmGARCH.ModelPeriod.htm)


		 Свойство ModelPeriod
		 определяет параметры периода идентификации.


		 ![](../../Property.gif)
		 [OptimizationMethod](../../Interface/ISmGARCH/ISmGARCH.OptimizationMethod.htm)


		 Свойство OptimizationMethod
		 определяет используемый метод оптимизации.


		 ![](../../Property.gif)
		 [RegressionCoefficients](../../Interface/ISmGARCH/ISmGARCH.RegressionCoefficients.htm)


		 Свойство RegressionCoefficients
		 определяет параметры регрессионных коэффициентов модели.


		 ![](../../Property.gif)
		 [Residuals](../../Interface/ISmGARCH/ISmGARCH.Residuals.htm)


		 Свойство Residuals
		 возвращает ряд остатков.


		 ![](../../Property.gif)
		 [ResidualsDispersion](../../Interface/ISmGARCH/ISmGARCH.ResidualsDispersion.htm)


		 Свойство ResidualsDispersion
		 возвращает дисперсию остатков.


		 ![](../../Property.gif)
		 [ResidualsDispersionForecast](../../Interface/ISmGARCH/ISmGARCH.ResidualsDispersionForecast.htm)


		 Свойство ResidualsDispersionForecast
		 возвращает прогноз дисперсии остатков.


		 ![](../../Property.gif)
		 [StationarityCondition](../../Interface/ISmGARCH/ISmGARCH.StationarityCondition.htm)


		 Свойство StationarityCondition
		 определяет использование условия стационарности.


		 ![](../../Property.gif)
		 [SummaryStatistics](../../Interface/ISmGARCH/ISmGARCH.SummaryStatistics.htm)


		 Свойство SummaryStatistics
		 возвращает статистические характеристики.


		 ![](../../Property.gif)
		 [Tolerance](../../Interface/ISmGARCH/ISmGARCH.Tolerance.htm)


		 Свойство Tolerance
		 определяет точность.


		 ![](../../Property.gif)
		 [UseDefaultInitValues](../../Interface/ISmGARCH/ISmGARCH.UseDefaultInitValues.htm)


		 Свойство UseDefaultInitValues
		 определяет, использовать ли начальные приближения, заданные по
		 умолчанию.


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
