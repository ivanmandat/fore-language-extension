# ISmExponentialSmoothing

ISmExponentialSmoothing
-


# ISmExponentialSmoothing


Сборка: Stat;


## Описание


Интерфейс ISmExponentialSmoothing
 определяет параметры метода экспоненциальное сглаживание.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmExponentialSmoothing


## Комментарии


Экспоненциальное сглаживание является одним из наиболее распространенных
 приемов, используемых для сглаживания временных рядов, а также для прогнозирования.
 В основе процедуры сглаживания лежит расчёт экспоненциальных скользящих
 средних сглаживаемого ряда.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [AutoSearch](ISmExponentialSmoothing.AutoSearch.htm)


		 Свойство AutoSearch
		 определяет настройки автоподбора параметров.


		 ![](../../Property.gif)
		 [BestModelCoefficients](ISmExponentialSmoothing.BestModelCoefficients.htm)


		 Свойство BestModelCoefficients
		 возвращает результаты автоподбора параметров.


		 ![](../../Property.gif)
		 [Fitted](ISmExponentialSmoothing.Fitted.htm)


		 Свойство Fitted возвращает
		 модельный ряд.


		 ![](../../Property.gif)
		 [Forecast](ISmExponentialSmoothing.Forecast.htm)


		 Свойство Forecast определяет
		 параметры прогнозного ряда.


		 ![](../../Property.gif)
		 [InitialValueS](ISmExponentialSmoothing.InitialValueS.htm)


		 Свойство InitialValueS
		 определяет начальную точку сезонной составляющей.


		 ![](../../Property.gif)
		 [InitialValueT](ISmExponentialSmoothing.InitialValueT.htm)


		 Свойство InitialValueT
		 определяет начальную точку линии тренда.


		 ![](../../Property.gif)
		 [MissingData](ISmExponentialSmoothing.MissingData.htm)


		 Свойство MissingData
		 определяет параметры обработки пропусков.


		 ![](../../Property.gif)
		 [ModelPeriod](ISmExponentialSmoothing.ModelPeriod.htm)


		 Свойство ModelPeriod
		 определяет параметры периода идентификации.


		 ![](../../Property.gif)
		 [Parameters](ISmExponentialSmoothing.Parameters.htm)


		 Свойство Parameters
		 определяет параметры метода.


		 ![](../../Property.gif)
		 [Residuals](ISmExponentialSmoothing.Residuals.htm)


		 Свойство Residuals
		 возвращает ряд остатков.


		 ![](../../Property.gif)
		 [SeasonalComponent](ISmExponentialSmoothing.SeasonalComponent.htm)


		 Свойство SeasonalComponent
		 определяет параметры сезонной составляющей.


		 ![](../../Property.gif)
		 [Serie](ISmExponentialSmoothing.Serie.htm)


		 Свойство Serie определяет
		 объясняемый ряд.


		 ![](../../Property.gif)
		 [SummaryStatistics](ISmExponentialSmoothing.SummaryStatistics.htm)


		 Свойство SummaryStatistics
		 возвращает статистические характеристики.


		 ![](../../Property.gif)
		 [TrendComponent](ISmExponentialSmoothing.TrendComponent.htm)


		 Свойство TrendComponent
		 определяет тип линии тренда.


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
 | Метод «[Экспоненциальное
 сглаживание](Lib.chm::/02_Time_series_analysis/UiModelling_ExpSmooth.htm)»


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
