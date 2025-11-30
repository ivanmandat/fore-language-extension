# ISmWhiteHeteroskedasticityTest

ISmWhiteHeteroskedasticityTest
-


# ISmWhiteHeteroskedasticityTest


Сборка: Stat;


## Описание


Интерфейс ISmWhiteHeteroskedasticityTest
 определяет параметры теста Уайта на гетероскедастичность остатков модели
 линейной регрессии.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmWhiteHeteroskedasticityTest


## Комментарии


Если значение вероятности меньше 0.05, то говорят, что нулевая гипотеза
 (остатки гетероскедастичны) отклоняется на уровне значимости «0,05».


Гипотезы:


	- H0. Остатки
	 не гетероскедастичны;


	- H1. Остатки
	 гетероскедастичны.


Функция возвращает статистику хи-квадрат (скорректированный коэффициент
 детерминации помноженный на число наблюдений) и соответствующее значение
 вероятностей.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [ARMA](ISmWhiteHeteroskedasticityTest.ARMA.htm)


		 Свойство ARMA определяет
		 порядки авторегрессии и скользящего среднего.


		 ![](../../Property.gif)
		 [ChiTest](ISmWhiteHeteroskedasticityTest.ChiTest.htm)


		 Свойство ChiTest возвращает
		 значения статистики хи-квадрат.


		 ![](../../Property.gif)
		 [CrossProduction](ISmWhiteHeteroskedasticityTest.CrossProduction.htm)


		 Свойство CrossProduction
		 определяет будут ли использованы попарные произведения регрессоров
		 (объясняющих рядов).


		 ![](../../Property.gif)
		 [Explained](ISmWhiteHeteroskedasticityTest.Explained.htm)


		 Свойство Explained
		 определяет объясняемый ряд.


		 ![](../../Property.gif)
		 [Explanatories](ISmWhiteHeteroskedasticityTest.Explanatories.htm)


		 Свойство Explanatories
		 определяет объясняющие ряды.


		 ![](../../Property.gif)
		 [Fitted](ISmWhiteHeteroskedasticityTest.Fitted.htm)


		 Свойство Fitted возвращает
		 модельный ряд.


		 ![](../../Property.gif)
		 [MissingData](ISmWhiteHeteroskedasticityTest.MissingData.htm)


		 Свойство MissingData
		 определяет метод обработки пропусков.


		 ![](../../Property.gif)
		 [ModelCoefficients](ISmWhiteHeteroskedasticityTest.ModelCoefficients.htm)


		 Свойство ModelCoefficients
		 возвращает параметры коэффициентов вспомогательной модели.


		 ![](../../Property.gif)
		 [ModelPeriod](ISmWhiteHeteroskedasticityTest.ModelPeriod.htm)


		 Свойство ModelPeriod
		 определяет параметры периода идентификации.


		 ![](../../Property.gif)
		 [Residuals](ISmWhiteHeteroskedasticityTest.Residuals.htm)


		 Свойство Residuals
		 возвращает ряд остатков.


		 ![](../../Property.gif)
		 [SummaryStatistics](ISmWhiteHeteroskedasticityTest.SummaryStatistics.htm)


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


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
