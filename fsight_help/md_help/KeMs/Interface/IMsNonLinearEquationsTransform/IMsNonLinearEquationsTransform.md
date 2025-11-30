# IMsNonLinearEquationsTransform

IMsNonLinearEquationsTransform
-


# IMsNonLinearEquationsTransform


## Описание


Интерфейс IMsNonLinearEquationsTransform
 содержит свойства и методы для работы с системой нелинейных уравнений.


## Комментарии


В систему могут входить уравнения, для которых используются следующие
 методы расчета:


	- [детерминированное
	 уравнение](../IMsDeterministicTransform/IMsDeterministicTransform.htm);


	- [линейная
	 регрессия](../IMsLinearRegressionTransform/IMsLinearRegressionTransform.htm);


	- [нелинейная
	 регрессия](../IMsNonLinearRegressionTransform/IMsNonLinearRegressionTransform.htm);


	- [модель
	 коррекции ошибок](../IMsCointegrationEquationTransform/IMsCointegrationEquationTransform.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DerivativeShift](IMsNonLinearEquationsTransform.DerivativeShift.htm)


		 Свойство DerivativeShift
		 определяет приращение аргумента в долях для вычисления частных
		 производных в методе Ньютона.


		 ![](../../Property_Image.gif)
		 [ExternalEquations](IMsNonLinearEquationsTransform.ExternalEquations.htm)


		 Свойство ExternalEquations
		 возвращает коллекцию внешних уравнений системы.


		 ![](../../Property_Image.gif)
		 [InitApproximation](IMsNonLinearEquationsTransform.InitApproximation.htm)


		 Свойство InitApproximation
		 определяет начальные значения искомых переменных.


		 ![](../../Property_Image.gif)
		 [JacobianCalcFrequency](IMsNonLinearEquationsTransform.JacobianCalcFrequency.htm)


		 Свойство JacobianCalcFrequency
		 определяет частоту вычисления якобиана при решении системы нелинейных
		 уравнений методом Ньютона.


		 ![](../../Property_Image.gif)
		 [LinearEqSolutionMethod](IMsNonLinearEquationsTransform.LinearEqSolutionMethod.htm)


		 Свойство LinearEqSolutionMethod
		 определяет способ вычисления следующего приближения для решения
		 линеаризованной системы уравнений.


		 ![](../../Property_Image.gif)
		 [MaxIteration](IMsNonLinearEquationsTransform.MaxIteration.htm)


		 Свойство MaxIteration
		 определяет максимальное число итераций для решения системы.


		 ![](../../Property_Image.gif)
		 [MethodType](IMsNonLinearEquationsTransform.MethodType.htm)


		 Свойство MethodType
		 определяет метод расчета системы уравнений.


		 ![](../../Property_Image.gif)
		 [OutputOperands](IMsNonLinearEquationsTransform.OutputOperands.htm)


		 Свойство OutputOperands
		 возвращает коллекцию искомых переменных.


		 ![](../../Property_Image.gif)
		 [Tolerance](IMsNonLinearEquationsTransform.Tolerance.htm)


		 Свойство Tolerance
		 определяет точность решения системы уравнений.


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
 | [Пример
 использования](IMsNonLinearEquationsTransform_Sample.htm) |
 [Работа
 с параметрами в системе нелинейных уравнений](../../Samples/KeMs_Sample13.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
