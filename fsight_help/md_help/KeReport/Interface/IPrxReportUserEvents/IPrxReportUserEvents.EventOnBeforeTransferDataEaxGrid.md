# IPrxReportUserEvents.EventOnBeforeTransferDataEaxGrid

IPrxReportUserEvents.EventOnBeforeTransferDataEaxGrid
-


# IPrxReportUserEvents.EventOnBeforeTransferDataEaxGrid


## Синтаксис


EventOnBeforeTransferDataEaxGrid (Args: [IUiPrxExportCancelEventArgs](../IUiPrxExportCancelEventArgs/IUiPrxExportCancelEventArgs.htm));


## Параметры


Args. Параметр, позволяющий
 работать с параметрами события.


## Описание


Метод EventOnBeforeTransferDataEaxGrid
 реализует событие, происходящее перед сохранением изменённых значений
 аналитической области данных.


## Комментарии


Метод позволяет переопределить системное событие, которое наступает
 после события [ReportEvents.OnBeforeTransferDataEaxGrid](../../Class/ReportEvents/ReportEvents.OnBeforeTransferDataEaxGrid.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с [подключенным
 модулем](UiReport.chm::/desktop/Reports/Event/UiReport_Reports_Event.htm#event). В качестве обработчика событий должен быть
 указан подключенный модуль и класс EventsClass.


Добавьте ссылки на системные сборки: Express, Report, Ui.


			Class EventsClass: ReportEvents

Public Sub EventOnBeforeTransferDataEaxGrid(Args: IUiPrxEaxGridCancelEventArgs);

    // Обработка события EventOnBeforeTransferDataEaxGrid

    Begin

        WinApplication.InformationBox("Данные аналитической области были изменены");

    End Sub EventOnBeforeTransferDataEaxGrid;

    // Обработка события EventOnAfterTransferDataEaxGrid

    Public Sub EventOnAfterTransferDataEaxGrid(Args: IUiPrxEaxGridEventArgs);

    Begin

        WinApplication.InformationBox("Изменения данных аналитической области были успешно сохранены");

    End Sub EventOnAfterTransferDataEaxGrid;

End Class EventsClass;


В результате выполнения примера после изменения данных в аналитической
 области регламентного отчёта перед сохранением и после сохранения изменений
 будут выведены информационные сообщения.


См. также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
