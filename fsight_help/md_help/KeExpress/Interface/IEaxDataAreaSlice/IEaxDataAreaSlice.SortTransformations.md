# IEaxDataAreaSlice.SortTransformations

IEaxDataAreaSlice.SortTransformations
-


# IEaxDataAreaSlice.SortTransformations


## Синтаксис


SortTransformations: [IEaxDataAreaTransformations](../IEaxDataAreaTransformations/IEaxDataAreaTransformations.htm);


## Описание


Свойство SortTransformations
 возвращает коллекцию формул преобразования данных, заданных при [сортировке](UiAnalyticalArea.chm::/Working_with_table_data/Sorting_table_data.htm).


## Комментарии


Формула, которая будет указана в [выражении](../IEaxDataAreaTransformation/IEaxDataAreaTransformation.Expression.htm)
 формулы преобразования, должна возвращать целочисленное значение. Данное
 значение будет рассматриваться как значение атрибута Порядок и в соответствии
 с другими настройками, заданными в свойствах интерфейса [IPivotSortItem](KePivot.chm::/Interface/IPivotSortItem/IPivotSortItem.htm),
 будет осуществляться сортировка.


Для включения сортировки по формуле необходимо установить свойствам
 [Pivot](../IEaxDataAreaPivotSlice/IEaxDataAreaPivotSlice.Pivot.htm).[Sorter](KePivot.chm::/Interface/IPivot/IPivot.Sorter.htm).[Enable](KePivot.chm::/Interface/IPivotSorter/IPivotSorter.Enabled.htm)
 и [SortItem](kepivot.chm::/Interface/IPivotSortItem/IPivotSortItem.htm).[UseTransformationValues](KePivot.chm::/Interface/IPivotSortItem/IPivotSortItem.UseTransformationValues.htm)
 значение True.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS, содержащего таблицу. В таблице должны быть
 настроены формулы для вычисляемых элементов, для сортировки, для фильтрации.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Slice: IEaxDataAreaSlice;

	    TrsCalc, TrsSort, TrsFilter: IEaxDataAreaTransformations;

	    i, k, m: integer;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Express := MB.ItemById("EXPRESS").Bind As IEaxAnalyzer;

	    // Получим срез данных

	    Slice := Express.DataArea.Slices.Item(0);

	    // Получим коллекцию формул преобразования данных

	    TrsCalc := Slice.CalcTransformations;

	    TrsSort := Slice.SortTransformations;

	    TrsFilter := Slice.FilterTransformations;

	    // Выведем в окно консоли

	    For i := 0 To TrsCalc.Count - 1 Do

	        Debug.WriteLine

	        ("Выражение, заданное для вычисляемого элемента - " + TrsCalc.Item(i).Expression.AsString);

	    End For;

	    For k := 0 To TrsSort.Count - 1 Do

	        Debug.WriteLine

	        ("Выражение, заданное при сортировке - " + TrsSort.Item(k).Expression.AsString);

	    End For;

	    For m := 0 To TrsFilter.Count - 1 Do

	        Debug.WriteLine

	        ("Выражение, заданное при фильтрации - " + TrsFilter.Item(m).Expression.AsString);

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены выражения всех
 найденных формул преобразования данных.


См. также:


[IEaxDataAreaSlice](IEaxDataAreaSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
