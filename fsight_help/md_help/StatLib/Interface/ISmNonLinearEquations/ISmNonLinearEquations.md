# ISmNonLinearEquations

ISmNonLinearEquations
-


# ISmNonLinearEquations


Сборка: Stat;


## Описание


Интерфейс ISmNonLinearEquations
 определяет параметры системы нелинейных уравнений.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmNonLinearEquations


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [CalcInitExpressionMode](ISmNonLinearEquations.CalcInitExpressionMode.htm)


		 Свойство CalcInitExpressionMode
		 определяет режим задания начальных значений искомых переменных.


		 ![](../../Property.gif)
		 [CoefficientsOrder](ISmNonLinearEquations.CoefficientsOrder.htm)


		 Свойство CoefficientsOrder
		 определяет порядок коэффициентов.


		 ![](../../Property.gif)
		 [DerivativeShift](ISmNonLinearEquations.DerivativeShift.htm)


		 Свойство DerivativeShift
		 определяет приращение аргумента (в долях) для вычисления частных
		 производных в методе Ньютона.


		 ![](../../Property.gif)
		 [Functions](ISmNonLinearEquations.Functions.htm)


		 Свойство Functions
		 определяет список нелинейных уравнений.


		 ![](../../Property.gif)
		 [FunctionValues](ISmNonLinearEquations.FunctionValues.htm)


		 Свойство FunctionValues
		 возвращает значения функций, отвечающие найденному решению.


		 ![](../../Property.gif)
		 [InitApproximation](ISmNonLinearEquations.InitApproximation.htm)


		 Свойство InitApproximation
		 определяет начальные приближения.


		 ![](../../Property.gif)
		 [InitApproximationActual](ISmNonLinearEquations.InitApproximationActual.htm)


		 Свойство InitApproximationActual
		 возвращает фактически использованные начальные приближения.


		 ![](../../Property.gif)
		 [JacobianCalcFrequency](ISmNonLinearEquations.JacobianCalcFrequency.htm)


		 Свойство JacobianCalcFrequency
		 определяет частоту вычисления якобиана при решении системы нелинейных
		 уравнений методом Ньютона.


		 ![](../../Property.gif)
		 [LinearEqSolutionMethod](ISmNonLinearEquations.LinearEqSolutionMethod.htm)


		 Свойство LinearEqSolutionMethod
		 определяет способ вычисления следующего приближения для решения
		 линеаризованной системы уравнений.


		 ![](../../Property.gif)
		 [MakeNewtonMethodQuicker](ISmNonLinearEquations.MakeNewtonMethodQuicker.htm)


		 Свойство MakeNewtonMethodQuicker
		 определяет использование оптимизации для метода Ньютона.


		 ![](../../Property.gif)
		 [MaxIteration](ISmNonLinearEquations.MaxIteration.htm)


		 Свойство MaxIteration
		 определяет максимальное число итераций, за которое должен осуществляться
		 поиск решения.


		 ![](../../Property.gif)
		 [MethodType](ISmNonLinearEquations.MethodType.htm)


		 Свойство MethodType
		 определяет метод решения системы нелинейных уравнений.


		 ![](../../Property.gif)
		 [Solution](ISmNonLinearEquations.Solution.htm)


		 Свойство Solution возвращает
		 решение системы.


		 ![](../../Property.gif)
		 [Tolerance](ISmNonLinearEquations.Tolerance.htm)


		 Свойство Tolerance
		 определяет точность решения.


		 ![](../../Property.gif)
		 [UseDerivatives](ISmNonLinearEquations.UseDerivatives.htm)


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


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub.gif)
		 [InitExpression](ISmNonLinearEquations.InitExpression.htm)
		 Метод InitExpression
		 осуществляет проверку корректности введенных переменных и уравнений
		 без выполнения статистического метода.


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
 | [Методы
 решения системы нелинейных уравнений](Lib.chm::/04_Other_models/UiModelling_LonLinearEq_method.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
