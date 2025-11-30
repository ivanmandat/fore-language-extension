# MsMethodSeriesType

MsMethodSeriesType
-


# MsMethodSeriesType


## Описание


Перечисление MsMethodSeriesType
 содержит ряды данных, используемые методом при расчете.


Используется следующими свойствами и методами:


	- [IMsMethodSeries.IsAvailable](../Interface/IMsMethodSeries/IMsMethodSeries.IsAvailable.htm);


	- [IMsMethodSeries.SeriesByType](../Interface/IMsMethodSeries/IMsMethodSeries.SeriesByType.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 1
		 Fitted. Модельный ряд.


		 2
		 Forecast. Прогнозный
		 ряд.


		 4
		 Residuals. Ряд остатков.


		 8
		 LowerConfidenceLevel.
		 Нижняя доверительная граница.


		 16
		 UpperConfidenceLevel.
		 Верхняя доверительная граница.


		 32
		 DynamicLowerConfidenceLevel.
		 Нижняя динамическая доверительная граница.


		 64
		 DynamicUpperConfidenceLevel.
		 Верхняя динамическая доверительная граница.


		 128
		 Input. Входной ряд.


		 256
		 AddFactor. Добавляемый
		 фактор.


## Комментарии


Метод расчета модели обычно использует несколько рядов данных.


AddFactor. Добавляемые факторы
 не отображаются в уравнении модели и используются только для моделируемых
 переменных. AddFactor может применяться
 в следующих моделях:


	- [ARIMA](../Interface/IMsArimaTransform/IMsArimaTransform.htm);


	- [регрессия
	 на панельных данных](../Interface/IMsPooledModelTransform/IMsPooledModelTransform.htm);


	- [векторная
	 модель коррекции ошибок](../Interface/IMsECMEquation/IMsECMEquation.htm);


	- [детерминированное
	 уравнение](../Interface/IMsDeterministicTransform/IMsDeterministicTransform.htm);


	- [линейная
	 регрессия](../Interface/IMs2SLSTransform/IMs2SLSTransform.htm) (оценка методом инструментальных переменных);


	- [линейная
	 регрессия](../Interface/IMsLinearRegressionTransform/IMsLinearRegressionTransform.htm) (метод оценки МНК);


	- [грей-метод](../Interface/IMsGreyForecastTransform/IMsGreyForecastTransform.htm);


	- [модель
	 коррекции ошибок](../Interface/IMsCointegrationEquationTransform/IMsCointegrationEquationTransform.htm). Добавленный фактор задается для [каждого
	 уравнения](../Interface/IMsECMEquation/IMsECMEquation.htm) в модели, а не для всей модели в целом;


	- [нелинейная
	 регрессия](../Interface/IMsNonLinearRegressionTransform/IMsNonLinearRegressionTransform.htm);


	- [тренд
	 с подбором функциональной зависимости](../Interface/IMsCurveEstimationTransform/IMsCurveEstimationTransform.htm);


	- [экспоненциальное
	 сглаживание](../Interface/IMsExponentialSmoothingTransform/IMsExponentialSmoothingTransform.htm).


См. также:


[Перечисления сборки Ms](KeMs_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
