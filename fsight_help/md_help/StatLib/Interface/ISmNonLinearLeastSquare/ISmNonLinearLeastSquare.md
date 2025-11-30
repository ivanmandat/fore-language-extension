# ISmNonLinearLeastSquare

ISmNonLinearLeastSquare
-


# ISmNonLinearLeastSquare


Сборка: Stat;


## Описание


Интерфейс ISmNonLinearLeastSquare
 определяет параметры нелинейного метода наименьших квадратов.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmNonLinearLeastSquare


## Комментарии


Метод заключается в минимизации суммы квадратов отклонений наблюдаемых
 значений зависимой переменной от предсказанных значений.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [CoefficientsOrder](ISmNonLinearLeastSquare.CoefficientsOrder.htm)


		 Свойство CoefficientsOrder
		 определяет порядок коэффициентов.


		 ![](../../Property.gif)
		 [Explained](ISmNonLinearLeastSquare.Explained.htm)


		 Свойство Explained
		 определяет объясняемый ряд.


		 ![](../../Property.gif)
		 [Explanatories](ISmNonLinearLeastSquare.Explanatories.htm)


		 Свойство Explanatories
		 определяет объясняющие ряды.


		 ![](../../Property.gif)
		 [Fitted](ISmNonLinearLeastSquare.Fitted.htm)


		 Свойство Fitted возвращает
		 модельный ряд.


		 ![](../../Property.gif)
		 [Forecast](ISmNonLinearLeastSquare.Forecast.htm)


		 Свойство Forecast определяет
		 параметры прогнозного ряда.


		 ![](../../Property.gif)
		 [FunctionString](ISmNonLinearLeastSquare.FunctionString.htm)


		 Свойство FunctionString
		 определяет рассчитываемую функцию.


		 ![](../../Property.gif)
		 [InitApproximation](ISmNonLinearLeastSquare.InitApproximation.htm)


		 Свойство InitApproximation
		 определяет начальные приближения.


		 ![](../../Property.gif)
		 [InitApproximationActual](ISmNonLinearLeastSquare.InitApproximationActual.htm)


		 Свойство InitApproximationActual
		 возвращает фактически использованные начальные приближения.


		 ![](../../Property.gif)
		 [MaxIteration](ISmNonLinearLeastSquare.MaxIteration.htm)


		 Свойство MaxIteration
		 определяет максимальное количество итераций.


		 ![](../../Property.gif)
		 [MissingData](ISmNonLinearLeastSquare.MissingData.htm)


		 Свойство MissingData
		 определяет метод обработки пропусков.


		 ![](../../Property.gif)
		 [ModelCoefficients](ISmNonLinearLeastSquare.ModelCoefficients.htm)


		 Свойство ModelCoefficients
		 возвращает параметры коэффициентов модели.


		 ![](../../Property.gif)
		 [ModelPeriod](ISmNonLinearLeastSquare.ModelPeriod.htm)


		 Свойство ModelPeriod
		 определяет параметры периода идентификации.


		 ![](../../Property.gif)
		 [OptimalSumOfSquare](ISmNonLinearLeastSquare.OptimalSumOfSquare.htm)


		 Свойство OptimalSumOfSquare
		 возвращает оптимальное значение суммы квадратов остатков.


		 ![](../../Property.gif)
		 [OptimizationMethod](ISmNonLinearLeastSquare.OptimizationMethod.htm)


		 Свойство OptimizationMethod
		 определяет используемый метод оптимизации.


		 ![](../../Property.gif)
		 [Residuals](ISmNonLinearLeastSquare.Residuals.htm)


		 Свойство Residuals
		 возвращает ряд остатков.


		 ![](../../Property.gif)
		 [SummaryStatistics](ISmNonLinearLeastSquare.SummaryStatistics.htm)


		 Свойство SummaryStatistics
		 возвращает статистические характеристики.


		 ![](../../Property.gif)
		 [Tolerance](ISmNonLinearLeastSquare.Tolerance.htm)


		 Свойство Tolerance
		 определяет точность.


		 ![](../../Property.gif)
		 [UseDefaultInitValues](ISmNonLinearLeastSquare.UseDefaultInitValues.htm)


		 Свойство UseDefaultInitValues
		 определяет, использовать ли начальные приближения, заданные по
		 умолчанию.


		 ![](../../Property.gif)
		 [UseDerivatives](ISmNonLinearLeastSquare.UseDerivatives.htm)


		 Свойство UseDerivatives
		 определяет, будут ли при поиске решения использоваться аналитические
		 производные.


## Свойства, унаследованные от [IStatMethod](../IStatMethod/IStatMethod.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [DisplayName](../IStatMethod/IStatMethod.DisplayName.htm)
		 Свойство DisplayName
		 возвращает внешнее наименование метода.


		 ![](../../Property.gif)
		 [ErrorByStatus](../IStatMethod/IStatMethod.ErrorByStatus.htm)
		 Свойство ErrorByStatus
		 возвращает сообщение об ошибке по ее номеру.


		 ![](../../Property.gif)
		 [Errors](../IStatMethod/IStatMethod.Errors.htm)
		 Свойство Errors возвращает
		 сообщение обо всех ошибках и предупреждениях.


		 ![](../../Property.gif)
		 [Name](../IStatMethod/IStatMethod.Name.htm)
		 Свойство Name возвращает
		 внутреннее наименование метода.


		 ![](../../Property.gif)
		 [PerformanceTime](../IStatMethod/IStatMethod.PerformanceTime.htm)
		 Свойство PerformanceTime
		 возвращает время выполнения метода.


		 ![](../../Property.gif)
		 [Status](../IStatMethod/IStatMethod.Status.htm)
		 Свойство Status возвращает
		 статус выполнения метода.


		 ![](../../Property.gif)
		 [SupportsR](../IStatMethod/IStatMethod.SupportsR.htm)
		 Свойство SupportsR
		 возвращает признак поддержки расчета статистического метода через
		 пакет R.


		 ![](../../Property.gif)
		 [UseR](../IStatMethod/IStatMethod.UseR.htm)
		 Свойство UseR определяет,
		 будет ли расчет статистического метода производиться через
		 пакет R.


		 ![](../../Property.gif)
		 [WarningByStatus](../IStatMethod/IStatMethod.WarningByStatus.htm)
		 Свойство WarningByStatus
		 возвращает текст предупреждения по его номеру.


		 ![](../../Property.gif)
		 [Warnings](../IStatMethod/IStatMethod.Warnings.htm)
		 Свойство Warnings возвращает предупреждения, возникшие при расчёте метода.


		 ![](../../Property.gif)
		 [WarningsCount](../IStatMethod/IStatMethod.WarningsCount.htm)
		 Свойство WarningsCount
		 возвращает число предупреждений, возникших при расчёте метода.


		 ![](../../Property.gif)
		 [WarningsNumbers](../IStatMethod/IStatMethod.WarningsNumbers.htm)
		 Свойство WarningsNumbers возвращает номера предупреждений, возникших при расчёте метода.


## Методы, унаследованные от [IStatMethod](../IStatMethod/IStatMethod.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub.gif)
		 [Clone](../IStatMethod/IStatMethod.Clone.htm)
		 Метод Clone клонирует
		 объект статистического метода.


		 ![](../../Sub.gif)
		 [Execute](../IStatMethod/IStatMethod.Execute.htm)
		 Метод Execute осуществляет
		 выполнение статистического метода.


		 ![](../../Sub.gif)
		 [LoadFromXML](../IStatMethod/IStatMethod.LoadFromXML.htm)
		 Метод LoadFromXML осуществляет
		 загрузку настроек статистического метода из XML-кода.


		 ![](../../Sub.gif)
		 [SaveToXML](../IStatMethod/IStatMethod.SaveToXML.htm)
		 Метод SaveToXML осуществляет
		 выгрузку настроек статистического метода в XML-код.


См. также:


[Интерфейсы сборки Stat](../Interfaces.htm)
 | [Нелинейная
 регрессия](Lib.chm::/01_Regression_models/UiModelling_NonLinearRegr.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
