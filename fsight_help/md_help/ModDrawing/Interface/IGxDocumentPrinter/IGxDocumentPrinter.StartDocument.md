# IGxDocumentPrinter.StartDocument

IGxDocumentPrinter.StartDocument
-


# IGxDocumentPrinter.StartDocument


## Синтаксис


StartDocument(JobTitle: String);


## Параметры


JobTitle.
 Заголовок документа в очереди печати принтера. При печати в файл - подставляется
 в наименование файла.


## Описание


Метод StartDocument осуществляет
 постановку документа в очередь печати принтера.


## Пример


Для выполнения примера предполагается наличие в корневом каталоге диска
 C графического файла Image.bmp.


			Sub UserProc;

Var

    Image: IGxImage;

    Printer: IGxDocumentPrinter;

Begin

    Image := GxBitmap.FromFile("C:\Image.bmp");

    Printer := GxPrinters.DefaultPrinter As IGxDocumentPrinter;

    Printer.StartDocument("Bmp_Test");

    Printer.NewPage;

    Printer.Graphics.DrawImageTransparent(Image, Null, Null, Null);

    Printer.EndDocument;

End Sub UserProc;


После выполнения примера на принтере, установленном в операционной системе
 в качестве принтера по умолчанию, будет напечатано изображение, которое
 загружено из указанного файла.


См. также:


[IGxDocumentPrinter](IGxDocumentPrinter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
