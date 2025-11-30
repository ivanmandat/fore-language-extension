# ISmCensus2

ISmCensus2
-


# ISmCensus2


Сборка: Stat;


## Описание


Интерфейс ISmCensus2 определяет
 параметры метода «X11», который
 является усовершенствованным вариантом метода сезонной декомпозиции и
 корректировки «Census I».


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmCensus2


## Комментарии


Метод X11 поддерживается только в ОС Windows.


Окончательные результаты, находятся в таблицах:


	- [ICensus2Results.D10](../ICensus2Results/ICensus2Results.D10.htm).
	 Сезонная составляющая;


	- [ICensus2Results.D11](../ICensus2Results/ICensus2Results.D11.htm).
	 Сезонная корректировка;


	- [ICensus2Results.D12](../ICensus2Results/ICensus2Results.D12.htm).
	 Тренд-циклическая компонента;


	- [ICensus2Results.D13](../ICensus2Results/ICensus2Results.D13.htm).
	 Случайная составляющая временного ряда.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [DailyWeights](ISmCensus2.DailyWeights.htm)


		 Свойство DailyWeights
		 определяет веса для дней недели.


		 ![](../../Property.gif)
		 [Holday](ISmCensus2.Holday.htm)


		 Свойство Holiday определяет,
		 делать ли поправку на праздничные дни при расчете.


		 ![](../../Property.gif)
		 [MissingData](ISmCensus2.MissingData.htm)


		 Свойство MissingData
		 определяет параметры обработки пропусков.


		 ![](../../Property.gif)
		 [ModelPeriod](ISmCensus2.ModelPeriod.htm)


		 Свойство ModelPeriod
		 определяет параметры периода идентификации.


		 ![](../../Property.gif)
		 [NormDailyWeights](ISmCensus2.NormDailyWeights.htm)


		 Свойство NormDailyWeights
		 возвращает нормированные веса для дней недели.


		 ![](../../Property.gif)
		 [Output](ISmCensus2.Output.htm)


		 Свойство Output возвращает
		 массив строк, содержащий выходной файл, формируемый внешними программами
		 x11ss.exe и x11q2.exe.


		 ![](../../Property.gif)
		 [Results](ISmCensus2.Results.htm)


		 Свойство Results возвращает
		 выходные ряды.


		 ![](../../Property.gif)
		 [SeasonalComponent](ISmCensus2.SeasonalComponent.htm)


		 Свойство SeasonalComponent
		 определяет параметры сезонной составляющей.


		 ![](../../Property.gif)
		 [SeasonalComponentCycleType](ISmCensus2.SeasonalComponentCycleType.htm)


		 Свойство SeasonalComponentCycleType
		 определяет дополнительный тип сезонности, устанавливающий период
		 сезонности.


		 ![](../../Property.gif)
		 [Serie](ISmCensus2.Serie.htm)


		 Свойство Serie определяет
		 объясняемый ряд.


		 ![](../../Property.gif)
		 [SigmaLevel](ISmCensus2.SigmaLevel.htm)


		 Свойство SigmaLevel
		 определяет уровень Sigma.


		 ![](../../Property.gif)
		 [SSAnalysis](ISmCensus2.SSAnalysis.htm)


		 Свойство SSAnalysis
		 определяет, применять ли в расчете скользящие интервалы.


		 ![](../../Property.gif)
		 [StartPeriod](ISmCensus2.StartPeriod.htm)


		 Свойство StartPeriod
		 определяет начало периода.


		 ![](../../Property.gif)
		 [TradingSigmaLimit](ISmCensus2.TradingSigmaLimit.htm)


		 Свойство TradingSigmaLimit
		 определяет границу для исключения экстремальных значений зависимости
		 от рабочих дней недели.


		 ![](../../Property.gif)
		 [TraidingDaysAdjustment](ISmCensus2.TraidingDaysAdjustment.htm)


		 Свойство TraidingDaysAdjustment
		 определяет поправку на рабочие дни.


		 ![](../../Property.gif)
		 [YearApplying](ISmCensus2.YearApplying.htm)


		 Свойство YearApplying
		 определяет начальную дату (год) для применения зависимости
		 от рабочих дней недели.


		 ![](../../Property.gif)
		 [YearComputing](ISmCensus2.YearComputing.htm)


		 Свойство YearComputing
		 определяет начальную дату (год) для вычисления зависимости от
		 рабочих дней недели.


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
 | Метод «[X11](Lib.chm::/02_Time_series_analysis/UiModelling_Census2.htm)»


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
