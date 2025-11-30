# ISmBoxConstrainedOptimization

ISmBoxConstrainedOptimization
-


# ISmBoxConstrainedOptimization


Сборка: Stat;


## Описание


Интерфейс ISmBoxConstrainedOptimization
 предназначен для работы с параметрами метода градиентного спуска, используемого
 для оптимизации функции произвольного вида при заданных прямых ограничениях
 на переменные.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmBoxConstrainedOptimization


## Комментарии


Для работы с параметрами оптимизации функции произвольного вида при
 нелинейных ограничениях используйте интерфейс [ISmNonLinearOptimization](../ISmNonLinearOptimization/ISmNonLinearOptimization.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [Boundary](ISmBoxConstrainedOptimization.Boundary.htm)
		 Свойство Boundary определяет
		 параметры области определения.


		 ![](../../Property.gif)
		 [Callback](ISmBoxConstrainedOptimization.Callback.htm)
		 Свойство Callback определяет
		 пользовательский класс, используемый для расчёта значений переменных
		 и целевой функции.


		 ![](../../Property.gif)
		 [CoefficientsOrder](ISmBoxConstrainedOptimization.CoefficientsOrder.htm)
		 Свойство CoefficientsOrder
		 определяет порядок коэффициентов.


		 ![](../../Property.gif)
		 [FunctionGradient](ISmBoxConstrainedOptimization.FunctionGradient.htm)
		 Свойство FunctionGradient
		 возвращает градиент целевой функции, отвечающий найденному решению.


		 ![](../../Property.gif)
		 [FunctionString](ISmBoxConstrainedOptimization.FunctionString.htm)
		 Свойство FunctionString
		 определяет целевую функцию.


		 ![](../../Property.gif)
		 [InitApproximation](ISmBoxConstrainedOptimization.InitApproximation.htm)
		 Свойство InitApproximation
		 определяет начальные приближения.


		 ![](../../Property.gif)
		 [InitApproximationActual](ISmBoxConstrainedOptimization.InitApproximationActual.htm)
		 Свойство InitApproximationActual
		 возвращает фактически использованные начальные приближения.


		 ![](../../Property.gif)
		 [MaxIteration](ISmBoxConstrainedOptimization.MaxIteration.htm)
		 Свойство MaxIteration
		 определяет максимальное число итераций, за которое должен осуществиться
		 поиск решения.


		 ![](../../Property.gif)
		 [ObjValByIter](ISmBoxConstrainedOptimization.ObjValByIter.htm)
		 Свойство ObjValByIter
		 возвращает значения целевой функции по итерациям.


		 ![](../../Property.gif)
		 [OptimalFunctionValue](ISmBoxConstrainedOptimization.OptimalFunctionValue.htm)
		 Свойство OptimalFunctionValue
		 возвращает значение целевой функции, отвечающее найденному решению.


		 ![](../../Property.gif)
		 [Solution](ISmBoxConstrainedOptimization.Solution.htm)
		 Свойство Solution возвращает
		 найденное решение.


		 ![](../../Property.gif)
		 [Tolerance](ISmBoxConstrainedOptimization.Tolerance.htm)
		 Свойство Tolerance
		 определяет точность.


		 ![](../../Property.gif)
		 [UseDerivatives](ISmBoxConstrainedOptimization.UseDerivatives.htm)
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


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
