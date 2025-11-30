# IDataGridColumn.ValueFormat

IDataGridColumn.ValueFormat
-


# IDataGridColumn.ValueFormat


## Синтаксис


ValueFormat: String;


## Описание


Свойство ValueFormat определяет
 формат отображения данных в столбце.


## Комментарии


Данное свойство не зависит от локализации системы, то есть при установке
 значения данного свойства, в качестве разделителей в шаблоне будут использоваться
 запятые и пробелы.


Формат данных формируется с использованием зарезервированных кодов форматов.
 Описание кодов представлено в разделе «[Формат
 числа](UiNav.chm::/GUI/Format/UiReport_Table_Attribute_Format.htm)».


На значение данного свойства оказывает влияние свойство [IDataGridColumn.LocalValueFormat](IDataGridColumn.LocalValueFormat.htm):
 когда пользователь определяет для свойства [IDataGridColumn.LocalValueFormat](IDataGridColumn.LocalValueFormat.htm)
 значение, то оно преобразуется к общей форме (без учета настроек региональных
 параметров) и устанавливается в свойство ValueFormat.
 Также при получении значения свойства [IDataGridColumn.LocalValueFormat](IDataGridColumn.LocalValueFormat.htm),
 оно возвращает значение свойства ValueFormat,
 преобразованное в локализованный формат в соответствии с региональными
 настройками.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента DataGrid с наименованием
 «DataGrid1». В настройках региональных параметров в качестве разделителя
 целой и дробной части числа указана точка.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Column: IDataGridColumn;

	    Format, LocalFormat: String;

	Begin

	    Column := DataGrid1.Columns.Item(0);

	    Column.ValueFormat := "0,00";

	    Format := Column.ValueFormat;

	    LocalFormat := Column.LocalValueFormat;

	End Sub Button1OnClick;


После выполнения примера для первого столбца будет установлен следующий
 формат: число с двумя десятичными знаками. Переменная «Format» будет содержать
 общий шаблон для числа без учета региональных параметров: «0,00». Переменная
 «LocalFormat» будет содержать локализованный (в соответствии с региональными
 параметрами) шаблон для числа: «0.00».


См. также:


[IDataGridColumn](IDataGridColumn.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
