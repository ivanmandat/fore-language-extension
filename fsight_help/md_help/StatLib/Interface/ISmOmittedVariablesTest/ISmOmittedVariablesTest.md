# ISmOmittedVariablesTest

ISmOmittedVariablesTest
-


# ISmOmittedVariablesTest


Сборка: Stat;


## Описание


Интерфейс ISmOmittedVariablesTest
 определяет параметры теста на пропущенные переменные.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmOmittedVariablesTest


## Комментарии


Тест позволяет добавить в существующую регрессию ряд новых факторов
 и проверить, вносят ли новые факторы существенный вклад в вариацию зависимой
 переменной. Метод возвращает статистику Фишера, статистику Хи-квадрат
 и соответствующие значения их вероятностей. Если вероятность существенно
 отличается от нуля (т.е. больше «0,05»), то добавление новых факторов
 в объясняемый ряд не значимо.


Все характеристики, связанные с регрессией (модельный ряд, остатки,
 коэффициенты модели), рассчитываются для модели с дополнительными регрессорами.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [ARMA](ISmOmittedVariablesTest.ARMA.htm)
		 Свойство ARMA определяет
		 параметры авторегрессии и скользящего среднего.


		 ![](../../Property.gif)
		 [ChiTest](ISmOmittedVariablesTest.ChiTest.htm)
		 Свойство ChiTest возвращает
		 значения статистики хи-квадрат.


		 ![](../../Property.gif)
		 [Explained](ISmOmittedVariablesTest.Explained.htm)
		 Свойство Explained
		 определяет объясняемый ряд.


		 ![](../../Property.gif)
		 [Explanatories](ISmOmittedVariablesTest.Explanatories.htm)
		 Свойство Explanatories
		 определяет объясняющие ряды.


		 ![](../../Property.gif)
		 [Fitted](ISmOmittedVariablesTest.Fitted.htm)
		 Свойство Fitted возвращает
		 модельный ряд, который рассчитывается для модели с дополнительными
		 регрессорами.


		 ![](../../Property.gif)
		 [FTest](ISmOmittedVariablesTest.FTest.htm)
		 Свойство FTest возвращает
		 значения статистики Фишера.


		 ![](../../Property.gif)
		 [MissingData](ISmOmittedVariablesTest.MissingData.htm)
		 Свойство MissingData
		 определяет метод обработки пропусков.


		 ![](../../Property.gif)
		 [ModelCoefficients](ISmOmittedVariablesTest.ModelCoefficients.htm)
		 Свойство ModelCoefficients
		 возвращает параметры коэффициентов модели.


		 ![](../../Property.gif)
		 [ModelPeriod](ISmOmittedVariablesTest.ModelPeriod.htm)
		 Свойство ModelPeriod
		 определяет параметры периода идентификации.


		 ![](../../Property.gif)
		 [OmittedExplanatories](ISmOmittedVariablesTest.OmittedExplanatories.htm)
		 Свойство OmittedExplanatories
		 определяет дополнительные регрессоры (пропущенные переменные).


		 ![](../../Property.gif)
		 [Residuals](ISmOmittedVariablesTest.Residuals.htm)
		 Свойство Residuals
		 возвращает ряд остатков, которые рассчитывается для модели с дополнительными
		 регрессорами.


		 ![](../../Property.gif)
		 [SummaryStatistics](ISmOmittedVariablesTest.SummaryStatistics.htm)
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
