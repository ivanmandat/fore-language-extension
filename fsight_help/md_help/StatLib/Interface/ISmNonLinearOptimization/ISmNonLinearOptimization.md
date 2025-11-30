# ISmNonLinearOptimization

ISmNonLinearOptimization
-


# ISmNonLinearOptimization


Сборка: Stat;


## Описание


Интерфейс ISmNonLinearOptimization
 определяет параметры оптимизации функции произвольного вида при нелинейных
 ограничениях.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmNonLinearOptimization


## Комментарии


С помощью интерфейса ISmNonLinearOptimization
 решается задача минимизации функции.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [Boundary](ISmNonLinearOptimization.Boundary.htm)
		 Свойство Boundary определяет
		 параметры области определения.


		 ![](../../Property.gif)
		 [Callback](ISmNonLinearOptimization.Callback.htm)
		 Свойство Callback определяет
		 пользовательский класс, используемый для расчёта значений переменных,
		 целевой функции и нелинейных ограничений.


		 ![](../../Property.gif)
		 [CoefficientsOrder](ISmNonLinearOptimization.CoefficientsOrder.htm)
		 Свойство CoefficientsOrder
		 определяет порядок коэффициентов.


		 ![](../../Property.gif)
		 [FunctionGradient](ISmNonLinearOptimization.FunctionGradient.htm)
		 Свойство FunctionGradient
		 возвращает градиент целевой функции, отвечающий найденному решению.


		 ![](../../Property.gif)
		 [FunctionString](ISmNonLinearOptimization.FunctionString.htm)
		 Свойство FunctionString
		 определяет целевую функцию.


		 ![](../../Property.gif)
		 [InitApproximation](ISmNonLinearOptimization.InitApproximation.htm)
		 Свойство InitApproximation
		 определяет начальные приближения.


		 ![](../../Property.gif)
		 [InitApproximationActual](ISmNonLinearOptimization.InitApproximationActual.htm)
		 Свойство InitApproximationActual
		 возвращает фактически использованные начальные приближения.


		 ![](../../Property.gif)
		 [IntVec](ISmNonLinearOptimization.IntVec.htm)
		 Свойство IntVec
		 определяет массив признаков целочисленных переменных.


		 ![](../../Property.gif)
		 [LindoSettings](ISmNonLinearOptimization.LindoSettings.htm)
		 Свойство LindoSettings
		 возвращает параметры модуля LINDO.


		 ![](../../Property.gif)
		 [LinearConstraints](ISmNonLinearOptimization.LinearConstraints.htm)
		 Свойство LinearConstraints
		 определяет параметры линейных ограничений.


		 ![](../../Property.gif)
		 [MaxIteration](ISmNonLinearOptimization.MaxIteration.htm)
		 Свойство MaxIteration
		 определяет максимальное число итераций, за которое должен осуществиться
		 поиск решения.


		 ![](../../Property.gif)
		 [NonLinearConstraints](ISmNonLinearOptimization.NonLinearConstraints.htm)
		 Свойство NonLinearConstraints
		 определяет параметры нелинейных ограничений.


		 ![](../../Property.gif)
		 [ObjValByIter](ISmNonLinearOptimization.ObjValByIter.htm)
		 Свойство ObjValByIter
		 возвращает значения целевой функции по итерациям.


		 ![](../../Property.gif)
		 [OptimalFunctionValue](ISmNonLinearOptimization.OptimalFunctionValue.htm)
		 Свойство OptimalFunctionValue
		 возвращает значение целевой функции, отвечающее найденному решению.


		 ![](../../Property.gif)
		 [PerformanceInfo](ISmNonLinearOptimization.PerformanceInfo.htm)
		 Свойство PerformanceInfo
		 возвращает информацию о выполненной оптимизации.


		 ![](../../Property.gif)
		 [Solution](ISmNonLinearOptimization.Solution.htm)
		 Свойство Solution возвращает
		 найденное решение.


		 ![](../../Property.gif)
		 [SolverType](ISmNonLinearOptimization.SolverType.htm)
		 Свойство SolverType
		 определяет программное обеспечение, используемое для решения задачи
		 нелинейной оптимизации.


		 ![](../../Property.gif)
		 [Tolerance](ISmNonLinearOptimization.Tolerance.htm)
		 Свойство Tolerance
		 определяет точность.


		 ![](../../Property.gif)
		 [UseDerivatives](ISmNonLinearOptimization.UseDerivatives.htm)
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
		 [ExecuteFromMPI](ISmNonLinearOptimization.ExecuteFromMPI.htm)
		 Метод ExecuteFromMPI
		 выполняет нелинейную оптимизацию задачи из указанного файла с
		 помощью LINDO.


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


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
