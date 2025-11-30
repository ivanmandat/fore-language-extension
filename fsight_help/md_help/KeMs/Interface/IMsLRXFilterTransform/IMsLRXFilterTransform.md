# IMsLRXFilterTransform

IMsLRXFilterTransform
-


# IMsLRXFilterTransform


## Описание


Интерфейс IMsLRXFilterTransform
 определяет параметры метода расчета модели «[LRX-фильтр](Lib.chm::/02_Time_series_analysis/UiModellling_LRX.htm)».


## Комментарии


LRX-фильтр - это метод сглаживания временного ряда, который используется
 для выделения длительных тенденций временного ряда и является более общим
 случаем фильтра Ходрика-Прескотта.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DPrior](IMsLRXFilterTransform.DPrior.htm)
		 Свойство DPrior определяет
		 априорные разности.


		 ![](../../Property_Image.gif)
		 [Explained](IMsLRXFilterTransform.Explained.htm)
		 Свойство Explained
		 возвращает моделируемый ряд.


		 ![](../../Property_Image.gif)
		 [MissingData](IMsLRXFilterTransform.MissingData.htm)
		 Свойство MissingData
		 возвращает параметры обработки пропусков.


		 ![](../../Property_Image.gif)
		 [Operands](IMsLRXFilterTransform.Operands.htm)
		 Свойство Operands возвращает
		 коллекцию термов, используемых для составления уравнения модели.


		 ![](../../Property_Image.gif)
		 [Prior](IMsLRXFilterTransform.Prior.htm)
		 Свойство Prior определяет
		 априорные значения.


		 ![](../../Property_Image.gif)
		 [SmoothingParameter](IMsLRXFilterTransform.SmoothingParameter.htm)
		 Свойство SmoothingParameter
		 определяет меру сглаживания ряда.


		 ![](../../Property_Image.gif)
		 [w1](IMsLRXFilterTransform.w1.htm)
		 Свойство w1 определяет
		 веса 1.


		 ![](../../Property_Image.gif)
		 [w2](IMsLRXFilterTransform.w2.htm)
		 Свойство w2 определяет
		 веса 2.


		 ![](../../Property_Image.gif)
		 [w3](IMsLRXFilterTransform.w3.htm)
		 Свойство w3 определяет
		 веса 3.


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
 | Модель «[LRX-фильтр](Lib.chm::/02_Time_series_analysis/UiModellling_LRX.htm)».


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
