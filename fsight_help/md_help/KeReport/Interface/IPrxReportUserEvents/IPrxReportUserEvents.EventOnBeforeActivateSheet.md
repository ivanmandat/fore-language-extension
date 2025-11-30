# IPrxReportUserEvents.EventOnBeforeActivateSheet

IPrxReportUserEvents.EventOnBeforeActivateSheet
-


# IPrxReportUserEvents.EventOnBeforeActivateSheet


## Синтаксис


EventOnBeforeActivateSheet(Args: [IUiPrxCancelActivateSheetEventArgs](../IUiPrxCancelActivateSheetEventArgs/IUiPrxCancelActivateSheetEventArgs.htm));


## Параметры


Args. Параметр, позволяющий
 работать с параметрами события.


## Описание


Метод EventOnBeforeActivateSheet
 реализует событие, происходящее перед сменой активного листа регламентного
 отчёта.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с [подключенным
 модулем](UiReport.chm::/desktop/Reports/Event/UiReport_Reports_Event.htm#event). В качестве обработчика событий должен быть
 указан подключенный модуль и класс EventClass.


Добавьте ссылки на системные сборки: Report, Ui.


			Class EventClass: ReportEvents

    Public Sub EventOnBeforeActivateSheet(Args: IUiPrxCancelActivateSheetEventArgs);

    // Обработка события EventOnBeforeActivateSheet

    Begin

        Args.Cancel := Not WinApplication.ConfirmationBox("Cделать активным " + Args.NewSheet.Name);

    End Sub EventOnBeforeActivateSheet;

End Class EventClass;


При наступлении события будет выдан диалог подтверждения смены листа.
 При положительном ответе смена активного листа будет произведена, в противном
 случае нет.


См. также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
