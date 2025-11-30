# IPrxReportUserEvents.EventOnBeforeDeleteControl

IPrxReportUserEvents.EventOnBeforeDeleteControl
-


# IPrxReportUserEvents.EventOnBeforeDeleteControl


## Синтаксис


EventOnBeforeDeleteControl(Args: [IUiPrxControlCancelEventArgs](../IUiPrxControlCancelEventArgs/IUiPrxControlCancelEventArgs.htm));


## Параметры


Args. Параметр, позволяющий
 работать с параметрами события.


## Описание


Метод EventOnBeforeDeleteControl
 реализует событие, происходящее перед удалением элемента управления.


## Пример


Для выполнения примера предполагается наличие регламентного отчета,
 в котором содержится элемент управления. [Подключите](UiReport.chm::/desktop/Reports/Event/UiReport_Reports_Event_Module.htm)
 модуль в регламентный отчет, в качестве обработчика событий выберите подключенный
 модуль и класс Parent.


Добавьте ссылки на системные сборки: Report, Ui.


	Public Class EventsClass: Parent

	    Public Sub OnBeforeDeleteControl(Control: IPrxControl; Var Cancel: Boolean);

	    Begin

	        //Вызов системного события, переопределенного в классе Parent

	        Inherited OnBeforeDeleteControl(Control, Cancel);

	    End Sub OnBeforeDeleteControl;

	End Class EventsClass;

	Class Parent: ReportEvents

	// Работа с элементами управления:

	    Sub EventOnBeforeDeleteControl(Args: IUiPrxControlCancelEventArgs);

	    Begin

	        WinApplication.InformationBox("Элемент управления будет удален")

	    End Sub EventOnBeforeDeleteControl;

	End Class Parent;


В результате выполнения примера перед изменением значения элемента управления
 в регламентном отчёте будет выведено информационное сообщение.


См. также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
