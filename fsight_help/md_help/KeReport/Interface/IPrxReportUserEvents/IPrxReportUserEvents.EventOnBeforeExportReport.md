# IPrxReportUserEvents.EventOnBeforeExportReport

IPrxReportUserEvents.EventOnBeforeExportReport
-


# IPrxReportUserEvents.EventOnBeforeExportReport


## Синтаксис


EventOnBeforeExportReport(Args: [IUiPrxExportCancelEventArgs](../IUiPrxExportCancelEventArgs/IUiPrxExportCancelEventArgs.htm));


## Параметры


Args. Параметр, позволяющий
 работать с параметрами события.


## Описание


Метод EventOnBeforeExportReport
 реализует событие, происходящее перед экспортированием регламентного отчета.


## Комментарии


Метод EventOnBeforeExportReport
 позволяет переопределить системное событие, которое наступает после события
 [OnBeforeExportReport](../../Class/ReportEvents/ReportEvents.OnBeforeExportReport.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Report. Класс
 EventsClass является обработчиком
 событий регламентного отчета.


	Public Class EventsClass: Parent

	    Public Sub OnBeforeExportReport(Report: IPrxReport; Var Cancel: Boolean);

	    Begin

	        //Вызов системного события, переопределенного в классе Parent

	        Inherited OnBeforeExportReport(Report, Cancel);

	    End Sub OnBeforeExportReport;

	    Public Sub OnAfterExportReport(Report: IPrxReport);

	    Begin

	        //Вызов системного события, переопределенного в классе Parent

	        Inherited OnAfterExportReport(Report);

	    End Sub OnAfterExportReport;

	End Class EventsClass;

	Public Class Parent: ReportEvents

	    //Переопределение системного события EventOnBeforeExportReport

	    Public Sub EventOnBeforeExportReport(Args: IUiPrxExportCancelEventArgs);

	    Begin

	        //Обработка системного события

	    End Sub EventOnBeforeExportReport;

	    //Переопределение системного события EventOnAfterExportReport

	    Public Sub EventOnAfterExportReport(Args: IUiPrxExportEventArgs);

	    Begin

	        //Обработка системного события

	    End Sub EventOnAfterExportReport;

	End Class Parent;


При экспорте отчета произойдет вызов переопределённого системного события
 EventOnBeforeExportReport, в котором
 можно изменить параметры экспорта.


См. также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
