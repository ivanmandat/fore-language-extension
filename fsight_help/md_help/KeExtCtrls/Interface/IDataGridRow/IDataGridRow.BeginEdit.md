# IDataGridRow.BeginEdit

IDataGridRow.BeginEdit
-


# IDataGridRow.BeginEdit


## Синтаксис


BeginEdit;


## Описание


Метод BeginEdit переводит строку
 в режим редактирования.


## Комментарии


Актуально, если таблица подключена к источнику данных. При переводе
 строки в режим редактирования, фокус в таблице и курсор в источнике данных
 автоматически устанавливается на данную строку.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента DataGrid с наименованием
 «DataGrid1». Таблица подключена к какому-либо источнику данных, содержащему
 символьные поля.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Row: IDataGridRow;

	    i: Integer;

	Begin

	    Row := DataGrid1.Rows.Row(1);

	    Row.BeginEdit;

	    For i := 0 To DataGrid1.ColumnCount - 1 Do

	        Row.ColumnValue(i) := Row.ColumnValue(i) + "A";

	    End For;

	    Row.EndEdit;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в значениях полей источника
 данных, которым соответствует первая строка таблицы, будет добавлена буква
 «А».


См. также:


[IDataGridRow](IDataGridRow.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
