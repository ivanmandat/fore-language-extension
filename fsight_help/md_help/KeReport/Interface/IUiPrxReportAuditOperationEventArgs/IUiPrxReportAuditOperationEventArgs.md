# IUiPrxReportAuditOperationEventArgs

IUiPrxReportAuditOperationEventArgs
-


# IUiPrxReportAuditOperationEventArgs


## Описание


Интерфейс IUiPrxReportAuditOperationEventArgs
 предназначен для указания дополнительного примечания в протоколе доступа
 при аудите операции.


## Комментарии


Интерфейс определяет параметры события [EventOnAuditOperation](../IPrxReportUserEvents/IPrxReportUserEvents.EventOnAuditOperation.htm).
 Отменить протоколирование (Args.Cancel := True) можно только для повторной
 операции. Повторной операцией может быть только «Экспорт в веб» (Args.Operation
 = PrxReportAuditOperation.Export And Args.FromWeb).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Comment](IUiPrxReportAuditOperationEventArgs.Comment.htm)
		 Свойство Comment определяет
		 комментарий, который будет добавлен к системному примечанию при
		 аудите операции.


		 ![](../../Property_Image.gif)
		 [FromWeb](IUiPrxReportAuditOperationEventArgs.FromWeb.htm)
		 Свойство FromWeb определяет,
		 производиться ли операция из веб-приложения.


		 ![](../../Property_Image.gif)
		 [Operation](IUiPrxReportAuditOperationEventArgs.Operation.htm)
		 Свойство Operation
		 определяет тип протоколируемой операции.


		 ![](../../Property_Image.gif)
		 [Repeated](IUiPrxReportAuditOperationEventArgs.Repeated.htm)
		 Свойство Repeated определяет,
		 повторно ли произведена операция.


## Свойства, унаследованные от [IUiPrxReportCancelEventArgs](../IUiPrxReportCancelEventArgs/IUiPrxReportCancelEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cancel](../IUiPrxReportCancelEventArgs/IUiPrxReportCancelEventArgs.Cancel.htm)
		 Свойство Cancel определяет,
		 будет ли производиться действие (вычисление, экспорт, открытие
		 и т.д.) с регламентным отчетом.


## Свойства, унаследованные от [IUiPrxReportEventArgs](../IUiPrxReportEventArgs/IUiPrxReportEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Report](../IUiPrxReportEventArgs/IUiPrxReportEventArgs.Report.htm)
		 Свойство Report возвращает
		 регламентный отчет.


## Свойства, унаследованные от [IUiReportBaseEventArgs](../IUiReportBaseEventArgs/IUiReportBaseEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [UiRep](../IUiReportBaseEventArgs/IUiReportBaseEventArgs.UiRep.htm)
		 Свойство UiRep возвращает
		 объект, содержащий компонент UiReport,
		 сгенерировавший событие.


См. также:


[Интерфейсы сборки Report](../KeReport_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
