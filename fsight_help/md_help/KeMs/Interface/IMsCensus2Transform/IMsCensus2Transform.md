# IMsCensus2Transform

IMsCensus2Transform
-


# IMsCensus2Transform


Сборка: Ms;


## Описание


Интерфейс IMsCensus2Transform
 определяет параметры метода [X11](Lib.chm::/02_Time_series_analysis/UiModelling_Census2.htm),
 который является методом сезонной декомпозиции и корректировки.


## Иерархия наследования


           [IMsMethod](../IMsMethod/IMsMethod.htm)


           [IMsVectorMethod](../IMsVectorMethod/IMsVectorMethod.htm)


           IMsCensus1Transform


## Комментарии


Метод [X11](Lib.chm::/02_Time_series_analysis/UiModelling_Census2.htm)
 производит разложение исходного ряда на сезонную, тренд-циклическую и
 нерегулярную компоненты, выявляет сезонную корректировку.


Метод X11 поддерживается только в ОС Windows.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [B1Result](IMsCensus2Transform.B1Result.htm)
		 Свойство B1Result возвращает
		 ряд после априорной корректировки или исходный ряд.


		 ![](../../Property_Image.gif)
		 [B1Term](IMsCensus2Transform.B1Term.htm)
		 Свойство B1Term определяет
		 терм, в который будет выгружаться ряд после априорной корректировки
		 или исходный ряд при расчёте задачи моделирования.


		 ![](../../Property_Image.gif)
		 [D10Result](IMsCensus2Transform.D10Result.htm)
		 Свойство D10Result возвращает
		 сезонную составляющую исходного ряда.


		 ![](../../Property_Image.gif)
		 [D10Term](IMsCensus2Transform.D10Term.htm)
		 Свойство D10Term определяет
		 терм, в который будет выгружаться сезонная составляющая исходного
		 ряда при расчёте задачи моделирования.


		 ![](../../Property_Image.gif)
		 [D11Result](IMsCensus2Transform.D11Result.htm)
		 Свойство D11Result возвращает
		 сезонную корректировку ряда.


		 ![](../../Property_Image.gif)
		 [D11Term](IMsCensus2Transform.D11Term.htm)
		 Свойство D11Term определяет
		 терм, в который будет выгружаться сезонная корректировка ряда
		 при расчёте задачи моделирования.


		 ![](../../Property_Image.gif)
		 [D12Result](IMsCensus2Transform.D12Result.htm)
		 Свойство D12Result возвращает
		 тренд-циклическую компоненту исходного ряда.


		 ![](../../Property_Image.gif)
		 [D12Term](IMsCensus2Transform.D12Term.htm)
		 Свойство D12Term определяет
		 терм, в который будет выгружаться тренд-циклическая компонента
		 ряда при расчёте задачи моделирования.


		 ![](../../Property_Image.gif)
		 [D13Result](IMsCensus2Transform.D13Result.htm)
		 Свойство D13Result возвращает
		 нерегулярную компоненту исходного ряда.


		 ![](../../Property_Image.gif)
		 [D13Term](IMsCensus2Transform.D13Term.htm)
		 Свойство D13Term определяет
		 терм, в который будет выгружаться нерегулярная компонента ряда
		 при расчёте задачи моделирования.


		 ![](../../Property_Image.gif)
		 [DailyWeights](IMsCensus2Transform.DailyWeights.htm)
		 Свойство DailyWeights
		 определяет весовые коэффициенты дней недели.


		 ![](../../Property_Image.gif)
		 [Explained](IMsCensus2Transform.Explained.htm)
		 Свойство Explained
		 возвращает моделируемый ряд.


		 ![](../../Property_Image.gif)
		 [HolidayAdj](IMsCensus2Transform.HolidayAdj.htm)
		 Свойство HolidayAdj
		 определяет тип поправки на праздничные дни при расчёте.


		 ![](../../Property_Image.gif)
		 [MissingData](IMsCensus2Transform.MissingData.htm)
		 Свойство MissingData
		 определяет параметры обработки пропусков.


		 ![](../../Property_Image.gif)
		 [MovingAverage](IMsCensus2Transform.MovingAverage.htm)
		 Свойство MovingAverage
		 определяет скользящее среднее.


		 ![](../../Property_Image.gif)
		 [OutputType](IMsCensus2Transform.OutputType.htm)
		 Свойство OutputType
		 определяет компоненту, выгружаемую в моделируемую переменную
		 после расчёта метода.


		 ![](../../Property_Image.gif)
		 [Seasonality](IMsCensus2Transform.Seasonality.htm)
		 Свойство Seasonality
		 определяет вид сезонности.


		 ![](../../Property_Image.gif)
		 [SigmaLower](IMsCensus2Transform.SigmaLower.htm)
		 Свойство SigmaLower
		 определяет нижнюю границу сигма.


		 ![](../../Property_Image.gif)
		 [SigmaUpper](IMsCensus2Transform.SigmaUpper.htm)
		 Свойство SigmaUpper
		 определяет верхнюю границу сигма.


		 ![](../../Property_Image.gif)
		 [SlidingSpans](IMsCensus2Transform.SlidingSpans.htm)
		 Свойство SlidingSpans
		 определяет признак применения скользящих интервалов при расчёте.


		 ![](../../Property_Image.gif)
		 [StartMonthOrQuarter](IMsCensus2Transform.StartMonthOrQuarter.htm)
		 Свойство StartMonthOrQuarter
		 определяет начальный месяц или квартал, используемый при расчёте
		 модели


		 ![](../../Property_Image.gif)
		 [TraidingDaysAdjustment](IMsCensus2Transform.TraidingDaysAdjustment.htm)
		 Свойство TraidingDaysAdjustment
		 определяет поправку на рабочие дни.


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
		 [NormalizeDailyWeights](IMsCensus2Transform.NormalizeDailyWeights.htm)


		 Метод NormalizeDailyWeights
		 выполняет нормирование весовых коэффициентов дней недели.


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
