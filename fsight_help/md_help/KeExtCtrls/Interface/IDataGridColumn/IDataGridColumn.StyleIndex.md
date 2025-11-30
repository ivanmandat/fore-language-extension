# IDataGridColumn.StyleIndex

IDataGridColumn.StyleIndex
-


# IDataGridColumn.StyleIndex


## Синтаксис


StyleIndex: Integer;


## Описание


Свойство StyleIndex определяет
 для текущего столбца индекс стиля из коллекции установленных стилей для
 компонента [DataGrid](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/DataGrid.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки «Button1» и компонента DataGrid с наименованием «DataGrid1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    s: IDataGridStyle;

	Begin

	    s := DataGrid1.Styles.Add;

	    s.BackgroundColor := GxColor.FromName("Red");

	    s.TextColor := GxColor.FromName("Green");

	    DataGrid1.Columns.Item(0).StyleIndex := 1;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку произойдет добавление
 стиля в коллекцию стилей, и для первого столбца будет установлен этот
 стиль.


См. также:


[IDataGridColumn](IDataGridColumn.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
