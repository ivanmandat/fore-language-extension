# ITabSheetPrinter.PagePrintableRect

ITabSheetPrinter.PagePrintableRect
-


# ITabSheetPrinter.PagePrintableRect


## Синтаксис


PagePrintableRect(PageNumber: Integer): [IGxRect](ModDrawing.chm::/Interface/IGxRect/IGxRect.htm);


## Параметры


PageNumber - номер страницы,
 для которой необходимо получить печатаемый диапазон. Нумерация страниц
 начинается с единицы.


## Описание


Свойство PagePrintableRect возвращает
 диапазон ячеек, который будет напечатан на указанной странице.


## Комментарии


Данное свойство возвращает прямоугольник, границы которого содержат
 координаты верхней левой и правой нижней ячеек печатаемого диапазона.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором «Report_1».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rep: IPrxReport;

	    Sheets: IPrxSheets;

	    Tab: IPrxTable;

	    TSheet: ITabSheet;

	    TabPrint: ITabSheetPrinter;

	    PrintRange: IGxRect;

	    PageNum: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Rep := MB.ItemById("Report_1").Bind As IPrxReport;

	    Sheets := Rep.Sheets;

	    For Each Tab In Sheets Do

	        TabPrint := Tab.CreatePrinter;

	        Debug.WriteLine("Лист: " + (Tab As IPrxSheet).Name +

	            "; Количество страниц: " + TabPrint.GetPageCount.ToString);

	        TSheet := Tab.TabSheet;

	        Debug.Indent;

	        For PageNum := 1 To TabPrint.GetPageCount Do

	            PrintRange := TabPrint.PagePrintableRect(PageNum);

	            Debug.WriteLine("Страница: " + PageNum.ToString +

	                "; Печатаемый диапазон ячеек:" +

	                TSheet.Cells(PrintRange.Top, PrintRange.Left, PrintRange.Bottom, PrintRange.Right).Address);

	        End For;

	        Debug.Unindent;

	    End For;

	End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведен список
 листов регламентного отчета. Для каждого листа будет выведено количество
 страниц, на которые он будет разбит при печати. Для каждой страницы будет
 выведен печатаемый диапазон ячеек.


См. также:


[ITabSheetPrinter](ITabSheetPrinter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
