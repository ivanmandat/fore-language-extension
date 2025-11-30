# IPrxReportUserEvents.EventOnAfterAddEaxGrid

IPrxReportUserEvents.EventOnAfterAddEaxGrid
-


# IPrxReportUserEvents.EventOnAfterAddEaxGrid


## Синтаксис


EventOnAfterAddEaxGrid(Args: [IUiPrxEaxGridEventArgs](../IUiPrxEaxGridEventArgs/IUiPrxEaxGridEventArgs.htm));


## Параметры


Args. Параметр, позволяющий
 работать с параметрами события.


## Описание


Метод EventOnAfterAddEaxGrid
 реализует событие, которое наступает после добавления аналитической области
 данных.


## Комментарии


Для реализации события, которое наступит после удаления аналитической
 области данных, используйте метод [IPrxReportUserEvents.EventOnAfterDeleteEaxGrid](IPrxReportUserEvents.EventOnAfterDeleteEaxGrid.htm).


## Пример


Для выполнения примера предполагается наличие регламентного отчета,
 в котором содержится аналитическая область данных. [Подключите](UiReport.chm::/desktop/Reports/Event/UiReport_Reports_Event_Module.htm)
 модуль в регламентный отчет, в качестве обработчика событий выберите подключенный
 модуль и класс EventsClass.
 В модуле подключите системные сборки: Metabase, Report, Ui.


	Class EventsClass: ReportEvents

	Public Sub OnAfterAddEaxGrid(EaxGrid : IEaxGrid);

	Begin

	    WinApplication.InformationBox("Была добавлена аналитическая область данных " + EaxGrid.Id);

	End Sub OnAfterAddEaxGrid;

	Public Sub OnAfterDeleteEaxGrid(EaxGrid : IEaxGrid);

	Begin

	   WinApplication.InformationBox("Была удалена аналитическая область данных " + EaxGrid.Id);

	End Sub OnAfterDeleteEaxGrid;

	End Class EventsClass;


При наступлении события будет выдано информационное сообщение.


См. также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
