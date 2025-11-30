# IEaxTableStyle.RangeFormatConditions

IEaxTableStyle.RangeFormatConditions
-


# IEaxTableStyle.RangeFormatConditions


## Синтаксис


RangeFormatConditions: [IEaxRangeFormatConditions](../IEaxRangeFormatConditions/IEaxRangeFormatConditions.htm);


## Описание


Свойство RangeFormatConditions
 возвращает коллекцию стилей условного форматирования таблицы.


## Комментарии


Каждый элемент коллекции реализован интерфейсом [IEaxRangeFormatCondition](../IEaxRangeFormatCondition/IEaxRangeFormatCondition.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента LanerBox
 и компонента UiErAnalyzer с наименованием
 «UiErAnalyzer1», являющегося источником данных для LanerBox.
 В «UiErAnalyzer1» должна быть загружена рабочая книга базы данных временных
 рядов.


Добавьте ссылку на системную сборку Drawing.


Пример будет выполняться при нажатии на кнопку.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Grid: IEaxGrid;

	    View: ITabView;

	    Range: ITabRange;

	    Style: IEaxTableStyle;

	    RangeFCond: IEaxRangeFormatConditions;

	    FConditions: ITabFormatConditions;

	    FormatCond: ITabFormatCondition;

	    ValFormat: ITabFormatCellContent;

	    TabStyle: ITabCellStyle;

	Begin

	    Grid := UiErAnalyzer1.ErAnalyzer.Grid;

	    View := Grid.TabSheet.View;

	    Range := View.Selection.Range;

	    FConditions := Range.FormatConditions;

	    FormatCond := FConditions.Add;

	    FormatCond.Type := TabConditionType.CellContent;

	    ValFormat := FormatCond.Details As ITabFormatCellContent;

	    ValFormat.ContentType := TabFormatContentType.CellValue;

	    ValFormat.ValueCondition := TabConditionCellContentValue.Above;

	    ValFormat.CellValue := 0;

	    TabStyle := New TabCellStyle.Create;

	    TabStyle.Font.Color := GxColor.FromName("White");

	    TabStyle.BackgroundColor := GxColor.FromKnownColor(GxKnownColor.Tomato);

	    ValFormat.Style := TabStyle;

	    Style := Grid.Style;

	    RangeFCond := Style.RangeFormatConditions;

	    RangeFCond.Clear;

	    RangeFCond.Add(FConditions);

	    Grid.Refresh;

	End Sub Button1OnClick;


После выполнения примера будет добавлен новый элемент в коллекцию стилей
 условного форматирования таблицы. Созданный стиль будет применен для выделенной
 области таблицы.


См. также:


[IEaxTableStyle](IEaxTableStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
