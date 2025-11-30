# ISmSingularSpectrumAnalysis

ISmSingularSpectrumAnalysis
-


# ISmSingularSpectrumAnalysis


Сборка: Stat;


## Описание


Интерфейс ISmSingularSpectrumAnalysis предназначен
 для выполнения сингулярного спектрального анализа временных рядов.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmSingularSpectrumAnalysis


## Комментарии


Сингулярный спектральный анализ - метод анализа временных рядов, основанный
 на представлении временного ряда в виде последовательности векторов достаточно
 большой размерности с последующим применением к ним [метода
 главных компонент](../ISmPrincipalComponentAnalysis/ISmPrincipalComponentAnalysis.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [Fitted](ISmSingularSpectrumAnalysis.Fitted.htm)
		 Свойство Fitted
		 возвращает восстановленный ряд.


		 ![](../../Property.gif)
		 [IncludedComponents](ISmSingularSpectrumAnalysis.IncludedComponents.htm)
		 Свойство IncludedComponents
		 определяет, какие из главных компонент используются для восстановления
		 входного ряда.


		 ![](../../Property.gif)
		 [MatrixAlignmentType](ISmSingularSpectrumAnalysis.MatrixAlignmentType.htm)
		 Свойство MatrixAlignmentType
		 определяет тип центрирования матрицы исходных данных.


		 ![](../../Property.gif)
		 [MissingData](ISmSingularSpectrumAnalysis.MissingData.htm)
		 Свойство MissingData
		 определяет параметры обработки пропусков.


		 ![](../../Property.gif)
		 [ModelPeriod](ISmSingularSpectrumAnalysis.ModelPeriod.htm)
		 Свойство ModelPeriod
		 возвращает параметры периода идентификации.


		 ![](../../Property.gif)
		 [P](ISmSingularSpectrumAnalysis.P.htm)
		 Свойство P возвращает
		 собственные векторы главных компонент.


		 ![](../../Property.gif)
		 [PCCount](ISmSingularSpectrumAnalysis.PCCount.htm)
		 Свойство PCCount
		 определяет количество главных компонент.


		 ![](../../Property.gif)
		 [Residuals](ISmSingularSpectrumAnalysis.Residuals.htm)
		 Свойство Residuals
		 возвращает ряд остатков.


		 ![](../../Property.gif)
		 [Serie](ISmSingularSpectrumAnalysis.Serie.htm)
		 Свойство Serie
		 возвращает исходный ряд.


		 ![](../../Property.gif)
		 [Statistics](ISmSingularSpectrumAnalysis.Statistics.htm)
		 Свойство Statistics
		 возвращает собственные значения и статистики.


		 ![](../../Property.gif)
		 [V](ISmSingularSpectrumAnalysis.V.htm)
		 Свойство V возвращает
		 значения главных компонент.


		 ![](../../Property.gif)
		 [Width](ISmSingularSpectrumAnalysis.Width.htm)
		 Свойство Width
		 определяет ширину окна.


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
 | [Сингулярный
 спектральный анализ](Lib.chm::/04_Other_models/SingularSpectrumAnalysis.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
