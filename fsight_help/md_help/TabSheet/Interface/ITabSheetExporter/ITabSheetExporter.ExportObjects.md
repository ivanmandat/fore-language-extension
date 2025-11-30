# ITabSheetExporter.ExportObjects

ITabSheetExporter.ExportObjects
-


# ITabSheetExporter.ExportObjects


## Синтаксис


ExportObjects: Boolean;


## Описание


Свойство ExportObjects определяет
 необходимость экспорта объектов таблицы.


## Комментарии


Если значение свойства True,
 то объекты экспортируются, при значении False
 - нет. По умолчанию свойство имеет значение True.


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
 в файл формата «XLS». Объекты,
 содержащиеся на листе таблицы, экспортированы не будут.


См. также:


[ITabSheetExporter](ITabSheetExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
