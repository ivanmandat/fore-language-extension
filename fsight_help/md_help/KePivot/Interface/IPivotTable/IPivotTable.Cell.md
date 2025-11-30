# IPivotTable.Cell

IPivotTable.Cell
-


# IPivotTable.Cell


## Синтаксис


Cell(Row: Integer; Column: Integer): Variant;


## Параметры


Row. Индекс строки;


Column. Индекс столбца.


## Описание


Свойство Cell определяет значение
 ячейки таблицы, индекс строки и столбца которой передаются посредством
 входных параметров.


## Комментарии


Для изменения данных таблица должна находиться в режиме редактирования.
 Переход в режим редактирования осуществляется методом [Edit](IPivotTable.Edit.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1", компонента TabSheetBox
 и компонента UiErAnalyzer с наименованием
 "UiErAnalyzer1", являющегося источником данных для TabSheetBox.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    OLAP: IEaxAnalyzer;

	    Pivot: IPivot;

	    Table: IPivotTable;

	    i, j: Integer;

	Begin

	    OLAP := UiErAnalyzer1.ErAnalyzer;

	    Pivot := OLAP.Pivot;

	    Table := Pivot.ObtainTable;

	    Table.Edit;

	    For i := 0 To Table.RowCount - 1 Do

	        For j := 0 To Table.ColumnCount - 1 Do

	            Table.Cell(i, j) := Math.RandBetweenI(100, 500);

	        End For;

	    End For;

	    Table.Post;

	    Pivot.Refresh;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будут сгенерированы случайные
 значения для всех ячеек таблицы. Обновленные данные будут сохранены в
 источник данных.


См. также:


[IPivotTable](IPivotTable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
