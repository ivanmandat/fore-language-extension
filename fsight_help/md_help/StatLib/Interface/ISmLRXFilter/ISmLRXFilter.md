# ISmLRXFilter

ISmLRXFilter
-


# ISmLRXFilter


Сборка: Stat;


## Описание


Интерфейс ISmLRXFilter определяет
 параметры LRX-фильтра.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmLRXFilter


## Комментарии


LRX-фильтр - это метод сглаживания временного ряда, который используется
 для выделения длительных тенденций временного ряда и является более общим
 случаем фильтра Ходрика-Прескотта.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [DPrior](ISmLRXFilter.DPrior.htm)


		 Свойство DPrior определяет
		 априорные разности.


		 ![](../../Property.gif)
		 [Fitted](ISmLRXFilter.Fitted.htm)


		 Свойство Fitted возвращает
		 модельный ряд.


		 ![](../../Property.gif)
		 [MissingData](ISmLRXFilter.MissingData.htm)


		 Свойство MissingData
		 определяет параметры обработки пропусков.


		 ![](../../Property.gif)
		 [ModelPeriod](ISmLRXFilter.ModelPeriod.htm)


		 Свойство ModelPeriod
		 определяет параметры периода идентификации.


		 ![](../../Property.gif)
		 [Prior](ISmLRXFilter.Prior.htm)


		 Свойство Prior определяет
		 априорные значения.


		 ![](../../Property.gif)
		 [Residuals](ISmLRXFilter.Residuals.htm)


		 Свойство Residuals
		 возвращает ряд остатков.


		 ![](../../Property.gif)
		 [Serie](ISmLRXFilter.Serie.htm)


		 Свойство Serie определяет
		 исходный ряд.


		 ![](../../Property.gif)
		 [SmoothingParameter](ISmLRXFilter.SmoothingParameter.htm)


		 Свойство SmoothingParameter
		 определяет меру сглаживания ряда.


		 ![](../../Property.gif)
		 [SummaryStatistics](ISmLRXFilter.SummaryStatistics.htm)


		 Свойство SummaryStatistics
		 возвращает статистические характеристики.


		 ![](../../Property.gif)
		 [w1](ISmLRXFilter.w1.htm)


		 Свойство w1 определяет
		 веса 1.


		 ![](../../Property.gif)
		 [w2](ISmLRXFilter.w2.htm)


		 Свойство w2 определяет
		 веса 2.


		 ![](../../Property.gif)
		 [w3](ISmLRXFilter.w3.htm)


		 Свойство w3 определяет
		 веса 3.


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
 | Метод «[LRX-фильтр](Lib.chm::/02_Time_series_analysis/UiModellling_LRX.htm)»


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
