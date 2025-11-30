# IPrxPageSettings.StartPageNumber

IPrxPageSettings.StartPageNumber
-


# IPrxPageSettings.StartPageNumber


## Синтаксис


StartPageNumber: Integer;


## Описание


Свойство StartPageNumber определяет номер, с которого будет начинаться нумерация страниц листа.


## Пример


В рассматриваемом примере предполагается существование объекта Report типа IPrxReport.


Добавьте ссылку на системную сборку «Report».


			Sub UserProc;
Var

    Report: IPrxReport;

    Sheet: IPrxSheet;

    PageSet: IPrxPageSettings;
Begin

    Sheet := Report.Sheets.Item(0);

    PageSet := Sheet.PageSettings;

    PageSet.UseSheetPageCount := True;

    PageSet.StartPageNumber := 3;
End Sub UserProc;


После выполнения примера будет задано число, с которого будет начинаться нумерация страниц.


См. также:


[IPrxPageSettings](IPrxPageSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
