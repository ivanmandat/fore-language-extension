# IDataGridColumn.LocalValueFormat

IDataGridColumn.LocalValueFormat
-


# IDataGridColumn.LocalValueFormat


## Синтаксис


LocalValueFormat: String;


## Описание


Свойство LocalValueFormat определяет
 формат отображения данных в столбце таблицы в соответствии с настройками
 региональных параметров.


## Комментарии


Формат данных формируется с использованием зарезервированных кодов форматов.
 Описание кодов представлено в разделе [Формат
 числа](UiNav.chm::/GUI/Format/UiReport_Table_Attribute_Format.htm). При указании формата должны использоваться разделители,
 определенные текущими региональными настройками.


Изменение значения свойства LocalValueFormat
 приводит к изменению значения свойства [IDataGridColumn.ValueFormat](IDataGridColumn.ValueFormat.htm).
 Когда пользователь определяет для свойства LocalValueFormat
 значение, то оно преобразуется к общей форме (без учета настроек региональных
 параметров) и устанавливается в свойство [IDataGridColumn.ValueFormat](IDataGridColumn.ValueFormat.htm).
 При получении значения свойства LocalValueFormat,
 оно возвращает значение свойства [IDataGridColumn.ValueFormat](IDataGridColumn.ValueFormat.htm),
 преобразованное в локализованный формат.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента DataGrid с наименованием
 «DataGrid1». В настройках региональных параметров в качестве разделителя
 целой и дробной части числа указана точка.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Format, LocalFormat: String;

	Begin

	    Column := DataGrid1.Columns.Item(0);

	    Column.LocalValueFormat := "0.00";

	    Format := Column.ValueFormat;

	    LocalFormat := Column.LocalValueFormat;

	End Sub Button1OnClick;


После выполнения примера для первого столбца будет установлен следующий
 формат: число с двумя десятичными знаками. Переменная «Format» будет содержать
 общий шаблон для числа без учета региональных параметров: «0,00». Переменная
 «LocalFormat» будет содержать локализованный (в соответствии с региональными
 параметрами) шаблон для числа: «0.00».


См. также:


[IDataGridColumn](IDataGridColumn.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
