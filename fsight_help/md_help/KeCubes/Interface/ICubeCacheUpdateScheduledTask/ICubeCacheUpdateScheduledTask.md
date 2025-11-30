# ICubeCacheUpdateScheduledTask

ICubeCacheUpdateScheduledTask
-


# ICubeCacheUpdateScheduledTask


Сборка: Cubes;


## Описание


Интерфейс ICubeCacheUpdateSheduledTask
 содержит свойства и методы, используемые для работы с задачей контейнера
 запланированных задач - Обновление кеша объекта репозитория.


## Иерархия наследования


[IScheduledTask](KeFore.chm::/Interface/IScheduledTask/IScheduledTask.htm)


           ICubeCacheUpdateScheduledTask


## Комментарии


Возможность использования интерфейса доступна на серверах:


	- Oracle;


	- Microsoft SQL.


Для получения поддерживаемых версий СУБД обратитесь к разделу «[Поддерживаемые СУБД](Setup.chm::/01_SysReq/database_Support.htm)».


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DestKey](ICubeCacheUpdateScheduledTask.DestKey.htm)
		 Свойство DestKey определяет
		 ключ [варианта
		 отображения куба](../ICubeModelDestination/ICubeModelDestination.htm).


		 ![](../../Property_Image.gif)
		 [SourceCube](ICubeCacheUpdateScheduledTask.SourceCube.htm)
		 Свойство SourceCube
		 определяет вычисляемый куб, для которого необходимо создать запланированную
		 задачу обновления кеша.


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


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [LoadSelection](ICubeCacheUpdateScheduledTask.LoadSelection.htm)
		 Метод LoadSelection
		 копирует отметку, в соответствии с которой осуществляется обновление
		 кеша данных в кубе.


		 ![](../../Sub_Image.gif)
		 [SetSelection](ICubeCacheUpdateScheduledTask.SetSelection.htm)
		 Метод SetSelection
		 осуществляет установку отметки, в соответствии с которой будет
		 выполняться обновление кеша данных для куба при выполнении задачи.


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
		 осуществляет сброс результатов выполнения задачи и переводит её
		 в состояние «Готова».


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
