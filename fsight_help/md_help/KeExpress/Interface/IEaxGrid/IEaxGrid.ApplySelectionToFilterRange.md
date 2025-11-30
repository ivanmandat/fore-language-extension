# IEaxGrid.ApplySelectionToFilterRange

IEaxGrid.ApplySelectionToFilterRange
-


# IEaxGrid.ApplySelectionToFilterRange


## Синтаксис


ApplySelectionToFilterRange(Range: [IPivotFilterRange](KePivot.chm::/Interface/IPivotFilterRange/IPivotFilterRange.htm));


## Параметры


Range. Область таблицы.


## Описание


Метод ApplySelectionToFilterRange
 передает параметры области таблицы в качестве диапазона, в котором будет
 осуществляться фильтрация данных.


## Комментарии


Для задания выделенной области таблицы используйте [ITabSheet.Cells](TabSheet.chm::/Interface/ITabSheet/ITabSheet.Cells.htm)
 и [ITabSelection.AddRange](TabSheet.chm::/Interface/ITabSelection/ITabSelection.AddRange.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS_REPORT, который содержит таблицу.


Добавьте ссылки на системные сборки: Express, Metabase, Pivot, Tab.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Pivot: IPivot;

	    Grid: IEaxGrid;

	    Filter: IPivotFilter;

	    Range: IPivotFilterRange;

	    TabRange: ITabRange;

	    Selection: ITabSelection;

	    TabView: ITabView;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Express := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    // Получим настройки отображения данных таблицы

	    Pivot := Express.Pivot;

	    // Получим параметры фильтрации

	    Filter := Pivot.Filter;

	    // Зададим условие фильтрации - больше числа

	    Filter.ConditionType := PivotFilterType.GA;

	    // Зададим число

	    Filter.ConditionValueA := 15;

	    // Зададим фильтрацию по строкам

	    Filter.Elements := PivotFilterElements.Rows;

	    // Получим диапазон фильтрации

	    Range := Filter.Range;

	    // Получим таблицу данных отчета

	    Grid := Express.Grid;

	    // Зададим диапазон выделенной области

	    TabRange := Grid.TabSheet.Cells(1, 1, 5, 5);

	    // Получим представление электронной таблицы

	    TabView := Grid.TabSheet.View;

	    // Получим текущую отметку в таблице

	    Selection := TabView.Selection;

	    // Добавим диапазон в отметку таблицы

	    Selection.AddRange(TabRange);

	    // Передадим отметку таблицы в диапазон фильтрации

	    Grid.ApplySelectionToFilterRange(Range);

	    // Зададим область, для которой применится фильтрация

	    Filter.Area := PivotFilterArea.Range;

	    // Применим фильтрацию к таблице с данными

	    Filter.UseCondition := True;

	    // Сохраним изменения

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будет осуществлена фильтрация данных в заданном
 диапазоне выделенной области таблицы. Будут отфильтрованы данные по строкам,
 в которых значения больше 15.


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
