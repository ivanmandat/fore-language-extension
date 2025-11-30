# ITabFootnotes.NumberingRule

ITabFootnotes.NumberingRule
-


# ITabFootnotes.NumberingRule


## Синтаксис


NumberingRule: [TabFootnotesNumberingRule](../../Enums/TabFootnotesNumberingRule.htm);


## Описание


Свойство NumberingRule определяет
 правило нумерации сносок для различных таблиц нескольких листов.


## Комментарии


Свойство актуально при работе инструментами, в которых могут быть созданы
 несколько листов, каждый из которых в свою очередь представляет собой
 отдельную таблицу. Например, при работе с регламентным отчетом.


По умолчанию нумерация сносок продолжается между таблицами отдельных
 листов.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором «REGULAR_REPORT». Добавьте ссылки на системные
 сборки Metabase, Report, Tab.


			Sub UserProc;

Var

    MB: IMetabase;

    Sheet: IPrxSheet;

    Report: IPrxReport;

    Footnotes1, Footnotes2: ITabFootnotes;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REGULAR_REPORT").Edit As IPrxReport;

    //Сноски текущего листа

    Sheet := Report.ActiveSheet;

    Footnotes1 := (Sheet As IPrxTable).TabSheet.Footnotes;

    Footnotes1.Add(0, 0).Text := "Первый";

    //Сноски нового листа

    Sheet := Report.Sheets.Add("NewSheet");

    Footnotes2 := (Sheet As IPrxTable).TabSheet.Footnotes;

    Footnotes2.NumberingRule := TabFootnotesNumberingRule.Restart;

    Footnotes2.StartingNumber := 10;

    Footnotes2.Add(0, 0).Text := "Второй";

    //Сохранить

    Report.MetabaseObject.Save;

End Sub UserProc;


При выполнении примера на активном листе в ячейке «A0» будет создана
 сноска. После этого в отчете будет создан новый лист, в ячейке «A0» которого
 также будет создана сноска. На новом листе будет вестись собственная нумерация
 сносок, первый номер сноски будет - «10».


См. также:


[ITabFootnotes](ITabFootnotes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
