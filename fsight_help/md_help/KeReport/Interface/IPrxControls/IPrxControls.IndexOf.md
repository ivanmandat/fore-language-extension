# IPrxControls.IndexOf

IPrxControls.IndexOf
-


# IPrxControls.IndexOf


## Синтаксис


IndexOf(Value: [IPrxControl](../IPrxControl/IPrxControl.htm)):
 Integer;


## Параметры


Value. Элемент управления.


## Описание


Метод IndexOf возвращает индекс
 позиции элемента управления.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT. В отчете есть два листа. На втором листе
 есть элементы управления.


Добавьте ссылки на системные сборки: Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rep: IPrxReport;

	    Ctrls: IPrxReportControls;

	    Ctrl: IPrxControl;

	    Sheet: IPrxSheet;

	    Index: Integer;

	Begin

	    // Получаем текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получаем регламентный отчёт

	    Rep := MB.ItemById("REPORT").Edit As IPrxReport;

	    // Получаем лист

	    Sheet := Rep.Sheets.Item(1);

	    // Получаем элементы управления листа

	    Ctrls := Rep.Controls.SheetControls(Sheet);

	    Ctrl := Ctrls.FindById("ITEM1");

	    Index := Ctrls.IndexOf(Ctrl);

	    // Перемещаем элемент управления

	    Ctrls.Move(Index, 0);

	End Sub UserProc;


После выполнения примера элемент управления второго листа будет перемещен.


См. также:


[IPrxControls](IPrxControls.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
