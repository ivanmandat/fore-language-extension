# IPivotSortItem.IndexInHeader

IPivotSortItem.IndexInHeader
-


# IPivotSortItem.IndexInHeader


## Синтаксис


IndexInHeader: Integer;


## Описание


Свойство IndexInHeader определяет
 в заголовке индекс элемента, по которому будет осуществляться сортировка.


## Комментарии


Для использования данного свойства необходимо, чтобы свойство [IPivotSortItem.Kind](IPivotSortItem.Kind.htm) принимало значение
 [PivotSortKind.Row](../../Enums/PivotSortKind.htm)
 или [PivotSortKind.Column](../../Enums/PivotSortKind.htm).


Примечание.
 Используйте свойство, задавая только один индекс и только для единственного
 столбца или строки.


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

    Getter: IDataAreaTransformationsGetter;

    Slice: IEaxDataAreaSlice;

    Sel: IDimSelection;

    SelSet: IDimSelectionSet;

    i: Integer;

    Trans: IEaxDataAreaTransformations;

    Tran: IEaxDataAreaTransformation;

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

    // Сортировка по третьей строке таблицы

    SortItem.Kind := PivotSortKind.Row;

    SortItem.IndexInHeader := 2;

    // Сортировка по формуле

    SortItem.UseTransformationValues := True;

    Getter := SortItem As IDataAreaTransformationsGetter;

    Slice := Express.DataArea.Slices.Item(0);

    SelSet := SortItem.Selection.CreateCopy;

    For i := 0 To SelSet.Count - 1 Do

            Sel := SelSet.Item(i);

            Sel.DeselectAll;

        End For;

    // Добавим формулу

    Trans := Slice.GetTransformations(Getter);

        If Trans.Count > 0 Then

            Tran := Trans.Item(0);

        Else

            Tran := Trans.Add(SelSet, Null, -1);

            Tran.Expression.AsString := "1/{Значение[t]}";

        End If;

        Tran.Enabled := True;

    // Сохраним измерения

    (Express As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера для таблицы экспресс-отчета будет применена
 сортировка по третьей строке по заданной формуле.


См. также:


[IPivotSortItem](IPivotSortItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
