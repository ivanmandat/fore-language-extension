# IListViewColumn.SortAscending

IListViewColumn.SortAscending
-


# IListViewColumn.SortAscending


## Синтаксис


SortAscending: Boolean;


## Описание


Свойство SortAscending определяет
 направление сортировки.


## Комментарии


Если свойству установлено значение True,
 то сортировка осуществляется по возрастанию, иначе - по убыванию. Для
 указания столбца, по которому осуществляется сортировка, используется
 свойство [SortColumn](../IListView/IListView.SortColumn.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента ListView с наименованием
 ListView1.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    ListView1.SortType := ControlSortType.Text;

    ListView1.SortColumn := 0;

    ListView1.Columns.Item(ListView1.SortColumn).SortAscending := False;

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку для компонента ListView1
 будет установлена сортировка по значениям первого столбца. Значения будут
 отсортированы по убыванию.


См. также:


[IListViewColumn](IListViewColumn.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
