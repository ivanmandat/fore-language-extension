# ITabFormatCellContent.CellValue

ITabFormatCellContent.CellValue
-


# ITabFormatCellContent.CellValue


## Синтаксис


CellValue: Variant;


## Описание


Свойство CellValue определяет
 значение, с которым будут сравниваться значения ячеек на соответствие
 установленному в свойстве [ValueCondition](ITabFormatCellContent.ValueCondition.htm)
 условию.


## Комментарии


Данное свойство используется, если [ContentType](ITabFormatCellContent.ContentType.htm)
 установлено значение CellValue.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1", компонента TabSheetBox
 с наименованием "TabSheetBox1" и какого-либо источника данных
 для TabSheetBox.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Tab: ITabSheet;

	    Range: ITabRange;

	    FormCond: ITabFormatCondition;

	    ValFormat: ITabFormatCellContent;

	    Style: ITabCellStyle;

	Begin

	    Style := New TabCellStyle.Create;

	    Style.Font.Color := GxColor.FromName("White");

	    Style.BackgroundColor := GxColor.FromName("Black");

	    Tab := TabSheetBox1.Source.GetTabSheet;

	    Range := Tab.View.Selection.Range;

	    FormCond := Range.FormatConditions.Add;

	    FormCond.Type := TabConditionType.CellContent;

	    ValFormat := FormCond.Details As ITabFormatCellContent;

	    ValFormat.ContentType := TabFormatContentType.CellValue;

	    ValFormat.ValueCondition := TabConditionCellContentValue.Above;

	    ValFormat.CellValue := 50;

	    ValFormat.Style := Style;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку для выделенного диапазона
 ячеек будет добавлен условный формат, осуществляющий форматирование ячеек
 с определенными значениями. Значения ячеек больше "50" будут
 отображаться белым шрифтом на черном фоне.


См. также:


[ITabFormatCellContent](ITabFormatCellContent.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
