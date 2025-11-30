# SmVarianceAnalysis

SmVarianceAnalysis
-


# SmVarianceAnalysis


## Описание


Класс SmVarianceAnalysis реализует алгоритм дисперсионного анализа.


## Свойства, унаследованные от [ISmVarianceAnalysis](../../Interface/ISmVarianceAnalysis/ISmVarianceAnalysis.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [AnalysisType](../../Interface/ISmVarianceAnalysis/ISmVarianceAnalysis.AnalysisType.htm)
		 Свойство AnalysisType
		 определяет тип дисперсионного анализа.


		 ![](../../Property.gif)
		 [ConfidenceLevel](../../Interface/ISmVarianceAnalysis/ISmVarianceAnalysis.ConfidenceLevel.htm)
		 Свойство ConfidenceLevel
		 определяет уровень значимости, определяющий принятие/отвержение
		 нулевой гипотезы.


		 ![](../../Property.gif)
		 [Data](../../Interface/ISmVarianceAnalysis/ISmVarianceAnalysis.Data.htm)
		 Свойство Data определяет
		 рассматриваемые наблюдения.


		 ![](../../Property.gif)
		 [DegreeOfFreedom](../../Interface/ISmVarianceAnalysis/ISmVarianceAnalysis.DegreeOfFreedom.htm)
		 Свойство DegreeOfFreedom
		 возвращает число степеней свободы.


		 ![](../../Property.gif)
		 [FisherCritical](../../Interface/ISmVarianceAnalysis/ISmVarianceAnalysis.FisherCritical.htm)
		 Свойство FisherCritical
		 возвращает критическое значение статистики Фишера.


		 ![](../../Property.gif)
		 [FisherStatistics](../../Interface/ISmVarianceAnalysis/ISmVarianceAnalysis.FisherStatistics.htm)
		 Свойство FisherStatistics
		 возвращает значение статистики Фишера.


		 ![](../../Property.gif)
		 [Probability](../../Interface/ISmVarianceAnalysis/ISmVarianceAnalysis.Probability.htm)
		 Свойство Probability
		 возвращает вероятность.


		 ![](../../Property.gif)
		 [SumSquared](../../Interface/ISmVarianceAnalysis/ISmVarianceAnalysis.SumSquared.htm)
		 Свойство SumSquared
		 возвращает сумму квадратов отклонений.


		 ![](../../Property.gif)
		 [UnbiasedEstimation](../../Interface/ISmVarianceAnalysis/ISmVarianceAnalysis.UnbiasedEstimation.htm)
		 Свойство UnbiasedEstimation
		 возвращает несмещенную оценку суммы квадратов отклонений.


		 ![](../../Property.gif)
		 [VarianceEqualByColumns](../../Interface/ISmVarianceAnalysis/ISmVarianceAnalysis.VarianceEqualByColumns.htm)
		 Свойство VarianceEqualByColumns
		 возвращает результат о принятии гипотезы о равенстве дисперсий
		 фактора B.


		 ![](../../Property.gif)
		 [VarianceEqualByRows](../../Interface/ISmVarianceAnalysis/ISmVarianceAnalysis.VarianceEqualByRows.htm)
		 Свойство VarianceEqualByRows
		 возвращает результат о принятии гипотезы о равенстве групповых
		 средних или о равенстве дисперсий в зависимости от типа анализа.


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
