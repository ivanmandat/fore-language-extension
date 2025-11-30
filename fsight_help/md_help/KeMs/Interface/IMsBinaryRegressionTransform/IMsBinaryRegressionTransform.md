# IMsBinaryRegressionTransform

IMsBinaryRegressionTransform
-


# IMsBinaryRegressionTransform


Сборка: Ms;


## Описание


Интерфейс IMsBinaryRegressionTransform
 предназначен для настройки параметров расчёта модели с помощью метода
 бинарного выбора (оценка методом максимального правдоподобия).


## Иерархия наследования


           [IMsMethod](../IMsMethod/IMsMethod.htm)


           [IMsStochasticMethod](../IMsStochasticMethod/IMsStochasticMethod.htm)


           IMsBinaryRegressionTransform


## Комментарии


Данный метод осуществляет оценку коэффициентов регрессионной модели,
 в которой зависимая переменная принимает два значения: 0 или 1.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [BinaryDistr](IMsBinaryRegressionTransform.BinaryDistr.htm)
		 Свойство BinaryDistr
		 определяет модель бинарной регрессии.


		 ![](../../Property_Image.gif)
		 [ClassificationCutOff](IMsBinaryRegressionTransform.ClassificationCutOff.htm)
		 Свойство ClassificationCutOff
		 определяет пороговое значение вероятности для отнесения объектов
		 к группе «0» или «1».


		 ![](../../Property_Image.gif)
		 [Coefficients](IMsBinaryRegressionTransform.Coefficients.htm)
		 Свойство Coefficients
		 определяет массив значений коэффициентов уравнения модели.


		 ![](../../Property_Image.gif)
		 [ConfidenceLevel](IMsBinaryRegressionTransform.ConfidenceLevel.htm)
		 Свойство ConfidenceLevel
		 определяет значимость доверительных границ.


		 ![](../../Property_Image.gif)
		 [ConstantInitValue](IMsBinaryRegressionTransform.ConstantInitValue.htm)
		 Свойство ConstantInitValue
		 определяет начальное значение константы.


		 ![](../../Property_Image.gif)
		 [ConstantMode](IMsBinaryRegressionTransform.ConstantMode.htm)
		 Свойство ConstantMode
		 определяет режим задания константы для модели.


		 ![](../../Property_Image.gif)
		 [ConstantValue](IMsBinaryRegressionTransform.ConstantValue.htm)
		 Свойство ConstantValue
		 определяет значение константы для модели.


		 ![](../../Property_Image.gif)
		 [Explained](IMsBinaryRegressionTransform.Explained.htm)
		 Свойство Explained
		 возвращает набор моделируемых рядов.


		 ![](../../Property_Image.gif)
		 [Explanatories](IMsBinaryRegressionTransform.Explanatories.htm)
		 Свойство Explanatories
		 возвращает набор объясняющих рядов.


		 ![](../../Property_Image.gif)
		 [FittedTermSet](IMsBinaryRegressionTransform.FittedTermSet.htm)
		 Свойство FittedTermSet
		 возвращает набор рядов, в которые будут выгружаться данные модельного
		 ряда при расчёте задачи.


		 ![](../../Property_Image.gif)
		 [ForecastTermSet](IMsBinaryRegressionTransform.ForecastTermSet.htm)
		 Свойство ForecastTermSet
		 возвращает набор рядов, в которые будут выгружаться прогнозные
		 данные при расчёте задачи.


		 ![](../../Property_Image.gif)
		 [IsCoefficientsSaved](IMsBinaryRegressionTransform.IsCoefficientsSaved.htm)
		 Свойство IsCoefficientsSaved
		 возвращает признак сохранения коэффициентов модели.


		 ![](../../Property_Image.gif)
		 [LowerConfidenceLevelTermSet](IMsBinaryRegressionTransform.LowerConfidenceLevelTermSet.htm)
		 Свойство LowerConfidenceLevelTermSet
		 возвращает набор рядов, в которые будут выгружаться данные нижней
		 доверительной границы при расчёте задачи.


		 ![](../../Property_Image.gif)
		 [MissingData](IMsBinaryRegressionTransform.MissingData.htm)
		 Свойство MissingData
		 возвращает объект, содержащий параметры обработки пропусков исходного
		 ряда.


		 ![](../../Property_Image.gif)
		 [OutputType](IMsBinaryRegressionTransform.OutputType.htm)
		 Свойство OutputType
		 определяет тип значений, выгружаемых в моделируемый и прогнозные
		 ряды.


		 ![](../../Property_Image.gif)
		 [ResidualsTermSet](IMsBinaryRegressionTransform.ResidualsTermSet.htm)
		 Свойство ResidualsTermSet
		 возвращает набор рядов, в которые будут выгружаться данные ряда
		 остатков при расчёте задачи.


		 ![](../../Property_Image.gif)
		 [StatCoefficients](IMsBinaryRegressionTransform.StatCoefficients.htm)
		 Свойство StatCoefficients
		 возвращает значения статистических характеристик, рассчитанных
		 для коэффициентов идентифицированного уравнения.


		 ![](../../Property_Image.gif)
		 [Tolerance](IMsBinaryRegressionTransform.Tolerance.htm)
		 Свойство Tolerance
		 определяет точность оптимизации функции правдоподобия.


		 ![](../../Property_Image.gif)
		 [UpperConfidenceLevelTermSet](IMsBinaryRegressionTransform.UpperConfidenceLevelTermSet.htm)
		 Свойство UpperConfidenceLevelTermSet
		 возвращает набор рядов, в которые будут выгружаться данные верхней
		 доверительной границы при расчёте задачи.


		 ![](../../Property_Image.gif)
		 [UseDefaultInitValues](IMsBinaryRegressionTransform.UseDefaultInitValues.htm)
		 Свойство UseDefaultInitValues
		 определяет признак использования начальных приближений, заданных
		 по умолчанию.


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
 | [Бинарная
 регрессия](Lib.chm::/01_Regression_models/UiModelling_BinaryModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
