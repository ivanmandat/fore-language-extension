# SmLinearEquations

SmLinearEquations
-


# SmLinearEquations


## Описание


Класс SmLinearEquations реализует
 алгоритм решения системы линейных уравнений.


## Свойства, унаследованные от [ISmLinearEquations](../../Interface/ISmLinearEquations/ISmLinearEquations.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [Explained](../../Interface/ISmLinearEquations/ISmLinearEquations.Explained.htm)


		 Свойство Explained
		 возвращает объясняемый ряд.


		 ![](../../Property.gif)
		 [Explanatories](../../Interface/ISmLinearEquations/ISmLinearEquations.Explanatories.htm)


		 Свойство Explanatories
		 возвращает объясняющие ряды.


		 ![](../../Property.gif)
		 [InitApproximation](../../Interface/ISmLinearEquations/ISmLinearEquations.InitApproximation.htm)


		 Свойство InitApproximation
		 определяет начальные приближения.


		 ![](../../Property.gif)
		 [MaxIteration](../../Interface/ISmLinearEquations/ISmLinearEquations.MaxIteration.htm)


		 Свойство MaxIteration
		 определяет максимальное число итераций, за которое должен осуществиться
		 поиск решения.


		 ![](../../Property.gif)
		 [MissingData](../../Interface/ISmLinearEquations/ISmLinearEquations.MissingData.htm)


		 Свойство MissingData
		 возвращает параметры обработки пропусков.


		 ![](../../Property.gif)
		 [ModelCoefficients](../../Interface/ISmLinearEquations/ISmLinearEquations.ModelCoefficients.htm)


		 Свойство ModelCoefficients
		 возвращает параметры коэффициентов модели.


		 ![](../../Property.gif)
		 [ModelPeriod](../../Interface/ISmLinearEquations/ISmLinearEquations.ModelPeriod.htm)


		 Свойство ModelPeriod
		 возвращает параметры периода идентификации.


		 ![](../../Property.gif)
		 [SLEMethod](../../Interface/ISmLinearEquations/ISmLinearEquations.SLEMethod.htm)


		 Свойство SLEMethod
		 определяет метод решения системы линейных уравнений.


		 ![](../../Property.gif)
		 [SummaryStatistics](../../Interface/ISmLinearEquations/ISmLinearEquations.SummaryStatistics.htm)


		 Свойство SummaryStatistics
		 возвращает статистические характеристики.


		 ![](../../Property.gif)
		 [SymmetricMatrixSet](../../Interface/ISmLinearEquations/ISmLinearEquations.SymmetricMatrixSet.htm)


		 Свойство SymmetricMatrixSet
		 определяет, приводить ли систему линейных уравнений к эквивалентной
		 с положительно определённой симметричной матрицей.


		 ![](../../Property.gif)
		 [Tolerance](../../Interface/ISmLinearEquations/ISmLinearEquations.Tolerance.htm)


		 Свойство Tolerance
		 определяет точность решения.


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


[Классы сборки Stat](../StatClass.htm) |
 [Решение
 системы линейных уравнений. Метод Гаусса](Lib.chm::/04_Other_models/UiModelling_GaussMethod.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
