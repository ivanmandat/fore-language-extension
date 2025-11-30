# IUiPrxReportAuditOperationEventArgs.Repeated

IUiPrxReportAuditOperationEventArgs.Repeated
-


# IUiPrxReportAuditOperationEventArgs.Repeated


## Синтаксис


Repeated: Boolean;


## Описание


Свойство Repeated определяет,
 повторно ли произведена операция.


## Комментарии


По умолчанию свойство имеет значение False.
 Если операция производится повторно, то свойство принимает значение True.


Отменить протоколирование (Args.Cancel := True) можно только для повторной
 операции. Повторной операцией может быть только «Экспорт в веб» (Args.Operation
 = PrxReportAuditOperation.Export And Args.FromWeb).


## Пример


Использование свойства приведено в примере для [Comment](IUiPrxReportAuditOperationEventArgs.Comment.htm).


См. также:


[IUiPrxReportAuditOperationEventArgs](IUiPrxReportAuditOperationEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
