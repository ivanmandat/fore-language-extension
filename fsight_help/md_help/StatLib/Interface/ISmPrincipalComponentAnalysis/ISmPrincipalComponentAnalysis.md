# ISmPrincipalComponentAnalysis

ISmPrincipalComponentAnalysis
-


# ISmPrincipalComponentAnalysis


Сборка: Stat;


## Описание


Интерфейс ISmPrincipalComponentAnalysis
 определяет параметры метода главных компонент.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmPrincipalComponentAnalysis


## Комментарии


Метод главных компонент (англ. Principal
 component analysis, PCA) предназначен для выявления латентных обобщающих
 характеристик изучаемого процесса. Метод используется для подбора факторов,
 выделяя основные компоненты из входных данных.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [Analysis](ISmPrincipalComponentAnalysis.Analysis.htm)


		 Свойство Analysis определяет
		 параметры анализа.


		 ![](../../Property.gif)
		 [CalcCovariance](ISmPrincipalComponentAnalysis.CalcCovariance.htm)


		 Свойство CalcCovariance
		 определяет метод расчета стандартного отклонения.


		 ![](../../Property.gif)
		 [IncludeAverages](ISmPrincipalComponentAnalysis.IncludeAverages.htm)


		 Свойство IncludeAverages
		 определяет, использовать ли межгрупповое и общегрупповое
		 средние в качестве дополнительных компонентов.


		 ![](../../Property.gif)
		 [MatrixAlignmentType](ISmPrincipalComponentAnalysis.MatrixAlignmentType.htm)


		 Свойство MatrixAlignmentType
		 определяет тип центрирования исходной матрицы данных.


		 ![](../../Property.gif)
		 [MissingData](ISmPrincipalComponentAnalysis.MissingData.htm)


		 Свойство MissingData
		 определяет параметры обработки пропусков.


		 ![](../../Property.gif)
		 [Objects](ISmPrincipalComponentAnalysis.Objects.htm)


		 Свойство Objects определяет
		 исходные данные (набор переменных).


		 ![](../../Property.gif)
		 [P](ISmPrincipalComponentAnalysis.P.htm)


		 Свойство P возвращает
		 собственные векторы главных компонент.


		 ![](../../Property.gif)
		 [ScoreType](ISmPrincipalComponentAnalysis.ScoreType.htm)


		 Свойство ScoreType
		 определяет тип условия, налагаемого на главные компоненты.


		 ![](../../Property.gif)
		 [Statistics](ISmPrincipalComponentAnalysis.Statistics.htm)


		 Свойство Statistics
		 возвращает собственные значения и статистики.


		 ![](../../Property.gif)
		 [V](ISmPrincipalComponentAnalysis.V.htm)


		 Свойство V возвращает
		 значения главных компонент.


		 ![](../../Property.gif)
		 [VAdj](ISmPrincipalComponentAnalysis.VAdj.htm)


		 Свойство VAdj возвращает
		 значения главных компонент, которые посчитаны как линейные комбинации
		 исходных рядов и собственных векторов.


		 ![](../../Property.gif)
		 [Weights](ISmPrincipalComponentAnalysis.Weights.htm)


		 Свойство Weights задает
		 весовые коэффициенты для наблюдений.


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
 | [Метод
 главных компонент](Lib.chm::/04_Other_models/UiModelling_PrincipalComponents.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
