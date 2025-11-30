# SmLIML

SmLIML
-


# SmLIML


Сборка: Stat;


## Описание


Класс SmLIML предназначен для
 работы с методом максимального правдоподобия с ограниченной информацией
 и методом оценки K-class.


## Свойства, унаследованные от [ISmLIML](../../Interface/ISmLIML/ISmLIML.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [CovarianceMatrix](../../Interface/ISmLIML/ISmLIML.CovarianceMatrix.htm)
		 Свойство CovarianceMatrix
		 возвращает значения ковариационной матрицы.


		 ![](../../Property.gif)
		 [Explained](../../Interface/ISmLIML/ISmLIML.Explained.htm)
		 Свойство Explained
		 возвращает исходный ряд.


		 ![](../../Property.gif)
		 [Explanatories](../../Interface/ISmLIML/ISmLIML.Explanatories.htm)
		 Свойство Explanatories возвращает
		 объясняющие ряды.


		 ![](../../Property.gif)
		 [Fitted](../../Interface/ISmLIML/ISmLIML.Fitted.htm)
		 Свойство Fitted возвращает
		 модельный ряд.


		 ![](../../Property.gif)
		 [Forecast](../../Interface/ISmLIML/ISmLIML.Forecast.htm)
		 Свойство Forecast
		 возвращает параметры прогнозного ряда.


		 ![](../../Property.gif)
		 [Instrumental](../../Interface/ISmLIML/ISmLIML.Instrumental.htm)
		 Свойство Instrumental
		 возвращает инструментальные переменные.


		 ![](../../Property.gif)
		 [KClass](../../Interface/ISmLIML/ISmLIML.KClass.htm)
		 Свойство KClass
		 определяет параметр k
		 для метода K-class.


		 ![](../../Property.gif)
		 [MissingData](../../Interface/ISmLIML/ISmLIML.MissingData.htm)
		 Свойство MissingData возвращает
		 параметры обработки пропусков.


		 ![](../../Property.gif)
		 [ModelCoefficients](../../Interface/ISmLIML/ISmLIML.ModelCoefficients.htm)
		 Свойство ModelCoefficients возвращает
		 оценки коэффициентов модели и их характеристики.


		 ![](../../Property.gif)
		 [ModelPeriod](../../Interface/ISmLIML/ISmLIML.ModelPeriod.htm)
		 Свойство ModelPeriod возвращает
		 параметры периода идентификации.


		 ![](../../Property.gif)
		 [Residuals](../../Interface/ISmLIML/ISmLIML.Residuals.htm)
		 Свойство Residuals возвращает
		 ряд остатков.


		 ![](../../Property.gif)
		 [SummaryStatistics](../../Interface/ISmLIML/ISmLIML.SummaryStatistics.htm)
		 Свойство SummaryStatistics возвращает
		 описательные характеристики.


		 ![](../../Property.gif)
		 [UseConstantAsInstrument](../../Interface/ISmLIML/ISmLIML.UseConstantAsInstrument.htm)
		 Свойство UseConstantAsInstrument определяет,
		 использовать ли константу в качестве инструментальной переменной.


		 ![](../../Property.gif)
		 [UseKClass](../../Interface/ISmLIML/ISmLIML.UseKClass.htm)
		 Свойство UseKClass
		 определяет, использовать ли метод K-class вместо LIML.


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
