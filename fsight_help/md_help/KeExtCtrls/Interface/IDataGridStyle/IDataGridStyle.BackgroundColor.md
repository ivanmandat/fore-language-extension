# IDataGridStyle.BackgroundColor

IDataGridStyle.BackgroundColor
-


# IDataGridStyle.BackgroundColor


## Синтаксис


BackgroundColor: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Описание


Свойство BackgroundColor определяет
 цвет фона ячейки компонента [DataGrid](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/DataGrid.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки «Button1» и компонента DataGrid с наименованием «DataGrid1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    s: IDataGridStyle;

	Begin

	    s := DataGrid1.Styles.Add;

	    s.BackgroundColor := GxColor.FromName("Red");

	    s.Font := New GxFont.Create("Times New Roman", 14);

	    s.StringFormat.Alignment := GxStringAlignment.Center;

	    s.StringFormat.LineAlignment := GxStringAlignment.Center;

	    s.StringFormat.Trimming := GxStringTrimming.EllipsisWord;

	    s.TextColor := GxColor.FromName("Blue");

	    DataGrid1.Columns.Item(0).StyleIndex := 1;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку произойдет добавление
 стиля в коллекцию стилей, и для первого столбца будет установлен этот
 стиль.


См. также:


[IDataGridStyle](IDataGridStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
