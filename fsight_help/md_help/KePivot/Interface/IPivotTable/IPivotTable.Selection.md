# IPivotTable.Selection

IPivotTable.Selection
-


# IPivotTable.Selection


## Синтаксис


Selection: [IDimSelectionSet](kedims.chm::/interface/idimselectionset/idimselectionset.htm);


## Описание


Свойство Selection возвращает
 отметку таблицы с учетом фильтрации.


## Комментарии


Для получения отметки всех измерений всех источников данных отчёта используйте
 свойство [IPivot.Selection](../IPivot/IPivot.Selection.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчета
 с идентификатором «EXPRESS_FILTER».
 Отчет содержит таблицу.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot.


			Sub UserProc;

Var

    MB: IMetabase;

    Express: IEaxAnalyzer;

    Pivot: IPivot;

    PTable: IPivotTable;

    DimSS: IDimSelectionSet;

    Filter: IPivotFilter;

    FilterSet: IPivotFilterSettings;

    i: Integer;

Begin

    // Получим доступ к репозиторию

    MB := MetabaseClass.Active;

    // Получим доступ к экспресс-отчету

    Express := MB.ItemById("EXP_PTS").Edit As IEaxAnalyzer;

    Pivot := Express.Pivot;

    // Определим параметры фильтрации в таблице

    Filter := Pivot.Filter;

    FilterSet := Filter As IPivotFilterSettings;

    // Включим параметры фильтрации для таблицы

    FilterSet.Enabled := True;

    // Будем использовать условие для фильтрации

    FilterSet.UseCondition := True;

    // Установим тип фильтрации

    FilterSet.ConditionType := PivotFilterType.Expression;

    // Зададим выражение

    FilterSet.Condition.AsString := "Value<0";

    // Получим таблицу

    PTable := Pivot.ObtainTable;

    // Выведем отметку таблицы с учетом фильтрации

    DimSS := PTable.Selection;

    For i := 0 To DimSS.Count - 1 Do

        Debug.WriteLine(DimSS.Item(i).Dimension.Name);

        Debug.WriteLine(DimSS.Item(i).ToString(Format := "NAME", Separator := ", ", CollectRanges := True));

        Debug.WriteLine("");

    End For;

    // Сохраним изменения

    (Express As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в таблице экспресс-отчета будет осуществлена
 фильтрация данных. Будут отфильтрованы значения меньше нуля. В окно консоли
 будет выведена отметка.


См. также:


[IPivotTable](IPivotTable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
