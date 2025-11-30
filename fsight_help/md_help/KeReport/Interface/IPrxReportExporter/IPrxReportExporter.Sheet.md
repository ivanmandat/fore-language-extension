# IPrxReportExporter.Sheet

IPrxReportExporter.Sheet
-


# IPrxReportExporter.Sheet


## Синтаксис


Sheet: [IPrxSheet](../IPrxSheet/IPrxSheet.htm);


## Описание


Свойство Sheet определяет экспортируемый
 лист регламентного отчета.


## Комментарии


В случае если NULL, то экспортируется
 весь отчет. По умолчанию экспортируется весь отчет. Для задания диапазона
 экспортируемых листов следует использовать свойство [ExportRange](IPrxReportExporter.ExportRange.htm).


## Пример


В рассматриваемом примере предполагается существование объекта Report
 типа IPrxReport.


			Sub UserProc;

Var

    Mb: IMetabase;

    Report: IPrxReport;

    Exp: IPrxReportExporter;

Begin

    Mb := MetabaseClass.Active;

    Rep := Mb.ItemById("OBJ_REPORT").Bind As IPrxReport;

    Exp := New PrxReportExporter.Create;

    Exp.Report := Report;

    Exp.Sheet := Report.Sheets.Item(0);

    Exp.ExportToFile("C:\Отчет.xls", "xls");

End Sub UserProc;


После выполнения примера в заданный формат будет экспортирован только
 первый лист регламентного отчета.


См. также:


[IPrxReportExporter](IPrxReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
