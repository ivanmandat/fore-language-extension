# ITableFilterItem.ValuesNumber

ITableFilterItem.ValuesNumber
-


# ITableFilterItem.ValuesNumber


## Синтаксис


ValuesNumber: Integer;


## Описание


Свойство ValuesNumber определяет
 количество уникальных значений, доступных для выбора.


## Комментарии


Значение по умолчанию 10000.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором RO. Добавьте ссылки на следующие системные сборки: Metabase,
 Forms, Report, Tab.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    mObj: IMetabaseObject;

	    Rep: IPrxReport;

	    Tab: ITabSheet;

	    Sheet: IPrxTable;

	    TRange: ITabRange;

	    AutoFilter: ITabAutoFilter;

	Begin

	    mb := MetabaseClass.Active;

	    mObj := mb.ItemById("RO").Edit;

	    Rep := MObj As IPrxReport;

	    Sheet := Rep.Sheets.Item(0) As IPrxTable;

	    Tab := Sheet.TabSheet;

	    TRange := Tab.View.Selection.Range;

	    AutoFilter := Tab.View.AutoFilter;

	    // Включение автофильтра

	    AutoFilter.Range := TRange;

	    AutoFilter.Enabled := True;

	    tab.View.AutoFilter.Item(0).ValuesNumber := 100;

	    mObj.Save;

	End Sub UserProc;


После выполнения примера будет произведена фильтрация первого столбца,
 будут показаны первые 100 уникальных значений.


См. также:


[ITableFilterItem](ITableFilterItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
