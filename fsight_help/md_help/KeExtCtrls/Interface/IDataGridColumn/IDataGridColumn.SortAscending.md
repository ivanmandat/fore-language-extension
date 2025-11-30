# IDataGridColumn.SortAscending

IDataGridColumn.SortAscending
-


# IDataGridColumn.SortAscending


## Синтаксис


SortAscending: Boolean;


## Описание


Свойство SortAscending определяет
 направление сортировки. Если свойству установлено значение True,
 то сортировка осуществляется по возрастанию, иначе — по убыванию.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента DataGrid с наименованием
 «DataGrid1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Col: IDataGridColumn;

	Begin

	    DataGrid1.SortType := ControlSortType.Text;

	    Col := DataGrid1.Columns.Item(0);

	    Col.SortAscending := False;

	    Col.SortIndex := 0;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку для компонента «DataGrid1»
 будет установлена сортировка по значениям первого столбца. Значения будут
 отсортированы по убыванию.


См. также:


[IDataGridColumn](IDataGridColumn.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
