# IMsProblemCalculationSettings

IMsProblemCalculationSettings
-


# IMsProblemCalculationSettings


Сборка: Ms;


## Описание


Интерфейс IMsProblemCalculationSettings
 предназначен для настройки параметров расчета задачи.


## Иерархия наследования


           IMsProblemCalculationSettings


## Комментарии


Для создания параметров расчёта задачи используйте метод [IMsProblem.CreateCalculationSettings](../IMsProblem/IMsProblem.CreateCalculationSettings.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AdvancedOptions](IMsProblemCalculationSettings.AdvancedOptions.htm)
		 Свойство AdvancedOptions
		 определяет дополнительные параметры расчета задачи.


		 ![](../../Property_Image.gif)
		 [AvailableThreads](IMsProblemCalculationSettings.AvailableThreads.htm)
		 Свойство AvailableThreads
		 определяет количество потоков при расчете задачи моделирования.


		 ![](../../Property_Image.gif)
		 [BreakOnError](IMsProblemCalculationSettings.BreakOnError.htm)
		 Свойство BreakOnError
		 определяет, прерывать ли расчет задачи моделирования при возникновении
		 ошибки.


		 ![](../../Property_Image.gif)
		 [Callback](IMsProblemCalculationSettings.Callback.htm)
		 Свойство Callback определяет
		 объект, отслеживающий события, происходящие при расчете задачи
		 в контейнере моделирования.


		 ![](../../Property_Image.gif)
		 [ClearSeriesOnWarning](IMsProblemCalculationSettings.ClearSeriesOnWarning.htm)
		 Свойство ClearSeriesOnWarning
		 определяет, будет ли результирующий ряд пустым при возникновении
		 предупреждения.


		 ![](../../Property_Image.gif)
		 [CorrectStubPeriod](IMsProblemCalculationSettings.CorrectStubPeriod.htm)
		 Свойство CorrectStubPeriod
		 определяет параметры расширения дат задачи моделирования, если
		 её периоды выходят за периоды источника.


		 ![](../../Property_Image.gif)
		 [DataLoadingPeriod](IMsProblemCalculationSettings.DataLoadingPeriod.htm)
		 Свойство DataLoadingPeriod
		 возвращает параметры периода загрузки данных.


		 ![](../../Property_Image.gif)
		 [DataRevisionOrigin](IMsProblemCalculationSettings.DataRevisionOrigin.htm)
		 Свойство DataRevisionOrigin
		 возвращает ключ объекта, инициирующего изменения данных куба.


		 ![](../../Property_Image.gif)
		 [DefaultLevel](IMsProblemCalculationSettings.DefaultLevel.htm)
		 Свойство DefaultLevel
		 определяет уровень календарной динамики, используемый по умолчанию
		 при расчете задачи.


		 ![](../../Property_Image.gif)
		 [Details](IMsProblemCalculationSettings.Details.htm)
		 Свойство Details
		 определяет тип рассчитываемой целевой задачи.


		 ![](../../Property_Image.gif)
		 [EntriesFilter](IMsProblemCalculationSettings.EntriesFilter.htm)
		 Свойство EntriesFilter
		 возвращает коллекцию элементов, рассчитываемых задачей.


		 ![](../../Property_Image.gif)
		 [ExecutionFilter](IMsProblemCalculationSettings.ExecutionFilter.htm)
		 Свойство ExecutionFilter
		 возвращает фильтр, в соответствии с которым формируются точки
		 расчёта.


		 ![](../../Property_Image.gif)
		 [FactIncluded](IMsProblemCalculationSettings.FactIncluded.htm)
		 Свойство FactIncluded
		 определяет, будет ли производиться расчет задачи по сценарию «Факт».


		 ![](../../Property_Image.gif)
		 [FilterLevelsOnLoad](IMsProblemCalculationSettings.FilterLevelsOnLoad.htm)
		 Свойство FilterLevelsOnLoad
		 определяет, загружать ли данные только по тем уровням календаря,
		 которые используются в цепочке расчёта задачи.


		 ![](../../Property_Image.gif)
		 [FilterWarnings](IMsProblemCalculationSettings.FilterWarnings.htm)
		 Свойство FilterWarnings
		 определяет, выводить ли дублирующиеся предупреждения.


		 ![](../../Property_Image.gif)
		 [OutputPeriod](IMsProblemCalculationSettings.OutputPeriod.htm)
		 Свойство OutputPeriod
		 возвращает параметры периода выгрузки данных.


		 ![](../../Property_Image.gif)
		 [ParamValues](IMsProblemCalculationSettings.ParamValues.htm)
		 Свойство ParamValues
		 возвращает значения параметров метамодели, входящей в задачу.


		 ![](../../Property_Image.gif)
		 [Period](IMsProblemCalculationSettings.Period.htm)
		 Свойство Period возвращает
		 параметры периодов идентификации и прогнозирования задачи.


		 ![](../../Property_Image.gif)
		 [PointwiseSettings](IMsProblemCalculationSettings.PointwiseSettings.htm)
		 Свойство PointwiseSettings
		 возвращает параметры поточечного расчёта задачи.


		 ![](../../Property_Image.gif)
		 [RemoteCalc](IMsProblemCalculationSettings.RemoteCalc.htm)
		 Свойство RemoteCalc
		 определяет, используется ли удалённый расчёт задачи моделирования
		 на BI-сервере.


		 ![](../../Property_Image.gif)
		 [ScenarioIncluded](IMsProblemCalculationSettings.ScenarioIncluded.htm)
		 Свойство ScenarioIncluded
		 определяет сценарии задачи моделирования, по которым будет производиться
		 расчёт.


		 ![](../../Property_Image.gif)
		 [StatsLevel](IMsProblemCalculationSettings.StatsLevel.htm)
		 Свойство StatsLevel
		 определяет детализацию [статистик
		 расчёта](../IMsCalculationStats/IMsCalculationStats.htm) задачи моделирования.


		 ![](../../Property_Image.gif)
		 [StubLoadSelections](IMsProblemCalculationSettings.StubLoadSelections.htm)
		 Свойство StubLoadSelections
		 возвращает коллекцию отметок в источниках данных, используемую
		 для загрузки данных при расчёте задачи.


		 ![](../../Property_Image.gif)
		 [ValueFlag](IMsProblemCalculationSettings.ValueFlag.htm)
		 Свойство ValueFlag
		 определяет значение флага, используемого для отметки изменившихся
		 значений.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
