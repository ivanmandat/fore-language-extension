# IReportControlPanel.Report

IReportControlPanel.Report
-


# IReportControlPanel.Report


## Синтаксис


Report: [IPrxReport](../IPrxReport/IPrxReport.htm);


## Описание


Свойство Report определяет регламентный
 отчет, реализуемый интерфейсом [IPrxReport](../IPrxReport/IPrxReport.htm).


## Пример


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    MB: IMetabase;

Begin

    MB := MetabaseClass.Active;

    ReportControlPanel1.Report := MB.ItemById("REPORT").Bind As IPrxReport;

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в качестве источника
 данных для компонента «ReportControlPanel1» будет установлен регламентный
 отчет с идентификатором «Report».


См. также:


[IReportControlPanel](IReportControlPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
