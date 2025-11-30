# IUiPrxReportCancelEventArgs.Cancel

IUiPrxReportCancelEventArgs.Cancel
-


# IUiPrxReportCancelEventArgs.Cancel


## Синтаксис


Cancel: Boolean;


## Описание


Свойство Cancel определяет,
 будет ли производиться действие (вычисление, экспорт, открытие, печать,
 сохранение и т.д.) с регламентным отчетом.


## Комментарии


При значении данного параметра True
 действие с отчетом произведено не будет, при значении False
 - действие будет произведено.


## Пример


Пример рассмотрим на событии, которое наступает перед вычисление отчета.


			Sub EventOnBeforeExecuteReport(Args: IUiPrxReportCancelEventArgs);

Begin

    Args.Cancel := Not WinApplication.ConfirmationBox("Вычислять отчет " + Args.Report.MetabaseObject.Id + "?");

End Sub EventOnBeforeExecuteReport;


При наступлении события будет выдан диалог подтверждения вычисления
 отчета. При положительном ответе отчет будет вычислен, в противном случае
 нет.


См. также:


[IUiPrxReportCancelEventArgs](IUiPrxReportCancelEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
