# SmAutoCorrelation

SmAutoCorrelation
-


# SmAutoCorrelation


Сборка: Stat;


## Описание


Класс SmAutoCorrelation реализует алгоритм автокорреляционного анализа.


## Комментарии


Корреляция служит для оценки тесноты и направления линейной стохастической зависимости между изучаемыми переменными.


## Свойства, унаследованные от [ISmAutoCorrelation](../../Interface/ISmAutoCorrelation/ISmAutoCorrelation.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [AutoCorrelationFunction](../../Interface/ISmAutoCorrelation/ISmAutoCorrelation.AutoCorrelationFunction.htm)


		 Свойство AutoCorrelationFunction
		 возвращает автокорреляционную функцию.


		 ![](../../Property.gif)
		 [DifferenceOrder](../../Interface/ISmAutoCorrelation/ISmAutoCorrelation.DifferenceOrder.htm)


		 Свойство DifferenceOrder
		 определяет порядок разности.


		 ![](../../Property.gif)
		 [LagOrder](../../Interface/ISmAutoCorrelation/ISmAutoCorrelation.LagOrder.htm)


		 Свойство LagOrder определяет
		 лаг.


		 ![](../../Property.gif)
		 [MissingData](../../Interface/ISmAutoCorrelation/ISmAutoCorrelation.MissingData.htm)


		 Свойство MissingData
		 определяет метод обработки пропусков.


		 ![](../../Property.gif)
		 [ModelPeriod](../../Interface/ISmAutoCorrelation/ISmAutoCorrelation.ModelPeriod.htm)


		 Свойство ModelPeriod
		 определяет параметры периода идентификации.


		 ![](../../Property.gif)
		 [PartialAutoCorrelationFunction](../../Interface/ISmAutoCorrelation/ISmAutoCorrelation.PartialAutoCorrelationFunction.htm)


		 Свойство PartialAutoCorrelationFunction
		 возвращает частную автокорреляционную функцию.


		 ![](../../Property.gif)
		 [Probability](../../Interface/ISmAutoCorrelation/ISmAutoCorrelation.Probability.htm)


		 Свойство Probability
		 возвращает вероятность для [Q-статистики
		 Льюнг-Бокса](../../Interface/ISmAutoCorrelation/ISmAutoCorrelation.QStatistics.htm).


		 ![](../../Property.gif)
		 [QStatistics](../../Interface/ISmAutoCorrelation/ISmAutoCorrelation.QStatistics.htm)


		 Свойство QStatistics
		 возвращает Q-статистику Льюнг-Бокса.


		 ![](../../Property.gif)
		 [Serie](../../Interface/ISmAutoCorrelation/ISmAutoCorrelation.Serie.htm)


		 Свойство Serie определяет
		 параметры исходного ряда.


		 ![](../../Property.gif)
		 [StandardError](../../Interface/ISmAutoCorrelation/ISmAutoCorrelation.StandardError.htm)


		 Свойство StandardError
		 возвращает стандартную ошибку.


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


[Классы сборки Stat](../StatClass.htm) | [Автокорреляционный анализ](Lib.chm::/05_Statistics/UiModelling_Autocorrelation.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
