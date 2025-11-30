# ICalculateCubeScheduledTask

ICalculateCubeScheduledTask
-


# ICalculateCubeScheduledTask


## Описание


Интерфейс ICalculateCubeScheduledTask
 содержит свойства и методы для работы с задачей контейнера запланированных
 задач - Расчёт вычисляемого куба.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [SourceCube](ICalculateCubeScheduledTask.SourceCube.htm)
		 Свойство SourceCube
		 определяет вычисляемый куб, либо загрузчик в куб, который будет
		 выполняться при запуске задачи.


## Свойства, унаследованные от [IScheduledTask](kefore.chm::/interface/ischeduledtask/ischeduledtask.htm)


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
		 [LoadSelection](ICalculateCubeScheduledTask.LoadSelection.htm)
		 Метод LoadSelection
		 копирует отметку, в соответствии с которой осуществляется загрузка
		 в куб.


		 ![](../../Sub_Image.gif)
		 [SetSelection](ICalculateCubeScheduledTask.SetSelection.htm)
		 Метод SetSelection
		 осуществляет установку отметки, в соответствии с которой будет
		 выполняться загрузка в куб при выполнении задачи.


## Методы, унаследованные от [IScheduledTask](kefore.chm::/interface/ischeduledtask/ischeduledtask.htm)


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


[Интерфейсы сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
