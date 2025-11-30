# ITableFilterItem.Sort

ITableFilterItem.Sort
-


# ITableFilterItem.Sort


## Синтаксис


Sort(Direction: [SortDirection](foresys.chm::/enums/sortdirection.htm));


## Описание


Метод Sort определяет направление
 сортировки, которое будет установлено в столбце.


## Комментарии


Свойство используется только для настольного приложения.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiTable c наименованием
 «UiTable1», компонента DataGrid и компонента UiDataSourse с наименованием
 «UiDataSourse1», являющегося источником данных для DataGrid.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        filter: ITableFilter;

	        filterItem: ITableFilterItem;

	    Begin

	        filter := DataGrid1.TableFilter;

	        filterItem := filter.Item(1);

	        filterItem.Sort(SortDirection.Descending);

	End Sub Button1OnClick;


При нажатии кнопки «Button1» будет произведена сортировка второго столбца
 по убыванию элементов.


См. также:


[ITableFilterItem](ITableFilterItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
