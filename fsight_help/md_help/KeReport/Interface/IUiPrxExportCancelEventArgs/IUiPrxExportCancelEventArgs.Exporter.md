# IUiPrxExportCancelEventArgs.Exporter

IUiPrxExportCancelEventArgs.Exporter
-


# IUiPrxExportCancelEventArgs.Exporter


## Синтаксис


Exporter: [PrxReportExporter](../IPrxReportExporter/IPrxReportExporter.htm);


## Описание


Свойство Exporter определяет
 объект-экспортер, выполняющий экспорт.


## Пример


Пример рассмотрим на событии, которое наступает перед экспортом регламентного
 отчета.


			Sub UiReport1OnBeforeExportReport(Sender: Object; Args: IUiPrxExportCancelEventArgs);

Var

    exporter: IPrxReportExporter;

Begin

    exporter:= Args.Exporter;

    exporter.ExportChartsAsImages:= True;

End Sub UiReport1OnBeforeExportReport;


После выполнения примера при экспорте в событии изменится настройка
 «Диаграммы как изображения».


См. также:


[IUiPrxExportCancelEventArgs](IUiPrxExportCancelEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
