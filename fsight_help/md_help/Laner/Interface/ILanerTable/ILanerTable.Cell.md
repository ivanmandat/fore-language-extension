# ILanerTable.Cell

ILanerTable.Cell
-


# ILanerTable.Cell


## Синтаксис


Cell(Row: Integer; Column: Integer): Variant;


## Параметры


Row.
 Индекс строки;


Column.
 Индекс столбца.


## Описание


Свойство Cell определяет значение
 в ячейке таблицы.


## Комментарии


Для изменения данных таблица должна находиться в режиме редактирования.
 Переход в режим редактирования осуществляется путем вызова метода [ILanerTable.Edit](ILanerTable.Edit.htm).


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 TabSheetBox, UiErAnalyzer с наименованиями Button1, TabSheetBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для TabSheetBox1.
 В UiErAnalyzer1 должна быть загружена рабочая книга базы данных временных
 рядов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 MathFin, Tab, Ui.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ErAn: IEaxAnalyzer;

	    Laner: ILaner;

	    Table: ILanerTable;

	    i, j: Integer;

	Begin

	    ErAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAn.Laner;

	    Table := Laner.Execute;

	    If Not Table.IsEditing Then

	        Table.Edit;

	    End If;

	    For i := 0 To Table.RowCount - 1 Do

	        For j := 0 To Table.ColumnCount - 1 Do

	            If Table.IsEditableCell(i, j) Then

	                Table.Cell(i, j) := Math.RandBetween(0, 100);

	            End If;

	        End For;

	    End For;

	    If WinApplication.ConfirmationBox("Сохранить изменения?")

	        Then Table.Post;

	            Else Table.Update;

	    End If;

	End Sub Button1OnClick;


После выполнения примера будут сгенерированы случайные значения для
 всех ячеек таблицы, доступных для редактирования. Затем будет отображено
 подтверждение сохранения данных. В случае положительного ответа, данные
 будут сохранены, если ответ отрицательный - будут отображены данные последней
 ревизии.


См. также:


[ILanerTable](ILanerTable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
