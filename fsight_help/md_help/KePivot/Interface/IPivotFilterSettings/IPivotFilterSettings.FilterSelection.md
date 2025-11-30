# IPivotFilterSettings.FilterSelection

IPivotFilterSettings.FilterSelection
-


# IPivotFilterSettings.FilterSelection


## Синтаксис


FilterSelection: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Описание


Свойство FilterSelection определяет
 отметку, в соответствии с которой будет выполняться фильтрация отображаемых
 данных.


## Комментарии


По умолчанию отметка в фильтре соответствует отметке [IPivot.Selection](../IPivot/IPivot.Selection.htm).
 Если изменить отметку в свойстве FilterSelection,
 то отображаемые данные будут отфильтрованы. Элементы, не попадающие в
 отметку, будут скрыты. При этом отметка [IPivot.Selection](../IPivot/IPivot.Selection.htm),
 по которой отстраивается таблица, не меняется.


Для сброса фильтрации установите свойству FilterSelection
 значение Null. При этом отметка
 в фильтре будет восстановлена в соответствии с отметкой [IPivot.Selection](../IPivot/IPivot.Selection.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором EXPRESS_REPORT. По строкам в отчёте расположено измерение,
 в основе которого лежит справочник с идентификатором DICT_COUNTRY.


Добавьте ссылки на системные сборки: Express, Metabase, Pivot.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Express: IEaxAnalyzer;

	    Slice: IEaxDataAreaSlice;

	    Pivot: IPivot;

	    FilterSet: IPivotFilterSettings;

	    SelSet: IDimSelectionSet;

	Begin

	    Mb := MetabaseClass.Active;

	    Express := Mb.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    // Срез аналитической области данных отчёта

	    Slice := Express.DataArea.Slices.Item(0);

	    // Настройки таблциы

	    Pivot := Express.Pivot;

	    Pivot.BeginUpdate;

	    // Настройки фильтрации

	    FilterSet := Pivot.Filter As IPivotFilterSettings;

	    SelSet := FilterSet.FilterSelection.CreateCopy;

	    // Изменение отметки по измерению

	    SelSet.FindById("DICT_COUNTRY").DeselectAll;

	    SelSet.FindById("DICT_COUNTRY").SelectElement(1, False);

	    // Применение отметки для фильтрации

	    FilterSet.FilterSelection := SelSet;

	    Pivot.EndUpdate;

	    // Просмотр информации об отметке в фильтре и источнике

	    Debug.WriteLine(FilterSet.UseFilterSelection);

	    SelectionInfo(FilterSet.FilterSelection);

	    SelectionInfo(Pivot.Selection);

	    // Сохранение изменений

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


	Sub SelectionInfo(DimSS: IDimSelectionSet);

	Var

	    DimS: IDimSelection;

	Begin

	    Debug.WriteLine("---");

	    For Each DimS In DimSS Do

	        Debug.WriteLine(DimS.Dimension.Ident + ": SelectedCount=" + DimS.SelectedCount.ToString);

	    End For;

	    Debug.WriteLine("---");

	End Sub SelectionInfo;


При выполнении примера в отчёте будет настроена фильтрация по отметке
 элементов измерений. По указанному измерению будет оставлен для отображения
 только один элемент. Сравнительные характеристики отметок в фильтре и
 отметке, в соответствии с которой отстраивается таблица, будут выведены
 в консоль среды разработки.


См. также:


[IPivotFilterSettings](IPivotFilterSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
