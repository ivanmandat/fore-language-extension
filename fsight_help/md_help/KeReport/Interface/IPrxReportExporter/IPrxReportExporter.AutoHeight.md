# IPrxReportExporter.AutoHeight

IPrxReportExporter.AutoHeight
-


# IPrxReportExporter.AutoHeight


## Синтаксис


AutoHeight: Boolean;


## Описание


Свойство AutoHeight определяет
 необходимость автоподгонки высоты строк при экспорте в формат HTML (*.html).


## Комментарии


Если значение данного свойства True,
 то при экспорте высота строк устанавливается автоматически в зависимости
 от содержания ячеек строки, при значении False
 - высота строк не меняется.


По умолчанию свойство имеет значение False.


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

    Exp.AutoHeight := True;

    Exp.ExportToFile("C:\Report.html", "html");

End Sub UserProc;


В результате выполнения примера регламентный отчет будет экспортирован
 в файл «Report.html» (формат HTML),
 при этом высота строк в результирующем файле будет установлена автоматически
 в зависимости от содержания.


См. также:


[IPrxReportExporter](IPrxReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
