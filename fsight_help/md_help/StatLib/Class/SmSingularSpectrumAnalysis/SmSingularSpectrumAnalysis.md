# SmSingularSpectrumAnalysis

SmSingularSpectrumAnalysis
-


# SmSingularSpectrumAnalysis


Сборка: Stat;


## Описание


Класс SmSingularSpectrumAnalysis
 предназначен для выполнения сингулярного спектрального анализа временных
 рядов.


## Комментарии


Сингулярный спектральный анализ - метод анализа временных рядов, основанный
 на представлении временного ряда в виде последовательности векторов достаточно
 большой размерности с последующим применением к ним [метода
 главных компонент](../../Interface/ISmPrincipalComponentAnalysis/ISmPrincipalComponentAnalysis.htm).


## Свойства объекта класса, унаследованные от [ISmSingularSpectrumAnalysis](../../Interface/ISmSingularSpectrumAnalysis/ISmSingularSpectrumAnalysis.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [Fitted](../../Interface/ISmSingularSpectrumAnalysis/ISmSingularSpectrumAnalysis.Fitted.htm)
		 Свойство Fitted
		 возвращает восстановленный ряд.


		 ![](../../Property.gif)
		 [IncludedComponents](../../Interface/ISmSingularSpectrumAnalysis/ISmSingularSpectrumAnalysis.IncludedComponents.htm)
		 Свойство IncludedComponents
		 определяет, какие из главных компонент используются для восстановления
		 входного ряда.


		 ![](../../Property.gif)
		 [MatrixAlignmentType](../../Interface/ISmSingularSpectrumAnalysis/ISmSingularSpectrumAnalysis.MatrixAlignmentType.htm)
		 Свойство MatrixAlignmentType
		 определяет тип центрирования матрицы исходных данных.


		 ![](../../Property.gif)
		 [MissingData](../../Interface/ISmSingularSpectrumAnalysis/ISmSingularSpectrumAnalysis.MissingData.htm)
		 Свойство MissingData
		 определяет параметры обработки пропусков.


		 ![](../../Property.gif)
		 [ModelPeriod](../../Interface/ISmSingularSpectrumAnalysis/ISmSingularSpectrumAnalysis.ModelPeriod.htm)
		 Свойство ModelPeriod
		 возвращает параметры периода идентификации.


		 ![](../../Property.gif)
		 [P](../../Interface/ISmSingularSpectrumAnalysis/ISmSingularSpectrumAnalysis.P.htm)
		 Свойство P возвращает
		 собственные векторы главных компонент.


		 ![](../../Property.gif)
		 [PCCount](../../Interface/ISmSingularSpectrumAnalysis/ISmSingularSpectrumAnalysis.PCCount.htm)
		 Свойство PCCount
		 определяет количество главных компонент.


		 ![](../../Property.gif)
		 [Residuals](../../Interface/ISmSingularSpectrumAnalysis/ISmSingularSpectrumAnalysis.Residuals.htm)
		 Свойство Residuals
		 возвращает ряд остатков.


		 ![](../../Property.gif)
		 [Serie](../../Interface/ISmSingularSpectrumAnalysis/ISmSingularSpectrumAnalysis.Serie.htm)
		 Свойство Serie
		 возвращает исходный ряд.


		 ![](../../Property.gif)
		 [Statistics](../../Interface/ISmSingularSpectrumAnalysis/ISmSingularSpectrumAnalysis.Statistics.htm)
		 Свойство Statistics
		 возвращает собственные значения и статистики.


		 ![](../../Property.gif)
		 [V](../../Interface/ISmSingularSpectrumAnalysis/ISmSingularSpectrumAnalysis.V.htm)
		 Свойство V возвращает
		 значения главных компонент.


		 ![](../../Property.gif)
		 [Width](../../Interface/ISmSingularSpectrumAnalysis/ISmSingularSpectrumAnalysis.Width.htm)
		 Свойство Width
		 определяет ширину окна.


## Свойства объекта класса, унаследованные [IStatMethod](../../Interface/IStatMethod/IStatMethod.htm)


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


## Методы объекта класса, унаследованные от [IStatMethod](../../Interface/IStatMethod/IStatMethod.htm)


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
 сборки Stat](../StatClass.htm) | [Сингулярный
 спектральный анализ](Lib.chm::/04_Other_models/SingularSpectrumAnalysis.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
