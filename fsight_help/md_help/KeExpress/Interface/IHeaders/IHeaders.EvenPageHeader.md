# IHeaders.EvenPageHeader

IHeaders.EvenPageHeader
-


# IHeaders.EvenPageHeader


## Синтаксис


EvenPageHeader: [IHeader](../IHeader/IHeader.htm);


## Описание


Свойство EvenPageHeader возвращает
 параметры верхнего колонтитула чётных страниц.


## Комментарии


Свойство актуально, если свойству [OddAndEvenPagesHeaderFooter](IHeaders.OddAndEvenPagesHeaderFooter.htm)
 установлено значение True.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT.


Добавьте ссылки на системные сборки: Metabase, Report.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    Report : IPrxReport;

	    Sheet: IPrxSheet;

	    Headers: IPrxSheetHeaders;

	    Param: IPrxSheetHeader;

	Begin

	    Metabase := MetabaseClass.Active;

	    Report := Metabase.ItemById("REPORT").Edit As IPrxReport;

	    Sheet := Report.Sheets.Item(0);

	    Headers := Sheet.HeadersFooters;

	    // Настроим отступ колонтитулов для
	 чётных страниц

	    Param := Headers.EvenPageHeader;

	    Param.Margin := 15;

	    Param := Headers.EvenPageFooter;

	    Param.Margin := 15;

	    // Учтем настройки для чётных страниц

	    Headers.OddAndEvenPagesHeaderFooter := True;

	    Debug.Writeline("Отступ верхнего колонтитула чётных страниц: " +

	        Headers.EvenPageHeader.Margin.ToString);

	    Debug.Writeline("Отступ нижнего колонтитула чётных страниц: " +

	        Headers.EvenPageFooter.Margin.ToString);

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будут определены параметры отступа колонтитулов
 чётных страниц. В окно консоли будет выведена информация об отступах верхнего
 и нижнего колонтитулов.


См. также:


[IHeaders](IHeaders.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
