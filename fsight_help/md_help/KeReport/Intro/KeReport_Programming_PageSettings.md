# Настройка параметров страницы и экспорт отчета

Настройка параметров страницы и экспорт отчета
-


# Настройка параметров страницы и экспорт отчета


Рассмотрим пример настройки параметров страницы и экспорта отчета в
 формат *.xls.


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором «REPORT_INTRO».


## Пример


Для выполнения примера добавьте ссылки на системные сборки Metabase,
 Report.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    Title: IPrxReportTitle;

    Header : IPrxSheetHeaderBase;

    HeaderPart : IPrxSheetHeaderPart;

    Exp: IPrxReportExporter;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT_INTRO").Edit;

    Report := MObj As IPrxReport;

    // == Параметры страницы ==

    // Заголовок отчета

    Title := Report.Title;

    Title.Height := 20;

    Header := Title As IPrxSheetHeaderBase;

    HeaderPart := Header.Center;

    HeaderPart.Text := "&[Name]&nbsp;&[Date]";

    // Заголовок будет выводиться при печати отчета:

    Header.Printable := True;

    // == Экспорт отчета ==

    Exp := New PrxReportExporter.Create;

    Exp.Report := Report;

    Exp.Sheet := Report.Sheets.Item(0);

    Exp.ExportObjects := False;

    Exp.ExportToFile("C:\Отчет.xls","xls");

    MObj.Save;

End Sub UserProc;


В результате выполнения примера будет задан заголовок регламентного
 отчета в формате «Наименование отчета Дата». Заданный заголовок будет
 выводиться при печати и экспорте отчета. Настройки будут сохранены для
 отчета. В дальнейшем отчет можно будет распечатать с заданными параметрами.


Отчет будет экспортирован в файл формата *.xls с заданными параметрами:


	- будет экспортирован только первый лист отчета;


	- объекты, расположенные на листах отчета, не будут экспортированы
	 в файл.


См. также:


[Общие
 принципы программирования с использованием сборки Report](KeReport_Programming.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
