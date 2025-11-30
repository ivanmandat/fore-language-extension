# UiPrxReportAuditOperationEventArgs

UiPrxReportAuditOperationEventArgs
-


# UiPrxReportAuditOperationEventArgs


## Описание


Класс
 UiPrxReportAuditOperationEventArgs предназначен
 для создания пользовательских аргументов события [EventOnAuditOperation](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAuditOperation.htm).


## Конструкторы


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Create](UiPrxReportAuditOperationEventArgs.Create.htm)
		 Конструктор Create
		 создает аргументы события [EventOnAuditOperation](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAuditOperation.htm)
		 с возможностью отмены протоколирования для повторной операции.


		 ![](../../Sub_Image.gif)
		 [CreateArgs](UiPrxReportAuditOperationEventArgs.CreateArgs.htm)
		 Конструктор CreateArgs
		 создает аргументы события [EventOnAuditOperation](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAuditOperation.htm).


## Свойства, унаследованные от [IUiPrxReportAuditOperationEventArgs](../../Interface/IUiPrxReportAuditOperationEventArgs/IUiPrxReportAuditOperationEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Comment](../../Interface/IUiPrxReportAuditOperationEventArgs/IUiPrxReportAuditOperationEventArgs.Comment.htm)
		 Свойство Comment определяет
		 комментарий, который будет добавлен к системному примечанию при
		 аудите операции.


		 ![](../../Property_Image.gif)
		 [FromWeb](../../Interface/IUiPrxReportAuditOperationEventArgs/IUiPrxReportAuditOperationEventArgs.FromWeb.htm)
		 Свойство FromWeb определяет,
		 производиться ли операция из веб-приложения.


		 ![](../../Property_Image.gif)
		 [Operation](../../Interface/IUiPrxReportAuditOperationEventArgs/IUiPrxReportAuditOperationEventArgs.Operation.htm)
		 Свойство Operation
		 определяет тип протоколируемой операции.


		 ![](../../Property_Image.gif)
		 [Repeated](../../Interface/IUiPrxReportAuditOperationEventArgs/IUiPrxReportAuditOperationEventArgs.Repeated.htm)
		 Свойство Repeated определяет,
		 повторно ли произведена операция.


## Свойства, унаследованные от [IUiPrxReportCancelEventArgs](../../Interface/IUiPrxReportCancelEventArgs/IUiPrxReportCancelEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cancel](../../Interface/IUiPrxReportCancelEventArgs/IUiPrxReportCancelEventArgs.Cancel.htm)
		 Свойство Cancel определяет,
		 будет ли производиться действие (вычисление, экспорт, открытие
		 и т.д.) с регламентным отчетом.


## Свойства, унаследованные от [IUiPrxReportEventArgs](../../Interface/IUiPrxReportEventArgs/IUiPrxReportEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Report](../../Interface/IUiPrxReportEventArgs/IUiPrxReportEventArgs.Report.htm)
		 Свойство Report возвращает
		 регламентный отчет.


## Свойства, унаследованные от [IUiReportBaseEventArgs](../../Interface/IUiReportBaseEventArgs/IUiReportBaseEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [UiRep](../../Interface/IUiReportBaseEventArgs/IUiReportBaseEventArgs.UiRep.htm)
		 Свойство UiRep возвращает
		 объект, содержащий компонент UiReport,
		 сгенерировавший событие.


См. также:


[Классы сборки Report](../KeReport_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
