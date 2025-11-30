# IPrxTable.CreatePrinter

IPrxTable.CreatePrinter
-


# IPrxTable.CreatePrinter


## Синтаксис


CreatePrinter: [ITabSheetPrinter](TabSheet.chm::/Interface/ITabSheetPrinter/ITabSheetPrinter.htm);


## Описание


Метод CreatePrinter создает
 объект, позволяющий работать c листом отчета, подготовленным к печати.


## Комментарии


При вызове данного метода осуществляется разбивка листа на отдельные
 страницы в соответствии с настройками, заданными в свойстве [IPrxSheet.PageSettings](../IPrxSheet/IPrxSheet.PageSettings.htm).
 Также учитываются [заголовки](../IPrxReport/IPrxReport.Title.htm)
 и параметры [верхнего](KeExpress.chm::/Interface/IHeaders/IHeaders.Header.htm)
 и [нижнего](KeExpress.chm::/Interface/IHeaders/IHeaders.Footer.htm)
 колонтитулов страниц отчета.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором REPORT_1.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rep: IPrxReport;

	    Sheets: IPrxSheets;

	    Tab: IPrxTable;

	    TabPrint: ITabSheetPrinter;

	Begin

	    MB := MetabaseClass.Active;

	    Rep := MB.ItemById("Report_1").Bind As IPrxReport;

	    Sheets := Rep.Sheets;

	    For Each Tab In Sheets Do

	        TabPrint := Tab.CreatePrinter;

	        Debug.WriteLine("Лист: " + (Tab As IPrxSheet).Name + "; Количество страниц: " + TabPrint.GetPageCount.ToString);

	    End For;

	End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведен список
 листов регламентного отчета. Для каждого листа будет выведено количество
 страниц, на которые он будет разбит при печати.


См. также:


[IPrxTable](IPrxTable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
