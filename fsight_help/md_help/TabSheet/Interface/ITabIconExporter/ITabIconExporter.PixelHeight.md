# ITabIconExporter.PixelHeight

ITabIconExporter.PixelHeight
-


# ITabIconExporter.PixelHeight


## Синтаксис


PixelHeight: Integer;


## Описание


Свойство PixelHeight определяет
 высоту экспортируемого значка в пикселях.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором «REP_TABSHEET», на листе которого расположены
 значки из коллекции изображений таблицы ([ITabSheet.Images](../ITabSheet/ITabSheet.Images.htm)),
 например:


![](ITabIconExporter.gif)


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    SheetT: IPrxTable;

	    Tab: ITabSheet;

	    Exp: ITabIconExporter;

	Begin

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("REP_TABSHEET").Bind As IPrxReport;

	    SheetT := Report.Sheets.Item(0) As IPrxTable;

	    Tab := SheetT.TabSheet

	    Exp := New TabIconExporter.Create;

	    Exp.TabSheet := Tab;

	    Exp.IconIndex := 0;

	    Exp.PixelHeight := 32;

	    Exp.PixelWidth := 32;

	    Exp.ExportToFile("C:\Icon_0.bmp", "bmp");

	End Sub UserProc;


После выполнения примера первый значок листа будет экспортирован в файл
 заданного формата. Размер значка в файле 32x32 пикселя.


См. также:


[ITabIconExporter](ITabIconExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
