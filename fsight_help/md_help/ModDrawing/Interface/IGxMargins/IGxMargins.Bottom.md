# IGxMargins.Bottom

IGxMargins.Bottom
-


# IGxMargins.Bottom


## Синтаксис


Bottom: Double;


## Описание


Свойство Bottom определяет значение
 нижнего отступа.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта с идентификатором REPORT.


Добавьте ссылки на системные сборки: Drawing, Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    PageSet: IGxPageSettings;

	    Margins: IGxPageMargins;

	Begin

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("REPORT").Edit As IPrxReport;

	    PageSet := Report.ActiveSheet.PageSettings;

	    // Формат страниц

	    PageSet.PaperFormat := GxPaperFormat.A3;

	    // Ориентация страниц

	    PageSet.PaperOrientation := GxPaperOrientation.Landscape;

	    // Отступы страниц

	    Margins := PageSet.Margins;

	    Margins.Left := 20;

	    Margins.Right := 10;

	    Margins.Top := 10;

	    Margins.Bottom := 10;

	    // Сохранение изменений

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера для страниц активного листа регламентного отчёта
 будут определены формат и отступы.


См. также:


[IGxMargins](IGxMargins.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
