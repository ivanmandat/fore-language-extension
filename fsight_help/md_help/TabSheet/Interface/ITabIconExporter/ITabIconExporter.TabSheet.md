# ITabIconExporter.TabSheet

ITabIconExporter.TabSheet
-


# ITabIconExporter.TabSheet


## Синтаксис


TabSheet: [ITabSheet](../ITabSheet/ITabSheet.htm);


## Описание


Свойство TabSheet определяет
 таблицу, значок которой необходимо экспортировать.


## Пример


В рассматриваемом примере предполагается существование объекта Report
 типа IPrxReport, на листе которого расположены значки, например:


![](ITabIconExporter.gif)


	Sub UserProc;

	Var

	    Report: IPrxReport;

	    Exp: ITabIconExporter;

	Begin

	    Exp := New TabIconExporter.Create;

	    Exp.TabSheet := (Report.Sheets.Item(0) As IPrxTable).TabSheet;

	    Exp.IconIndex := 0;

	    Exp.ExportToFile("C:\Icon1.bmp","bmp");

	End Sub UserProc;


После выполнения примера первый значок листа будет экспортирован в файл
 заданного формата.


См. также:


[ITabIconExporter](ITabIconExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
