# ListViewCompareEventArgs.Create

ListViewCompareEventArgs.Create
-


# ListViewCompareEventArgs.Create


## Синтаксис


Create(ListView: [IListView](../../Interface/IListView/IListView.htm); Column: [IListViewColumn](../../Interface/IListViewColumn/IListViewColumn.htm); LeftItem: [IListViewItem](../../Interface/IListViewItem/IListViewItem.htm); RightItem: [IListViewItem](../../Interface/IListViewItem/IListViewItem.htm));


## Параметры


ListView - компонент, для которого генерируется событие.


Column - колонка, в которой осуществляется сортировка.


LeftItem - первый сравниваемый элемент компонента.


RightItem - второй сравниваемый элемент компонента.


## Описание


Конструктор Create создает аргумент события, наступающего при сравнении двух элементов, во время сортировки в колонке компонента.


См. также:


[ListViewCompareEventArgs](ListViewCompareEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
