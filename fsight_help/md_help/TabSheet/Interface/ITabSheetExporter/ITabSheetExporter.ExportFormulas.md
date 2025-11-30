# ITabSheetExporter.ExportFormulas

ITabSheetExporter.ExportFormulas
-


# ITabSheetExporter.ExportFormulas


## Синтаксис


ExportFormulas: Boolean;


## Описание


Свойство ExportFormulas определяет необходимость экспорта формул, содержащихся в таблице. Если значение свойства True, то таблица экспортируется с формулами, при False экспортируются только значения.


По умолчанию свойство имеет значение True.


## Пример


В рассматриваемом примере предполагается существование объекта Report типа IPrxReport.


			Sub UserProc;
Var

    Report: IPrxReport;

    Tab: ITabSheet;

    Exp: ITabSheetExporter;
Begin

    Tab:= (Report.Sheets.Item(0) As IPrxTable).TabSheet;

    Exp:= New TabSheetExporter.Create;

    Exp.TabSheet:= Tab;

    Exp.ExportFormulas:= True;

    Exp.ExportToFile("c:\Отчет1.xls", "XLS");
End Sub UserProc;


После выполнения примера лист регламентного отчета будет экспортирован в файл формата «XLS». Формулы, содержащиеся в таблице, также будут экспортированы.


См. также:


[ITabSheetExporter](ITabSheetExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
