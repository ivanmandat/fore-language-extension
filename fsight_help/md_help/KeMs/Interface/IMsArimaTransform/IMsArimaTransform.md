# IMsArimaTransform

IMsArimaTransform
-


# IMsArimaTransform


Сборка: Ms;


## Описание


Интерфейс IMsArimaTransform
 содержит свойства и методы, определяющие параметры расчёта модели с помощью
 метода ARIMA.


## Иерархия наследования


           [IMsMethod](../IMsMethod/IMsMethod.htm)


           [IMsVectorMethod](../IMsVectorMethod/IMsVectorMethod.htm)


           IMsArimaTransform


## Комментарии


ARIMA - одна из наиболее популярных моделей
 для построения краткосрочных прогнозов.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ARMA](IMsArimaTransform.ARMA.htm)
		 Свойство ARMA возвращает
		 параметры авторегрессии и скользящего среднего.


		 ![](../../Property_Image.gif)
		 [ConfidenceLevel](IMsArimaTransform.ConfidenceLevel.htm)
		 Свойство ConfidenceLevel
		 определяет значимость доверительных границ.


		 ![](../../Property_Image.gif)
		 [ConstantMode](IMsArimaTransform.ConstantMode.htm)
		 Свойство ConstantMode
		 определяет способ задания значения константы.


		 ![](../../Property_Image.gif)
		 [ConstantValue](IMsArimaTransform.ConstantValue.htm)
		 Свойство ConstantValue
		 определяет значение константы.


		 ![](../../Property_Image.gif)
		 [DiagnosticTests](IMsArimaTransform.DiagnosticTests.htm)
		 Свойство DiagnosticTests
		 возвращает набор диагностических тестов модели.


		 ![](../../Property_Image.gif)
		 [Explained](IMsArimaTransform.Explained.htm)
		 Свойство Explained
		 возвращает моделируемый ряд.


		 ![](../../Property_Image.gif)
		 [MaxIteration](IMsArimaTransform.MaxIteration.htm)
		 Свойство MaxIteration
		 определяет максимальное число итераций, за которое будет осуществляться
		 поиск оптимального решения.


		 ![](../../Property_Image.gif)
		 [MissingData](IMsArimaTransform.MissingData.htm)
		 Свойство MissingData
		 возвращает объект, содержащий параметры обработки пропусков исходного
		 ряда.


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
		 [AutoCorrelation](IMsArimaTransform.AutoCorrelation.htm)


		 Метод AutoCorrelation
		 осуществляет автокорреляционный анализ модели.


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
