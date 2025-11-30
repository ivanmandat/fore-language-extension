# IPrxTableIslandLayout.Sort

IPrxTableIslandLayout.Sort
-


# IPrxTableIslandLayout.Sort


## Синтаксис


Sort: [IPrxTableIslandSort](../IPrxTableIslandSort/IPrxTableIslandSort.htm);


## Описание


Свойство Sort возвращает условие
 сортировки реляционной области данных.


## Комментарии


Для определения, будет ли использоваться фильтрация для строк реляционной
 области данных, используйте свойство [IPrxTableIslandLayout.FilterEnabled](IPrxTableIslandLayout.FilterEnabled.htm).


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «REGULAR_REPORT». На листе отчета размещена реляционная
 область данных.


Добавьте ссылки на системные сборки Metabase, Report.


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    TabIs : IPrxTableIslands;

    TI : IPrxTableIsland;

    Layout : IPrxTableIslandLayout;

    Sort, Parent: IPrxTableIslandSort;

    SortItem: IPrxTableIslandSortItem;

    i, Index: Integer;

    FieldName: String;

    IsEnabled, Descending, InGroups, FilterEnabled: Boolean;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REGULAR_REPORT").Edit As IPrxReport;

    TabIs := Report.TableIslands;

    TI := TabIs.Item(0);

    Layout := TI.Layout;

    Sort := Layout.Sort;

    Sort.Enabled := TriState.Undefined;

    Debug.WriteLine("=== Условия сортировки РОД: ===");

    If Sort.IsEnabled = True Then

        Debug.WriteLine("   Сортировка включена. Перенастроим её параметры");

        Else Debug.WriteLine("   Сортировка выключена. Настроим её параметры");

    End If;

    Debug.WriteLine("=== Условия сортировки по полям: ===");

    For i := 0 To Sort.Count - 1 Do

        SortItem := Sort.Item(i);

        // Включим сортировку по полям:

        If (i Mod 2<>0) Then

            SortItem.Enabled := TriState.OnOption;

            Else SortItem.Enabled := TriState.OffOption;

        End If;

        // Включим опцию "Сортировка по убыванию":

        If (i Div 2=1) Then

            SortItem.Descending := True;

            Else SortItem.Descending := False;

        End If;

        // Переместим условия в нужном порядке выполнения:

        Sort.Item(Sort.Count - 1).MoveToPosition(Sort.Count - 2);

        Sort.Item(0).MoveLast;

        // Выведем результаты настройки сортировки в окно консоли:

        FieldName := SortItem.LayoutCell.Field.FieldName;

        Debug.WriteLine((i+1).ToString + ". Наименование поля: " + FieldName);

        Index := SortItem.Index;

        Debug.WriteLine("   Индекс условия сортировки: " + Index.ToString);

        IsEnabled := SortItem.IsEnabled;

        If IsEnabled = True Then

            Debug.WriteLine("   Сортировка включена");

            Else Debug.WriteLine("   Сортировка выключена");

        End If;

        Descending := SortItem.Descending;

        If Descending = True Then

            Debug.WriteLine("   Сортировка по убыванию включена");

            Else Debug.WriteLine("   Сортировка по убыванию выключена");

        End If;

        InGroups := SortItem.InGroups;

        If InGroups = True Then

            Debug.WriteLine("   Сортировка внутри групп включена");

            Else Debug.WriteLine("   Сортировка внутри групп выключена");

        End If;

    End For;

    // Выключим сортировку для поля с индексом 1:

    Sort.Remove(1);

    // Удалим все условия сортировки из коллекции:

    Sort.Clear;

    Debug.WriteLine("=== Проверим, включена ли фильтрация для РОД ===");

    Parent := SortItem.Parent;

    FilterEnabled := Parent.Parent.FilterEnabled;

    If FilterEnabled = True Then

        Debug.WriteLine("   Фильтрация включена");

        Else

            Debug.WriteLine("   Фильтрация выключена");

    End If;

    (Report As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера будет выполнена проверка, включена ли сортировка
 реляционной области данных. По результатам проверки будет перенастроена
 или настроена сортировка по отдельным полям реляционной области данных.
 Настройки будут выведены в окно консоли, после чего все условия сортировки
 будут удалены.


См. также:


[IPrxTableIslandLayout](IPrxTableIslandLayout.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
