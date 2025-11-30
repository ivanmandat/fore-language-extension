# IPrxReportUserEvents.EventOnAfterAddSheet

IPrxReportUserEvents.EventOnAfterAddSheet
-


# IPrxReportUserEvents.EventOnAfterAddSheet


## Синтаксис


EventOnAfterAddSheet(Args: [IUiPrxSheetEventArgs](../IUiPrxSheetEventArgs/IUiPrxSheetEventArgs.htm));


## Параметры


Args. Параметр, позволяющий
 работать с параметрами события.


## Описание


Метод EventOnAfterAddSheet реализует
 событие, которое наступает после добавления листа.


## Комментарии


Для реализации события, которое наступит после удаления листа, используйте
 метод [IPrxReportUserEvents.EventOnAfterDeleteSheet](IPrxReportUserEvents.EventOnAfterDeleteSheet.htm).


## Пример


Для выполнения примера предполагается наличие регламентного отчета.
 [Подключите](UiReport.chm::/desktop/Reports/Event/UiReport_Reports_Event_Module.htm)
 модуль в регламентный отчет, в качестве обработчика событий выберите подключенный
 модуль и класс EventsClass. В
 модуле подключите системные сборки: Metabase, Report, Ui.


	Class EventsClass: ReportEvents

	Public Sub OnAfterAddSheet(Sheet : IPrxSheet);

	Begin

	    WinApplication.InformationBox("Был добавлен лист " + Sheet.Name);

	End Sub OnAfterAddSheet;

	Public Sub OnAfterDeleteSheet(Sheet : IPrxSheet);

	Begin

	    WinApplication.InformationBox("Был удален лист " + Sheet.Name);

	End Sub OnAfterDeleteSheet;

	End Class EventsClass;


При добавлении/удалении листа в регламентном отчете будет выдано информационное
 сообщение.


См. также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
