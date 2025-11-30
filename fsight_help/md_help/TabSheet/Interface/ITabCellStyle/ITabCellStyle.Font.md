# ITabCellStyle.Font

ITabCellStyle.Font
-


# ITabCellStyle.Font


## Синтаксис


Font: [ITabFont](../ITabFont/ITabFont.htm);


## Описание


Свойство Font определяет шрифт
 текста в ячейке таблицы.


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

	    Font: ITabFont;

	Begin

	    TSheet := UiTabSheet1.TabSheet;

	    TRange := TSheet.View.Selection.Range;

	    Style := TRange.Style;

	    Font := Style.Font;

	    Font.Bold := TriState.OnOption;

	    Font.Color := GxColor.FromName("Red");

	    Font.Name := "Arial";

	End Sub Button1OnClick;


При нажатии на кнопку для выделенного диапазона ячеек будут изменены
 параметры шрифта, используемого для отображения данных.


См. также:


[ITabCellStyle](ITabCellStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
