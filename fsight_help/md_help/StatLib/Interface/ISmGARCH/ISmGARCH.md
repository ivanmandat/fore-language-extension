# ISmGARCH

ISmGARCH
-


# ISmGARCH


Сборка: Stat;


## Описание


Интерфейс ISmGARCH определяет
 параметры авторегрессионной условно гетероскедастичной модели (GARCH-модель).


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmGARCH


## Комментарии


GARCH-модель применяется в эконометрике для отыскания зависимости дисперсии
 текущей ошибки от квадратов ошибок модели для предшествующих наблюдений.
 Для описания дисперсии ошибок применяются авторегрессионные члены.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [ARCHOrder](ISmGARCH.ARCHOrder.htm)


		 Свойство ARCHOrder
		 определяет порядок авторегрессии условной гетероскедастичности.


		 ![](../../Property.gif)
		 [ARMA](ISmGARCH.ARMA.htm)


		 Свойство ARMA возвращает
		 параметры авторегрессии и скользящего среднего.


		 ![](../../Property.gif)
		 [AssymetryOrder](ISmGARCH.AssymetryOrder.htm)


		 Свойство AssymetryOrder
		 определяет порядок асимметрии.


		 ![](../../Property.gif)
		 [CovarianceMatrix](ISmGARCH.CovarianceMatrix.htm)


		 Свойство CovarianceMatrix
		 возвращает значения ковариационной матрицы.


		 ![](../../Property.gif)
		 [Explained](ISmGARCH.Explained.htm)


		 Свойство Explained
		 определяет параметры объясняемого ряда.


		 ![](../../Property.gif)
		 [Explanatories](ISmGARCH.Explanatories.htm)


		 Свойство Explanatories
		 определяет объясняющие ряды.


		 ![](../../Property.gif)
		 [Fitted](ISmGARCH.Fitted.htm)


		 Свойство Fitted возвращает
		 модельный ряд.


		 ![](../../Property.gif)
		 [Forecast](ISmGARCH.Forecast.htm)


		 Свойство Forecast определяет
		 параметры прогнозного ряда.


		 ![](../../Property.gif)
		 [GARCHCoefficients](ISmGARCH.GARCHCoefficients.htm)


		 Свойство GARCHCoefficients
		 возвращает оценки коэффициентов авторегрессии условной гетероскедастичности
		 и обобщенной авторегрессии условной гетероскедастичности.


		 ![](../../Property.gif)
		 [GARCHOrder](ISmGARCH.GARCHOrder.htm)


		 Свойство GARCHOrder
		 определяет порядок обобщенной авторегрессии условной гетероскедастичности.


		 ![](../../Property.gif)
		 [GARCHSpec](ISmGARCH.GARCHSpec.htm)


		 Свойство GARCHSpec
		 определяет тип модели GARCH.


		 ![](../../Property.gif)
		 [Intercept](ISmGARCH.Intercept.htm)


		 Свойство Intercept
		 определяет параметры константы модели.


		 ![](../../Property.gif)
		 [LikelihoodFunctionValue](ISmGARCH.LikelihoodFunctionValue.htm)


		 Свойство LikelihoodFunctionValue
		 возвращает оптимальное значение функции правдоподобия.


		 ![](../../Property.gif)
		 [MaxIteration](ISmGARCH.MaxIteration.htm)


		 Свойство MaxIteration
		 определяет максимальное число итераций для метода оптимизации.


		 ![](../../Property.gif)
		 [MissingData](ISmGARCH.MissingData.htm)


		 Свойство MissingData
		 определяет параметры обработки пропусков.


		 ![](../../Property.gif)
		 [ModelPeriod](ISmGARCH.ModelPeriod.htm)


		 Свойство ModelPeriod
		 определяет параметры периода идентификации.


		 ![](../../Property.gif)
		 [OptimizationMethod](ISmGARCH.OptimizationMethod.htm)


		 Свойство OptimizationMethod
		 определяет используемый метод оптимизации.


		 ![](../../Property.gif)
		 [RegressionCoefficients](ISmGARCH.RegressionCoefficients.htm)


		 Свойство RegressionCoefficients
		 определяет параметры регрессионных коэффициентов модели.


		 ![](../../Property.gif)
		 [Residuals](ISmGARCH.Residuals.htm)


		 Свойство Residuals
		 возвращает ряд остатков.


		 ![](../../Property.gif)
		 [ResidualsDispersion](ISmGARCH.ResidualsDispersion.htm)


		 Свойство ResidualsDispersion
		 возвращает дисперсию остатков.


		 ![](../../Property.gif)
		 [ResidualsDispersionForecast](ISmGARCH.ResidualsDispersionForecast.htm)


		 Свойство ResidualsDispersionForecast
		 возвращает прогноз дисперсии остатков.


		 ![](../../Property.gif)
		 [StationarityCondition](ISmGARCH.StationarityCondition.htm)


		 Свойство StationarityCondition
		 определяет использование условия стационарности.


		 ![](../../Property.gif)
		 [SummaryStatistics](ISmGARCH.SummaryStatistics.htm)


		 Свойство SummaryStatistics
		 возвращает статистические характеристики.


		 ![](../../Property.gif)
		 [Tolerance](ISmGARCH.Tolerance.htm)


		 Свойство Tolerance
		 определяет точность.


		 ![](../../Property.gif)
		 [UseDefaultInitValues](ISmGARCH.UseDefaultInitValues.htm)


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
 | [GARCH-модель](Lib.chm::/02_Time_series_analysis/GARCH.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
