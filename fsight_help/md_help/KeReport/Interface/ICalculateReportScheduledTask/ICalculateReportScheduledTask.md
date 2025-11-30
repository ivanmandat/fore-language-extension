# ICalculateReportScheduledTask

ICalculateReportScheduledTask
-


# ICalculateReportScheduledTask


## Описание


Интерфейс ICalculateReportScheduledTask
 предназначен для определения параметров задачи вычисления регламентного
 отчета в контейнере задач.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [FormatTag](ICalculateReportScheduledTask.FormatTag.htm)
		 Свойство FormatTag
		 определяет формат файла, в который будет сохранен результат вычисления
		 отчета.


		 ![](../../Property_Image.gif)
		 [Printer](ICalculateReportScheduledTask.Printer.htm)
		 Свойство Printer определяет
		 принтер, на котором будет распечатан регламентный отчет после
		 вычисления.


		 ![](../../Property_Image.gif)
		 [SourceReport](ICalculateReportScheduledTask.SourceReport.htm)
		 Свойство SourceReport
		 определяет вычисляемый отчет.


## Свойства, унаследованные от [IScheduledTask](KeFore.chm::/Interface/IScheduledTask/IScheduledTask.htm)


		 Имя метода
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
		 [ReadResult](ICalculateReportScheduledTask.ReadResult.htm)
		 Метод ReadResult получает
		 результат вычисления задачи в виде отчета и также позволяет загрузить
		 результат в указанный отчет.


		 ![](../../Sub_Image.gif)
		 [GetExportSettings](ICalculateReportScheduledTask.GetExportSettings.htm)
		 Метод GetExportSettings
		 позволяет получить настройки параметров экспорта из задачи вычисления
		 регламентного отчета в контейнере задач.


		 ![](../../Sub_Image.gif)
		 [PutExportSettings](ICalculateReportScheduledTask.PutExportSettings.htm)
		 Метод PutExportSettings
		 позволяет сохранить настройки параметров экспорта в задачу
		 вычисления регламентного отчета в контейнере задач.


## Методы, унаследованные от [IScheduledTask](KeFore.chm::/Interface/IScheduledTask/IScheduledTask.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateInvokeEvent](KeFore.chm::/Interface/IScheduledTask/IScheduledTask.CreateInvokeEvent.htm)
		 Метод CreateInvokeEvent
		 создает новое событие выполнения задачи контейнера запланированных
		 задач.


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


[Интерфейсы сборки Report](../KeReport_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
