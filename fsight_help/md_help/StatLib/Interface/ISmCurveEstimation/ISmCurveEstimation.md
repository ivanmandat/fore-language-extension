# ISmCurveEstimation

ISmCurveEstimation
-


# ISmCurveEstimation


Сборка: Stat;


## Описание


Интерфейс ISmCurveEstimation
 предназначен для настройки параметров подбора формы зависимости.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmCurveEstimation


## Комментарии


Обратите внимание, что заполнение объясняющего ряда ([ISmCurveEstimation.Explanatory](ISmCurveEstimation.Explanatory.htm))
 начинается с первой непустой точки объясняемого ряда ([ISmCurveEstimation.Explained](ISmCurveEstimation.Explained.htm)),
 входящей в период расчета ([ISmCurveEstimation.ModelPeriod](ISmCurveEstimation.ModelPeriod.htm)):


	- если точка начала периода идентификации больше первой непустой
	 точки объясняющего ряда, то расчёт начнётся с точки начала периода
	 идентификации;


	- если точка начала периода идентификации меньше первой непустой
	 точки объясняющего ряда, то расчёт начнётся с первой непустой точки
	 объясняющего ряда.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [BestDependenceForm](ISmCurveEstimation.BestDependenceForm.htm)


		 Свойство BestDependenceForm
		 возвращает номер лучшей формы зависимости.


		 ![](../../Property.gif)
		 [Criterion](ISmCurveEstimation.Criterion.htm)


		 Свойство Criterion
		 определяет тип критерия отбора лучшей формы зависимости.


		 ![](../../Property.gif)
		 [DependenceForms](ISmCurveEstimation.DependenceForms.htm)


		 Свойство DependenceForms
		 возвращает коллекцию форм зависимости.


		 ![](../../Property.gif)
		 [Explained](ISmCurveEstimation.Explained.htm)


		 Свойство Explained
		 определяет объясняемый ряд.


		 ![](../../Property.gif)
		 [Explanatory](ISmCurveEstimation.Explanatory.htm)


		 Свойство Explanatory
		 определяет параметры объясняющего ряда.


		 ![](../../Property.gif)
		 [ForecastConfidenceLevel](ISmCurveEstimation.ForecastConfidenceLevel.htm)


		 Свойство ForecastConfidenceLevel
		 определяет значимость доверительных границ прогнозного ряда, то
		 есть вероятность того, что неизвестное значение параметра будет
		 накрыто доверительным интервалом.


		 ![](../../Property.gif)
		 [ForecastFirstPoint](ISmCurveEstimation.ForecastFirstPoint.htm)


		 Свойство ForecastFirstPoint
		 определяет первую точку прогнозного ряда.


		 ![](../../Property.gif)
		 [ForecastLastPoint](ISmCurveEstimation.ForecastLastPoint.htm)


		 Свойство ForecastLastPoint
		 определяет последнюю точку прогнозного ряда.


		 ![](../../Property.gif)
		 [MissingData](ISmCurveEstimation.MissingData.htm)


		 Свойство MissingData
		 определяет параметры обработки пропусков.


		 ![](../../Property.gif)
		 [ModelPeriod](ISmCurveEstimation.ModelPeriod.htm)


		 Свойство ModelPeriod
		 определяет параметры периода идентификации.


		 ![](../../Property.gif)
		 [PolynomOrder](ISmCurveEstimation.PolynomOrder.htm)


		 Свойство PolynomOrder
		 определяет степень полинома для полиномиальной формы зависимости.


		 ![](../../Property.gif)
		 [SeasonalAdjustment](ISmCurveEstimation.SeasonalAdjustment.htm)


		 Свойство SeasonalAdjustment
		 возвращает сезонную составляющую.


		 ![](../../Property.gif)
		 [SeasonalComponent](ISmCurveEstimation.SeasonalComponent.htm)


		 Свойство SeasonalComponent
		 определяет параметры сезонной составляющей.


		 ![](../../Property.gif)
		 [SortedModelList](ISmCurveEstimation.SortedModelList.htm)


		 Свойство SortedModelList
		 возвращает список индексов форм зависимостей, отсортированный
		 в порядке ухудшения значения критерия отбора лучшей зависимости.


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
 | [Тренд
 с подбором функциональной зависимости](lib.chm::/02_Time_series_analysis/UiModelling_TrendCurveEstimation.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
