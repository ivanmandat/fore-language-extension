# SmCensus2

SmCensus2
-


# SmCensus2


Сборка: Stat;


## Описание


Класс SmCensus2 реализует метод
 «X11», который является усовершенствованным
 вариантом метода сезонной декомпозиции и корректировки «Census
 I».


## Комментарии


Метод X11 поддерживается только в ОС Windows.


## Свойства, унаследованные от [ISmCensus2](../../Interface/ISmCensus2/ISmCensus2.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [DailyWeights](../../Interface/ISmCensus2/ISmCensus2.DailyWeights.htm)


		 Свойство DailyWeights
		 определяет веса для дней недели.


		 ![](../../Property.gif)
		 [Holday](../../Interface/ISmCensus2/ISmCensus2.Holday.htm)


		 Свойство Holiday определяет,
		 делать ли поправку на праздничные дни при расчете.


		 ![](../../Property.gif)
		 [MissingData](../../Interface/ISmCensus2/ISmCensus2.MissingData.htm)


		 Свойство MissingData
		 определяет параметры обработки пропусков.


		 ![](../../Property.gif)
		 [ModelPeriod](../../Interface/ISmCensus2/ISmCensus2.ModelPeriod.htm)


		 Свойство ModelPeriod
		 определяет параметры периода идентификации.


		 ![](../../Property.gif)
		 [NormDailyWeights](../../Interface/ISmCensus2/ISmCensus2.NormDailyWeights.htm)


		 Свойство NormDailyWeights
		 возвращает нормированные веса для дней недели.


		 ![](../../Property.gif)
		 [Output](../../Interface/ISmCensus2/ISmCensus2.Output.htm)


		 Свойство Output возвращает
		 массив строк, содержащий выходной файл, формируемый внешними программами
		 x11ss.exe и x11q2.exe.


		 ![](../../Property.gif)
		 [Results](../../Interface/ISmCensus2/ISmCensus2.Results.htm)


		 Свойство Results возвращает
		 выходные ряды.


		 ![](../../Property.gif)
		 [SeasonalComponent](../../Interface/ISmCensus2/ISmCensus2.SeasonalComponent.htm)


		 Свойство SeasonalComponent
		 определяет параметры сезонной составляющей.


		 ![](../../Property.gif)
		 [SeasonalComponentCycleType](../../Interface/ISmCensus2/ISmCensus2.SeasonalComponentCycleType.htm)


		 Свойство SeasonalComponentCycleType
		 определяет дополнительный тип сезонности, устанавливающий период
		 сезонности.


		 ![](../../Property.gif)
		 [Serie](../../Interface/ISmCensus2/ISmCensus2.Serie.htm)


		 Свойство Serie определяет
		 объясняемый ряд.


		 ![](../../Property.gif)
		 [SigmaLevel](../../Interface/ISmCensus2/ISmCensus2.SigmaLevel.htm)


		 Свойство SigmaLevel
		 определяет уровень Sigma.


		 ![](../../Property.gif)
		 [SSAnalysis](../../Interface/ISmCensus2/ISmCensus2.SSAnalysis.htm)


		 Свойство SSAnalysis
		 определяет, применять ли в расчете скользящие интервалы.


		 ![](../../Property.gif)
		 [StartPeriod](../../Interface/ISmCensus2/ISmCensus2.StartPeriod.htm)


		 Свойство StartPeriod
		 определяет начало периода.


		 ![](../../Property.gif)
		 [TradingSigmaLimit](../../Interface/ISmCensus2/ISmCensus2.TradingSigmaLimit.htm)


		 Свойство TradingSigmaLimit
		 определяет границу для исключения экстремальных значений зависимости
		 от рабочих дней недели.


		 ![](../../Property.gif)
		 [TraidingDaysAdjustment](../../Interface/ISmCensus2/ISmCensus2.TraidingDaysAdjustment.htm)


		 Свойство TraidingDaysAdjustment
		 определяет поправку на рабочие дни.


		 ![](../../Property.gif)
		 [YearApplying](../../Interface/ISmCensus2/ISmCensus2.YearApplying.htm)


		 Свойство YearApplying
		 определяет начальную дату (год) для применения зависимости
		 от рабочих дней недели.


		 ![](../../Property.gif)
		 [YearComputing](../../Interface/ISmCensus2/ISmCensus2.YearComputing.htm)


		 Свойство YearComputing
		 определяет начальную дату (год) для вычисления зависимости от
		 рабочих дней недели.


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
 Метод «[X11](Lib.chm::/02_Time_series_analysis/UiModelling_Census2.htm)»


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
