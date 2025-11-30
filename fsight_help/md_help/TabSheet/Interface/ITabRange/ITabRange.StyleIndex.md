# ITabRange.StyleIndex

ITabRange.StyleIndex
-


# ITabRange.StyleIndex


## Синтаксис


StyleIndex: Integer;


## Описание


Свойство StyleIndex устанавливает
 стиль из коллекции стилей.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox
 и компонента UiTabSheet с наименованием
 «UiTabSheet1». «UiTabSheet1» является источником данных для TabSheetBox.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    TSheet: ITabSheet;

	    TRange: ITabRange;

	    Style: ITabCellStyle;

	    i: Integer;

	Begin

	    Style := New TabCellStyle.Create;

	    Style.Font.Color := GxColor.FromName("Red");

	    Style.Font.Bold := TriState.OnOption;

	    Style.BackgroundColor := GxColor.FromName("Green");

	    TSheet := UiTabSheet1.TabSheet;

	    i := TSheet.AddStyle(Style);

	    TRange := TSheet.View.Selection.Range;

	    TRange.StyleIndex := i;

	End Sub Button1OnClick;


При нажатии на кнопку будет добавлен стиль в коллекцию стилей. Данный
 стиль будет применен для отмеченного диапазона таблицы.


См. также:


[ITabRange](ITabRange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
