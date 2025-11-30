# IGxDocument.Print

IGxDocument.Print
-


# IGxDocument.Print


## Синтаксис


Print(Printer: [IGxDocumentPrinter](../IGxDocumentPrinter/IGxDocumentPrinter.htm);
 SectionIndex: Integer; RangeIndex: Integer; Pages: String);


## Параметры


Printer. Принтер, на котором
 осуществляется печать документа;


SectionIndex. Номер секции,
 которую необходимо напечатать (-1 - если необходимо напечатать все секции
 документа);


RangeIndex. Номер диапазона
 печати (0 - весь документ; 1 - текущий лист; 2 - выделенный диапазон);


Pages. Страницы в секции, которые
 необходимо напечатать.


## Описание


Метод Print осуществляет печать
 на принтере соответствии с установленными параметрами печати.


## Комментарии


Для регламентного отчёта под секцией подразумевается отдельный лист,
 для экспресс-отчета и рабочего пространства под секцией понимается весь
 документ.


В параметре Pages страницы
 указываются в следующем виде:


	- "3". Печать указанной страницы.


	- "1,3". Печать указанных страниц.


	- "1-3". Печать указанного диапазона страниц.


	- "". Печать всех страниц.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT.


			Sub UserProc;

Var

    MB: IMetabase;

    Printer: IGxPrinter;

    DocPrint: IGxDocumentPrinter;

    Document: IGxDocument;

Begin

    MB := MetabaseClass.Active;

    Printer := GxPrinters.DefaultPrinter;

    DocPrint := Printer As IGxDocumentPrinter;

    Document := MB.ItemById("REPORT").Bind As IGxDocument;

    Document.Print(DocPrint, 1, 0, "1");

End Sub UserProc;


После выполнения примера будет напечатана первая страница первого листа
 отчёта на принтере, установленном в ОС по умолчанию.


См. также:


[IGxDocument](IGxDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
