# ITabSheetExporter.SheetAccess

ITabSheetExporter.SheetAccess
-


# ITabSheetExporter.SheetAccess


## Синтаксис


SheetAccess: Boolean;


## Описание


Свойство SheetAccess определяет
 необходимость экспорта защиты листов и ячеек в формат XLS (*.xls).


## Комментарии


Если значение свойства True,
 то защита листов и ячеек экспортируется, при значении False
 - нет.


По умолчанию свойство имеет значение False.


Необходимо помнить, что в Microsoft Excel будет устанавливаться защита
 листа с пустым паролем, даже если в отчете при защите листа был задан
 пароль.


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

	    Exp.SheetAccess := True;

	    Exp.ExportToFile("c:\Отчет1.xls", "XLS");

	End Sub UserProc;


При экспорте будет экспортирована защита листа и ячеек.


См. также:


[ITabSheetExporter](ITabSheetExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
