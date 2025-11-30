# IPivotSortItem.DimKey

IPivotSortItem.DimKey
-


# IPivotSortItem.DimKey


## Синтаксис


DimKey: Integer;


## Описание


Свойство DimKey определяет ключ
 измерения, по которому будет осуществляться сортировка.


## Комментарии


Для использования данного свойства необходимо, чтобы свойство [IPivotSortItem.Kind](IPivotSortItem.Kind.htm) принимало значение
 [PivotSortKind.Dimension](../../Enums/PivotSortKind.htm).


Для определения ключа атрибута измерения используйте [IPivotSortItem.AttributeKey](IPivotSortItem.AttributeKey.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором «EXPRESS», содержащего таблицу.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot.


			Sub UserProc;

Var

    MB: IMetabase;

    Express: IEaxAnalyzer;

    Pivot: IPivot;

    SortItem: IPivotSortItem;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим экспресс-отчет

    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

    // Получим таблицу

    Pivot := Express.Pivot;

    // Удалим все сортировки таблицы

    Pivot.Sorter.Clear;

    // Добавим сортировку таблицы

    SortItem := Pivot.Sorter.Add;

    // Проверим, включена ли сортировка

    If Not Pivot.Sorter.Enabled Then

        Pivot.Sorter.Enabled := True;

    End If;

    // Сортировка по возрастанию

    SortItem.Direction := PivotSortDirection.Asc;

    // Сортировка по календарному измерению

    SortItem.Kind := PivotSortKind.Dimension;

    SortItem.DimKey := Pivot.DimItem(0).Key;

    // Сортировка по первому атрибуту измерения

    SortItem.AttributeKey := Pivot.DimItem(0).Attributes.Item(0).Attribute.Key;

    // Сохраним измерения

    (Express As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера для таблицы экспресс-отчета будет применена
 сортировка по первому атрибуту календарного измерения.


См. также:


[IPivotSortItem](IPivotSortItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
