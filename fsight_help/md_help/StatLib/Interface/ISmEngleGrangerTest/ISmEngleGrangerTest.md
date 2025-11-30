# ISmEngleGrangerTest

ISmEngleGrangerTest
-


# ISmEngleGrangerTest


Сборка: Stat;


## Описание


Интерфейс ISmEngleGrangerTest
 предназначен для работы с параметрами теста Энгла-Гранжера.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmEngleGrangerTest


## Комментарии


Тест основан на предположении о том, что если остатки коинтеграционной
 модели нестационарны (имеют единичный корень), то коинтеграция временных
 рядов отсутствует.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [AutomaticAROrderSelectionSettings](ISmEngleGrangerTest.AutomaticAROrderSelectionSettings.htm)
		 Свойство AutomaticAROrderSelectionSettings
		 определяет параметры автоподбора лага.


		 ![](../../Property.gif)
		 [AutoRegressionOrder](ISmEngleGrangerTest.AutoRegressionOrder.htm)
		 Свойство AutoRegressionOrder
		 определяет порядок авторегрессии.


		 ![](../../Property.gif)
		 [CointegratingRegressors](ISmEngleGrangerTest.CointegratingRegressors.htm)
		 Свойство CointegratingRegressors
		 возвращает коинтегрирующие регрессоры.


		 ![](../../Property.gif)
		 [DeterministicRegressors](ISmEngleGrangerTest.DeterministicRegressors.htm)
		 Свойство DeterministicRegressors
		 возвращает детерминированные регрессоры.


		 ![](../../Property.gif)
		 [DFAdjustment](ISmEngleGrangerTest.DFAdjustment.htm)
		 Свойство DFAdjustment
		 определяет, будет ли учитываться количество степеней свободы.


		 ![](../../Property.gif)
		 [Explained](ISmEngleGrangerTest.Explained.htm)
		 Свойство Explained
		 возвращает объясняемый ряд.


		 ![](../../Property.gif)
		 [MissingData](ISmEngleGrangerTest.MissingData.htm)
		 Свойство MissingData
		 возвращает метод обработки пропусков.


		 ![](../../Property.gif)
		 [ModelCoefficients](ISmEngleGrangerTest.ModelCoefficients.htm)
		 Свойство ModelCoefficients
		 возвращает оценки коэффициентов модели и их характеристики.


		 ![](../../Property.gif)
		 [ModelPeriod](ISmEngleGrangerTest.ModelPeriod.htm)
		 Свойство ModelPeriod возвращает
		 параметры периода идентификации.


		 ![](../../Property.gif)
		 [SummaryStatistics](ISmEngleGrangerTest.SummaryStatistics.htm)
		 Свойство SummaryStatistics
		 возвращает описательные статистики вспомогательной регрессии.


		 ![](../../Property.gif)
		 [TauStat](ISmEngleGrangerTest.TauStat.htm)
		 Свойство TauStat возвращает
		 значение τ-статистики
		 теста Энгла-Гранжера.


		 ![](../../Property.gif)
		 [TrendSpecification](ISmEngleGrangerTest.TrendSpecification.htm)
		 Свойство TrendSpecification
		 определяет спецификацию тренда.


		 ![](../../Property.gif)
		 [UseAutomaticAROrderSelection](ISmEngleGrangerTest.UseAutomaticAROrderSelection.htm)
		 Свойство UseAutomaticAROrderSelection
		 определяет, применять ли автоподбор лага.


		 ![](../../Property.gif)
		 [ZStat](ISmEngleGrangerTest.ZStat.htm)
		 Свойство ZStat возвращает
		 значение z-статистики
		 теста Энгла-Гранжера.


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
