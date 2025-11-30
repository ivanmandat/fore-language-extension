# IScheduledTask

IScheduledTask
-


# IScheduledTask


Сборка: Fore;


## Описание


Интерфейс IScheduledTask содержит
 базовые свойства и методы задач, выполняемых в контейнере запланированных
 задач.


## Иерархия наследования


           IScheduledTask


## Комментарии


Контейнер запланированных задач
 предназначен для работы с отложенными задачами над различными объектами.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Properties](IScheduledTask.Properties.htm)
		 Свойство Properties
		 возвращает параметры задачи.


		 ![](../../Property_Image.gif)
		 [State](IScheduledTask.State.htm)
		 Свойство State возвращает
		 состояние задачи в текущий момент времени.


		 ![](../../Property_Image.gif)
		 [TaskChecker](IScheduledTask.TaskChecker.htm)
		 Свойство TaskChecker
		 определяет условие выполнения задачи.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateChecker](IScheduledTask.CreateChecker.htm)
		 Метод CreateChecker
		 создает новое условие выполнения задачи контейнера запланированных
		 задач.


		 ![](../../Sub_Image.gif)
		 [CreateInvokeEvent](IScheduledTask.CreateInvokeEvent.htm)
		 Метод CreateInvokeEvent
		 создает новое событие выполнения задачи контейнера запланированных
		 задач.


		 ![](../../Sub_Image.gif)
		 [ExecuteImmediate](IScheduledTask.ExecuteImmediate.htm)
		 Метод ExecuteImmediate выполняет
		 задачу в текущем репозитории.


		 ![](../../Sub_Image.gif)
		 [GetResults](IScheduledTask.GetResults.htm)
		 Метод GetResults возвращает
		 историю выполнения задачи.


		 ![](../../Sub_Image.gif)
		 [ResetResults](IScheduledTask.ResetResults.htm)
		 Метод ResetResults
		 очищает историю выполнения задачи и переводит ее в состояние
		 «Готова».


См. также:


[Интерфейсы сборки Fore](../KeFore_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
