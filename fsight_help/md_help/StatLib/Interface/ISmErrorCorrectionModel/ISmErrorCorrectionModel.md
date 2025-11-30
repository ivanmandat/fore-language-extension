# ISmErrorCorrectionModel

ISmErrorCorrectionModel
-


# ISmErrorCorrectionModel


Сборка: Stat;


## Описание


Интерфейс ISmErrorCorrectionModel
 определяет параметры модели коррекции ошибок (ECM).


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmErrorCorrectionModel


## Комментарии


Каждое уравнение модели коррекции ошибок представляет собой ничем не
 связанное с другими уравнение множественной регрессии и линейную комбинацию
 эндогенных переменных, называемую корректирующей составляющей. Поэтому
 оценка неизвестных величин осуществляется методом наименьших квадратов
 для каждого уравнения в отдельности. Статистические характеристики регрессионных
 уравнений и статистические характеристики коэффициентов вычисляются обычным
 образом.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [CointegralCount](ISmErrorCorrectionModel.CointegralCount.htm)


		 Свойство CointegralCount
		 определяет число коинтеграционных связей.


		 ![](../../Property.gif)
		 [CointegralEquations](ISmErrorCorrectionModel.CointegralEquations.htm)


		 Свойство CointegralEquations
		 возвращает значения коэффициентов коинтеграционных уравнений.


		 ![](../../Property.gif)
		 [CointegralEquationsSE](ISmErrorCorrectionModel.CointegralEquationsSE.htm)


		 Свойство CointegralEquationsSE
		 возвращает стандартные ошибки коинтеграционных уравнений.


		 ![](../../Property.gif)
		 [CointegralEquationsTstat](ISmErrorCorrectionModel.CointegralEquationsTstat.htm)


		 Свойство CointegralEquationsTstat
		 возвращает t-статистики коэффициентов коинтеграционных уравнений.


		 ![](../../Property.gif)
		 [Equations](ISmErrorCorrectionModel.Equations.htm)


		 Свойство Equations
		 определяет параметры коллекции уравнений.


		 ![](../../Property.gif)
		 [MissingData](ISmErrorCorrectionModel.MissingData.htm)


		 Свойство MissingData
		 определяет параметры обработки пропусков.


		 ![](../../Property.gif)
		 [ModelPeriod](ISmErrorCorrectionModel.ModelPeriod.htm)


		 Свойство ModelPeriod
		 определяет период идентификации.


		 ![](../../Property.gif)
		 [ModelType](ISmErrorCorrectionModel.ModelType.htm)


		 Свойство ModelType
		 определяет тип модели.


		 ![](../../Property.gif)
		 [VARStatistics](ISmErrorCorrectionModel.VARStatistics.htm)


		 Свойство VARStatistics
		 возвращает статистики векторной авторегрессии.


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
 | [Модель
 коррекции ошибок](Lib.chm::/02_Time_series_analysis/UiModelling_ErrCorrModel.htm) | [Векторная модель
 коррекции ошибок](Lib.chm::/02_Time_series_analysis/Lib_VECM.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
