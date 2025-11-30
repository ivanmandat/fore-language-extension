# ITabSheetExporter.ExportHiddenCells

ITabSheetExporter.ExportHiddenCells
-


# ITabSheetExporter.ExportHiddenCells


## Синтаксис


ExportHiddenCells: Boolean;


## Описание


Свойство ExportHiddenCells определяет
 необходимость экспорта скрытых строк/столбцов при экспорте в форматы XLS
 (*.xls) и ODS (*.ods).


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

	    exp: ITabSheetExporter;

	    Report: IPrxReport;

	    Tab: ITabSheet;

	Begin

	    Tab := (Report.Sheets.Item(0) As IPrxTable).TabSheet;

	    exp := New TabSheetExporter.Create;

	    exp.TabSheet := Tab;

	    exp.ExportHiddenCells := False;

	    exp.ExportToFile("C:\Temp\Tab.xls","XLS");

	End Sub UserProc;


После выполнения примера в результирующем файле не будут отображены
 скрытые строки/столбцы.


См. также:


[ITabSheetExporter](ITabSheetExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
