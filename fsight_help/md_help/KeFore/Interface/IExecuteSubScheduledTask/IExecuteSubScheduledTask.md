# IExecuteSubScheduledTask

IExecuteSubScheduledTask
-


# IExecuteSubScheduledTask


## Описание


Интерфейс IExecuteSubScheduledTask содержит свойства и методы для работы с задачей контейнера запланированных задач, осуществляющей выполнение модуля.


## Свойства


 Имя свойства
 Краткое описание


 ![](../../Property_Image.gif)
 [Assembly](IExecuteSubScheduledTask.Assembly.htm)
 Свойство Assembly определяет сборку, содержащую модуль репозитория, который необходимо выполнить.


 ![](../../Property_Image.gif)
 [SubName](IExecuteSubScheduledTask.SubName.htm)
 Свойство SubName определяет наименование процедуры/функции, которую необходимо запустить в модуле.


## Свойства, унаследованные от [IScheduledTask](../IScheduledTask/IScheduledTask.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Properties](../IScheduledTask/IScheduledTask.Properties.htm)
		 Свойство Properties
		 возвращает параметры задачи.


		 ![](../../Property_Image.gif)
		 [State](../IScheduledTask/IScheduledTask.State.htm)
		 Свойство State возвращает
		 состояние задачи в текущий момент времени.


		 ![](../../Property_Image.gif)
		 [TaskChecker](../IScheduledTask/IScheduledTask.TaskChecker.htm)
		 Свойство TaskChecker
		 определяет условие выполнения задачи.


## Методы, унаследованные от [IScheduledTask](../IScheduledTask/IScheduledTask.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateChecker](../IScheduledTask/IScheduledTask.CreateChecker.htm)
		 Метод CreateChecker
		 создает новое условие выполнения задачи контейнера запланированных
		 задач.


		 ![](../../Sub_Image.gif)
		 [CreateInvokeEvent](../IScheduledTask/IScheduledTask.CreateInvokeEvent.htm)
		 Метод CreateInvokeEvent
		 создает новое событие выполнения задачи контейнера запланированных
		 задач.


		 ![](../../Sub_Image.gif)
		 [ExecuteImmediate](../IScheduledTask/IScheduledTask.ExecuteImmediate.htm)
		 Метод ExecuteImmediate выполняет
		 задачу в текущем репозитории.


		 ![](../../Sub_Image.gif)
		 [GetResults](../IScheduledTask/IScheduledTask.GetResults.htm)
		 Метод GetResults возвращает
		 историю выполнения задачи.


		 ![](../../Sub_Image.gif)
		 [ResetResults](../IScheduledTask/IScheduledTask.ResetResults.htm)
		 Метод ResetResults
		 очищает историю выполнения задачи и переводит ее в состояние
		 «Готова».


См. также:


[Интерфейсы сборки Fore](../KeFore_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
