# SmCurveEstimation

SmCurveEstimation
-


# SmCurveEstimation


## Описание


Класс SmCurveEstimation реализует алгоритм подбора формы зависимости.


## Свойства, унаследованные от [ISmCurveEstimation](../../Interface/ISmCurveEstimation/ISmCurveEstimation.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [BestDependenceForm](../../Interface/ISmCurveEstimation/ISmCurveEstimation.BestDependenceForm.htm)


		 Свойство BestDependenceForm
		 возвращает номер лучшей формы зависимости.


		 ![](../../Property.gif)
		 [Criterion](../../Interface/ISmCurveEstimation/ISmCurveEstimation.Criterion.htm)


		 Свойство Criterion
		 определяет тип критерия отбора лучшей формы зависимости.


		 ![](../../Property.gif)
		 [DependenceForms](../../Interface/ISmCurveEstimation/ISmCurveEstimation.DependenceForms.htm)


		 Свойство DependenceForms
		 возвращает коллекцию форм зависимости.


		 ![](../../Property.gif)
		 [Explained](../../Interface/ISmCurveEstimation/ISmCurveEstimation.Explained.htm)


		 Свойство Explained
		 определяет объясняемый ряд.


		 ![](../../Property.gif)
		 [Explanatory](../../Interface/ISmCurveEstimation/ISmCurveEstimation.Explanatory.htm)


		 Свойство Explanatory
		 определяет параметры объясняющего ряда.


		 ![](../../Property.gif)
		 [ForecastConfidenceLevel](../../Interface/ISmCurveEstimation/ISmCurveEstimation.ForecastConfidenceLevel.htm)


		 Свойство ForecastConfidenceLevel
		 определяет значимость доверительных границ прогнозного ряда, то
		 есть вероятность того, что неизвестное значение параметра будет
		 накрыто доверительным интервалом.


		 ![](../../Property.gif)
		 [ForecastFirstPoint](../../Interface/ISmCurveEstimation/ISmCurveEstimation.ForecastFirstPoint.htm)


		 Свойство ForecastFirstPoint
		 определяет первую точку прогнозного ряда.


		 ![](../../Property.gif)
		 [ForecastLastPoint](../../Interface/ISmCurveEstimation/ISmCurveEstimation.ForecastLastPoint.htm)


		 Свойство ForecastLastPoint
		 определяет последнюю точку прогнозного ряда.


		 ![](../../Property.gif)
		 [MissingData](../../Interface/ISmCurveEstimation/ISmCurveEstimation.MissingData.htm)


		 Свойство MissingData
		 определяет параметры обработки пропусков.


		 ![](../../Property.gif)
		 [ModelPeriod](../../Interface/ISmCurveEstimation/ISmCurveEstimation.ModelPeriod.htm)


		 Свойство ModelPeriod
		 определяет параметры периода идентификации.


		 ![](../../Property.gif)
		 [PolynomOrder](../../Interface/ISmCurveEstimation/ISmCurveEstimation.PolynomOrder.htm)


		 Свойство PolynomOrder
		 определяет степень полинома для полиномиальной формы зависимости.


		 ![](../../Property.gif)
		 [SeasonalAdjustment](../../Interface/ISmCurveEstimation/ISmCurveEstimation.SeasonalAdjustment.htm)


		 Свойство SeasonalAdjustment
		 возвращает сезонную составляющую.


		 ![](../../Property.gif)
		 [SeasonalComponent](../../Interface/ISmCurveEstimation/ISmCurveEstimation.SeasonalComponent.htm)


		 Свойство SeasonalComponent
		 определяет параметры сезонной составляющей.


		 ![](../../Property.gif)
		 [SortedModelList](../../Interface/ISmCurveEstimation/ISmCurveEstimation.SortedModelList.htm)


		 Свойство SortedModelList
		 возвращает список индексов форм зависимостей, отсортированный
		 в порядке ухудшения значения критерия отбора лучшей зависимости.


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
