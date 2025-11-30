# IMsCensus1Transform

IMsCensus1Transform
-


# IMsCensus1Transform


Сборка: Ms;


## Описание


Интерфейс IMsCensus1Transform
 предназначен для работы с моделью, рассчитываемой методом [Census1](Lib.chm::/02_Time_series_analysis/UiModelling_Census1.htm).


## Иерархия наследования


           [IMsMethod](../IMsMethod/IMsMethod.htm)


           [IMsVectorMethod](../IMsVectorMethod/IMsVectorMethod.htm)


           IMsCensus1Transform


## Комментарии


Метод Census1 предназначен для выделения сезонной составляющей. Выполняется
 разложение исходного ряда на сезонную составляющую, тренд-циклическую
 и нерегулярную компоненты.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CenterMovingAverage](IMsCensus1Transform.CenterMovingAverage.htm)
		 Свойство CenterMovingAverage
		 определяет признак центрирования скользящего среднего.


		 ![](../../Property_Image.gif)
		 [Explained](IMsCensus1Transform.Explained.htm)
		 Свойство Explained
		 возвращает моделируемую переменную.


		 ![](../../Property_Image.gif)
		 [Irregula](IMsCensus1Transform.Irregula.htm)
		 Свойство Irregula возвращает
		 нерегулярную компоненту.


		 ![](../../Property_Image.gif)
		 [MissingData](IMsCensus1Transform.MissingData.htm)
		 Свойство MissingData
		 определяет параметры обработки пропусков в исходных данных.


		 ![](../../Property_Image.gif)
		 [MovingAverage](IMsCensus1Transform.MovingAverage.htm)
		 Свойство MovingAverage
		 возвращает сглаженный ряд.


		 ![](../../Property_Image.gif)
		 [OutputType](IMsCensus1Transform.OutputType.htm)
		 Свойство OutputType
		 определяет компоненту, выгружаемую в моделируемую переменную
		 после расчёта метода.


		 ![](../../Property_Image.gif)
		 [RatioDifferences](IMsCensus1Transform.RatioDifferences.htm)
		 Свойство RatioDifferences
		 возвращает разность для аддитивной модели сезонности и отношение
		 для мультипликативной модели.


		 ![](../../Property_Image.gif)
		 [Seasonal](IMsCensus1Transform.Seasonal.htm)
		 Свойство Seasonal возвращает
		 сезонную составляющую.


		 ![](../../Property_Image.gif)
		 [SeasonalAdjustment](IMsCensus1Transform.SeasonalAdjustment.htm)
		 Свойство SeasonalAdjustment
		 возвращает сезонную корректировку.


		 ![](../../Property_Image.gif)
		 [Seasonality](IMsCensus1Transform.Seasonality.htm)
		 Свойство Seasonality
		 определяет используемую модель сезонности.


		 ![](../../Property_Image.gif)
		 [TrendCycle](IMsCensus1Transform.TrendCycle.htm)
		 Свойство TrendCycle
		 возвращает тренд-циклическую компоненту.


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
 | Метод «[Census1](Lib.chm::/02_Time_series_analysis/UiModelling_Census1.htm)»


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
