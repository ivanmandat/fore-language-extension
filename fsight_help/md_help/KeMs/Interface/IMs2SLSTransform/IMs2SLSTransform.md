# IMs2SLSTransform

IMs2SLSTransform
-


# IMs2SLSTransform


Сборка: Ms;


## Описание


Интерфейс IMs2SLSTransform содержит
 свойства и методы, определяющие параметры расчёта модели с помощью метода
 «Линейная регрессия (оценка методом
 инструментальных переменных)».


## Иерархия наследования


           [IMsStochasticMethod](../IMsStochasticMethod/IMsStochasticMethod.htm)


           [IMsMethod](../IMsMethod/IMsMethod.htm)


           IMs2SLSTransform


## Комментарии


Метод инструментальных переменных является обобщением обычного [метода
 наименьших квадратов](../IMsLinearRegressionTransform/IMsLinearRegressionTransform.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ARMA](IMs2SLSTransform.ARMA.htm)


		 Свойство ARMA возвращает
		 параметры авторегрессии и скользящего среднего.


		 ![](../../Property_Image.gif)
		 [ARMACoefficients](IMs2SLSTransform.ARMACoefficients.htm)


		 Свойство ARMACoefficients
		 возвращает оценённые коэффициенты авторегрессии скользящего среднего.


		 ![](../../Property_Image.gif)
		 [Coefficients](IMs2SLSTransform.Coefficients.htm)


		 Свойство Coefficients
		 определяет массив значений коэффициентов уравнения модели.


		 ![](../../Property_Image.gif)
		 [CoefUncertaintyInSECalc](IMs2SLSTransform.CoefUncertaintyInSECalc.htm)


		 Свойство CoefUncertaintyInSECalc
		 определяет признак учёта неопределённости коэффициентов при расчёте
		 доверительных границ.


		 ![](../../Property_Image.gif)
		 [ConfidenceLevel](IMs2SLSTransform.ConfidenceLevel.htm)


		 Свойство ConfidenceLevel
		 определяет значимость доверительных границ.


		 ![](../../Property_Image.gif)
		 [ConstantMode](IMs2SLSTransform.ConstantMode.htm)


		 Свойство ConstantMode
		 определяет режим задания константы для модели.


		 ![](../../Property_Image.gif)
		 [ConstantValue](IMs2SLSTransform.ConstantValue.htm)


		 Свойство ConstantValue
		 определяет значение константы для модели.


		 ![](../../Property_Image.gif)
		 [Explained](IMs2SLSTransform.Explained.htm)


		 Свойство Explained
		 возвращает моделируемый ряд.


		 ![](../../Property_Image.gif)
		 [Explanatories](IMs2SLSTransform.Explanatories.htm)


		 Свойство Explanatories
		 возвращает объект, содержащий коллекцию термов, используемых при
		 расчёте модели.


		 ![](../../Property_Image.gif)
		 [Instrumental](IMs2SLSTransform.Instrumental.htm)


		 Свойство Instrumental
		 возвращает объект, содержащий коллекцию термов, используемых при
		 оценке коэффициентов с помощью инструментальных переменных.


		 ![](../../Property_Image.gif)
		 [IsCoefficientsSaved](IMs2SLSTransform.IsCoefficientsSaved.htm)


		 Свойство IsCoefficientsSaved
		 возвращает признак сохранения коэффициентов модели.


		 ![](../../Property_Image.gif)
		 [MissingData](IMs2SLSTransform.MissingData.htm)


		 Свойство MissingData
		 возвращает объект, содержащий параметры обработки пропусков исходного
		 ряда.


		 ![](../../Property_Image.gif)
		 [PairCorrelationMatrix](IMs2SLSTransform.PairCorrelationMatrix.htm)


		 Свойство PairCorrelationMatrix
		 возвращает вещественный массив, содержащий корреляционную матрицу.


		 ![](../../Property_Image.gif)
		 [StatCoefficients](IMs2SLSTransform.StatCoefficients.htm)


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
