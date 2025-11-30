# SmNonLinearEquations

SmNonLinearEquations
-


# SmNonLinearEquations


## Описание


Класс SmNonLinearEquations реализует
 алгоритм системы нелинейных уравнений.


## Свойства, унаследованные от [ISmNonLinearEquations](../../Interface/ISmNonLinearEquations/ISmNonLinearEquations.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [CalcInitExpressionMode](../../Interface/ISmNonLinearEquations/ISmNonLinearEquations.CalcInitExpressionMode.htm)


		 Свойство CalcInitExpressionMode
		 определяет режим задания начальных значений искомых переменных.


		 ![](../../Property.gif)
		 [CoefficientsOrder](../../Interface/ISmNonLinearEquations/ISmNonLinearEquations.CoefficientsOrder.htm)


		 Свойство CoefficientsOrder
		 определяет порядок коэффициентов.


		 ![](../../Property.gif)
		 [DerivativeShift](../../Interface/ISmNonLinearEquations/ISmNonLinearEquations.DerivativeShift.htm)


		 Свойство DerivativeShift
		 определяет приращение аргумента (в долях) для вычисления частных
		 производных в методе Ньютона.


		 ![](../../Property.gif)
		 [Functions](../../Interface/ISmNonLinearEquations/ISmNonLinearEquations.Functions.htm)


		 Свойство Functions
		 определяет список нелинейных уравнений.


		 ![](../../Property.gif)
		 [FunctionValues](../../Interface/ISmNonLinearEquations/ISmNonLinearEquations.FunctionValues.htm)


		 Свойство FunctionValues
		 возвращает значения функций, отвечающие найденному решению.


		 ![](../../Property.gif)
		 [InitApproximation](../../Interface/ISmNonLinearEquations/ISmNonLinearEquations.InitApproximation.htm)


		 Свойство InitApproximation
		 определяет начальные приближения.


		 ![](../../Property.gif)
		 [InitApproximationActual](../../Interface/ISmNonLinearEquations/ISmNonLinearEquations.InitApproximationActual.htm)


		 Свойство InitApproximationActual
		 возвращает фактически использованные начальные приближения.


		 ![](../../Property.gif)
		 [JacobianCalcFrequency](../../Interface/ISmNonLinearEquations/ISmNonLinearEquations.JacobianCalcFrequency.htm)


		 Свойство JacobianCalcFrequency
		 определяет частоту вычисления якобиана при решении системы нелинейных
		 уравнений методом Ньютона.


		 ![](../../Property.gif)
		 [LinearEqSolutionMethod](../../Interface/ISmNonLinearEquations/ISmNonLinearEquations.LinearEqSolutionMethod.htm)


		 Свойство LinearEqSolutionMethod
		 определяет способ вычисления следующего приближения для решения
		 линеаризованной системы уравнений.


		 ![](../../Property.gif)
		 [MakeNewtonMethodQuicker](../../Interface/ISmNonLinearEquations/ISmNonLinearEquations.MakeNewtonMethodQuicker.htm)


		 Свойство MakeNewtonMethodQuicker
		 определяет использование оптимизации для метода Ньютона.


		 ![](../../Property.gif)
		 [MaxIteration](../../Interface/ISmNonLinearEquations/ISmNonLinearEquations.MaxIteration.htm)


		 Свойство MaxIteration
		 определяет максимальное число итераций, за которое должен осуществляться
		 поиск решения.


		 ![](../../Property.gif)
		 [MethodType](../../Interface/ISmNonLinearEquations/ISmNonLinearEquations.MethodType.htm)


		 Свойство MethodType
		 определяет метод решения системы нелинейных уравнений.


		 ![](../../Property.gif)
		 [Solution](../../Interface/ISmNonLinearEquations/ISmNonLinearEquations.Solution.htm)


		 Свойство Solution возвращает
		 решение системы.


		 ![](../../Property.gif)
		 [Tolerance](../../Interface/ISmNonLinearEquations/ISmNonLinearEquations.Tolerance.htm)


		 Свойство Tolerance
		 определяет точность решения.


		 ![](../../Property.gif)
		 [UseDerivatives](../../Interface/ISmNonLinearEquations/ISmNonLinearEquations.UseDerivatives.htm)


		 Свойство UseDerivatives
		 определяет, будут ли при поиске решения использоваться аналитические
		 производные.


## Свойства, унаследованные от [IStatMethod](../../Interface/IStatMethod/IStatMethod.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [DisplayName](../../Interface/IStatMethod/IStatMethod.DisplayName.htm)
		 Свойство DisplayName
		 возвращает внешнее наименование метода.


		 ![](../../Property.gif)
		 [ErrorByStatus](../../Interface/IStatMethod/IStatMethod.ErrorByStatus.htm)
		 Свойство ErrorByStatus
		 возвращает сообщение об ошибке по ее номеру.


		 ![](../../Property.gif)
		 [Errors](../../Interface/IStatMethod/IStatMethod.Errors.htm)
		 Свойство Errors возвращает
		 сообщение обо всех ошибках и предупреждениях.


		 ![](../../Property.gif)
		 [Name](../../Interface/IStatMethod/IStatMethod.Name.htm)
		 Свойство Name возвращает
		 внутреннее наименование метода.


		 ![](../../Property.gif)
		 [PerformanceTime](../../Interface/IStatMethod/IStatMethod.PerformanceTime.htm)
		 Свойство PerformanceTime
		 возвращает время выполнения метода.


		 ![](../../Property.gif)
		 [Status](../../Interface/IStatMethod/IStatMethod.Status.htm)
		 Свойство Status возвращает
		 статус выполнения метода.


		 ![](../../Property.gif)
		 [SupportsR](../../Interface/IStatMethod/IStatMethod.SupportsR.htm)
		 Свойство SupportsR
		 возвращает признак поддержки расчета статистического метода через
		 пакет R.


		 ![](../../Property.gif)
		 [UseR](../../Interface/IStatMethod/IStatMethod.UseR.htm)
		 Свойство UseR определяет,
		 будет ли расчет статистического метода производиться через
		 пакет R.


		 ![](../../Property.gif)
		 [WarningByStatus](../../Interface/IStatMethod/IStatMethod.WarningByStatus.htm)
		 Свойство WarningByStatus
		 возвращает текст предупреждения по его номеру.


		 ![](../../Property.gif)
		 [Warnings](../../Interface/IStatMethod/IStatMethod.Warnings.htm)
		 Свойство Warnings возвращает предупреждения, возникшие при расчёте метода.


		 ![](../../Property.gif)
		 [WarningsCount](../../Interface/IStatMethod/IStatMethod.WarningsCount.htm)
		 Свойство WarningsCount
		 возвращает число предупреждений, возникших при расчёте метода.


		 ![](../../Property.gif)
		 [WarningsNumbers](../../Interface/IStatMethod/IStatMethod.WarningsNumbers.htm)
		 Свойство WarningsNumbers возвращает номера предупреждений, возникших при расчёте метода.


## Методы, унаследованные от [ISmNonLinearEquations](../../Interface/ISmNonLinearEquations/ISmNonLinearEquations.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub.gif)
		 [InitExpression](../../Interface/ISmNonLinearEquations/ISmNonLinearEquations.InitExpression.htm)
		 Метод InitExpression
		 осуществляет проверку корректности введенных переменных и уравнений
		 без выполнения статистического метода.


## Методы, унаследованные от [IStatMethod](../../Interface/IStatMethod/IStatMethod.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub.gif)
		 [Clone](../../Interface/IStatMethod/IStatMethod.Clone.htm)
		 Метод Clone клонирует
		 объект статистического метода.


		 ![](../../Sub.gif)
		 [Execute](../../Interface/IStatMethod/IStatMethod.Execute.htm)
		 Метод Execute осуществляет
		 выполнение статистического метода.


		 ![](../../Sub.gif)
		 [LoadFromXML](../../Interface/IStatMethod/IStatMethod.LoadFromXML.htm)
		 Метод LoadFromXML осуществляет
		 загрузку настроек статистического метода из XML-кода.


		 ![](../../Sub.gif)
		 [SaveToXML](../../Interface/IStatMethod/IStatMethod.SaveToXML.htm)
		 Метод SaveToXML осуществляет
		 выгрузку настроек статистического метода в XML-код.


См. также:


[Классы сборки Stat](../StatClass.htm) |
 [Методы
 решения системы нелинейных уравнений](Lib.chm::/04_Other_models/UiModelling_LonLinearEq_method.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
