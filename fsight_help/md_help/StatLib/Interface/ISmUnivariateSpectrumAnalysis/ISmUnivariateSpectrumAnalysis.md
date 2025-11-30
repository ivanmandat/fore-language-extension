# ISmUnivariateSpectrumAnalysis

ISmUnivariateSpectrumAnalysis
-


# ISmUnivariateSpectrumAnalysis


Сборка: Stat;


## Описание


Интерфейс ISmUnivariateSpectrumAnalysis
 определяет параметры спектрального анализа. Спектральный анализ позволяет
 распознать сезонные колебания различной длины, в то время как в других
 типах анализа, длина сезонных компонент обычно известна (или предполагается)
 заранее и затем включается в некоторые теоретические модели скользящего
 среднего или автокорреляции.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmUnivariateSpectrumAnalysis


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [CutOffPoint](ISmUnivariateSpectrumAnalysis.CutOffPoint.htm)
		 Свойство CutOffPoint
		 определяет точку отсечения (длина исходного ряда на периоде идентификации).


		 ![](../../Property.gif)
		 [DataProportion](ISmUnivariateSpectrumAnalysis.DataProportion.htm)
		 Свойство DataProportion
		 определяет долю краевых данных.


		 ![](../../Property.gif)
		 [FastFourierTransformOrder](ISmUnivariateSpectrumAnalysis.FastFourierTransformOrder.htm)
		 Свойство FastFourierTransformOrder
		 определяет порядок быстрого преобразования Фурье.


		 ![](../../Property.gif)
		 [InitCorrection](ISmUnivariateSpectrumAnalysis.InitCorrection.htm)
		 Свойство InitCorrection
		 определяет тип начальной корректировки.


		 ![](../../Property.gif)
		 [LagWindow](ISmUnivariateSpectrumAnalysis.LagWindow.htm)
		 Свойство LagWindow
		 определяет лаговое окно.


		 ![](../../Property.gif)
		 [MissingData](ISmUnivariateSpectrumAnalysis.MissingData.htm)
		 Свойство MissingData
		 определяет параметры обработки пропусков.


		 ![](../../Property.gif)
		 [ModelPeriod](ISmUnivariateSpectrumAnalysis.ModelPeriod.htm)
		 Свойство ModelPeriod
		 определяет период идентификации.


		 ![](../../Property.gif)
		 [PaddingType](ISmUnivariateSpectrumAnalysis.PaddingType.htm)
		 Свойство PaddingType
		 определяет способ заполнения/усечения ряда.


		 ![](../../Property.gif)
		 [Periodogramm](ISmUnivariateSpectrumAnalysis.Periodogramm.htm)
		 Свойство Periodogramm
		 возвращает периодограмму.


		 ![](../../Property.gif)
		 [Serie](ISmUnivariateSpectrumAnalysis.Serie.htm)
		 Свойство Serie определяет
		 исходный ряд данных.


		 ![](../../Property.gif)
		 [ShapeParameter](ISmUnivariateSpectrumAnalysis.ShapeParameter.htm)
		 Свойство ShapeParameter
		 определяет параметр формы.


		 ![](../../Property.gif)
		 [Spectrum](ISmUnivariateSpectrumAnalysis.Spectrum.htm)
		 Свойство Spectrum возвращает
		 спектральную плотность.


		 ![](../../Property.gif)
		 [SpectrumFrequency](ISmUnivariateSpectrumAnalysis.SpectrumFrequency.htm)
		 Свойство SpectrumFrequency
		 возвращает спектральную частоту.


		 ![](../../Property.gif)
		 [SpectrumPeriod](ISmUnivariateSpectrumAnalysis.SpectrumPeriod.htm)
		 Свойство SpectrumPeriod
		 возвращает спектральный период.


		 ![](../../Property.gif)
		 [SpectrumStatistics](ISmUnivariateSpectrumAnalysis.SpectrumStatistics.htm)
		 Свойство SpectrumStatistics
		 возвращает спектральные статистические характеристики.


		 ![](../../Property.gif)
		 [UseFastFourierTransform](ISmUnivariateSpectrumAnalysis.UseFastFourierTransform.htm)
		 Свойство UseFastFourierTransform
		 определяет, использовать ли быстрое преобразование Фурье.


		 ![](../../Property.gif)
		 [Weights](ISmUnivariateSpectrumAnalysis.Weights.htm)
		 Свойство Weights
		 возвращает веса для лагового окна.


		 ![](../../Property.gif)
		 [ZerosCount](ISmUnivariateSpectrumAnalysis.ZerosCount.htm)
		 Свойство ZerosCount
		 определяет количество нулевых значений, используемых для увеличения
		 длины исходного ряда.


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
 [Спектральный
 анализ](Lib.chm::/02_Time_series_analysis/Lib_SpectralAnalysis.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
