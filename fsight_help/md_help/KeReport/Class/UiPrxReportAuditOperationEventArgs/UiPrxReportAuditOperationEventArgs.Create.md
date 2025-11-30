# UiPrxReportAuditOperationEventArgs.Create

UiPrxReportAuditOperationEventArgs.Create
-


# UiPrxReportAuditOperationEventArgs.Create


## Синтаксис


Create(UiRep: [IUiReport](../../Interface/IUiReport/IUiReport.htm);
 Report: [IPrxReport](../../Interface/IPrxReport/IPrxReport.htm);
 Cancel: Boolean);


## Параметры


UiRep. Компонент,
 для которого сгенерировано событие;


Report. Регламентный отчет,
 действия над которым будут протоколироваться.


Cancel. Параметр
 определяет, будет ли производиться протоколирование операции. При значении
 True протоколирование операции произведено
 не будет, при значении False
 - операция будет занесена в протокол.
 Отменить протоколирование (True) можно только для повторной операции.
 Повторной операцией может быть только «Экспорт в веб» (PrxReportAuditOperation.Export
 And Args.FromWeb).


## Описание


Конструктор Create создает аргументы
 события [EventOnAuditOperation](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAuditOperation.htm)
 с возможностью отмены протоколирования для повторной операции. Метод автоматически
 вызывается при наступлении данного события для создания его аргументов.


См. также:


[UiPrxReportAuditOperationEventArgs](UiPrxReportAuditOperationEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
