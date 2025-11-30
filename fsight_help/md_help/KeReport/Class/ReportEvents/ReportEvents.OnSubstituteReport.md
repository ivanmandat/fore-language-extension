# ReportEvents.OnSubstituteReport

ReportEvents.OnSubstituteReport
-


# ReportEvents.OnSubstituteReport


## Синтаксис


OnSubstituteReport(Args: [IUiPrxReportBaseSubstitutionEventArgs](../../Interface/IUiPrxReportBaseSubstitutionEventArgs/IUiPrxReportBaseSubstitutionEventArgs.htm));


## Параметры


Args. Параметр, позволяющий
 работать с параметрами события.


## Описание


Метод OnSubstituteReport реализует
 событие, которое наступает при подмене отчёта.


## Комментарии


Подмена отчёта может быть осуществлена при экспорте/печати/предпросмотре.
 Отчёт, на который осуществляется подмена, указывается в свойстве [IUiPrxReportBaseSubstitutionEventArgs.Report](../../Interface/IUiPrxReportBaseSubstitutionEventArgs/IUiPrxReportBaseSubstitutionEventArgs.Report.htm)
 аргумента события.


При возникновении события OnSubstituteReport
 также в ядре обрабатывается системное событие [EventOnSubstituteReport](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnSubstituteReport.htm),
 которое при необходимости можно переопределить.


## Пример


Использование метода приведено в примере для [IPrxReportUserEvents.EventOnSubstituteReport](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnSubstituteReport.htm).


См. также:


[ReportEvents](ReportEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
