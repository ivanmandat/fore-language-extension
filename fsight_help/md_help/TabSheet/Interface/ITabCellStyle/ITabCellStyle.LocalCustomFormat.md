# ITabCellStyle.LocalCustomFormat

ITabCellStyle.LocalCustomFormat
-


# ITabCellStyle.LocalCustomFormat


## Синтаксис


LocalCustomFormat: String;


## Описание


Свойство LocalCustomFormat определяет
 формат отображения данных в ячейке таблицы в соответствии с настройками
 региональных параметров.


## Комментарии


Формат данных формируется с использованием зарезервированных кодов форматов.
 Описание кодов представлено в разделе [Формат
 числа](UiNav.chm::/GUI/Format/UiReport_Table_Attribute_Format.htm). При указании формата должны использоваться разделители,
 определенные текущими региональными настройками.


Изменение значения свойства LocalCustomFormat
 приводит к изменению значения свойства [CustomFormat](ITabCellStyle.CustomFormat.htm).
 Когда пользователь определяет для свойства LocalCustomFormat
 значение, то оно преобразуется к общей форме (без учета настроек региональных
 параметров) и устанавливается в свойство [CustomFormat](ITabCellStyle.CustomFormat.htm).
 При получении значения свойства LocalCustomFormat,
 оно возвращает значение свойства [CustomFormat](ITabCellStyle.CustomFormat.htm),
 преобразованное в локализованный формат.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiTabSheet
 с наименованием «UiTabSheet1» и компонента TabSheetBox.
 В настройках региональных параметров в качестве разделителя целой и дробной
 части числа указана точка.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Style: ITabCellStyle;

	    Custom, Local: String;

	Begin

	    Style := UiTabSheet1.TabSheet.Cell(0, 0).Style;

	    Style.LocalCustomFormat := "0.00";

	    Custom := Style.CustomFormat;

	    Local := Style.LocalCustomFormat;

	End Sub Button1OnClick;


После выполнения примера для ячейки «A0» будет установлен следующий
 формат: число с двумя десятичными знаками. Переменная «Custom» будет содержать
 общий шаблон для числа без учета региональных параметров: «0,00». Переменная
 «Local» будет содержать локализованный (в соответствии с региональными
 параметрами) шаблон для числа: «0.00».


См. также:


[ITabCellStyle](ITabCellStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
