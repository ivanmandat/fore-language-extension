# IPrxReportExporter.ExportPalette

IPrxReportExporter.ExportPalette
-


# IPrxReportExporter.ExportPalette


## Синтаксис


ExportPalette: Boolean;


## Описание


Свойство ExportPalette определяет
 необходимость экспорта палитры в Excel (*.xls).


## Комментарии


Если значение свойства True,
 то при экспорте палитра, используемая в Excel, заменяется на палитру,
 используемую в «Форсайт. Аналитическая платформа»;
 при значении False происходит
 пересчет палитры в Excel, в соответствии с палитрой, используемой в платформе.


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

    Exp.ExportPalette := False;

    Exp.ExportToFile("C:\Отчет.xls", "xls");

End Sub UserProc


При экспорте регламентного отчета будет осуществлен пересчет палитры
 в Excel.


См. также:


[IPrxReportExporter](IPrxReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
