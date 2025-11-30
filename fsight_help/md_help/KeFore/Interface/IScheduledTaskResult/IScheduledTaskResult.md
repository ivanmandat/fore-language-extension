# IScheduledTaskResult

IScheduledTaskResult
-


# IScheduledTaskResult


## Описание


Интерфейс IScheduledTaskResult
 содержит свойства и методы записи в истории выполнения задачи.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [FileExtension](IScheduledTaskResult.FileExtension.htm)
		 Свойство FileExtension
		 возвращает расширение файла, прилагаемого к результату выполнения
		 задачи.


		 ![](../../Property_Image.gif)
		 [FinishDateTime](IScheduledTaskResult.FinishDateTime.htm)
		 Свойство FinishDateTime
		 возвращает дату и время завершения выполнения задачи.


		 ![](../../Property_Image.gif)
		 [Finished](IScheduledTaskResult.Finished.htm)
		 Свойство Finished возвращает
		 признак завершения выполнения задачи в данный момент.


		 ![](../../Property_Image.gif)
		 [HasDataStream](IScheduledTaskResult.HasDataStream.htm)
		 Свойство HasDataStream
		 возвращает признак наличия непустого потока данных, который можно
		 прочитать с помощью метода [ReadDataStream](IScheduledTaskResult.ReadDataStream.htm).


		 ![](../../Property_Image.gif)
		 [Key](IScheduledTaskResult.Key.htm)
		 Свойство Key возвращает
		 ключ записи в истории выполнения задачи.


		 ![](../../Property_Image.gif)
		 [Messages](IScheduledTaskResult.Messages.htm)
		 Свойство Messages возвращает
		 список информационных сообщений, содержащих комментарии о выполнении
		 задачи.


		 ![](../../Property_Image.gif)
		 [NotificationSended](IScheduledTaskResult.NotificationSended.htm)
		 Свойство NotificationSended возвращает
		 признак того, отправлено ли электронное сообщение после выполнения
		 задачи.


		 ![](../../Property_Image.gif)
		 [StartDateTime](IScheduledTaskResult.StartDateTime.htm)
		 Свойство StartDateTime
		 возвращает дату и время запуска задачи на выполнение.


		 ![](../../Property_Image.gif)
		 [Succeeded](IScheduledTaskResult.Succeeded.htm)
		 Свойство Succeeded
		 возвращает признак удачного выполнения задачи.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ReadDataStream](IScheduledTaskResult.ReadDataStream.htm)
		 Метод ReadDataStream
		 осуществляет чтение результата выполнения задачи и помещает этот
		 результат в поток.


См. также:


[Интерфейсы сборки Fore](../KeFore_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
