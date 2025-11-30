# SmElliotRothenbergStockTest

SmElliotRothenbergStockTest
-


# SmElliotRothenbergStockTest


Сборка: Stat;


## Описание


Класс SmElliotRothenbergStockTest
 предназначен для работы с параметрами теста Эллиота-Розенберга-Стока.


## Комментарии


Тест возвращает статистику Эллиота-Розенберга-Стока.


## Свойства, унаследованные от [ISmElliotRothenbergStockTest](../../Interface/ISmElliotRothenbergStockTest/ISmElliotRothenbergStockTest.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [AutoRegressionOrder](../../Interface/ISmElliotRothenbergStockTest/ISmElliotRothenbergStockTest.AutoRegressionOrder.htm)


		 Свойство AutoRegressionOrder
		 определяет лаг.


		 ![](../../Property.gif)
		 [Equation](../../Interface/ISmElliotRothenbergStockTest/ISmElliotRothenbergStockTest.Equation.htm)


		 Свойство Equation
		 определяет тип модели, рассматриваемой в тесте.


		 ![](../../Property.gif)
		 [ERSStat](../../Interface/ISmElliotRothenbergStockTest/ISmElliotRothenbergStockTest.ERSStat.htm)


		 Свойство ERSStat
		 возвращает значение статистики теста Эллиота-Розенберга-Стока.


		 ![](../../Property.gif)
		 [F0](../../Interface/ISmElliotRothenbergStockTest/ISmElliotRothenbergStockTest.F0.htm)


		 Свойство F0 определяет
		 значение скорректированной дисперсии остатков.


		 ![](../../Property.gif)
		 [F0SpectrumEstimation](../../Interface/ISmElliotRothenbergStockTest/ISmElliotRothenbergStockTest.F0SpectrumEstimation.htm)


		 Свойство F0SpectrumEstimation
		 определяет метод для вычисления скорректированной дисперсии
		 остатков.


		 ![](../../Property.gif)
		 [MissingData](../../Interface/ISmElliotRothenbergStockTest/ISmElliotRothenbergStockTest.MissingData.htm)


		 Свойство MissingData
		 возвращает метод обработки пропусков.


		 ![](../../Property.gif)
		 [ModelPeriod](../../Interface/ISmElliotRothenbergStockTest/ISmElliotRothenbergStockTest.ModelPeriod.htm)


		 Свойство ModelPeriod
		 возвращает параметры периода идентификации.


		 ![](../../Property.gif)
		 [Serie](../../Interface/ISmElliotRothenbergStockTest/ISmElliotRothenbergStockTest.Serie.htm)


		 Свойство Serie
		 возвращает тестируемый ряд.


		 ![](../../Property.gif)
		 [TestedSeries](../../Interface/ISmElliotRothenbergStockTest/ISmElliotRothenbergStockTest.TestedSeries.htm)


		 Свойство TestedSeries
		 определяет исходный ряд данных.


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


[Классы
 сборки Stat](../StatClass.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
