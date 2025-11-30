# ITabCellStyle.Margins

ITabCellStyle.Margins
-


# ITabCellStyle.Margins


## Синтаксис


Margins(Index: [TabMargin](../../Enums/TabMargin.htm)):
 Double;


## Параметры


Index — граница,
 от которой необходимо определить отступ.


## Описание


Свойство Margins определяет
 отступы текста в ячейке таблицы в миллиметрах.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox и компонента
 UiTabSheet с наименованием «UiTabSheet1». «UiTabSheet1» является источником
 данных для компонента TabSheetBox.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Sheet: ITabSheet;

	    TRange: ITabRange;

	    Style: ITabCellStyle;

	Begin

	    TSheet := UiTabSheet1.TabSheet;

	    TRange := TSheet.View.Selection.Range;

	    Style := TRange.Style;

	    Style.Margins(TabMargin.Bottom) := 1;

	    Style.Margins(TabMargin.Left) := 1;

	    Style.Margins(TabMargin.Right) := 1;

	    Style.Margins(TabMargin.Top) := 1;

	End Sub Button1OnClick;


При нажатии на кнопку в выделенном диапазоне ячеек будут изменены отступы
 от границ ячеек. Все отступы будут равны одному миллиметру.


См. также:


[ITabCellStyle](ITabCellStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
