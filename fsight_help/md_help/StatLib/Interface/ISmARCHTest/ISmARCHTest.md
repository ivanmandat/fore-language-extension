# ISmARCHTest

ISmARCHTest
-


# ISmARCHTest


Сборка: Stat;


## Описание


Интерфейс ISmARCHTest предназначен
 для работы с параметрами теста ARCH на гетероскедастичность.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmARCHTest


## Комментарии


Тест возвращает значение статистики Фишера и статистики Энгла.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [ARMA](ISmARCHTest.ARMA.htm)


		 Свойство ARMA возвращает
		 параметры авторегрессии и скользящего среднего.


		 ![](../../Property.gif)
		 [AutoRegressionOrder](ISmARCHTest.AutoRegressionOrder.htm)


		 Свойство AutoRegressionOrder
		 определяет лаг.


		 ![](../../Property.gif)
		 [Explained](ISmARCHTest.Explained.htm)


		 Свойство Explained
		 возвращает объясняемый ряд.


		 ![](../../Property.gif)
		 [Explanatories](ISmARCHTest.Explanatories.htm)


		 Свойство Explanatories
		 возвращает объясняющие ряды.


		 ![](../../Property.gif)
		 [Fitted](ISmARCHTest.Fitted.htm)


		 Свойство Fitted возвращает
		 модельный ряд вспомогательной регресии.


		 ![](../../Property.gif)
		 [FStatistic](ISmARCHTest.FStatistic.htm)


		 Свойство FStatistic
		 возвращает значение статистики Фишера.


		 ![](../../Property.gif)
		 [MissingData](ISmARCHTest.MissingData.htm)


		 Свойство MissingData
		 возвращает метод обработки пропусков.


		 ![](../../Property.gif)
		 [ModelCoefficients](ISmARCHTest.ModelCoefficients.htm)


		 Свойство ModelCoefficients
		 возвращает оценки коэффициентов вспомогательной регрессии и их
		 характеристики.


		 ![](../../Property.gif)
		 [ModelPeriod](ISmARCHTest.ModelPeriod.htm)


		 Свойство ModelPeriod
		 возвращает параметры периода идентификации.


		 ![](../../Property.gif)
		 [ObsR2](ISmARCHTest.ObsR2.htm)


		 Свойство ObsR2 возвращает
		 значение статистики Энгла.


		 ![](../../Property.gif)
		 [Residuals](ISmARCHTest.Residuals.htm)


		 Свойство Residuals
		 возвращает ряд остатков вспомогательной регрессии.


		 ![](../../Property.gif)
		 [SummaryStatistics](ISmARCHTest.SummaryStatistics.htm)


		 Свойство SummaryStatistics
		 возвращает описательные характеристики вспомогательной регрессии.


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
