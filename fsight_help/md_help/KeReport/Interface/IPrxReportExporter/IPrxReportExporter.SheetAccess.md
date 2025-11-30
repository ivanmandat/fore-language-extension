# IPrxReportExporter.SheetAccess

IPrxReportExporter.SheetAccess
-


# IPrxReportExporter.SheetAccess


## Синтаксис


SheetAccess: Boolean;


## Описание


Свойство SheetAccess определяет
 необходимость экспорта защиты листов и ячеек в формат XLS (*.xls).


## Комментарии


Если значение свойства True,
 то защита листов и ячеек экспортируется, при значении False
 - нет. По умолчанию свойство имеет значение False.


Необходимо помнить, что в Microsoft Excel будет устанавливаться защита
 листа с пустым паролем, даже если в регламентном отчете при защите листа
 был задан пароль.


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

    Exp.SheetAccess := True;

    Exp.ExportToFile("C:\Отчет1.xls", "xls");

End Sub UserProc;


При экспорте отчета будет экспортирована защита листов и ячеек.


См. также:


[IPrxReportExporter](IPrxReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
