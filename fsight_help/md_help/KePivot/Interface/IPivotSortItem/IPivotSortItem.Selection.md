# IPivotSortItem.Selection

IPivotSortItem.Selection
-


# IPivotSortItem.Selection


## Синтаксис


Selection: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Описание


Свойство Selection определяет
 элемент отметки, по которому будет осуществляться сортировка.


## Комментарии


Для использования данного свойства необходимо, чтобы свойство [IPivotSortItem.Kind](IPivotSortItem.Kind.htm) принимало значение
 [PivotSortKind.Selection](../../Enums/PivotSortKind.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором «EXPRESS», содержащего таблицу с несколькими нечисловыми
 значениями. Одно из измерений таблицы имеет ключ «10152».


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

    // Сортировка по убыванию

    SortItem.Direction := PivotSortDirection.Desc;

    // Сортировка по элементу отметки

    SortItem.Kind := PivotSortKind.Selection;

    SortItem.Selection.FindByKey(10152).SelectElement(0, False);

    // Нечисловые значения будут располагаться в конце таблицы

    SortItem.SkipNonNumeric := True;

    // Сохраним измерения

    (Express As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера для таблицы экспресс-отчета будет применена
 сортировка по элементу отметки. Нечисловые значения будут расположены
 в конце таблицы.


См. также:


[IPivotSortItem](IPivotSortItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
