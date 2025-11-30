# ITabView.TabLineFeed

ITabView.TabLineFeed
-


# ITabView.TabLineFeed


## Синтаксис


TabLineFeed: Boolean;


## Описание


Свойство TabLineFeed определяет
 возможность перехода по таблице построчно.


## Комментарии


Настройка не сохраняется.


Переход вперед осуществляется с помощью клавиши TAB, обратно - SHIFT+TAB.


Допустимые значения:


	- True. Переход на следующую
	 строку выполняется;


	- False. Переход на следующую
	 строку не выполняется. Значение по умолчанию.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта, к которому [подключен
 модуль](UIReport.chm::/desktop/Reports/Event/UiReport_Reports_Event.htm).


Добавьте ссылки на системные сборки: Report, Tab.


			Class EventsClass: ReportEvents

Sub OnBeforeExecuteReport(Report: IPrxReport; Var Cancel: Boolean);

Begin

    (Report.Sheets.Item(0) As IPrxTable).TabSheet.View.TabLineFeed := True;

End Sub OnBeforeExecuteReport;

End Class EventsClass;


В результате выполнения примера при открытии регламентного отчёта будет
 доступен построчный переход.


См. также:


[ITabView](ITabView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
