# ITabSheetExporter.ExportObjectAsBitmap

ITabSheetExporter.ExportObjectAsBitmap
-


# ITabSheetExporter.ExportObjectAsBitmap


## Синтаксис


ExportObjectAsBitmap: Boolean;


## Описание


Свойство ExportObjectAsBitmap
 определяет необходимость экспорта объектов в растровом формате при экспорте
 в форматы PDF (*.pdf) и XLS (*.xls).


## Комментарии


Если значение свойства True,
 то объекты отчета экспортируются в растровом формате, при значении False - в векторном формате.


По умолчанию свойство имеет значение True.


## Пример


В рассматриваемом примере предполагается существование объекта Report
 типа IPrxReport.


	Sub UserProc;

	Var

	    Report: IPrxReport;

	    Tab: ITabSheet;

	    exp: ITabSheetExporter;

	Begin

	    Tab := (Report.Sheets.Item(0) As IPrxTable).TabSheet;

	    exp := New TabSheetExporter.Create;

	    exp.TabSheet := Tab;

	    exp.ExportObjectAsBitmap := False;

	    exp.ExportToFile("C:\Temp\Tab_metafile.pdf","PDF");

	End Sub UserProc;


После выполнения примера лист регламентного отчета будет экспортирован
 в заданный файл, объекты листа будут экспортированы в векторном формате.


См. также:


[ITabSheetExporter](ITabSheetExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
