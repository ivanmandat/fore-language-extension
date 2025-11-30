# IEaxTableStyle.RangeCellStyles

IEaxTableStyle.RangeCellStyles
-


# IEaxTableStyle.RangeCellStyles


## Синтаксис


RangeCellStyles: [IEaxRangeCellStyles](../IEaxRangeCellStyles/IEaxRangeCellStyles.htm);


## Описание


Свойство RangeCellStyles возвращает
 коллекцию стилей форматирования таблицы.


## Комментарии


Каждый элемент коллекции реализован интерфейсом [IEaxRangeCellStyle](../IEaxRangeCellStyle/IEaxRangeCellStyle.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента LanerBox
 и компонента UiErAnalyzer с наименованием
 «UiErAnalyzer1», являющегося источником данных для LanerBox.
 В «UiErAnalyzer1» должна быть загружена рабочая книга базы
 данных временных рядов.


Добавьте ссылку на системную сборку Drawing.


Пример будет выполняться при нажатии на кнопку.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Grid: IEaxGrid;

	    View: ITabView;

	    Range: ITabRange;

	    Style: IEaxTableStyle;

	    CStyles: IEaxRangeCellStyles;

	    CellStyle: ITabCellStyle;

	Begin

	    Grid := UiErAnalyzer1.ErAnalyzer.Grid;

	    View := Grid.TabSheet.View;

	    Range := View.Selection.Range;

	    Style := Grid.Style;

	    CStyles := Style.RangeCellStyles;

	    CStyles.Clear;

	    CellStyle := New TabCellStyle.Create;

	    CellStyle.BackgroundColor := GxColor.FromKnownColor(GxKnownColor.Tomato);

	    CellStyle.DisplayEmptyAs := "Null";

	    CStyles.Add(Range, CellStyle);

	    Grid.Refresh;

	End Sub Button1OnClick;


После выполнения примера будет добавлен новый элемент в коллекцию стилей
 форматирования таблицы. Созданный стиль будет применен для выделенной
 области таблицы.


См. также:


[IEaxTableStyle](IEaxTableStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
