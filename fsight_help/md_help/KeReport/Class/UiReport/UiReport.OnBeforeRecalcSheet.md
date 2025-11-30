# UiReport.OnBeforeRecalcSheet

UiReport.OnBeforeRecalcSheet
-


# UiReport.OnBeforeRecalcSheet


## Синтаксис


OnBeforeRecalcSheet(Sender: Object; Args: [IUiPrxSheetCancelEventArgs](../../Interface/IUiPrxSheetCancelEventArgs/IUiPrxSheetCancelEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnBeforeRecalcSheet
 наступает перед вычислением листа регламентного отчёта.


## Пример


Выполнение примера предполагает подключение модуля в качестве [обработчика
 событий](UiReport.chm::/desktop/Reports/Event/UiReport_Reports_Event_Event.htm).


	Public Sub OnBeforeRecalcSheet(Sheet: IPrxSheet; Var Cancel: Boolean);

	Var

	    Sheets : IPrxSheets;

	Begin

	    If Sheet.Name = "Sheet2" Then

	        Sheets := Sheet.Sheets;

	        Sheets.FindByName("Sheet3").Recalc;

	    End If;

	End Sub OnBeforeRecalcSheet;


В результате выполнения примера, при обновлении листа с наименованием
 Sheet2, будет обновлен лист с наименованием Sheet3.


См. также:


[UiReport](UiReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
