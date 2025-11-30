# ITabCellStyle.AdjustFormatPrecision

ITabCellStyle.AdjustFormatPrecision
-


# ITabCellStyle.AdjustFormatPrecision


## Синтаксис


AdjustFormatPrecision(Delta: Integer);


## Параметры


Delta - число
 знаков, на которое необходимо изменить точность установленного формата.
 Если значение параметра Delta положительное,
 то точность формата увеличивается, иначе уменьшается на указанное количество
 знаков.


## Описание


Метод AdjustFormatPrecision
 изменяет точность пользовательского формата.


## Комментарии


Пользовательский формат отображения данных устанавливается в свойствах
 [CustomFormat](ITabCellStyle.CustomFormat.htm), либо [LocalCustomFormat](ITabCellStyle.LocalCustomFormat.htm).
 Данный метод используется для изменения точности числовых, денежных, процентных,
 экспоненциальных форматов.


## Пример


Для выполнения примера предполагается наличие формы. На форме расположены
 три кнопки с наименованиями «Button1», «Button2» и «Button3». Также на
 форме расположен компонент TabSheetBox и компонент UiTabSheet, являющийся
 источником данных для компонента TabSheetBox.


	Class UserForm: Form

	    UiTabSheet1: UiTabSheet;

	    TabSheetBox1: TabSheetBox;

	    Button1: Button;

	    Button2: Button;

	    Button3: Button;

	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    TSheet: ITabSheet;

	    TRange: ITabRange;

	    Style: ITabCellStyle;

	Begin

	    TSheet := UiTabSheet1.TabSheet;

	    TRange := TSheet.View.Selection.Range;

	    Style := TRange.Style;

	    Style.CustomFormat := "# ##0,00";

	End Sub Button1OnClick;

	Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    TSheet: ITabSheet;

	    TRange: ITabRange;

	    Style: ITabCellStyle;

	Begin

	    TSheet := UiTabSheet1.TabSheet;

	    TRange := TSheet.View.Selection.Range;

	    Style := TRange.Style;

	    Style.AdjustFormatPrecision(2);

	End Sub Button2OnClick;

	Sub Button3OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    TSheet: ITabSheet;

	    TRange: ITabRange;

	    Style: ITabCellStyle;

	Begin

	    TSheet := UiTabSheet1.TabSheet;

	    TRange := TSheet.View.Selection.Range;

	    Style := TRange.Style;

	Style.AdjustFormatPrecision(-2);

	End Sub Button3OnClick;

	End Class UserForm;


После запуска формы необходимо выделить какой-либо диапазон ячеек таблицы.
 При нажатии на кнопку «Button1» для выделенного диапазона будет установлен
 пользовательский числовой формат. Точность установленного числового формата
 - два символа после запятой. При каждом нажатии на кнопку «Button2» точность
 отображения значений в выделенном диапазоне будет увеличиваться на два
 знака после запятой. При нажатии на кнопку «Button3» точность отображения
 значений в выделенном диапазоне будет уменьшаться на два знака после запятой.


См. также:


[ITabCellStyle](ITabCellStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
