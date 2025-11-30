# IHeaders.Header

IHeaders.Header
-


# IHeaders.Header


## Синтаксис


Header: [IHeader](../IHeader/IHeader.htm);


## Описание


Свойство Header возвращает параметры
 верхнего колонтитула.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором REPORT.


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

	    // Настроим отступ колонтитулов

	    Param := Headers.Header;

	    Param.Margin := 10;

	    Param := Headers.Footer;

	    Param.Margin := 10;

	    Debug.Writeline("Отступ верхнего колонтитула: " +

	        Headers.Header.Margin.ToString);

	    Debug.Writeline("Отступ нижнего колонтитула: " +

	        Headers.Footer.Margin.ToString);

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будут определены параметры отступа колонтитулов.
 В окно консоли будет выведена информация об отступах верхнего и нижнего
 колонтитулов.


См. также:


[IHeaders](IHeaders.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
