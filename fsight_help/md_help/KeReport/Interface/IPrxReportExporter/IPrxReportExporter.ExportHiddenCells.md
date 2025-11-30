# IPrxReportExporter.ExportHiddenCells

IPrxReportExporter.ExportHiddenCells
-


# IPrxReportExporter.ExportHiddenCells


## Синтаксис


ExportHiddenCells: Boolean;


## Описание


Свойство ExportHiddenCells определяет
 необходимость экспорта скрытых строк/столбцов при экспорте в форматы XLS
 (*.xls) и ODS(*.ods).


## Комментарии


Если значение данного свойства True,
 то скрытые столбцы/строки (если они имеются в отчете) экспортируются и
 с ними можно работать средствами Microsoft Excel; при значении False
 - скрытые области не экспортируются.


По умолчанию свойство имеет значение True.


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

    Exp.ExportHiddenCells := False;

    Exp.ExportToFile("C:\Отчет.xls", "xls");

End Sub UserProc;


После выполнения примера в результирующем файле не будут отображены
 скрытые строки/столбцы.


См. также:


[IPrxReportExporter](IPrxReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
