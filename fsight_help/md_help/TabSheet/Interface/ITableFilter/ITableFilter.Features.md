# ITableFilter.Features

ITableFilter.Features
-


# ITableFilter.Features


## Синтаксис


Features: [TableFilterFeatures](../../Enums/TableFilterFeatures.htm);


## Описание


Свойство Features определяет
 состав отображаемых настроек в меню фильтрации в таблице.


## Пример


Для выполнения примера в репозитории предполагается наличие отчёта с
 идентификатором REPORT.


Добавьте ссылки на системные сборки: Metabase, Report, Tab.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    mObj: IMetabaseObject;

	    Rep: IPrxReport;

	    Tab: ITabSheet;

	    Sheet: IPrxTable;

	    TRange: ITabRange;

	    AutoFilter: ITabAutoFilter;

	    View: ITabView;

	Begin

	    // Получим репозиторий

	    mb := MetabaseClass.Active;

	    // Получим отчёт

	    mObj := mb.ItemById("REPORT").Edit;

	    Rep := MObj As IPrxReport;

	    // Получим таблицу

	    Sheet := Rep.Sheets.Item(0) As IPrxTable;

	    Tab := Sheet.TabSheet;

	    View := Tab.View;

	    // Установим автофильтр

	    TRange := View.Selection.Range;

	    AutoFilter := Tab.View.AutoFilter;

	    // Включим автофильтр

	    AutoFilter.Range := TRange;

	    AutoFilter.Enabled := True;

	    // Скроем настройки фильтрации из меню

	    AutoFilter.Features := TableFilterFeatures.HideSettings;

	    // Сохраним отчёт

	    mObj.Save;

	End Sub UserProc;


При выполнении примера из меню фильтрации будет скрыта настройка «Настроить фильтр».


См. также:


[ITableFilter](itablefilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
