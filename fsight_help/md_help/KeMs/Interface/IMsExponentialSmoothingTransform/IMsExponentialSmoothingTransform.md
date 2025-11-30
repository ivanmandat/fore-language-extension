# IMsExponentialSmoothingTransform

IMsExponentialSmoothingTransform
-


# IMsExponentialSmoothingTransform


Сборка: Ms;


## Описание


Интерфейс IMsExponentialSmoothingTransform
 содержит свойства и методы, определяющие параметры расчета модели с помощью
 метода «Экспоненциальное сглаживание».


## Иерархия наследования


           [IMsMethod](../IMsMethod/IMsMethod.htm)


           [IMsStochasticMethod](../IMsStochasticMethod/IMsStochasticMethod.htm)


           IMsExponentialSmoothingTransform


## Комментарии


Экспоненциальное сглаживание является одним из наиболее распространённых
 приемов, используемых для сглаживания временных рядов, а также для прогнозирования.
 В основе процедуры сглаживания лежит расчёт экспоненциальных скользящих
 средних сглаживаемого ряда.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AsForecasting](IMsExponentialSmoothingTransform.AsForecasting.htm)


		 Свойство AsForecasting
		 определяет признак расчёта прогнозных значений.


		 ![](../../Property_Image.gif)
		 [AutoSearch](IMsExponentialSmoothingTransform.AutoSearch.htm)


		 Свойство AutoSearch
		 возвращает настройки автоподбора параметров для экспоненциального
		 сглаживания.


		 ![](../../Property_Image.gif)
		 [BestModelCoefficients](IMsExponentialSmoothingTransform.BestModelCoefficients.htm)


		 Свойство BestModelCoefficients
		 возвращает результаты автоподбора параметров экспоненциального
		 сглаживания.


		 ![](../../Property_Image.gif)
		 [ConfidenceLevel](IMsExponentialSmoothingTransform.ConfidenceLevel.htm)


		 Свойство ConfidenceLevel
		 определяет значимость доверительных границ.


		 ![](../../Property_Image.gif)
		 [Explained](IMsExponentialSmoothingTransform.Explained.htm)


		 Свойство Explained
		 возвращает моделируемый ряд.


		 ![](../../Property_Image.gif)
		 [MissingData](IMsExponentialSmoothingTransform.MissingData.htm)


		 Свойство MissingData
		 возвращает объект, содержащий параметры обработки пропусков исходного
		 ряда.


		 ![](../../Property_Image.gif)
		 [Parameters](IMsExponentialSmoothingTransform.Parameters.htm)


		 Свойство Parameters
		 возвращает параметры метода экспоненциального сглаживания.


		 ![](../../Property_Image.gif)
		 [SeasonalComponent](IMsExponentialSmoothingTransform.SeasonalComponent.htm)


		 Свойство SeasonalComponent
		 возвращает параметры сезонной составляющей.


		 ![](../../Property_Image.gif)
		 [TrendComponent](IMsExponentialSmoothingTransform.TrendComponent.htm)


		 Свойство TrendComponent
		 определяет тип тренда модели.


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


## Методы, унаследованные от [IMsStochasticMethod](../IMsStochasticMethod/IMsStochasticMethod.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Identify](../IMsStochasticMethod/IMsStochasticMethod.Identify.htm)


		 Метод Identify осуществляет
		 идентификацию коэффициентов уравнения модели.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
