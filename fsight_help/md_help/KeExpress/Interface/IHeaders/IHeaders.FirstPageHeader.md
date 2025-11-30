# IHeaders.FirstPageHeader

IHeaders.FirstPageHeader
-


# IHeaders.FirstPageHeader


## Синтаксис


FirstPageHeader: [IHeader](../IHeader/IHeader.htm);


## Описание


Свойство FirstPageHeader возвращает
 параметры верхнего колонтитула первой страницы.


## Комментарии


Свойство актуально, если свойству [DifferentFirstPageHeaderFooter](IHeaders.DifferentFirstPageHeaderFooter.htm)
 установлено значение True.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
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

	    // Настроим отступ
	 колонтитулов для первой страницы

	    Param := Headers.FirstPageHeader;

	    Param.Margin := 30;

	    Param := Headers.FirstPageFooter;

	    Param.Margin := 30;

	    // Учтем настройки для первой страницы

	    Headers.DifferentFirstPageHeaderFooter := True;

	    Debug.Writeline("Отступ верхнего колонтитула первой страницы: " +

	        Headers.FirstPageHeader.Margin.ToString);

	    Debug.Writeline("Отступ нижнего колонтитула первой страницы: " +

	        Headers.FirstPageFooter.Margin.ToString);

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будут определены параметры отступа колонтитулов
 первой страницы. В окно консоли будет выведена информация об отступах
 верхнего и нижнего колонтитулов.


См. также:


[IHeaders](IHeaders.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
