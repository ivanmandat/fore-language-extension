# ISmHodrickPrescottFilter

ISmHodrickPrescottFilter
-


# ISmHodrickPrescottFilter


Сборка: Stat;


## Описание


Интерфейс ISmHodrickPrescottFilter
 определяет параметры фильтра Ходрика-Прескотта.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmHodrickPrescottFilter


## Комментарии


Данный фильтр используется для выделения длительных тенденций временного
 ряда. Фильтр представляет собой двухсторонний линейный фильтр, который
 рассчитывает ряд S по исходному ряду Y минимизацией рассеивания элементов
 ряда S вокруг Y при условии минимума суммы элементов дважды дифференцированного
 ряда S.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [Fitted](ISmHodrickPrescottFilter.Fitted.htm)


		 Свойство Fitted возвращает
		 модельный ряд.


		 ![](../../Property.gif)
		 [Frequency](ISmHodrickPrescottFilter.Frequency.htm)


		 Свойство Frequency
		 определяет количество периодов в году.


		 ![](../../Property.gif)
		 [MissingData](ISmHodrickPrescottFilter.MissingData.htm)


		 Свойство MissingData
		 определяет параметры обработки пропусков.


		 ![](../../Property.gif)
		 [ModelPeriod](ISmHodrickPrescottFilter.ModelPeriod.htm)


		 Свойство ModelPeriod
		 определяет параметры периода идентификации.


		 ![](../../Property.gif)
		 [Power](ISmHodrickPrescottFilter.Power.htm)


		 Свойство Power определяет
		 значение степени, применяемой в качестве параметра сглаживания.


		 ![](../../Property.gif)
		 [Residuals](ISmHodrickPrescottFilter.Residuals.htm)


		 Свойство Residuals
		 возвращает ряд остатков.


		 ![](../../Property.gif)
		 [Serie](ISmHodrickPrescottFilter.Serie.htm)


		 Свойство Serie определяет
		 параметры исходного ряда.


		 ![](../../Property.gif)
		 [SmoothingParameter](ISmHodrickPrescottFilter.SmoothingParameter.htm)


		 Свойство SmoothingParameter
		 определяет параметр сглаживания.


		 ![](../../Property.gif)
		 [SmoothingParameterMode](ISmHodrickPrescottFilter.SmoothingParameterMode.htm)


		 Свойство SmoothingParameterMode
		 определяет способ задания параметра сглаживания.


		 ![](../../Property.gif)
		 [SummaryStatistics](ISmHodrickPrescottFilter.SummaryStatistics.htm)


		 Свойство SummaryStatistics
		 возвращает статистические характеристики.


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
 | [Фильтр
 Ходрика-Прескотта](Lib.chm::/02_Time_series_analysis/UiModelling_HodrickPrescottFilter.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
