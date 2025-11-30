# ICalculateModelScheduledTask

ICalculateModelScheduledTask
-


# ICalculateModelScheduledTask


Сборка: Ms;


## Описание


Интерфейс ICalculateModelScheduledTask
 предназначен для работы задачей в контейнере запланированных задач, рассчитывающей
 задачу моделирования.


## Иерархия наследования


           [IScheduledTask](KeFore.chm::/Interface/IScheduledTask/IScheduledTask.htm)


           ICalculateModelScheduledTask


## Комментарии


Задача может рассчитываться по заданному расписанию, условию или по
 наступлению системного или пользовательского события.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [SourceProblem](ICalculateModelScheduledTask.SourceProblem.htm)
		 Свойство SourceProblem
		 определяет задачу моделирования, рассчитываемую задачей в контейнере
		 запланированных задач.


## Свойства, унаследованные от [IScheduledTask](KeFore.chm::/Interface/IScheduledTask/IScheduledTask.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Properties](KeFore.chm::/interface/ischeduledtask/ischeduledtask.properties.htm)
		 Свойство Properties
		 возвращает параметры задачи.


		 ![](../../Property_Image.gif)
		 [State](KeFore.chm::/interface/ischeduledtask/ischeduledtask.state.htm)
		 Свойство State
		 возвращает состояние задачи в текущий момент времени.


		 ![](../../Property_Image.gif)
		 [TaskChecker](KeFore.chm::/Interface/IScheduledTask/IScheduledTask.TaskChecker.htm)
		 Свойство TaskChecker
		 определяет условие выполнения задачи.


## Методы, унаследованные от [IScheduledTask](KeFore.chm::/Interface/IScheduledTask/IScheduledTask.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateChecker](KeFore.chm::/interface/IScheduledTask/IScheduledTask.CreateChecker.htm)
		 Метод CreateChecker
		 создает новое условие выполнения задачи контейнера запланированных
		 задач.


		 ![](../../Sub_Image.gif)
		 [CreateInvokeEvent](KeFore.chm::/interface/ischeduledtask/ischeduledtask.createinvokeevent.htm)
		 Метод CreateInvokeEvent
		 создает новое событие выполнения задачи контейнера запланированных
		 задач.


		 ![](../../Sub_Image.gif)
		 [ExecuteImmediate](KeFore.chm::/interface/ischeduledtask/ischeduledtask.executeimmediate.htm)
		 Метод ExecuteImmediate выполняет
		 задачу в текущем репозитории.


		 ![](../../Sub_Image.gif)
		 [GetResults](KeFore.chm::/interface/ischeduledtask/ischeduledtask.getresults.htm)
		 Метод GetResults
		 возвращает историю выполнения задачи.


		 ![](../../Sub_Image.gif)
		 [ResetResults](KeFore.chm::/interface/ischeduledtask/ischeduledtask.resetresults.htm)
		 Метод ResetResults
		 очищает историю выполнения задачи и переводит ее в состояние «Готова».


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
