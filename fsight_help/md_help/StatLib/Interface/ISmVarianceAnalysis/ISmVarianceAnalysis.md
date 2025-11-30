# ISmVarianceAnalysis

ISmVarianceAnalysis
-


# ISmVarianceAnalysis


Сборка: Stat;


## Описание


Интерфейс ISmVarianceAnalysis
 определяет параметры дисперсионного анализа.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmVarianceAnalysis


## Комментарии


Анализ осуществляет обычную процедуру факторного дисперсионного анализа.
 Следует задать наблюдения и уровень значимости, необходимый для оценки
 критических параметров F-статистики. На выходе пользователь получает необходимые
 статистические данные и логическое значение, определяющее принятие/отвержение
 нулевой гипотезы о равенстве дисперсий (двухфакторный анализ) или о равенстве
 групповых средних (однофакторный анализ).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [AnalysisType](ISmVarianceAnalysis.AnalysisType.htm)
		 Свойство AnalysisType
		 определяет тип дисперсионного анализа.


		 ![](../../Property.gif)
		 [ConfidenceLevel](ISmVarianceAnalysis.ConfidenceLevel.htm)
		 Свойство ConfidenceLevel
		 определяет уровень значимости, определяющий принятие/отвержение
		 нулевой гипотезы.


		 ![](../../Property.gif)
		 [Data](ISmVarianceAnalysis.Data.htm)
		 Свойство Data определяет
		 рассматриваемые наблюдения.


		 ![](../../Property.gif)
		 [DegreeOfFreedom](ISmVarianceAnalysis.DegreeOfFreedom.htm)
		 Свойство DegreeOfFreedom
		 возвращает число степеней свободы.


		 ![](../../Property.gif)
		 [FisherCritical](ISmVarianceAnalysis.FisherCritical.htm)
		 Свойство FisherCritical
		 возвращает критическое значение статистики Фишера.


		 ![](../../Property.gif)
		 [FisherStatistics](ISmVarianceAnalysis.FisherStatistics.htm)
		 Свойство FisherStatistics
		 возвращает значение статистики Фишера.


		 ![](../../Property.gif)
		 [Probability](ISmVarianceAnalysis.Probability.htm)
		 Свойство Probability
		 возвращает вероятность.


		 ![](../../Property.gif)
		 [SumSquared](ISmVarianceAnalysis.SumSquared.htm)
		 Свойство SumSquared
		 возвращает сумму квадратов отклонений.


		 ![](../../Property.gif)
		 [UnbiasedEstimation](ISmVarianceAnalysis.UnbiasedEstimation.htm)
		 Свойство UnbiasedEstimation
		 возвращает несмещенную оценку суммы квадратов отклонений.


		 ![](../../Property.gif)
		 [VarianceEqualByColumns](ISmVarianceAnalysis.VarianceEqualByColumns.htm)
		 Свойство VarianceEqualByColumns
		 возвращает результат о принятии гипотезы о равенстве дисперсий
		 фактора B.


		 ![](../../Property.gif)
		 [VarianceEqualByRows](ISmVarianceAnalysis.VarianceEqualByRows.htm)
		 Свойство VarianceEqualByRows
		 возвращает результат о принятии гипотезы о равенстве групповых
		 средних или о равенстве дисперсий в зависимости от типа анализа.


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


[Интерфейсы сборки Stat](../Interfaces.htm) |
 [Дисперсионный
 анализ](Lib.chm::/05_Statistics/Lib_VarianceAnalysis.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
