# SmARCHTest

SmARCHTest
-


# SmARCHTest


Сборка: Stat;


## Описание


Класс SmARCHTest предназначен
 для работы с параметрами теста ARCH на гетероскедастичность.


## Комментарии


Тест возвращает значение статистики Фишера и статистики Энгла.


## Свойства, унаследованные от [ISmARCHTest](../../Interface/ISmARCHTest/ISmARCHTest.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [ARMA](../../Interface/ISmARCHTest/ISmARCHTest.ARMA.htm)


		 Свойство ARMA возвращает
		 параметры авторегрессии и скользящего среднего.


		 ![](../../Property.gif)
		 [AutoRegressionOrder](../../Interface/ISmARCHTest/ISmARCHTest.AutoRegressionOrder.htm)


		 Свойство AutoRegressionOrder
		 определяет лаг.


		 ![](../../Property.gif)
		 [Explained](../../Interface/ISmARCHTest/ISmARCHTest.Explained.htm)


		 Свойство Explained
		 возвращает объясняемый ряд.


		 ![](../../Property.gif)
		 [Explanatories](../../Interface/ISmARCHTest/ISmARCHTest.Explanatories.htm)


		 Свойство Explanatories
		 возвращает объясняющие ряды.


		 ![](../../Property.gif)
		 [Fitted](../../Interface/ISmARCHTest/ISmARCHTest.Fitted.htm)


		 Свойство Fitted возвращает
		 модельный ряд вспомогательной регресии.


		 ![](../../Property.gif)
		 [FStatistic](../../Interface/ISmARCHTest/ISmARCHTest.FStatistic.htm)


		 Свойство FStatistic
		 возвращает значение статистики Фишера.


		 ![](../../Property.gif)
		 [MissingData](../../Interface/ISmARCHTest/ISmARCHTest.MissingData.htm)


		 Свойство MissingData
		 возвращает метод обработки пропусков.


		 ![](../../Property.gif)
		 [ModelCoefficients](../../Interface/ISmARCHTest/ISmARCHTest.ModelCoefficients.htm)


		 Свойство ModelCoefficients
		 возвращает оценки коэффициентов вспомогательной регрессии и их
		 характеристики.


		 ![](../../Property.gif)
		 [ModelPeriod](../../Interface/ISmARCHTest/ISmARCHTest.ModelPeriod.htm)


		 Свойство ModelPeriod
		 возвращает параметры периода идентификации.


		 ![](../../Property.gif)
		 [ObsR2](../../Interface/ISmARCHTest/ISmARCHTest.ObsR2.htm)


		 Свойство ObsR2 возвращает
		 значение статистики Энгла.


		 ![](../../Property.gif)
		 [Residuals](../../Interface/ISmARCHTest/ISmARCHTest.Residuals.htm)


		 Свойство Residuals
		 возвращает ряд остатков вспомогательной регрессии.


		 ![](../../Property.gif)
		 [SummaryStatistics](../../Interface/ISmARCHTest/ISmARCHTest.SummaryStatistics.htm)


		 Свойство SummaryStatistics
		 возвращает описательные характеристики вспомогательной регрессии.


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
