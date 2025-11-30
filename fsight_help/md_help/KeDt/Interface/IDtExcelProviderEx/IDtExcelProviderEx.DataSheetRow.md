# IDtExcelProviderEx.DataSheetRow

IDtExcelProviderEx.DataSheetRow
-


# IDtExcelProviderEx.DataSheetRow


## Синтаксис


DataSheetRow(SheetName: String): Integer;


## Параметры


SheetName. Наименование листа.


## Описание


Свойство DataSheetRow для указанного
 листа определяет индекс первой строки, содержащей данные.


## Комментарии


Данное свойство актуально, если в свойстве [Sheet](IDtExcelProviderEx.Sheet.htm)
 указаны наименования нескольких листов файла с данными.


## Пример


Для выполнения примера предполагается наличие в корневом каталоге диска
 C файла Microsoft Excel с наименованием Book.xlsx.


	Sub UserProc;

	Var

	    ExcelProvider: IDtExcelProviderEx;

	    Path: String = "c:\Book.xlsx";

	    v: Array;

	    i: Integer;

	Begin

	    ExcelProvider := New DtExcelProviderEx.Create;

	    ExcelProvider.File := Path;

	    ExcelProvider.Sheet := "Sheet1\;Sheet2";

	    ExcelProvider.Format := "XLSX";

	    ExcelProvider.HasHeader := False;

	    ExcelProvider.DataSheetRow("Sheet1") := 10;

	    ExcelProvider.DataSheetRow("Sheet2") := 20;

	    Debug.WriteLine("Значения:");

	    ExcelProvider.Open;

	    While Not ExcelProvider.Eof Do

	        ExcelProvider.Fetch(v);

	        For i := 0 To v.Length - 1 Do

	            Debug.Write(v[i] + " ");

	        End For;

	        Debug.WriteLine("");

	    End While;

	    ExcelProvider.Close;

	End Sub UserProc;


При выполнении примера будет создан новый источник, связанный с указанным
 файлом. Значения будут импортироваться с двух листов, начиная с указанных
 строк. Полученные значения будут выведены в консоль среды разработки.


См. также:


[IDtExcelProviderEx](IDtExcelProviderEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
