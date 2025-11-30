# IDataGrid.Styles

IDataGrid.Styles
-


# IDataGrid.Styles


## Синтаксис


Styles: [IDataGridStyles](../IDataGridStyles/IDataGridStyles.htm);


## Описание


Свойство Styles определяет коллекцию
 стилей, используемых в компоненте [DataGrid](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/DataGrid.htm).


## Пример


Для выполнения примера предполагается наличие в формы, расположенной
 на ней кнопки с наименованием «Button1» и компонента DataGrid с наименованием
 «DataGrid1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    s: IDataGridStyle;

	Begin

	    s := DataGrid1.Styles.Add;

	    s.BackgroundColor := GxColor.FromName("Red");

	    s.TextColor := GxColor.FromName("Green");

	    DataGrid1.Columns.Item(0).StyleIndex := 1;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку «Button1» произойдет
 добавление стиля в коллекцию стилей таблицы, и для первого столбца установится
 этот стиль.


См. также:


[IDataGrid](IDataGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
