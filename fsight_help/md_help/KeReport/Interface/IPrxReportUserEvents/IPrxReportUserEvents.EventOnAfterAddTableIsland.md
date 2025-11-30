# IPrxReportUserEvents.EventOnAfterAddTableIsland

IPrxReportUserEvents.EventOnAfterAddTableIsland
-


# IPrxReportUserEvents.EventOnAfterAddTableIsland


## Синтаксис


EventOnAfterAddTableIsland(Args: [IUiPrxTableIslandEventArgs](../IUiPrxTableIslandEventArgs/IUiPrxTableIslandEventArgs.htm));


## Параметры


Args. Параметр, позволяющий
 работать с параметрами события.


## Описание


Метод EventOnAfterAddTableIsland
 реализует событие, которое наступает после добавления реляционной области
 данных.


## Комментарии


Для реализации события, которое наступит после удаления реляционной
 области данных, используйте метод [IPrxReportUserEvents.EventOnAfterDeleteTableIsland](IPrxReportUserEvents.EventOnAfterDeleteTableIsland.htm).


## Пример


Для выполнения примера предполагается наличие регламентного отчета.
 [Подключите](UiReport.chm::/desktop/Reports/Event/UiReport_Reports_Event_Module.htm)
 модуль в регламентный отчет, в качестве обработчика событий выберите подключенный
 модуль и класс EventsClass. В
 модуле подключите системные сборки: Metabase, Report, Ui.


	Class EventsClass: ReportEvents

	Public Sub OnAfterAddTableIsland(TableIsland : IPrxTableIsland);

	Begin

	    WinApplication.InformationBox("Была добавлена реляционная область данных " + TableIsland.Id);

	End Sub OnAfterAddTableIsland;

	Public Sub OnAfterDeleteTableIsland(TableIsland : IPrxTableIsland);

	Begin

	    WinApplication.InformationBox("Была удалена реляционная область данных " + TableIsland.Id);

	End Sub OnAfterDeleteTableIsland;

	End Class EventsClass;


После добавления/удаления реляционной области данных будет выдано информационное
 сообщение.


См. также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
