# IPrxReportUserEvents.EventOnBeforeChangeControlValue

IPrxReportUserEvents.EventOnBeforeChangeControlValue
-


# IPrxReportUserEvents.EventOnBeforeChangeControlValue


## Синтаксис


EventOnBeforeChangeControlValue (Args: [IUiPrxControlCancelEventArgs](../IUiPrxControlCancelEventArgs/IUiPrxControlCancelEventArgs.htm));


## Параметры


Args. Параметр, позволяющий
 работать с параметрами события.


## Описание


Метод EventOnBeforeChangeControlValue
 реализует событие, происходящее до изменения значения элемента управления
 регламентного отчёта.


## Комментарии


Метод позволяет переопределить системное событие, которое наступает
 после события [ReportEvents.OnBeforeChangeControlValue](../../Class/ReportEvents/ReportEvents.OnBeforeChangeControlValue.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с [подключенным
 модулем](UiReport.chm::/desktop/Reports/Event/UiReport_Reports_Event.htm#event). В качестве обработчика событий должен быть
 указан подключенный модуль и класс Parent.


Добавьте ссылки на системные сборки: Report, Ui.


			Public Class EventsClass: Parent

    Public Sub OnBeforeChangeControlValue(Control: IPrxControl; Var Cancel: Boolean);

    Begin

        //Вызов системного события, переопределенного в классе Parent

        Inherited OnBeforeChangeControlValue(Control, Cancel);

    End Sub OnBeforeChangeControlValue;

End Class EventsClass;

Class Parent: ReportEvents

    // Обработка события EventOnBeforeChangeControlValue

    Public Sub EventOnBeforeChangeControlValue(Args: IUiPrxControlCancelEventArgs);

    Begin

        WinApplication.InformationBox("Значение элемента управления будет изменено");

    End Sub EventOnBeforeChangeControlValue;

End Class Parent;


В результате выполнения примера перед изменением значения элемента управления
 в регламентном отчёте будет выведено информационное сообщение.


См.
 также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
