# IExporter.Encoding

IExporter.Encoding
-


# IExporter.Encoding


## Синтаксис


Encoding: [CodePage](ForeSys.chm::/Enums/CodePage.htm);


## Описание


Свойство Encoding устанавливает
 кодовую страницу таблицы преобразования, в соответствии с которой будет
 осуществляться экспорт данных.


## Комментарии


Свойство актуально только при осуществлении экспорта в формат HTML.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT.


			Sub UserProc;

Var

    Mb: IMetabase;

    Report: IPrxReport;

    Tab: ITabSheet;

    Exp: ITabSheetExporter;

Begin

    Mb := MetabaseClass.Active;

    Report := Mb.ItemById("REPORT").Bind As IPrxReport;

    Tab := (Report.ActiveSheet As IPrxTable).TabSheet;

    Exp := New TabSheetExporter.Create;

    Exp.TabSheet := Tab;

    Exp.Encoding := Codepage.UTF8;

    Exp.ExportToFile("D:\Отчет1.html", "HTML");

End Sub UserProc;


При выполнении примера активный лист регламентного отчёта будет экспортирован
 в файл в формате HTML. Для HTML-страницы будет использована кодировка
 UTF-8.


См. также:


[IExporter](IExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
