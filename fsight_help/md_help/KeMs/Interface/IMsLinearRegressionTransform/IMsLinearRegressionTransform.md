# IMsLinearRegressionTransform

IMsLinearRegressionTransform
-


# IMsLinearRegressionTransform


Сборка: Ms;


## Описание


Интерфейс IMsLinearRegressionTransform
 содержит свойства и методы, определяющие параметры расчета модели с помощью
 метода «Линейная регрессия (оценка МНК)».


## Иерархия наследования


           [IMsStochasticMethod](../IMsStochasticMethod/IMsStochasticMethod.htm)


           [IMsMethod](../IMsMethod/IMsMethod.htm)


           IMsLinearRegressionTransform


## Комментарии


Метод наименьших квадратов (МНК) - один из методов регрессионного анализа
 для оценки неизвестных величин по результатам измерений, содержащим случайные
 ошибки. Данный метод применяется также для приближённого представления
 заданной функции другими (более простыми) функциями и часто оказывается
 полезным при обработке наблюдений.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ARMA](IMsLinearRegressionTransform.ARMA.htm)


		 Свойство ARMA возвращает
		 параметры авторегрессии и скользящего среднего.


		 ![](../../Property_Image.gif)
		 [ARMACoefficients](IMsLinearRegressionTransform.ARMACoefficients.htm)


		 Свойство ARMACoefficients
		 возвращает оцененные коэффициенты авторегрессии скользящего среднего.


		 ![](../../Property_Image.gif)
		 [AutoSelection](IMsLinearRegressionTransform.AutoSelection.htm)


		 Свойство AutoSelection
		 возвращает настройки, используемые для автоподбора комбинации
		 факторов, при которых значения коэффициентов идентифицированного
		 уравнения будут оптимальными.


		 ![](../../Property_Image.gif)
		 [Coefficients](IMsLinearRegressionTransform.Coefficients.htm)


		 Свойство Coefficients
		 определяет массив значений коэффициентов уравнения модели.


		 ![](../../Property_Image.gif)
		 [CoefUncertaintyInSECalc](IMsLinearRegressionTransform.CoefUncertaintyInSECalc.htm)


		 Свойство CoefUncertaintyInSECalc
		 определяет, учитывать ли неопределенность коэффициентов при расчете
		 доверительных границ.


		 ![](../../Property_Image.gif)
		 [ConfidenceLevel](IMsLinearRegressionTransform.ConfidenceLevel.htm)


		 Свойство ConfidenceLevel
		 определяет значимость доверительных границ.


		 ![](../../Property_Image.gif)
		 [ConstantMode](IMsLinearRegressionTransform.ConstantMode.htm)


		 Свойство ConstantMode
		 определяет режим задания константы для модели.


		 ![](../../Property_Image.gif)
		 [ConstantValue](IMsLinearRegressionTransform.ConstantValue.htm)


		 Свойство ConstantValue
		 определяет значение константы для модели.


		 ![](../../Property_Image.gif)
		 [DiagnosticTests](IMsLinearRegressionTransform.DiagnosticTests.htm)


		 Свойство DiagnosticTests
		 возвращает набор диагностических тестов модели.


		 ![](../../Property_Image.gif)
		 [Explained](IMsLinearRegressionTransform.Explained.htm)


		 Свойство Explained
		 возвращает моделируемый ряд.


		 ![](../../Property_Image.gif)
		 [Explanatories](IMsLinearRegressionTransform.Explanatories.htm)


		 Свойство Explanatories
		 возвращает объект, содержащий коллекцию термов, используемых при
		 расчете модели.


		 ![](../../Property_Image.gif)
		 [IsCoefficientsSaved](IMsLinearRegressionTransform.IsCoefficientsSaved.htm)


		 Свойство IsCoefficientsSaved
		 возвращает True, если
		 сохранены коэффициенты модели.


		 ![](../../Property_Image.gif)
		 [MissingData](IMsLinearRegressionTransform.MissingData.htm)


		 Свойство MissingData
		 возвращает объект, содержащий параметры обработки пропусков исходного
		 ряда.


		 ![](../../Property_Image.gif)
		 [PairCorrelationMatrix](IMsLinearRegressionTransform.PairCorrelationMatrix.htm)


		 Свойство PairCorrelationMatrix
		 возвращает вещественный массив, содержащий корреляционную матрицу.


		 ![](../../Property_Image.gif)
		 [PDLStatCoefficients](IMsLinearRegressionTransform.PDLStatCoefficients.htm)


		 Свойство PDLStatCoefficients
		 возвращает коэффициенты для лаговых переменных.


		 ![](../../Property_Image.gif)
		 [StatCoefficients](IMsLinearRegressionTransform.StatCoefficients.htm)


		 Свойство StatCoefficients
		 возвращает значения статистических характеристик, рассчитанных
		 для коэффициентов идентифицированного уравнения.


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
