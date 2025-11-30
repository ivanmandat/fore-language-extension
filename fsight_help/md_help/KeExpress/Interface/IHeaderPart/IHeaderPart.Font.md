# IHeaderPart.Font

IHeaderPart.Font
-


# IHeaderPart.Font


## Синтаксис


Font: [IGxFont](ModDrawing.chm::/Interface/IGxFont/IGxFont.htm);


## Описание


Свойство Font определяет шрифт
 части заголовка/колонтитула.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта с идентификатором REPORT.


Добавьте ссылки на системные сборки: Drawing, Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    Sheet: IPrxSheet;

	    Headers: IPrxSheetHeaders;

	    Param: IPrxSheetHeader;

	    HeaderPart: IPrxSheetHeaderPart;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим регламентный отчёт

	    Report := MB.ItemById("REPORT").Edit As IPrxReport;

	    // Получим первый лист

	    Sheet := Report.Sheets.Item(0);

	    // Получим колонтитулы

	    Headers := Sheet.HeadersFooters;

	    // Настроим колонтитулы для первого
	 листа

	    Param := Headers.FirstPageHeader;

	    HeaderPart := Param.Center;

	    HeaderPart.Text := "&[Page]&nbsp;из &[Pages]";

	    HeaderPart.Color := New GxColor.CreateRGB(0,70,255);

	    HeaderPart.Font := New GxFont.Create("Tahoma", 9);

	End Sub UserProc;


После выполнения примера будут настроены колонтитулы для первого листа
 регламентного отчёта.


См. также:


[IHeaderPart](IHeaderPart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
