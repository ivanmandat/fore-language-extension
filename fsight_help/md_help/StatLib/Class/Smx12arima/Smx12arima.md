# Smx12arima

Smx12arima
-


# Smx12arima


Сборка: Stat;


## Описание


Класс Smx12arima предназначен
 для работы с методом сезонных поправок X12.


## Комментарии


Метод сезонных поправок X12 является усовершенствованной версией метода
 X11.


Метод X12 поддерживается только в ОС Windows.


## Свойства, унаследованные от [ISmx12Arima](../../Interface/ISmx12arima/ISmx12arima.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [AdjustmentOptions](../../Interface/ISmx12arima/ISmx12arima.AdjustmentOptions.htm)
		 Свойство AdjustmentOptions
		 определяет способ учета поправок на праздничные и рабочие дни.


		 ![](../../Property.gif)
		 [AICtest](../../Interface/ISmx12arima/ISmx12arima.AICtest.htm)
		 Свойство AICtest определяет,
		 включен ли автоматический режим учета поправок на праздничные
		 и рабочие дни.


		 ![](../../Property.gif)
		 [BoxCoxPowerTransform](../../Interface/ISmx12arima/ISmx12arima.BoxCoxPowerTransform.htm)
		 Свойство BoxCoxPowerTransform
		 определяет значение степени для трансформации Бокса-Кокса.


		 ![](../../Property.gif)
		 [CombinedHolidayFactors](../../Interface/ISmx12arima/ISmx12arima.CombinedHolidayFactors.htm)
		 Свойство CombinedHolidayFactors
		 возвращает ряд, содержащий комбинацию поправок на праздничные
		 и рабочие дни.


		 ![](../../Property.gif)
		 [CombinedSeasonalFactors](../../Interface/ISmx12arima/ISmx12arima.CombinedSeasonalFactors.htm)
		 Свойство CombinedSeasonalFactors
		 возвращает ряд, содержащий комбинацию сезонной составляющей и
		 поправки на рабочие дни.


		 ![](../../Property.gif)
		 [DataTransformation](../../Interface/ISmx12arima/ISmx12arima.DataTransformation.htm)
		 Свойство DataTransformation
		 определяет тип преобразования исходного ряда.


		 ![](../../Property.gif)
		 [Easter](../../Interface/ISmx12arima/ISmx12arima.Easter.htm)
		 Свойство Easter
		 возвращает параметры поправок
		 на праздник Пасхи.


		 ![](../../Property.gif)
		 [ErrorFile](../../Interface/ISmx12arima/ISmx12arima.ErrorFile.htm)
		 Свойство ErrorFile
		 определяет массив строк файла с ошибками, приходящими из внешней
		 программы.


		 ![](../../Property.gif)
		 [IrregularComponent](../../Interface/ISmx12arima/ISmx12arima.IrregularComponent.htm)
		 Свойство IrregularComponent
		 возвращает ряд, содержащий нерегулярную компоненту.


		 ![](../../Property.gif)
		 [Labor](../../Interface/ISmx12arima/ISmx12arima.Labor.htm)
		 Свойство Labor возвращает
		 параметры поправок
		 на праздник Дня труда.


		 ![](../../Property.gif)
		 [MissingData](../../Interface/ISmx12arima/ISmx12arima.MissingData.htm)
		 Свойство MissingData
		 возвращает параметры обработки пропусков в исходных данных.


		 ![](../../Property.gif)
		 [ModelPeriod](../../Interface/ISmx12arima/ISmx12arima.ModelPeriod.htm)
		 Свойство ModelPeriod
		 возвращает настройки периода расчета модели.


		 ![](../../Property.gif)
		 [OrderAR](../../Interface/ISmx12arima/ISmx12arima.OrderAR.htm)
		 Свойство OrderAR определяет
		 порядки несезонной авторегрессии.


		 ![](../../Property.gif)
		 [OrderARSeas](../../Interface/ISmx12arima/ISmx12arima.OrderARSeas.htm)
		 Свойство OrderARSeas
		 определяет порядки сезонной авторегрессии.


		 ![](../../Property.gif)
		 [OrderDiff](../../Interface/ISmx12arima/ISmx12arima.OrderDiff.htm)
		 Свойство OrderDiff
		 определяет порядок несезонного дифференцирования.


		 ![](../../Property.gif)
		 [OrderDiffSeas](../../Interface/ISmx12arima/ISmx12arima.OrderDiffSeas.htm)
		 Свойство OrderDiffSeas
		 определяет порядок сезонного дифференцирования.


		 ![](../../Property.gif)
		 [OrderMA](../../Interface/ISmx12arima/ISmx12arima.OrderMA.htm)
		 Свойство OrderMA определяет
		 порядки скользящего среднего.


		 ![](../../Property.gif)
		 [OrderMASeas](../../Interface/ISmx12arima/ISmx12arima.OrderMASeas.htm)
		 Свойство OrderMASeas
		 определяет порядки сезонного скользящего среднего.


		 ![](../../Property.gif)
		 [OutliersARIMAao](../../Interface/ISmx12arima/ISmx12arima.OutliersARIMAao.htm)
		 Свойство OutliersARIMAao
		 возвращает список аддитивных выбросов, учитываемых на шаге ARIMA.


		 ![](../../Property.gif)
		 [OutliersARIMAls](../../Interface/ISmx12arima/ISmx12arima.OutliersARIMAls.htm)
		 Свойство OutliersARIMAls возвращает
		 список выбросов типа «сдвиг уровня», учитываемых на шаге ARIMA.


		 ![](../../Property.gif)
		 [OutliersARIMArpbegin](../../Interface/ISmx12arima/ISmx12arima.OutliersARIMArpbegin.htm)
		 Свойство OutliersARIMArpbegin возвращает
		 список выбросов типа «постепенная смена уровня» (дата начала),
		 учитываемых на шаге ARIMA.


		 ![](../../Property.gif)
		 [OutliersARIMArpend](../../Interface/ISmx12arima/ISmx12arima.OutliersARIMArpend.htm)
		 Свойство OutliersARIMArpend возвращает
		 список выбросов типа «постепенная смена уровня» (дата окончания),
		 учитываемых на шаге ARIMA.


		 ![](../../Property.gif)
		 [OutliersARIMAtc](../../Interface/ISmx12arima/ISmx12arima.OutliersARIMAtc.htm)
		 Свойство OutliersARIMAtc возвращает
		 список выбросов типа «временный сдвиг уровня», учитываемых на
		 шаге ARIMA.


		 ![](../../Property.gif)
		 [OutliersDetection](../../Interface/ISmx12arima/ISmx12arima.OutliersDetection.htm)
		 Свойство OutliersDetection
		 определяет, включать ли в процедуру учет выбросов.


		 ![](../../Property.gif)
		 [OutliersX11ao](../../Interface/ISmx12arima/ISmx12arima.OutliersX11ao.htm)
		 Свойство OutliersX11ao
		 возвращает список аддитивных выбросов, учитываемых на шаге Х11.


		 ![](../../Property.gif)
		 [Output](../../Interface/ISmx12arima/ISmx12arima.Output.htm)
		 Свойство Output определяет
		 массив строк, содержащий выходной файл, формируемый внешней программой
		 Х12.


		 ![](../../Property.gif)
		 [PredefinedVariableConst](../../Interface/ISmx12arima/ISmx12arima.PredefinedVariableConst.htm)
		 Свойство PredefinedVariableConst
		 определяет, добавлять ли в регрессоры константу при построении
		 модели ARIMA.


		 ![](../../Property.gif)
		 [PredefinedVariableSeasonal](../../Interface/ISmx12arima/ISmx12arima.PredefinedVariableSeasonal.htm)
		 Свойство PredefinedVariableSeasonal
		 определяет, добавлять ли в регрессоры сезонные фиктивные переменные
		 при построении модели ARIMA.


		 ![](../../Property.gif)
		 [ResidualsDiagnostic](../../Interface/ISmx12arima/ISmx12arima.ResidualsDiagnostic.htm)
		 Свойство ResidualsDiagnostic
		 определяет, проводить ли диагностику остатков.


		 ![](../../Property.gif)
		 [Sceaster](../../Interface/ISmx12arima/ISmx12arima.Sceaster.htm)
		 Свойство Sceaster возвращает
		 параметры поправок
		 на праздник Пасхи (Канада).


		 ![](../../Property.gif)
		 [SeasonalAdjustmentMode](../../Interface/ISmx12arima/ISmx12arima.SeasonalAdjustmentMode.htm)
		 Свойство SeasonalAdjustmentMode
		 определяет тип сезонности.


		 ![](../../Property.gif)
		 [SeasonalComponentCycleType](../../Interface/ISmx12arima/ISmx12arima.SeasonalComponentCycleType.htm)
		 Свойство SeasonalComponentCycleType
		 определяет период сезонности (месяцы/кварталы).


		 ![](../../Property.gif)
		 [SeasonalFactors](../../Interface/ISmx12arima/ISmx12arima.SeasonalFactors.htm)
		 Свойство SeasonalFactors
		 возвращает ряд, содержащий сезонную компоненту.


		 ![](../../Property.gif)
		 [SeasonalFilter](../../Interface/ISmx12arima/ISmx12arima.SeasonalFilter.htm)
		 Свойство SeasonalFilter
		 определяет тип сезонного фильтра.


		 ![](../../Property.gif)
		 [SeasonallyAdjusted](../../Interface/ISmx12arima/ISmx12arima.SeasonallyAdjusted.htm)
		 Свойство SeasonallyAdjusted
		 возвращает ряд, скорректированный на сезонную компоненту.


		 ![](../../Property.gif)
		 [SelectFromFile](../../Interface/ISmx12arima/ISmx12arima.SelectFromFile.htm)
		 Свойство SelectFromFile
		 определяет, брать ли спецификацию параметров ARIMA из файла.


		 ![](../../Property.gif)
		 [SelectFromFileBest](../../Interface/ISmx12arima/ISmx12arima.SelectFromFileBest.htm)
		 Свойство SelectFromFileBest
		 определяет, брать ли спецификацию параметров ARIMA из файла, используя
		 наилучшую из заданных.


		 ![](../../Property.gif)
		 [SelectFromFileByFit](../../Interface/ISmx12arima/ISmx12arima.SelectFromFileByFit.htm)
		 Свойство SelectFromFileByFit
		 определяет, брать ли спецификацию параметров ARIMA из файла, используя
		 ту, что дает более близкие значения для данных вне периода идентификации.


		 ![](../../Property.gif)
		 [Serie](../../Interface/ISmx12arima/ISmx12arima.Serie.htm)
		 Свойство Serie возвращает
		 объясняемый ряд.


		 ![](../../Property.gif)
		 [SP1frequency](../../Interface/ISmx12arima/ISmx12arima.SP1frequency.htm)
		 Свойство SP1frequency
		 возвращает ряд спектральных частот SP1.


		 ![](../../Property.gif)
		 [SP1spectr](../../Interface/ISmx12arima/ISmx12arima.SP1spectr.htm)
		 Свойство SP1spectr возвращает
		 ряд спектральных плотностей SP1.


		 ![](../../Property.gif)
		 [SP2frequency](../../Interface/ISmx12arima/ISmx12arima.SP2frequency.htm)
		 Свойство SP2frequency возвращает
		 ряд спектральных частот SP2.


		 ![](../../Property.gif)
		 [SP2spectr](../../Interface/ISmx12arima/ISmx12arima.SP2spectr.htm)
		 Свойство SP2spectr возвращает
		 ряд спектральных плотностей SP2.


		 ![](../../Property.gif)
		 [SpectralPlots](../../Interface/ISmx12arima/ISmx12arima.SpectralPlots.htm)
		 Свойство SpectralPlots
		 определяет, строить ли графики спектральной плотности.


		 ![](../../Property.gif)
		 [StabilityAnalysisofSeasonals](../../Interface/ISmx12arima/ISmx12arima.StabilityAnalysisofSeasonals.htm)
		 Свойство StabilityAnalysisofSeasonals
		 определяет тип анализа стабильности сезонных компонент.


		 ![](../../Property.gif)
		 [StartPeriod](../../Interface/ISmx12arima/ISmx12arima.StartPeriod.htm)
		 Свойство StartPeriod
		 определяет дату начала периода расчета (год и месяц/квартал).


		 ![](../../Property.gif)
		 [TdstockValue](../../Interface/ISmx12arima/ISmx12arima.TdstockValue.htm)
		 Свойство TdstockValue
		 определяет количество дней, рассматриваемых для получения поправки
		 на рабочие дни.


		 ![](../../Property.gif)
		 [Thanksgiving](../../Interface/ISmx12arima/ISmx12arima.Thanksgiving.htm)
		 Свойство Thanksgiving
		 возвращает параметры
		 поправок на праздник Дня Благодарения.


		 ![](../../Property.gif)
		 [TradingDayEffects](../../Interface/ISmx12arima/ISmx12arima.TradingDayEffects.htm)
		 Свойство TradingDayEffects
		 определяет тип поправок на рабочие дни.


		 ![](../../Property.gif)
		 [TrendCycle](../../Interface/ISmx12arima/ISmx12arima.TrendCycle.htm)
		 Свойство TrendCycle
		 возвращает ряд, содержащий тренд-циклическую компоненту.


		 ![](../../Property.gif)
		 [Trendma](../../Interface/ISmx12arima/ISmx12arima.Trendma.htm)
		 Свойство Trendma определяет
		 порядок скользящего среднего для трендового фильтра (фильтра Хендерсона).


		 ![](../../Property.gif)
		 [x12aMdlFile](../../Interface/ISmx12arima/ISmx12arima.x12aMdlFile.htm)
		 Свойство x12aMdlFile
		 определяет строковый массив с возможными спецификациями ARIMA.


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


## Методы, унаследованные от [ISmx12Arima](../../Interface/ISmx12arima/ISmx12arima.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub.gif)
		 [ParseAR](../../Interface/ISmx12arima/ISmx12arima.ParseAR.htm)


		 Метод ParseAR разбирает
		 строки с параметрами несезонной авторегрессии.


		 ![](../../Sub.gif)
		 [ParseARSeas](../../Interface/ISmx12arima/ISmx12arima.ParseARSeas.htm)


		 Метод ParseARSeas разбирает
		 строки с параметрами сезонной авторегрессии.


		 ![](../../Sub.gif)
		 [ParseMA](../../Interface/ISmx12arima/ISmx12arima.ParseMA.htm)


		 Метод ParseMA разбирает
		 строки с параметрами скользящего среднего.


		 ![](../../Sub.gif)
		 [ParseMASeas](../../Interface/ISmx12arima/ISmx12arima.ParseMASeas.htm)


		 Метод ParseMASeas разбирает
		 строки с параметрами сезонного скользящего среднего.


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


[Классы сборки Stat](../StatClass.htm) | [X12-ARIMA](lib.chm::/02_Time_series_analysis/x12.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
