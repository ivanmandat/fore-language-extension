# DataGrid.OnCompareItems

DataGrid.OnCompareItems
-


# DataGrid.OnCompareItems


## Синтаксис


OnCompareItems(Sender: Object; Args: [IDataGridCompareEventArgs](../../Interface/IDataGridCompareEventArgs/IDataGridCompareEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnCompareItems наступает
 при сравнении значений колонки во время пользовательской сортировки компонента
 [DataGrid](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/DataGrid.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента DataGrid с наименованием
 «DataGrid1».


	Class TestForm:Form

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


[DataGrid](DataGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
