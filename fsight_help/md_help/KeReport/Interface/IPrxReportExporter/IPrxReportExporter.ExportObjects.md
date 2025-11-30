# IPrxReportExporter.ExportObjects

IPrxReportExporter.ExportObjects
-


# IPrxReportExporter.ExportObjects


## Синтаксис


ExportObjects: Boolean;


## Описание


Свойство ExportObjects определяет
 необходимость экспорта объектов (диаграмма, карта, рисунок и т.д.), расположенных
 на листах отчета.


## Комментарии


Если значение данного свойства True,
 то объекты экспортируются, при значении False
 - нет.


По умолчанию данное свойство имеет значение True.


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

	    Exp.ExportObjects := False;

	    Exp.ExportToFile("C:\Отчет.xls","xls");

	End Sub UserProc;


После выполнения примера результирующий файл не будет содержать объектов,
 которые были расположены на листах отчета.


См. также:


[IPrxReportExporter](IPrxReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
