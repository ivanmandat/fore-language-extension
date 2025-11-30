# IPrxReportUserEvents.EventOnSubstituteReport

IPrxReportUserEvents.EventOnSubstituteReport
-


# IPrxReportUserEvents.EventOnSubstituteReport


## Синтаксис


EventOnSubstituteReport(Args: [IUiPrxReportBaseSubstitutionEventArgs](../IUiPrxReportBaseSubstitutionEventArgs/IUiPrxReportBaseSubstitutionEventArgs.htm));


## Параметры


Args. Параметр, позволяющий
 работать с параметрами события.


## Описание


Метод EventOnSubstituteReport
 реализует системное событие, которое наступает при подмене отчета.


## Комментарии


Подмена отчета может быть осуществлена при экспорте/печати/предпросмотре
 в событии [OnSubstituteReport](../../Class/ReportEvents/ReportEvents.OnSubstituteReport.htm).
 Метод EventOnBeforeExportReport
 позволяет переопределить системное событие, которое наступает после события
 [OnSubstituteReport](../../Class/ReportEvents/ReportEvents.OnSubstituteReport.htm).


## Пример


	Public Class EventsClass: Parent

	    //Обработка события OnSubstituteReport

	    Public Sub OnSubstituteReport(Args: IUiPrxReportBaseSubstitutionEventArgs);

	    Begin

	        //Вызов системного события, переопределенного в классе Parent

	        Inherited OnSubstituteReport(Args);

	    End Sub OnSubstituteReport;

	End Class EventsClass;

	Public Class Parent: ReportEvents

	    //Переопределение системного события EventOnSubstituteReportt

	    Public Sub EventOnSubstituteReport(Args: IUiPrxReportBaseSubstitutionEventArgs);

	    Begin

	        //Обработка системного события

	    End Sub EventOnSubstituteReport;

	End Class Parent;


Класс EventsClass является обработчиком
 событий регламентного отчета. При экспорте/печати/предпросмотре отчета
 произойдет вызов переопределённого системного события EventOnSubstituteReport,
 в котором можно изменить параметры подмены отчета.


См. также:


[IPrxReportUserEvents](IPrxReportUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
