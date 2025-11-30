# SmRamseyRESSETTest

SmRamseyRESSETTest
-


# SmRamseyRESSETTest


## Описание


Класс SmRamseyRESSETTest реализует алгоритм теста (RESET тест) на наличие ошибок спецификации модели линейной регрессии (Критерий функциональной формы).


## Свойства, унаследованные от [ISmRamseyRESSETTest](../../Interface/ISmRamseyRESSETTest/ISmRamseyRESSETTest.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [ARMA](../../Interface/ISmRamseyRESSETTest/ISmRamseyRESSETTest.ARMA.htm)


		 Свойство ARMA определяет
		 параметры авторегрессии и скользящего среднего.


		 ![](../../Property.gif)
		 [ChiTest](../../Interface/ISmRamseyRESSETTest/ISmRamseyRESSETTest.ChiTest.htm)


		 Свойство ChiTest возвращает
		 значения статистики хи-квадрат.


		 ![](../../Property.gif)
		 [Explained](../../Interface/ISmRamseyRESSETTest/ISmRamseyRESSETTest.Explained.htm)


		 Свойство Explained
		 определяет объясняемый ряд.


		 ![](../../Property.gif)
		 [Explanatories](../../Interface/ISmRamseyRESSETTest/ISmRamseyRESSETTest.Explanatories.htm)


		 Свойство Explanatories
		 определяет объясняющие ряды.


		 ![](../../Property.gif)
		 [Fitted](../../Interface/ISmRamseyRESSETTest/ISmRamseyRESSETTest.Fitted.htm)


		 Свойство Fitted возвращает
		 модельный ряд.


		 ![](../../Property.gif)
		 [FTest](../../Interface/ISmRamseyRESSETTest/ISmRamseyRESSETTest.FTest.htm)


		 Свойство FTest возвращает
		 значения статистики Фишера.


		 ![](../../Property.gif)
		 [MissingData](../../Interface/ISmRamseyRESSETTest/ISmRamseyRESSETTest.MissingData.htm)


		 Свойство MissingData
		 определяет метод обработки пропусков.


		 ![](../../Property.gif)
		 [ModelCoefficients](../../Interface/ISmRamseyRESSETTest/ISmRamseyRESSETTest.ModelCoefficients.htm)


		 Свойство ModelCoefficients
		 возвращает параметры коэффициентов модели.


		 ![](../../Property.gif)
		 [ModelPeriod](../../Interface/ISmRamseyRESSETTest/ISmRamseyRESSETTest.ModelPeriod.htm)


		 Свойство ModelPeriod
		 определяет параметры периода идентификации.


		 ![](../../Property.gif)
		 [Power](../../Interface/ISmRamseyRESSETTest/ISmRamseyRESSETTest.Power.htm)


		 Свойство Power определяет
		 число дополнительных регрессоров, входящих в тестовую регрессию.


		 ![](../../Property.gif)
		 [Residuals](../../Interface/ISmRamseyRESSETTest/ISmRamseyRESSETTest.Residuals.htm)


		 Свойство Residuals
		 возвращает ряд остатков.


		 ![](../../Property.gif)
		 [SummaryStatistics](../../Interface/ISmRamseyRESSETTest/ISmRamseyRESSETTest.SummaryStatistics.htm)


		 Свойство SummaryStatistics
		 возвращает статистические характеристики.


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


[Классы сборки Stat](../StatClass.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
