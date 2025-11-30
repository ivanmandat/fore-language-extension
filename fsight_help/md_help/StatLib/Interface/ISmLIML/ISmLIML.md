# ISmLIML

ISmLIML
-


# ISmLIML


Сборка: Stat;


## Описание


Интерфейс ISmLIML предназначен
 для работы с методом максимального правдоподобия с ограниченной информацией
 и методом оценки K-class.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmLIML


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [CovarianceMatrix](ISmLIML.CovarianceMatrix.htm)
		 Свойство CovarianceMatrix
		 возвращает значения ковариационной матрицы.


		 ![](../../Property.gif)
		 [Explained](ISmLIML.Explained.htm)
		 Свойство Explained
		 возвращает исходный ряд.


		 ![](../../Property.gif)
		 [Explanatories](ISmLIML.Explanatories.htm)
		 Свойство Explanatories возвращает
		 объясняющие ряды.


		 ![](../../Property.gif)
		 [Fitted](ISmLIML.Fitted.htm)
		 Свойство Fitted возвращает
		 модельный ряд.


		 ![](../../Property.gif)
		 [Forecast](ISmLIML.Forecast.htm)
		 Свойство Forecast
		 возвращает параметры прогнозного ряда.


		 ![](../../Property.gif)
		 [Instrumental](ISmLIML.Instrumental.htm)
		 Свойство Instrumental
		 возвращает инструментальные переменные.


		 ![](../../Property.gif)
		 [KClass](ISmLIML.KClass.htm)
		 Свойство KClass
		 определяет параметр k
		 для метода K-class.


		 ![](../../Property.gif)
		 [MissingData](ISmLIML.MissingData.htm)
		 Свойство MissingData возвращает
		 параметры обработки пропусков.


		 ![](../../Property.gif)
		 [ModelCoefficients](ISmLIML.ModelCoefficients.htm)
		 Свойство ModelCoefficients возвращает
		 оценки коэффициентов модели и их характеристики.


		 ![](../../Property.gif)
		 [ModelPeriod](ISmLIML.ModelPeriod.htm)
		 Свойство ModelPeriod возвращает
		 параметры периода идентификации.


		 ![](../../Property.gif)
		 [Residuals](ISmLIML.Residuals.htm)
		 Свойство Residuals возвращает
		 ряд остатков.


		 ![](../../Property.gif)
		 [SummaryStatistics](ISmLIML.SummaryStatistics.htm)
		 Свойство SummaryStatistics возвращает
		 описательные характеристики.


		 ![](../../Property.gif)
		 [UseConstantAsInstrument](ISmLIML.UseConstantAsInstrument.htm)
		 Свойство UseConstantAsInstrument определяет,
		 использовать ли константу в качестве инструментальной переменной.


		 ![](../../Property.gif)
		 [UseKClass](ISmLIML.UseKClass.htm)
		 Свойство UseKClass
		 определяет, использовать ли метод K-class вместо LIML.


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


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
