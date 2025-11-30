# IPrxReportUserEvents.EventOnAfterAddFormulaIsland

IPrxReportUserEvents.EventOnAfterAddFormulaIsland
-


# IPrxReportUserEvents.EventOnAfterAddFormulaIsland


## Синтаксис


EventOnAfterAddFormulaIsland(Args: [IUiPrxFormulaIslandEventArgs](../IUiPrxFormulaIslandEventArgs/IUiPrxFormulaIslandEventArgs.htm));


## Параметры


Args. Параметр, позволяющий
 работать с параметрами события.


## Описание


Метод EventOnAfterAddFormulaIsland
 реализует событие, которое наступает после добавления области формул.


## Комментарии


Для реализации события, которое наступит после удаления области формул,
 используйте метод [IPrxReportUserEvents.EventOnAfterDeleteFormulaIsland](IPrxReportUserEvents.EventOnAfterDeleteFormulaIsland.htm).


## Пример


Для выполнения примера предполагается наличие регламентного отчета.
 [Подключите](UiReport.chm::/desktop/Reports/Event/UiReport_Reports_Event_Module.htm)
 модуль в регламентный отчет, в качестве обработчика событий выберите подключенный
 модуль и класс EventsClass. В
 модуле подключите системные сборки: Metabase, Report, Ui.


	Class EventsClass: ReportEvents

	Public Sub OnAfterAddFormulaIsland(FormulaIsland : IPrxFormulaIsland);

	Begin

	    WinApplication.InformationBox("Была добавлена область формул " + FormulaIsland.Id);

	End Sub OnAfterAddFormulaIsland;

	Public Sub OnAfterDeleteFormulaIsland(FormulaIsland : IPrxFormulaIsland);

	Begin

	    WinApplication.InformationBox("Была удалена область формул " + FormulaIsland.Id);

	End Sub OnAfterDeleteFormulaIsland;

	End Class EventsClass;


При наступлении события будет выдано информационное сообщение.


См. также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
