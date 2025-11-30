# SmLRXFilter

SmLRXFilter
-


# SmLRXFilter


## Описание


Класс SmLRXFilter реализует
 алгоритм LRX-фильтра.


## Свойства, унаследованные от [ISmLRXFilter](../../Interface/ISmLRXFilter/ISmLRXFilter.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [DPrior](../../Interface/ISmLRXFilter/ISmLRXFilter.DPrior.htm)


		 Свойство DPrior определяет
		 априорные разности.


		 ![](../../Property.gif)
		 [Fitted](../../Interface/ISmLRXFilter/ISmLRXFilter.Fitted.htm)


		 Свойство Fitted возвращает
		 модельный ряд.


		 ![](../../Property.gif)
		 [MissingData](../../Interface/ISmLRXFilter/ISmLRXFilter.MissingData.htm)


		 Свойство MissingData
		 определяет параметры обработки пропусков.


		 ![](../../Property.gif)
		 [ModelPeriod](../../Interface/ISmLRXFilter/ISmLRXFilter.ModelPeriod.htm)


		 Свойство ModelPeriod
		 определяет параметры периода идентификации.


		 ![](../../Property.gif)
		 [Prior](../../Interface/ISmLRXFilter/ISmLRXFilter.Prior.htm)


		 Свойство Prior определяет
		 априорные значения.


		 ![](../../Property.gif)
		 [Residuals](../../Interface/ISmLRXFilter/ISmLRXFilter.Residuals.htm)


		 Свойство Residuals
		 возвращает ряд остатков.


		 ![](../../Property.gif)
		 [Serie](../../Interface/ISmLRXFilter/ISmLRXFilter.Serie.htm)


		 Свойство Serie определяет
		 исходный ряд.


		 ![](../../Property.gif)
		 [SmoothingParameter](../../Interface/ISmLRXFilter/ISmLRXFilter.SmoothingParameter.htm)


		 Свойство SmoothingParameter
		 определяет меру сглаживания ряда.


		 ![](../../Property.gif)
		 [SummaryStatistics](../../Interface/ISmLRXFilter/ISmLRXFilter.SummaryStatistics.htm)


		 Свойство SummaryStatistics
		 возвращает статистические характеристики.


		 ![](../../Property.gif)
		 [w1](../../Interface/ISmLRXFilter/ISmLRXFilter.w1.htm)


		 Свойство w1 определяет
		 веса 1.


		 ![](../../Property.gif)
		 [w2](../../Interface/ISmLRXFilter/ISmLRXFilter.w2.htm)


		 Свойство w2 определяет
		 веса 2.


		 ![](../../Property.gif)
		 [w3](../../Interface/ISmLRXFilter/ISmLRXFilter.w3.htm)


		 Свойство w3 определяет
		 веса 3.


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
 Метод «[LRX-фильтр](Lib.chm::/02_Time_series_analysis/UiModellling_LRX.htm)»


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
