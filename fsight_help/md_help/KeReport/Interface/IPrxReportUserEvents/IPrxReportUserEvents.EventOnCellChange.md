# IPrxReportUserEvents.EventOnCellChange

IPrxReportUserEvents.EventOnCellChange
-


# IPrxReportUserEvents.EventOnCellChange


## Синтаксис


EventOnCellChange(Args: [IUiPrxCellChangeEventArgs](../IUiPrxCellChangeEventArgs/IUiPrxCellChangeEventArgs.htm));


## Параметры


Args. Параметр, позволяющий
 работать с параметрами события.


## Описание


Метод EventOnCellChange реализует
 событие, происходящее после изменения значения в ячейке.


## Пример


Для выполнения примера предполагается наличие регламентного отчета.
 [Подключите](UiReport.chm::/desktop/Reports/Event/UiReport_Reports_Event_Module.htm)
 модуль в регламентный отчет, в качестве обработчика событий выберите подключенный
 модуль и класс EventsClass. В модуле подключите системные сборки: Report,
 Ui.


			Class EventsClass: ReportEvents

    Sub EventOnCellChange(Args: IUiPrxCellChangeEventArgs);

    Begin

    WinApplication.InformationBox("Изменено значение ячейки в столбце " + Args.Column.ToString + " в строчке " + Args.Row.ToString + " на листе " + Args.Sheet.Name + ". Новое значение " + Args.Value);

    End Sub EventOnCellChange;

End Class EventsClass;


После изменения значения ячейки в регламентном отчете будет выдано информационное
 сообщение.


См. также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
