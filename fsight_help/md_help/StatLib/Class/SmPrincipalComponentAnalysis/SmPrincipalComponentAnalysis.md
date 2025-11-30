# SmPrincipalComponentAnalysis

SmPrincipalComponentAnalysis
-


# SmPrincipalComponentAnalysis


## Описание


Класс SmPrincipalComponentAnalysis реализует алгоритм метода главных компонент.


## Свойства, унаследованные от [ISmPrincipalComponentAnalysis](../../Interface/ISmPrincipalComponentAnalysis/ISmPrincipalComponentAnalysis.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [Analysis](../../Interface/ISmPrincipalComponentAnalysis/ISmPrincipalComponentAnalysis.Analysis.htm)


		 Свойство Analysis определяет
		 параметры анализа.


		 ![](../../Property.gif)
		 [CalcCovariance](../../Interface/ISmPrincipalComponentAnalysis/ISmPrincipalComponentAnalysis.CalcCovariance.htm)


		 Свойство CalcCovariance
		 определяет метод расчета стандартного отклонения.


		 ![](../../Property.gif)
		 [IncludeAverages](../../Interface/ISmPrincipalComponentAnalysis/ISmPrincipalComponentAnalysis.IncludeAverages.htm)


		 Свойство IncludeAverages
		 определяет, использовать ли межгрупповое и общегрупповое
		 средние в качестве дополнительных компонентов.


		 ![](../../Property.gif)
		 [MatrixAlignmentType](../../Interface/ISmPrincipalComponentAnalysis/ISmPrincipalComponentAnalysis.MatrixAlignmentType.htm)


		 Свойство MatrixAlignmentType
		 определяет тип центрирования исходной матрицы данных.


		 ![](../../Property.gif)
		 [MissingData](../../Interface/ISmPrincipalComponentAnalysis/ISmPrincipalComponentAnalysis.MissingData.htm)


		 Свойство MissingData
		 определяет параметры обработки пропусков.


		 ![](../../Property.gif)
		 [Objects](../../Interface/ISmPrincipalComponentAnalysis/ISmPrincipalComponentAnalysis.Objects.htm)


		 Свойство Objects определяет
		 исходные данные (набор переменных).


		 ![](../../Property.gif)
		 [P](../../Interface/ISmPrincipalComponentAnalysis/ISmPrincipalComponentAnalysis.P.htm)


		 Свойство P возвращает
		 собственные векторы главных компонент.


		 ![](../../Property.gif)
		 [ScoreType](../../Interface/ISmPrincipalComponentAnalysis/ISmPrincipalComponentAnalysis.ScoreType.htm)


		 Свойство ScoreType
		 определяет тип условия, налагаемого на главные компоненты.


		 ![](../../Property.gif)
		 [Statistics](../../Interface/ISmPrincipalComponentAnalysis/ISmPrincipalComponentAnalysis.Statistics.htm)


		 Свойство Statistics
		 возвращает собственные значения и статистики.


		 ![](../../Property.gif)
		 [V](../../Interface/ISmPrincipalComponentAnalysis/ISmPrincipalComponentAnalysis.V.htm)


		 Свойство V возвращает
		 значения главных компонент.


		 ![](../../Property.gif)
		 [VAdj](../../Interface/ISmPrincipalComponentAnalysis/ISmPrincipalComponentAnalysis.VAdj.htm)


		 Свойство VAdj возвращает
		 значения главных компонент, которые посчитаны как линейные комбинации
		 исходных рядов и собственных векторов.


		 ![](../../Property.gif)
		 [Weights](../../Interface/ISmPrincipalComponentAnalysis/ISmPrincipalComponentAnalysis.Weights.htm)


		 Свойство Weights задает
		 весовые коэффициенты для наблюдений.


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


[Классы сборки Stat](../StatClass.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
