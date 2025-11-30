# IDataGridBandBase.HeaderStyle

IDataGridBandBase.HeaderStyle
-


# IDataGridBandBase.HeaderStyle


## Синтаксис


HeaderStyle: [IDataGridColumnHeaderStyle](../IDataGridColumnHeaderStyle/IDataGridColumnHeaderStyle.htm);


## Описание


Свойство HeaderStyle возвращает
 стиль оформления заголовка контейнера или колонки.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента DataGrid с наименованием
 «DataGrid1». В таблице компонента »DataGrid1» создана минимум одна колонка.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Column: IDataGridColumn;

	    HeaderStyle: IDataGridColumnHeaderStyle;

	    Color1, Color2: IGxColor;

	    HeaderFont: IControlFont;

	Begin

	    Column := DataGrid1.Columns.Item(0);

	    HeaderStyle := Column.HeaderStyle;

	    // Заливка

	    Color1 := GxColor.FromName("Yellow");

	    Color2 := GxColor.FromName("Green");

	    HeaderStyle.Brush := New GxLinearGradientBrush.Create(Color1, Color2, 45);

	    // Шрифт

	    HeaderFont := HeaderStyle.Font;

	    HeaderFont.Bold := True;

	    HeaderFont.Size := 10;

	    // Выравнивание

	    HeaderStyle.HorizontalAlignment := GxStringAlignment.Center;

	    HeaderStyle.VerticalAlignment := GxStringAlignment.Center;

	End Sub Button1OnClick;


При нажатии на кнопку будет изменен стиль оформления заголовка первого
 столбца таблицы. Будет применена градиентная заливка фона, изменены параметры
 шрифта и установлено выравнивание по вертикали/горизонтали для текста
 заголовка.


![](IDataGridBandBase_HeaderStyle.gif)


См. также:


[IDataGridBandBase](IDataGridBandBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
