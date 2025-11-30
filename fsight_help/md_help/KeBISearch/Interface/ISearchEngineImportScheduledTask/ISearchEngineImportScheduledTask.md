# ISearchEngineImportScheduledTask

ISearchEngineImportScheduledTask
-


# ISearchEngineImportScheduledTask


Сборка: BISearch;


## Описание


Интерфейс ISearchEngineImportScheduledTask
 содержит свойства и методы для работы с задачей контейнера запланированных
 задач - [Обновление
 поискового индекса](UiAppSrv.chm::/3_Work_Tasks/Updating_the_search_index_task.htm).


## Иерархия наследования


           [IScheduledTask](KeFore.chm::/Interface/IScheduledTask/IScheduledTask.htm)


           ISearchEngineImportScheduledTask


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Engine](ISearchEngineImportScheduledTask.Engine.htm)
		 Свойство Engine определяет
		 поисковый сервис, с которым будет осуществляться работа.


		 ![](../../Property_Image.gif)
		 [IsSharedEngine](ISearchEngineImportScheduledTask.IsSharedEngine.htm)
		 Свойство IsSharedEngine
		 возвращает признак использования поискового сервиса, настроенного
		 для репозитория.


## Свойства, унаследованные от [IScheduledTask](KeFore.chm::/Interface/IScheduledTask/IScheduledTask.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Properties](KeFore.chm::/Interface/IScheduledTask/IScheduledTask.Properties.htm)


		 Свойство Properties
		 возвращает параметры задачи.


		 ![](../../Property_Image.gif)
		 [State](KeFore.chm::/Interface/IScheduledTask/IScheduledTask.State.htm)


		 Свойство State возвращает
		 состояние задачи в текущий момент времени.


## Методы, унаследованные от [IScheduledTask](KeFore.chm::/Interface/IScheduledTask/IScheduledTask.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateInvokeEvent](KeFore.chm::/Interface/IScheduledTask/IScheduledTask.CreateInvokeEvent.htm)
		 Метод CreateInvokeEvent
		 создает новое событие выполнения задачи контейнера запланированных
		 задач.


		 ![](../../Sub_Image.gif)
		 [ExecuteImmediate](KeFore.chm::/Interface/IScheduledTask/IScheduledTask.ExecuteImmediate.htm)
		 Метод ExecuteImmediate
		 выполняет задачу в текущем репозитории.


		 ![](../../Sub_Image.gif)
		 [GetResults](KeFore.chm::/Interface/IScheduledTask/IScheduledTask.GetResults.htm)
		 Метод GetResults возвращает
		 историю выполнения задачи.


		 ![](../../Sub_Image.gif)
		 [ResetResults](KeFore.chm::/Interface/IScheduledTask/IScheduledTask.ResetResults.htm)
		 Метод ResetResults
		 осуществляет сброс результатов выполнения задачи и переводит ее
		 в состояние «Готова».


См. также:


[Интерфейсы
 сборки BISearch](../KeBISearch_Interface.htm) | [Задача
 обновления поискового индекса](UiAppSrv.chm::/3_Work_Tasks/Updating_the_search_index_task.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
