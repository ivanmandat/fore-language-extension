# SmErrorCorrectionModel

SmErrorCorrectionModel
-


# SmErrorCorrectionModel


## Описание


Класс SmErrorCorrectionModel
 реализует алгоритм расчета модели коррекции ошибок (ECM).


## Свойства, унаследованные от [ISmErrorCorrectionModel](../../Interface/ISmErrorCorrectionModel/ISmErrorCorrectionModel.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [CointegralCount](../../Interface/ISmErrorCorrectionModel/ISmErrorCorrectionModel.CointegralCount.htm)


		 Свойство CointegralCount
		 определяет число коинтеграционных связей.


		 ![](../../Property.gif)
		 [CointegralEquations](../../Interface/ISmErrorCorrectionModel/ISmErrorCorrectionModel.CointegralEquations.htm)


		 Свойство CointegralEquations
		 возвращает значения коэффициентов коинтеграционных уравнений.


		 ![](../../Property.gif)
		 [CointegralEquationsSE](../../Interface/ISmErrorCorrectionModel/ISmErrorCorrectionModel.CointegralEquationsSE.htm)


		 Свойство CointegralEquationsSE
		 возвращает стандартные ошибки коинтеграционных уравнений.


		 ![](../../Property.gif)
		 [CointegralEquationsTstat](../../Interface/ISmErrorCorrectionModel/ISmErrorCorrectionModel.CointegralEquationsTstat.htm)


		 Свойство CointegralEquationsTstat
		 возвращает t-статистики коэффициентов коинтеграционных уравнений.


		 ![](../../Property.gif)
		 [Equations](../../Interface/ISmErrorCorrectionModel/ISmErrorCorrectionModel.Equations.htm)


		 Свойство Equations
		 определяет параметры коллекции уравнений.


		 ![](../../Property.gif)
		 [MissingData](../../Interface/ISmErrorCorrectionModel/ISmErrorCorrectionModel.MissingData.htm)


		 Свойство MissingData
		 определяет параметры обработки пропусков.


		 ![](../../Property.gif)
		 [ModelPeriod](../../Interface/ISmErrorCorrectionModel/ISmErrorCorrectionModel.ModelPeriod.htm)


		 Свойство ModelPeriod
		 определяет период идентификации.


		 ![](../../Property.gif)
		 [ModelType](../../Interface/ISmErrorCorrectionModel/ISmErrorCorrectionModel.ModelType.htm)


		 Свойство ModelType
		 определяет тип модели.


		 ![](../../Property.gif)
		 [VARStatistics](../../Interface/ISmErrorCorrectionModel/ISmErrorCorrectionModel.VARStatistics.htm)


		 Свойство VARStatistics
		 возвращает статистики векторной авторегрессии.


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
 [Модель
 коррекции ошибок](Lib.chm::/02_Time_series_analysis/UiModelling_ErrCorrModel.htm) | [Векторная модель
 коррекции ошибок](Lib.chm::/02_Time_series_analysis/Lib_VECM.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
