# IMsBandpassFilterTransform

IMsBandpassFilterTransform
-


# IMsBandpassFilterTransform


Сборка: Ms;


## Описание


Интерфейс IMsBandpassFilterTransform
 содержит свойства и методы, определяющие параметры модели, использующей
 для расчёта фильтра Бакстера-Кинга.


## Иерархия наследования


           [IMsMethod](../IMsMethod/IMsMethod.htm)


           [IMsVectorMethod](../IMsVectorMethod/IMsVectorMethod.htm)


           IMsBandpassFilterTransform


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CycleTerm](IMsBandpassFilterTransform.CycleTerm.htm)
		 Свойство CycleTerm
		 определяет элемент, соответствующий переменной, в которую
		 будет выгружена циклическая составляющая исходного ряда.


		 ![](../../Property_Image.gif)
		 [Explained](IMsBandpassFilterTransform.Explained.htm)
		 Свойство Explained
		 возвращает моделируемый ряд.


		 ![](../../Property_Image.gif)
		 [FrequencyHigh](IMsBandpassFilterTransform.FrequencyHigh.htm)
		 Свойство FrequencyHigh
		 определяет значение верхней границы периода сезонности.


		 ![](../../Property_Image.gif)
		 [FrequencyLow](IMsBandpassFilterTransform.FrequencyLow.htm)
		 Свойство FrequencyLow
		 определяет значение нижней границы периода сезонности.


		 ![](../../Property_Image.gif)
		 [MissingData](IMsBandpassFilterTransform.MissingData.htm)
		 Свойство MissingData
		 возвращает параметры обработки пропусков исходного ряда.


		 ![](../../Property_Image.gif)
		 [NonCyclicalTerm](IMsBandpassFilterTransform.NonCyclicalTerm.htm)
		 Свойство NonCyclicalTerm
		 определяет элемент, соответствующий переменной, в которую будет
		 выгружена нециклическая составляющая исходного ряда.


		 ![](../../Property_Image.gif)
		 [OutputType](IMsBandpassFilterTransform.OutputType.htm)
		 Свойство OutputType
		 определяет компоненту, выгружаемую в моделируемую переменную
		 после расчёта метода.


		 ![](../../Property_Image.gif)
		 [WeightsMatrix](IMsBandpassFilterTransform.WeightsMatrix.htm)
		 Свойство WeightsMatrix
		 возвращает матрицу весов после расчёта метода.


		 ![](../../Property_Image.gif)
		 [Width](IMsBandpassFilterTransform.Width.htm)
		 Свойство Width определяет
		 размер окна для метода.


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


[Интерфейсы
 сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
