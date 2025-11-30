# IMsNonLinearRegressionTransform

IMsNonLinearRegressionTransform
-


# IMsNonLinearRegressionTransform


Сборка: Ms;


## Описание


Интерфейс IMsNonLinearRegressionTransform
 содержит свойства и методы, определяющие параметры расчета модели с помощью
 метода нелинейной регрессии.


## Иерархия наследования


           [IMsMethod](../IMsMethod/IMsMethod.htm)


           [IMsStochasticMethod](../IMsStochasticMethod/IMsStochasticMethod.htm)


           IMsNonLinearRegressionTransform


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Coefficients](IMsNonLinearRegressionTransform.Coefficients.htm)
		 Свойство Coefficients
		 возвращает массив, содержащий наименования коэффициентов, входящих
		 в уравнение модели.


		 ![](../../Property_Image.gif)
		 [CoefficientsData](IMsNonLinearRegressionTransform.CoefficientsData.htm)
		 Свойство CoefficientsData
		 определяет массив значений коэффициентов уравнения модели.


		 ![](../../Property_Image.gif)
		 [ConfidenceLevel](IMsNonLinearRegressionTransform.ConfidenceLevel.htm)
		 Свойство ConfidenceLevel
		 определяет значимость доверительных границ.


		 ![](../../Property_Image.gif)
		 [Expression](IMsNonLinearRegressionTransform.Expression.htm)
		 Свойство Expression
		 возвращает объект, содержащий уравнение модели.


		 ![](../../Property_Image.gif)
		 [InitApproximation](IMsNonLinearRegressionTransform.InitApproximation.htm)
		 Свойство InitApproximation
		 определяет массив начальных приближений для коэффициентов уравнения
		 модели.


		 ![](../../Property_Image.gif)
		 [IsCoefficientsSaved](IMsNonLinearRegressionTransform.IsCoefficientsSaved.htm)
		 Свойство IsCoefficientsSaved
		 возвращает признак того, сохранены ли коэффициенты уравнения модели.


		 ![](../../Property_Image.gif)
		 [MaxIteration](IMsNonLinearRegressionTransform.MaxIteration.htm)
		 Свойство MaxIteration
		 определяет максимальное число итераций, за которое будет производиться
		 расчет оптимальных значений коэффициентов.


		 ![](../../Property_Image.gif)
		 [MissingData](IMsNonLinearRegressionTransform.MissingData.htm)
		 Свойство MissingData
		 возвращает объект, содержащий параметры обработки пропусков исходного
		 ряда.


		 ![](../../Property_Image.gif)
		 [Operands](IMsNonLinearRegressionTransform.Operands.htm)
		 Свойство Operands возвращает
		 коллекцию термов, используемых для составления уравнения модели.


		 ![](../../Property_Image.gif)
		 [OptimizationMethod](IMsNonLinearRegressionTransform.OptimizationMethod.htm)
		 Свойство OptimizationMethod
		 определяет используемый метод оптимизации.


		 ![](../../Property_Image.gif)
		 [Result](IMsNonLinearRegressionTransform.Result.htm)
		 Свойство Result возвращает
		 терм, соответствующий моделируемой переменной.


		 ![](../../Property_Image.gif)
		 [StatCoefficients](IMsNonLinearRegressionTransform.StatCoefficients.htm)
		 Свойство StatCoefficients
		 возвращает значения статистических характеристик, рассчитанных
		 для коэффициентов идентифицированного уравнения модели, по наименованию
		 коэффициента.


		 ![](../../Property_Image.gif)
		 [StatCoefficientsByIndex](IMsNonLinearRegressionTransform.StatCoefficientsByIndex.htm)
		 Свойство StatCoefficientsByIndex
		 возвращает значения статистических характеристик, рассчитанных
		 для коэффициентов идентифицированного уравнения модели, по индексу
		 коэффициента.


		 ![](../../Property_Image.gif)
		 [Tolerance](IMsNonLinearRegressionTransform.Tolerance.htm)
		 Свойство Tolerance
		 определяет точность расчета.


		 ![](../../Property_Image.gif)
		 [UseDefaultInitValues](IMsNonLinearRegressionTransform.UseDefaultInitValues.htm)
		 Свойство UseDefaultInitValues
		 определяет, использовать ли начальные приближения, заданные по
		 умолчанию.


		 ![](../../Property_Image.gif)
		 [UseDerivatives](IMsNonLinearRegressionTransform.UseDerivatives.htm)
		 Свойство UseDerivatives
		 определяет, будут ли использоваться аналитические производные
		 для повышения точности расчета.


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


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [SetAttributeExpression](IMsNonLinearRegressionTransform.SetAttributeExpression.htm)
		 Метод SetAttributeExpression
		 устанавливает выражение, заданное с использованием атрибутов показателей,
		 в качестве уравнения модели.


## Методы, унаследованные от [IMsStochasticMethod](../IMsStochasticMethod/IMsStochasticMethod.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Identify](../IMsStochasticMethod/IMsStochasticMethod.Identify.htm)


		 Метод Identify осуществляет
		 идентификацию коэффициентов уравнения модели.


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
