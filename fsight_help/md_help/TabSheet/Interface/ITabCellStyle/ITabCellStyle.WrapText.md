# ITabCellStyle.WrapText

ITabCellStyle.WrapText
-


# ITabCellStyle.WrapText


## Синтаксис


WrapText: [TabFormatWordWrap](../../Enums/TabFormatWordWrap.htm);


## Описание


Свойство WrapText определяет
 способ переноса текста в ячейках таблицы.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox и компонента
 UiTabSheet с наименованием «UiTabSheet1». «UiTabSheet1» является источником
 данных для компонента TabSheetBox.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    TSheet: ITabSheet;

	    TRange: ITabRange;

	    Style: ITabCellStyle;

	Begin

	    TSheet := UiTabSheet1.TabSheet;

	    TRange := TSheet.View.Selection.Range;

	    Style := TRange.Style;

	    Style.WrapText := TabFormatWordWrap.Syllable;

	End Sub Button1OnClick;


При нажатии на кнопку для выделенного диапазона ячеек будет изменен
 способ переноса текста. Текст в ячейках будет переноситься по слогам.


См. также:


[ITabCellStyle](ITabCellStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
