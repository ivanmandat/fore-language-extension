# ISmx12arima

ISmx12arima
-


# ISmx12arima


Сборка: Stat;


## Описание


Интерфейс ISmx12arima предназначен
 для работы с методом сезонных поправок X12.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmx12arima


## Комментарии


Метод сезонных поправок X12 является усовершенствованной версией метода
 X11.


Метод X12 поддерживается только в ОС Windows.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [AdjustmentOptions](ISmx12arima.AdjustmentOptions.htm)
		 Свойство AdjustmentOptions
		 определяет способ учета поправок на праздничные и рабочие дни.


		 ![](../../Property.gif)
		 [AICtest](ISmx12arima.AICtest.htm)
		 Свойство AICtest определяет,
		 включен ли автоматический режим учета поправок на праздничные
		 и рабочие дни.


		 ![](../../Property.gif)
		 [BoxCoxPowerTransform](ISmx12arima.BoxCoxPowerTransform.htm)
		 Свойство BoxCoxPowerTransform
		 определяет значение степени для трансформации Бокса-Кокса.


		 ![](../../Property.gif)
		 [CombinedHolidayFactors](ISmx12arima.CombinedHolidayFactors.htm)
		 Свойство CombinedHolidayFactors
		 возвращает ряд, содержащий комбинацию поправок на праздничные
		 и рабочие дни.


		 ![](../../Property.gif)
		 [CombinedSeasonalFactors](ISmx12arima.CombinedSeasonalFactors.htm)
		 Свойство CombinedSeasonalFactors
		 возвращает ряд, содержащий комбинацию сезонной составляющей и
		 поправки на рабочие дни.


		 ![](../../Property.gif)
		 [DataTransformation](ISmx12arima.DataTransformation.htm)
		 Свойство DataTransformation
		 определяет тип преобразования исходного ряда.


		 ![](../../Property.gif)
		 [Easter](ISmx12arima.Easter.htm)
		 Свойство Easter
		 возвращает параметры поправок
		 на праздник Пасхи.


		 ![](../../Property.gif)
		 [ErrorFile](ISmx12arima.ErrorFile.htm)
		 Свойство ErrorFile
		 определяет массив строк файла с ошибками, приходящими из внешней
		 программы.


		 ![](../../Property.gif)
		 [IrregularComponent](ISmx12arima.IrregularComponent.htm)
		 Свойство IrregularComponent
		 возвращает ряд, содержащий нерегулярную компоненту.


		 ![](../../Property.gif)
		 [Labor](ISmx12arima.Labor.htm)
		 Свойство Labor возвращает
		 параметры поправок
		 на праздник Дня труда.


		 ![](../../Property.gif)
		 [MissingData](ISmx12arima.MissingData.htm)
		 Свойство MissingData
		 возвращает параметры обработки пропусков в исходных данных.


		 ![](../../Property.gif)
		 [ModelPeriod](ISmx12arima.ModelPeriod.htm)
		 Свойство ModelPeriod
		 возвращает настройки периода расчета модели.


		 ![](../../Property.gif)
		 [OrderAR](ISmx12arima.OrderAR.htm)
		 Свойство OrderAR определяет
		 порядки несезонной авторегрессии.


		 ![](../../Property.gif)
		 [OrderARSeas](ISmx12arima.OrderARSeas.htm)
		 Свойство OrderARSeas
		 определяет порядки сезонной авторегрессии.


		 ![](../../Property.gif)
		 [OrderDiff](ISmx12arima.OrderDiff.htm)
		 Свойство OrderDiff
		 определяет порядок несезонного дифференцирования.


		 ![](../../Property.gif)
		 [OrderDiffSeas](ISmx12arima.OrderDiffSeas.htm)
		 Свойство OrderDiffSeas
		 определяет порядок сезонного дифференцирования.


		 ![](../../Property.gif)
		 [OrderMA](ISmx12arima.OrderMA.htm)
		 Свойство OrderMA определяет
		 порядки скользящего среднего.


		 ![](../../Property.gif)
		 [OrderMASeas](ISmx12arima.OrderMASeas.htm)
		 Свойство OrderMASeas
		 определяет порядки сезонного скользящего среднего.


		 ![](../../Property.gif)
		 [OutliersARIMAao](ISmx12arima.OutliersARIMAao.htm)
		 Свойство OutliersARIMAao
		 возвращает список аддитивных выбросов, учитываемых на шаге ARIMA.


		 ![](../../Property.gif)
		 [OutliersARIMAls](ISmx12arima.OutliersARIMAls.htm)
		 Свойство OutliersARIMAls возвращает
		 список выбросов типа «сдвиг уровня», учитываемых на шаге ARIMA.


		 ![](../../Property.gif)
		 [OutliersARIMArpbegin](ISmx12arima.OutliersARIMArpbegin.htm)
		 Свойство OutliersARIMArpbegin возвращает
		 список выбросов типа «постепенная смена уровня» (дата начала),
		 учитываемых на шаге ARIMA.


		 ![](../../Property.gif)
		 [OutliersARIMArpend](ISmx12arima.OutliersARIMArpend.htm)
		 Свойство OutliersARIMArpend возвращает
		 список выбросов типа «постепенная смена уровня» (дата окончания),
		 учитываемых на шаге ARIMA.


		 ![](../../Property.gif)
		 [OutliersARIMAtc](ISmx12arima.OutliersARIMAtc.htm)
		 Свойство OutliersARIMAtc возвращает
		 список выбросов типа «временный сдвиг уровня», учитываемых на
		 шаге ARIMA.


		 ![](../../Property.gif)
		 [OutliersDetection](ISmx12arima.OutliersDetection.htm)
		 Свойство OutliersDetection
		 определяет, включать ли в процедуру учет выбросов.


		 ![](../../Property.gif)
		 [OutliersX11ao](ISmx12arima.OutliersX11ao.htm)
		 Свойство OutliersX11ao
		 возвращает список аддитивных выбросов, учитываемых на шаге Х11.


		 ![](../../Property.gif)
		 [Output](ISmx12arima.Output.htm)
		 Свойство Output определяет
		 массив строк, содержащий выходной файл, формируемый внешней программой
		 Х12.


		 ![](../../Property.gif)
		 [PredefinedVariableConst](ISmx12arima.PredefinedVariableConst.htm)
		 Свойство PredefinedVariableConst
		 определяет, добавлять ли в регрессоры константу при построении
		 модели ARIMA.


		 ![](../../Property.gif)
		 [PredefinedVariableSeasonal](ISmx12arima.PredefinedVariableSeasonal.htm)
		 Свойство PredefinedVariableSeasonal
		 определяет, добавлять ли в регрессоры сезонные фиктивные переменные
		 при построении модели ARIMA.


		 ![](../../Property.gif)
		 [ResidualsDiagnostic](ISmx12arima.ResidualsDiagnostic.htm)
		 Свойство ResidualsDiagnostic
		 определяет, проводить ли диагностику остатков.


		 ![](../../Property.gif)
		 [Sceaster](ISmx12arima.Sceaster.htm)
		 Свойство Sceaster возвращает
		 параметры поправок
		 на праздник Пасхи (Канада).


		 ![](../../Property.gif)
		 [SeasonalAdjustmentMode](ISmx12arima.SeasonalAdjustmentMode.htm)
		 Свойство SeasonalAdjustmentMode
		 определяет тип сезонности.


		 ![](../../Property.gif)
		 [SeasonalComponentCycleType](ISmx12arima.SeasonalComponentCycleType.htm)
		 Свойство SeasonalComponentCycleType
		 определяет период сезонности (месяцы/кварталы).


		 ![](../../Property.gif)
		 [SeasonalFactors](ISmx12arima.SeasonalFactors.htm)
		 Свойство SeasonalFactors
		 возвращает ряд, содержащий сезонную компоненту.


		 ![](../../Property.gif)
		 [SeasonalFilter](ISmx12arima.SeasonalFilter.htm)
		 Свойство SeasonalFilter
		 определяет тип сезонного фильтра.


		 ![](../../Property.gif)
		 [SeasonallyAdjusted](ISmx12arima.SeasonallyAdjusted.htm)
		 Свойство SeasonallyAdjusted
		 возвращает ряд, скорректированный на сезонную компоненту.


		 ![](../../Property.gif)
		 [SelectFromFile](ISmx12arima.SelectFromFile.htm)
		 Свойство SelectFromFile
		 определяет, брать ли спецификацию параметров ARIMA из файла.


		 ![](../../Property.gif)
		 [SelectFromFileBest](ISmx12arima.SelectFromFileBest.htm)
		 Свойство SelectFromFileBest
		 определяет, брать ли спецификацию параметров ARIMA из файла, используя
		 наилучшую из заданных.


		 ![](../../Property.gif)
		 [SelectFromFileByFit](ISmx12arima.SelectFromFileByFit.htm)
		 Свойство SelectFromFileByFit
		 определяет, брать ли спецификацию параметров ARIMA из файла, используя
		 ту, что дает более близкие значения для данных вне периода идентификации.


		 ![](../../Property.gif)
		 [Serie](ISmx12arima.Serie.htm)
		 Свойство Serie возвращает
		 объясняемый ряд.


		 ![](../../Property.gif)
		 [SP1frequency](ISmx12arima.SP1frequency.htm)
		 Свойство SP1frequency
		 возвращает ряд спектральных частот SP1.


		 ![](../../Property.gif)
		 [SP1spectr](ISmx12arima.SP1spectr.htm)
		 Свойство SP1spectr возвращает
		 ряд спектральных плотностей SP1.


		 ![](../../Property.gif)
		 [SP2frequency](ISmx12arima.SP2frequency.htm)
		 Свойство SP2frequency возвращает
		 ряд спектральных частот SP2.


		 ![](../../Property.gif)
		 [SP2spectr](ISmx12arima.SP2spectr.htm)
		 Свойство SP2spectr возвращает
		 ряд спектральных плотностей SP2.


		 ![](../../Property.gif)
		 [SpectralPlots](ISmx12arima.SpectralPlots.htm)
		 Свойство SpectralPlots
		 определяет, строить ли графики спектральной плотности.


		 ![](../../Property.gif)
		 [StabilityAnalysisofSeasonals](ISmx12arima.StabilityAnalysisofSeasonals.htm)
		 Свойство StabilityAnalysisofSeasonals
		 определяет тип анализа стабильности сезонных компонент.


		 ![](../../Property.gif)
		 [StartPeriod](ISmx12arima.StartPeriod.htm)
		 Свойство StartPeriod
		 определяет дату начала периода расчета (год и месяц/квартал).


		 ![](../../Property.gif)
		 [TdstockValue](ISmx12arima.TdstockValue.htm)
		 Свойство TdstockValue
		 определяет количество дней, рассматриваемых для получения поправки
		 на рабочие дни.


		 ![](../../Property.gif)
		 [Thanksgiving](ISmx12arima.Thanksgiving.htm)
		 Свойство Thanksgiving
		 возвращает параметры
		 поправок на праздник Дня Благодарения.


		 ![](../../Property.gif)
		 [TradingDayEffects](ISmx12arima.TradingDayEffects.htm)
		 Свойство TradingDayEffects
		 определяет тип поправок на рабочие дни.


		 ![](../../Property.gif)
		 [TrendCycle](ISmx12arima.TrendCycle.htm)
		 Свойство TrendCycle
		 возвращает ряд, содержащий тренд-циклическую компоненту.


		 ![](../../Property.gif)
		 [Trendma](ISmx12arima.Trendma.htm)
		 Свойство Trendma определяет
		 порядок скользящего среднего для трендового фильтра (фильтра Хендерсона).


		 ![](../../Property.gif)
		 [x12aMdlFile](ISmx12arima.x12aMdlFile.htm)
		 Свойство x12aMdlFile
		 определяет строковый массив с возможными спецификациями ARIMA.


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


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub.gif)
		 [ParseAR](ISmx12arima.ParseAR.htm)


		 Метод ParseAR разбирает
		 строки с параметрами несезонной авторегрессии.


		 ![](../../Sub.gif)
		 [ParseARSeas](ISmx12arima.ParseARSeas.htm)


		 Метод ParseARSeas разбирает
		 строки с параметрами сезонной авторегрессии.


		 ![](../../Sub.gif)
		 [ParseMA](ISmx12arima.ParseMA.htm)


		 Метод ParseMA разбирает
		 строки с параметрами скользящего среднего.


		 ![](../../Sub.gif)
		 [ParseMASeas](ISmx12arima.ParseMASeas.htm)


		 Метод ParseMASeas разбирает
		 строки с параметрами сезонного скользящего среднего.


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
 [X12-ARIMA](lib.chm::/02_Time_series_analysis/x12.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
