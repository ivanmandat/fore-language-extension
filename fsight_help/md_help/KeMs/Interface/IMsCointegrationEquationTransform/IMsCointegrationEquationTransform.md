# IMsCointegrationEquationTransform

IMsCointegrationEquationTransform
-


# IMsCointegrationEquationTransform


Сборка: Ms;


## Описание


Интерфейс IMsCointegrationEquationTransform
 содержит свойства и методы, определяющие параметры метода «Модель коррекции
 ошибок».


## Иерархия наследования


           [IMsMethod](../IMsMethod/IMsMethod.htm)


           [IMsStochasticMethod](../IMsStochasticMethod/IMsStochasticMethod.htm)


           IMsCointegrationEquationTransform


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ConfidenceLevel](IMsCointegrationEquationTransform.ConfidenceLevel.htm)
		 Свойство ConfidenceLevel
		 определяет значимость доверительных границ прогнозного ряда.


		 ![](../../Property_Image.gif)
		 [EndogenousAutoRegressionOrder](IMsCointegrationEquationTransform.EndogenousAutoRegressionOrder.htm)
		 Свойство EndogenousAutoRegressionOrder
		 определяет порядок авторегрессии эндогенной переменной.


		 ![](../../Property_Image.gif)
		 [ExogenousAutoRegressionOrder](IMsCointegrationEquationTransform.ExogenousAutoRegressionOrder.htm)
		 Свойство ExogenousAutoRegressionOrder
		 определяет порядок авторегрессии экзогенной переменной.


		 ![](../../Property_Image.gif)
		 [MissingData](IMsCointegrationEquationTransform.MissingData.htm)
		 Свойство MissingData
		 определяет параметры обработки пропусков объясняемого ряда.


		 ![](../../Property_Image.gif)
		 [ModelType](IMsCointegrationEquationTransform.ModelType.htm)


		 Свойство ModelType
		 определяет тип модели коррекции ошибок.


		 ![](../../Property_Image.gif)
		 [Operands](IMsCointegrationEquationTransform.Operands.htm)
		 Свойство Operands возвращает
		 коллекцию термов, соответствующих экзогенным переменным.


		 ![](../../Property_Image.gif)
		 [OperandType](IMsCointegrationEquationTransform.OperandType.htm)
		 Свойство OperandType
		 определяет группу коинтеграционных связей, в которую входит экзогенная
		 переменная.


		 ![](../../Property_Image.gif)
		 [Result](IMsCointegrationEquationTransform.Result.htm)
		 Свойство Result возвращает
		 терм, соответствующий моделируемой переменной.


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
