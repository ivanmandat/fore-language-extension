# ITabTableStripe.Width

ITabTableStripe.Width
-


# ITabTableStripe.Width


## Синтаксис


Width: Integer;


## Описание


Свойство Width определяет ширину
 полосы строк (столбцов) в таблице.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiTabSheet
 с наименованием «UiTabSheet1» и компонента TabSheetBox.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Range: ITabRange;

	    TSheet: ITabSheet;

	    TTStyles: ITabTableStyles;

	    TStyle: ITabTableStyle;

	    s1: ITabCellStyle;

	Begin

	    s1 := New TabCellStyle.Create;

	    s1.BackgroundColor := GxColor.FromName("Red");

	    TSheet := UiTabSheet1.TabSheet;

	    Range := TSheet.View.Selection.Range;

	    TTStyles := Range.TableStyles;

	    TStyle := TTStyles.Add;

	    TStyle.HeaderRowStripe.Width := 2;

	    TStyle.HeaderRowStripe.Style := s1;

	End Sub Button1OnClick;


После выполнения примера, для выделенной области ячеек(A0:D4) ширина
 заголовков строк будет составлять две ячейки, цвет фона будет изменен
 на красный:


![](ITabTableStripe.Width.gif)


См. также:


[ITabTableStripe](ITabTableStripe.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
