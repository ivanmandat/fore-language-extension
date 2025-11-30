# IPrxReportExporter.ExportEmptyPages

IPrxReportExporter.ExportEmptyPages
-


# IPrxReportExporter.ExportEmptyPages


## Синтаксис


ExportEmptyPages: Boolean;


## Описание


Свойство ExportEmptyPages определяет
 необходимость экспорта пустых листов при экспорте в формат RTF(*.rtf).


## Комментарии


Под пустыми листами понимаются листы, на которых нет данных, причем
 если на таком листе расположены различные объекты (диаграммы, карты, изображения
 и т.д.), то лист все равно считается пустым.


Если значение свойства True,
 то пустые страницы экспортируются, при значении False
 - нет.


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

    Exp.ExportEmptyPages := False;

    Exp.ExportToFile("C:\Отчет.rtf", "rtf");

End Sub UserProc;


При экспорте отчета будут проигнорированы листы, не содержащие данных.


См. также:


[IPrxReportExporter](IPrxReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
