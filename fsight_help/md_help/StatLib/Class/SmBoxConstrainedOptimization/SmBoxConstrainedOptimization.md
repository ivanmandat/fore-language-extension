# SmBoxConstrainedOptimization

SmBoxConstrainedOptimization
-


# SmBoxConstrainedOptimization


Сборка: Stat;


## Описание


Класс SmBoxConstrainedOptimization
 предназначен для работы с параметрами оптимизации функции произвольного
 вида.


## Комментарии


Для работы с параметрами оптимизации функции произвольного вида при
 нелинейных ограничениях используйте класс [SmNonLinearOptimization](../SmNonLinearOptimization/SmNonLinearOptimization.htm).


## Свойства, унаследованные от [ISmBoxConstrainedOptimization](../../Interface/ISmBoxConstrainedOptimization/ISmBoxConstrainedOptimization.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [Boundary](../../Interface/ISmBoxConstrainedOptimization/ISmBoxConstrainedOptimization.Boundary.htm)
		 Свойство Boundary определяет
		 параметры области определения.


		 ![](../../Property.gif)
		 [Callback](../../Interface/ISmBoxConstrainedOptimization/ISmBoxConstrainedOptimization.Callback.htm)
		 Свойство Callback определяет
		 пользовательский класс, используемый для расчёта значений переменных
		 и целевой функции.


		 ![](../../Property.gif)
		 [CoefficientsOrder](../../Interface/ISmBoxConstrainedOptimization/ISmBoxConstrainedOptimization.CoefficientsOrder.htm)
		 Свойство CoefficientsOrder
		 определяет порядок коэффициентов.


		 ![](../../Property.gif)
		 [FunctionGradient](../../Interface/ISmBoxConstrainedOptimization/ISmBoxConstrainedOptimization.FunctionGradient.htm)
		 Свойство FunctionGradient
		 возвращает градиент целевой функции, отвечающий найденному решению.


		 ![](../../Property.gif)
		 [FunctionString](../../Interface/ISmBoxConstrainedOptimization/ISmBoxConstrainedOptimization.FunctionString.htm)
		 Свойство FunctionString
		 определяет целевую функцию.


		 ![](../../Property.gif)
		 [InitApproximation](../../Interface/ISmBoxConstrainedOptimization/ISmBoxConstrainedOptimization.InitApproximation.htm)
		 Свойство InitApproximation
		 определяет начальные приближения.


		 ![](../../Property.gif)
		 [InitApproximationActual](../../Interface/ISmBoxConstrainedOptimization/ISmBoxConstrainedOptimization.InitApproximationActual.htm)
		 Свойство InitApproximationActual
		 возвращает фактически использованные начальные приближения.


		 ![](../../Property.gif)
		 [MaxIteration](../../Interface/ISmBoxConstrainedOptimization/ISmBoxConstrainedOptimization.MaxIteration.htm)
		 Свойство MaxIteration
		 определяет максимальное число итераций, за которое должен осуществиться
		 поиск решения.


		 ![](../../Property.gif)
		 [ObjValByIter](../../Interface/ISmBoxConstrainedOptimization/ISmBoxConstrainedOptimization.ObjValByIter.htm)
		 Свойство ObjValByIter
		 возвращает значения целевой функции по итерациям.


		 ![](../../Property.gif)
		 [OptimalFunctionValue](../../Interface/ISmBoxConstrainedOptimization/ISmBoxConstrainedOptimization.OptimalFunctionValue.htm)
		 Свойство OptimalFunctionValue
		 возвращает значение целевой функции, отвечающее найденному решению.


		 ![](../../Property.gif)
		 [Solution](../../Interface/ISmBoxConstrainedOptimization/ISmBoxConstrainedOptimization.Solution.htm)
		 Свойство Solution возвращает
		 найденное решение.


		 ![](../../Property.gif)
		 [Tolerance](../../Interface/ISmBoxConstrainedOptimization/ISmBoxConstrainedOptimization.Tolerance.htm)
		 Свойство Tolerance
		 определяет точность.


		 ![](../../Property.gif)
		 [UseDerivatives](../../Interface/ISmBoxConstrainedOptimization/ISmBoxConstrainedOptimization.UseDerivatives.htm)
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


[Классы
 сборки Stat](../StatClass.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
