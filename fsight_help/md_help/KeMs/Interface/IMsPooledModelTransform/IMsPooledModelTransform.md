# IMsPooledModelTransform

IMsPooledModelTransform
-


# IMsPooledModelTransform


## Описание


Интерфейс IMsPooledModelTransform
 предназначен для работы с моделью регрессии на панельных данных.


## Комментарии


Размерность всех переменных, участвующих в расчёте модели должна совпадать.


Математическое описание модели регрессии на панельных данных приведено
 в разделе «Библиотека методов и моделей».


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AddFactorTermSet](IMsPooledModelTransform.AddFactorTermSet.htm)


		 Свойство AddFactorTermSet
		 возвращает параметры ряда, который используется в качестве добавляемого
		 фактора.


		 ![](../../Property_Image.gif)
		 [ARMA](IMsPooledModelTransform.ARMA.htm)


		 Свойство ARMA возвращает
		 параметры авторегрессии и скользящего среднего.


		 ![](../../Property_Image.gif)
		 [ARMACoefficients](IMsPooledModelTransform.ARMACoefficients.htm)


		 Свойство ARMACoefficients
		 возвращает оцененные коэффициенты авторегрессии и скользящего
		 среднего.


		 ![](../../Property_Image.gif)
		 [Coefficients](IMsPooledModelTransform.Coefficients.htm)


		 Свойство Coefficients
		 определяет массив значений коэффициентов уравнения модели.


		 ![](../../Property_Image.gif)
		 [ConfidenceLevel](IMsPooledModelTransform.ConfidenceLevel.htm)


		 Свойство ConfidenceLevel
		 определяет значимость доверительных границ прогнозного ряда.


		 ![](../../Property_Image.gif)
		 [ConstantMode](IMsPooledModelTransform.ConstantMode.htm)


		 Свойство ConstantMode
		 определяет режим задания константы для модели.


		 ![](../../Property_Image.gif)
		 [ConstantValue](IMsPooledModelTransform.ConstantValue.htm)


		 Свойство ConstantValue
		 определяет значение константы для модели.


		 ![](../../Property_Image.gif)
		 [CrossSection](IMsPooledModelTransform.CrossSection.htm)


		 Свойство CrossSection определяет
		 тип модели регрессии на панельных данных.


		 ![](../../Property_Image.gif)
		 [Explained](IMsPooledModelTransform.Explained.htm)


		 Свойство Explained возвращает
		 моделируемую (объясняемую) переменную.


		 ![](../../Property_Image.gif)
		 [Explanatories](IMsPooledModelTransform.Explanatories.htm)


		 Свойство Explanatories возвращает
		 массив объясняющих переменных (факторов).


		 ![](../../Property_Image.gif)
		 [FittedTermSet](IMsPooledModelTransform.FittedTermSet.htm)


		 Свойство FittedTermSet
		 возвращает параметры переменной, в которую будут выгружены данные
		 модельного ряда после расчета модели.


		 ![](../../Property_Image.gif)
		 [ForecastTermSet](IMsPooledModelTransform.ForecastTermSet.htm)


		 Свойство ForecastTermSet возвращает
		 параметры переменной, в которую будут выгружены данные прогнозного
		 ряда после расчета модели.


		 ![](../../Property_Image.gif)
		 [IsCoefficientsSaved](IMsPooledModelTransform.IsCoefficientsSaved.htm)


		 Свойство IsCoefficientsSaved возвращает
		 признак того, сохранены ли коэффициенты модели.


		 ![](../../Property_Image.gif)
		 [LowerConfidenceLevelTermSet](IMsPooledModelTransform.LowerConfidenceLevelTermSet.htm)


		 Свойство LowerConfidenceLevelTermSet возвращает
		 параметры переменной, в которую будут выгружены данные нижней
		 доверительной границы после расчета модели.


		 ![](../../Property_Image.gif)
		 [MissingData](IMsPooledModelTransform.MissingData.htm)


		 Свойство MissingData
		 возвращает объект, содержащий параметры обработки пропусков исходного
		 ряда.


		 ![](../../Property_Image.gif)
		 [PairCorrelationMatrix](IMsPooledModelTransform.PairCorrelationMatrix.htm)


		 Свойство PairCorrelationMatrix
		 возвращает матрицу корреляции факторов модели.


		 ![](../../Property_Image.gif)
		 [ResidualsTermSet](IMsPooledModelTransform.ResidualsTermSet.htm)


		 Свойство ResidualsTermSet возвращает
		 параметры переменной, в которую будут выгружены данные ряда остатков
		 после расчета модели.


		 ![](../../Property_Image.gif)
		 [StatCoefficients](IMsPooledModelTransform.StatCoefficients.htm)


		 Свойство StatCoefficients возвращает
		 значения статистических характеристик, рассчитанных для коэффициентов
		 идентифицированного уравнения.


		 ![](../../Property_Image.gif)
		 [UpperConfidenceLevelTermSet](IMsPooledModelTransform.UpperConfidenceLevelTermSet.htm)


		 Свойство UpperConfidenceLevelTermSet возвращает
		 параметры переменной, в которую будут выгружены данные верхней
		 доверительной границы после расчета модели.


		 ![](../../Property_Image.gif)
		 [Weights](IMsPooledModelTransform.Weights.htm)


		 Свойство Weights возвращает
		 веса, используемые при расчете модели.


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
 | [Регрессия
 на панельных данных](Lib.chm::/01_Regression_models/UiModelling_PooledModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
