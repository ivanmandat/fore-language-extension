# ITabFormatCellContent.SpecificText

ITabFormatCellContent.SpecificText
-


# ITabFormatCellContent.SpecificText


## Синтаксис


SpecificText: String;


## Описание


Свойство SpecificText определяет
 текст, с которым будут сравниваться значения ячеек на соответствие установленному
 в свойстве [TextCondition](ITabFormatCellContent.TextCondition.htm)
 условию.


## Комментарии


Данное свойство используется, если [ContentType](ITabFormatCellContent.ContentType.htm)
 установлено значение SpecificText.
 При использовании условия по тексту необходимо учитывать регистр символов.


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

	    Style.Font.Color := GxColor.FromName("White")

	    Style.BackgroundColor := GxColor.FromName("Black");

	    Tab := TabSheetBox1.Source.GetTabSheet;

	    Range := Tab.View.Selection.Range;

	    FormCond := Range.FormatConditions.Add;

	    FormCond.Type := TabConditionType.CellContent;

	    ValFormat := FormCond.Details As ITabFormatCellContent;

	    ValFormat.ContentType := TabFormatContentType.SpecificText;

	    ValFormat.SpecificText := "abc";

	    ValFormat.TextCondition := TabConditionCellContentText.Contains;

	    ValFormat.Style := Style;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку для выделенного диапазона
 ячеек будет добавлен условный формат, осуществляющий форматирование ячеек
 с определенными значениями. Значения ячеек, содержащие сочетание символов
 "abc", будут отображаться белым шрифтом на черном фоне.


См. также:


[ITabFormatCellContent](ITabFormatCellContent.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
