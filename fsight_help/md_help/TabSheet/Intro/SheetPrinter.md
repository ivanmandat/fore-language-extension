# Печать таблицы

Печать таблицы
-


# Печать таблицы


Для печати таблицы предназначен интерфейс [ITabSheetPrinter](SheetPrinter.htm).


Приведен пример настройки параметров страницы и печати регламентного
 отчета с идентификатором «REPORT_TAB».


В результате выполнения примера будет напечатана первая страница отчета.


## Пример


Для выполнения примера добавьте ссылки на системные сборки: Drawing,
 Metabase, Report, Tab.


			Sub TablePrint;

Var

    mb: IMetabase;

    Report: IPrxReport;

    Table: ITabSheet;

    SheetPrinter: ITabSheetPrinter;

    PageSettings: ITabPageSettings;

    pCount: Integer;

    Image: IGxImage;

    Graph: IGxGraphics;

    Rect: IGxRect;

    Color: IGxColor;

    Printer: IGxDocumentPrinter;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем регламентный отчет

    Report := mb.ItemById("REPORT_TAB").Bind As IPrxReport;

    // Получаем таблицу

    Table := (Report.ActiveSheet As IPrxTable).TabSheet;

    // Получаем параметры печати

    SheetPrinter := Table.CreatePrinter;

    // Задаем отступы для первой страницы

    SheetPrinter.FirstPageHeaderGap := 20;

    SheetPrinter.FirstPageFooterGap := 20;

    SheetPrinter.DifferentFirstPageGap := True;

    // Задаем отступы для четных страниц

    SheetPrinter.EvenHeaderGap := 10;

    SheetPrinter.EvenFooterGap := 10;

    SheetPrinter.DifferentEvenPageGap := True;

    // Получаем параметры страницы

    PageSettings := SheetPrinter.PageSettings;

    // Указываем, что печатаем таблицу с оформлением

    PageSettings.BlackAndWhite := False;

    // Указываем, что используем формат A4

    PageSettings.PaperFormat := GxPaperFormat.A4;

    // Выравниваем таблицу по горизонтали

    PageSettings.CenterHorizontal := True;

    // Выводим таблицу на печать

    pCount := SheetPrinter.GetPageCount;

    If pCount > 0 Then

        Image := GxBitmap.CreateNew(1000, 1000, GxPixelFormat.Format64bppArgb);

        Graph := GxGraphicsClass.FromImage(Image);

        Rect := New GxRect.Create(0, 1, 1000, 1000);

        Color := New GxColor.CreateRGB(255, 255, 255);

        Graph.FillColorRectangle(Color, Rect);

        SheetPrinter.PrintPage(1, Graph);

        Printer := GxPrinters.DefaultPrinter As IGxDocumentPrinter;

        Printer.StartDocument("Table");

        Printer.NewPage;

        Printer.Graphics.DrawImageTransparent(Image, Null, Null, Null);

        Printer.EndDocument;

    End If;

End Sub TablePrint;


См. также:


[Общие
 принципы программирования с использованием сборки Tab](Programming_principles.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
