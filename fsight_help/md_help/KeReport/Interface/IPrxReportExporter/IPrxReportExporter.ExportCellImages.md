# IPrxReportExporter.ExportCellImages

IPrxReportExporter.ExportCellImages
-


# IPrxReportExporter.ExportCellImages


## Синтаксис


ExportCellImages: Boolean;


## Описание


Свойство ExportCellImages определяет,
 будут ли экспортироваться изображения, содержащиеся в ячейках таблицы.


## Комментарии


По умолчанию свойству установлено значение True.


Если свойству установлено значение True,
 то при экспорте будут экспортироваться изображения, содержащиеся в ячейках
 таблицы (например изображения условного форматирования). Если установлено
 значение False, то изображения
 экспортироваться не будут.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором «Report_1».


			Sub UserProc;

Var

    MB: IMetabase;

    Exp: IPrxReportExporter;

Begin

    MB := MetabaseClass.Active;

    Exp := New PrxReportExporter.Create;

    Exp.Report := MB.ItemById("Report_1").Bind As IPrxReport;

    Exp.ExportCellImages := False;

    Exp.ExportToFile("C:\Report.pdf", "PDF");

End Sub UserProc;


После выполнения примера регламентный отчет будет экспортирован в файл
 «C:\Report.pdf». Если в ячейках
 отчета имеются какие-либо изображения, то они экспортированы не будут.


См. также:


[IPrxReportExporter](IPrxReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
