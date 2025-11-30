# ITabCustomSort.Add

ITabCustomSort.Add
-


# ITabCustomSort.Add


## Синтаксис


Add(Index: Integer): [ITabCustomSortItem](../ITabCustomSortItem/ITabCustomSortItem.htm);


## Параметры


Index - Параметр определяет относительный индекс строки/столбца диапазона, выбранного для настройки сортировки.


## Описание


Метод Add осуществляет добавление новой области сортировки в таблице данных.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонента TabSheetBox и компонента UiTabSheet с наименованием «UiTabSheet1», который является источником данных для компонента TabSheetBox.


			    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        CustomSort: ITabCustomSort;

    Begin

        CustomSort := tab.CustomSort;

        CustomSort.Range := tab.Table;

        CustomSort.Add(Tab.ColumnIndex("A"));

        text := CustomSort.Count.ToString;

        tab.CustomSort.CaseSensitive := True;

        CustomSort.Item(0).Direction := TabCustomSortDirection.Ascending;

        tab.CustomSort.Item(0).Type := TabCustomSortType.Text;

        CustomSort.Sort;

        tab.CustomSort.IsColumnSort := False;

    End Sub Button1OnClick;


При нажатии кнопки в столбце с индексом «A» будет настроена сортировка по возрастанию.


См. также:


[ITabCustomSort](ITabCustomSort.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
