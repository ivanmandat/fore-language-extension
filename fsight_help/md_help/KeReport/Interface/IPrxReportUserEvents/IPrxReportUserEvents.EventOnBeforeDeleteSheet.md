# IPrxReportUserEvents.EventOnBeforeDeleteSheet

IPrxReportUserEvents.EventOnBeforeDeleteSheet
-


# IPrxReportUserEvents.EventOnBeforeDeleteSheet


## Синтаксис


EventOnBeforeDeleteSheet (Args: [IUiPrxSheetCancelEventArgs](../IUiPrxSheetCancelEventArgs/IUiPrxSheetCancelEventArgs.htm));


## Параметры


Args. Параметр, позволяющий
 работать с параметрами события.


## Описание


Метод EventOnBeforeDeleteSheet
 реализует событие, происходящее до удаления листа регламентного отчёта.


## Комментарии


Метод позволяет переопределить системное событие, которое наступает
 после события [ReportEvents.OnBeforeDeleteSheet](../../Class/ReportEvents/ReportEvents.OnBeforeDeleteSheet.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с [подключенным
 модулем](UiReport.chm::/desktop/Reports/Event/UiReport_Reports_Event.htm#event). В качестве обработчика событий должен быть
 указан подключенный модуль и класс Parent.


Добавьте ссылки на системные сборки: Report, Ui.


			Public Class EventsClass: Parent

    Public Sub OnBeforeDeleteSheet(Sheet: IPrxSheet; Var Cancel: Boolean);

    Begin

        //Вызов системного события, переопределенного в классе Parent

        Inherited OnBeforeDeleteSheet(Sheet, Cancel);

    End Sub OnBeforeDeleteSheet;

End Class EventsClass;

Public Class Parent: ReportEvents

    //Переопределение системного события EventOnBeforeDeleteSheet

Public Sub EventOnBeforeDeleteSheet(Args: IUiPrxSheetCancelEventArgs);

    Begin

        WinApplication.InformationBox("Лист регламентного отчёта будет удалён");

    End Sub EventOnBeforeDeleteSheet;

End Class Parent;


В результате выполнения примера перед удалением листа из регламентного
 отчёта будет выведено информационное сообщение.


См.
 также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
