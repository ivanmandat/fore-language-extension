# ISmSimultaneousSystem

ISmSimultaneousSystem
-


# ISmSimultaneousSystem


Сборка: Stat;


## Описание


Интерфейс ISmSimultaneousSystem
 используется для решения системы одновременных уравнений.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmSimultaneousSystem


## Комментарии


Для решения системы однородных уравнений используется двухшаговый метод
 наименьших квадратов.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [Equations](ISmSimultaneousSystem.Equations.htm)


		 Свойство Equations
		 определяет параметры коллекции уравнений.


		 ![](../../Property.gif)
		 [MaxIteration](ISmSimultaneousSystem.MaxIteration.htm)


		 Свойство MaxIteration определяет
		 максимальное число итераций.


		 ![](../../Property.gif)
		 [MissingData](ISmSimultaneousSystem.MissingData.htm)


		 Свойство MissingData
		 определяет параметры обработки пропусков.


		 ![](../../Property.gif)
		 [ModelPeriod](ISmSimultaneousSystem.ModelPeriod.htm)


		 Свойство ModelPeriod
		 определяет параметры периода идентификации.


		 ![](../../Property.gif)
		 [SimultaneousSystemMethod](ISmSimultaneousSystem.SimultaneousSystemMethod.htm)


		 Свойство SimultaneousSystemMethod определяет
		 метод оценки для систем одновременных уравнений.


		 ![](../../Property.gif)
		 [StackInstrumental](ISmSimultaneousSystem.StackInstrumental.htm)


		 Свойство StackInstrumental
		 возвращает стековые инструментальные переменные.


		 ![](../../Property.gif)
		 [Tolerance](ISmSimultaneousSystem.Tolerance.htm)


		 Свойство Tolerance
		 определяет точность решения.


		 ![](../../Property.gif)
		 [UseConstantAsInstrument](ISmSimultaneousSystem.UseConstantAsInstrument.htm)


		 Свойство UseConstantAsInstrument
		 определяет, использовать ли константу в качестве инструментальной
		 переменной.


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
 | [Метод
 наименьших квадратов](Lib.chm::/01_Regression_models/UiModelling_LinearRegr_LSM.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
