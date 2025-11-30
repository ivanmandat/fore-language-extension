# IListView.SelectedItem

IListView.SelectedItem
-


# IListView.SelectedItem


## Синтаксис


SelectedItem: [IListViewItem](../IListViewItem/IListViewItem.htm);


## Описание


Свойство SelectedItem определяет
 выделенный элемент компонента.


## Комментарии


Если свойству [MultiSelect](IListView.MultiSelect.htm) установлено
 значение True, то SelectedItem
 возвращает последний выделенный элемент.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента ListView с наименованием
 ListView1.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Items: IListViewItems;

Begin

    Items := ListView1.Items;

    ListView1.SelectedItem := Items.Item(1);

    ListView1.SelectedItem := Items.Item(2);

    ListView1.SetFocus;

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будут выделены второй
 и третий элемент компонента ListView1.


См. также:


[IListView](IListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
