# IDataGrid.SortType

IDataGrid.SortType
-


# IDataGrid.SortType


## Синтаксис


SortType: [ControlSortType](ModForms.chm::/Enums/ControlSortType.htm);


## Описание


Свойство SortType определяет
 тип сортировки для компонента. Если свойству установлено значение ControlSortType.Custom,
 то для компонента будет генерироваться событие [OnCompareItems](../../Class/DataGrid/DataGrid.OnCompareItems.htm),
 в котором осуществляется сравнение элементов. Используется вместе со свойством
 [EnableSort](IDataGrid.EnableSort.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента DataGrid с наименованием
 «DataGrid1».


	Class TestForm: Form

	    DataGrid1: DataGrid;

	    Button1: Button;

	    Rows: IDataGridRows;


	    Sub DataGrid1OnCompareItems(Sender: Object; Args: IDataGridCompareEventArgs);

	    Var

	        s1, s2: String;

	    Begin

	        s1 := Rows.Item(Args.LeftRow).ColumnValue(0);

	        s2 := Rows.Item(Args.RightRow).ColumnValue(0);

	        If s1.Length > s2.Length Then

	            Args.Compare := 1;

	        Elseif s1.Length < s2.Length Then

	            Args.Compare := -1;

	        Elseif s1.Length = s2.Length Then

	            Args.Compare := 0;

	        End If;

	    End Sub DataGrid1OnCompareItems;


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Begin

	        Rows := DataGrid1.Rows;

	        DataGrid1.SortType := ControlSortType.Custom;

	        DataGrid1.EnableSort := True;

	        DataGrid1.Columns.Item(0).SortIndex := 0;

	        DataGrid1.Columns.Item(0).SortAscending := False;

	    End Sub Button1OnClick;

	End Class TestForm;


После выполнения примера при нажатии на кнопку будет осуществлена пользовательская
 сортировка по значениям первой колонки компонента. Строки будут упорядочены
 по убыванию длины значений.


См. также:


[IDataGrid](IDataGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
