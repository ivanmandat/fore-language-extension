# ITabCellStyle.Hint

ITabCellStyle.Hint
-


# ITabCellStyle.Hint


## Синтаксис


Hint: String;


## Описание


Свойство Hint определяет текст
 всплывающей подсказки, отображаемой при наведении указателя мыши на ячейку.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox
 и компонента UiTabSheet с наименованием
 «UiTabSheet1». «UiTabSheet1» является источником данных для компонента
 TabSheetBox.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    TSheet: ITabSheet;

	    TRange: ITabRange;

	    Style: ITabCellStyle;

	Begin

	    TSheet := UiTabSheet1.TabSheet;

	    TRange := TSheet.View.Selection.Range;

	    Style := TRange.Style;

	    Style.Hint := "Исходные данные";

	End Sub Button1OnClick;


При нажатии на кнопку для выделенного диапазона ячеек будет установлен
 текст всплывающей подсказки.


См. также:


[ITabCellStyle](ITabCellStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
