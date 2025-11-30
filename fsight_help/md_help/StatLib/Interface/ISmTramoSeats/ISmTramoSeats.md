# ISmTramoSeats

ISmTramoSeats
-


# ISmTramoSeats


Сборка: Stat;


## Описание


Интерфейс ISmTramoSeats предназначен
 для работы со статистическими методами TRAMO и SEATS.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmTramoSeats


## Комментарии


Модель TRAMO оценивает и позволяет спрогонзировать модель с пропусками
 в данных, ARIMA-остатками, а также при наличии выбросов различных видов.
 Модель SEATS выполняет декомпозицию временного ряда на основе ARIMA-процесса.
 Данные модели часто используют вместе в качестве альтернативы другим методам,
 выявляющим сезонность (таким как Х11 и Х12).


Статистические методы TRAMO и SEATS доступны для использования в версии
 «Форсайт. Аналитическая платформа»
 для ОС Windows. Для работы с методами в ОС Linux потребуется дополнительная
 [интеграция](UiNav.chm::/02_Navigator/CommonSettings/Integration.htm#tramo_seats).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [AR](ISmTramoSeats.AR.htm)
		 Свойство AR определяет
		 порядок несезонной авторегрессии.


		 ![](../../Property.gif)
		 [ArimaOrderSearch](ISmTramoSeats.ArimaOrderSearch.htm)
		 Свойство ArimaOrderSearch
		 определяет способ спецификации модели ARIMA.


		 ![](../../Property.gif)
		 [Cycle](ISmTramoSeats.Cycle.htm)
		 Свойство Cycle возвращает
		 ряд, содержащий циклическую составляющую.


		 ![](../../Property.gif)
		 [D](ISmTramoSeats.D.htm)
		 Свойство D определяет
		 порядок несезонного дифференцирования.


		 ![](../../Property.gif)
		 [EasterEffect](ISmTramoSeats.EasterEffect.htm)
		 Свойство EasterEffect
		 определяет тип поправки на праздник Пасхи.


		 ![](../../Property.gif)
		 [Exogenous](ISmTramoSeats.Exogenous.htm)
		 Свойство Exogenous
		 возвращает коллекцию экзогенных переменных (регрессоров).


		 ![](../../Property.gif)
		 [Forecast](ISmTramoSeats.Forecast.htm)
		 Свойство Forecast возвращает
		 массив, содержащий значения прогнозного ряда.


		 ![](../../Property.gif)
		 [ForecastHorizon](ISmTramoSeats.ForecastHorizon.htm)
		 Свойство ForecastHorizon
		 определяет горизонт прогнозирования.


		 ![](../../Property.gif)
		 [HolidaySeries](ISmTramoSeats.HolidaySeries.htm)
		 Свойство HolidaySeries
		 определяет ряд поправок на праздничные/рабочие дни.


		 ![](../../Property.gif)
		 [Interpolated](ISmTramoSeats.Interpolated.htm)
		 Свойство Interpolated
		 возвращает ряд, содержащий интерполированное значение исходного
		 ряда.


		 ![](../../Property.gif)
		 [IrregularComponent](ISmTramoSeats.IrregularComponent.htm)
		 Свойство IrregularComponent
		 возвращает ряд, содержащий нерегулярную компоненту.


		 ![](../../Property.gif)
		 [Linearized](ISmTramoSeats.Linearized.htm)
		 Свойство Linearized
		 возвращает ряд, содержащий линеаризованное значение исходного
		 ряда.


		 ![](../../Property.gif)
		 [MA](ISmTramoSeats.MA.htm)
		 Свойство MA определяет
		 порядок несезонного скользящего среднего.


		 ![](../../Property.gif)
		 [MissingData](ISmTramoSeats.MissingData.htm)
		 Свойство MissingData
		 возвращает метод обработки пропусков, применяемый к исходным данным.


		 ![](../../Property.gif)
		 [ModelPeriod](ISmTramoSeats.ModelPeriod.htm)
		 Свойство ModelPeriod
		 возвращает настройки периода расчета модели.


		 ![](../../Property.gif)
		 [Outliers](ISmTramoSeats.Outliers.htm)
		 Свойство Outliers возвращает
		 коллекцию выбросов.


		 ![](../../Property.gif)
		 [OutliersDetection](ISmTramoSeats.OutliersDetection.htm)
		 Свойство OutliersDetection
		 определяет режим выявления выбросов.


		 ![](../../Property.gif)
		 [Output_seats](ISmTramoSeats.Output_seats.htm)
		 Свойство Output_seats
		 возвращает массив строк, содержащий выходной файл, формируемый
		 внешней программой SEATS.


		 ![](../../Property.gif)
		 [Output_tramo](ISmTramoSeats.Output_tramo.htm)
		 Свойство Output_tramo
		 возвращает массив строк, содержащий выходной файл, формируемый
		 внешней программой TRAMO.


		 ![](../../Property.gif)
		 [RunSeats](ISmTramoSeats.RunSeats.htm)
		 Свойство RunSeats определяет,
		 включить ли процедуру SEATS после выполнения TRAMO.


		 ![](../../Property.gif)
		 [SAR](ISmTramoSeats.SAR.htm)
		 Свойство SAR определяет
		 порядок сезонной авторегрессии.


		 ![](../../Property.gif)
		 [SD](ISmTramoSeats.SD.htm)
		 Свойство SD определяет
		 порядок сезонного дифференцирования.


		 ![](../../Property.gif)
		 [SeasonalComponentCycleType](ISmTramoSeats.SeasonalComponentCycleType.htm)
		 Свойство SeasonalComponentCycleType
		 определяет период сезонности (месяцы/кварталы).


		 ![](../../Property.gif)
		 [SeasonalFactors](ISmTramoSeats.SeasonalFactors.htm)
		 Свойство SeasonalFactors
		 возвращает ряд, содержащий сезонный фактор.


		 ![](../../Property.gif)
		 [SeasonallyAdjusted](ISmTramoSeats.SeasonallyAdjusted.htm)
		 Свойство SeasonallyAdjusted
		 возвращает сезонно скорректированный ряд.


		 ![](../../Property.gif)
		 [Serie](ISmTramoSeats.Serie.htm)
		 Свойство Serie возвращает
		 объясняемый ряд.


		 ![](../../Property.gif)
		 [SMA](ISmTramoSeats.SMA.htm)
		 Свойство SMA определяет
		 порядок сезонного скользящего среднего.


		 ![](../../Property.gif)
		 [StartPeriod](ISmTramoSeats.StartPeriod.htm)
		 Свойство StartPeriod
		 возвращает дату начала периода расчета (год и месяц/квартал).


		 ![](../../Property.gif)
		 [TradingDayEffects](ISmTramoSeats.TradingDayEffects.htm)
		 Свойство TradingDayEffects
		 определяет тип поправок на рабочие дни.


		 ![](../../Property.gif)
		 [TradingDayIfSignificant](ISmTramoSeats.TradingDayIfSignificant.htm)
		 Свойство TradingDayIfSignificant
		 определяет, включен ли автоматический режим учета поправок на
		 рабочие дни.


		 ![](../../Property.gif)
		 [Transformation](ISmTramoSeats.Transformation.htm)
		 Свойство Transformation
		 определяет вид преобразования исходного ряда.


		 ![](../../Property.gif)
		 [Trend](ISmTramoSeats.Trend.htm)
		 Свойство Trend возвращает
		 ряд, содержащий тренд-составляющую.


		 ![](../../Property.gif)
		 [UseHolidaySeries](ISmTramoSeats.UseHolidaySeries.htm)
		 Свойство UseHolidaySeries
		 определяет, использовать ли в качестве поправки на праздничные/рабочие
		 дни отдельный ряд.


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
 | [Описание
 моделей TRAMO/SEATS](Lib.chm::/02_Time_series_analysis/Tramo_Seats.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
