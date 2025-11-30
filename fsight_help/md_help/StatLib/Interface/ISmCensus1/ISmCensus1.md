# ISmCensus1

ISmCensus1
-


# ISmCensus1


Сборка: Stat;


## Описание


Интерфейс ISmCensus1 определяет
 параметры метода Census I, который осуществляет выделение сезонной составляющей.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmCensus1


## Комментарии


Производится разложение исходного ряда на сезонную составляющую, тренд-циклическую
 и нерегулярную компоненты.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [CenterMovingAverage](ISmCensus1.CenterMovingAverage.htm)
		 Свойство CenterMovingAverage
		 определяет необходимость центрирования скользящего среднего.


		 ![](../../Property.gif)
		 [Irregula](ISmCensus1.Irregula.htm)
		 Свойство Irregula возвращает
		 нерегулярную компоненту.


		 ![](../../Property.gif)
		 [MissingData](ISmCensus1.MissingData.htm)
		 Свойство MissingData
		 определяет параметры обработки пропусков.


		 ![](../../Property.gif)
		 [ModelPeriod](ISmCensus1.ModelPeriod.htm)
		 Свойство ModelPeriod
		 определяет параметры периода идентификации.


		 ![](../../Property.gif)
		 [MovingAverage](ISmCensus1.MovingAverage.htm)
		 Свойство MovingAverage
		 возвращает сглаженный ряд.


		 ![](../../Property.gif)
		 [RatioDifferences](ISmCensus1.RatioDifferences.htm)
		 Свойство RatioDifferences
		 возвращает отношение/разность.


		 ![](../../Property.gif)
		 [Seasonal](ISmCensus1.Seasonal.htm)
		 Свойство Seasonal возвращает
		 сезонную составляющую.


		 ![](../../Property.gif)
		 [SeasonalAdjustment](ISmCensus1.SeasonalAdjustment.htm)
		 Свойство SeasonalAdjustment
		 возвращает сезонную корректировку.


		 ![](../../Property.gif)
		 [SeasonalComponent](ISmCensus1.SeasonalComponent.htm)
		 Свойство SeasonalComponent
		 определяет параметры сезонной составляющей.


		 ![](../../Property.gif)
		 [Serie](ISmCensus1.Serie.htm)
		 Свойство Serie определяет
		 объясняемый ряд.


		 ![](../../Property.gif)
		 [TrendCycle](ISmCensus1.TrendCycle.htm)
		 Свойство TrendCycle
		 возвращает тренд-циклическую компоненту.


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
 | Метод «[Census1](Lib.chm::/02_Time_series_analysis/UiModelling_Census1.htm)»


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
