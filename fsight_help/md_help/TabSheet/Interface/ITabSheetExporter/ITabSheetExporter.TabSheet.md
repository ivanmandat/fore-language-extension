# ITabSheetExporter.TabSheet

ITabSheetExporter.TabSheet
-


# ITabSheetExporter.TabSheet


## Синтаксис


TabSheet: [ITabSheet](../ITabSheet/ITabSheet.htm);


## Описание


Свойство TabSheet определяет
 таблицу, которую необходимо экспортировать.


## Пример


В рассматриваемом примере предполагается существование объекта Report
 типа IPrxReport.


	Sub UserProc;

	Var

	    Report: IPrxReport;

	    Tab: ITabSheet;

	    Exp: ITabSheetExporter;

	Begin

	    Tab := (Report.Sheets.Item(0) As IPrxTable).TabSheet;

	    Exp := New TabSheetExporter.Create;

	    Exp.TabSheet := Tab;

	    Exp.ExportObjects := False;

	    Exp.ExportToFile("c:\Отчет1.xls", "XLS");

	End Sub UserProc;


После выполнения примера лист регламентного отчета будет экспортирован
 в файл формата "XLS". Объекты, содержащиеся на листе таблицы,
 экспортированы не будут.


См. также:


[ITabSheetExporter](ITabSheetExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
