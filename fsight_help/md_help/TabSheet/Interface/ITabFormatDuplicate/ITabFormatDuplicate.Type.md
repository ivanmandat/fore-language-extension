# ITabFormatDuplicate.Type

ITabFormatDuplicate.Type
-


# ITabFormatDuplicate.Type


## Синтаксис


Type: [TabFormatDuplicateType](../../Enums/TabFormatDuplicateType.htm);


## Описание


Свойство Type определяет тип
 значений, которые необходимо форматировать.


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

	    ValFormat: ITabFormatDuplicate;

	    Style: ITabCellStyle;

	Begin

	    Style := New TabCellStyle.Create;

	    Style.Font.Color := GxColor.FromName("White");

	    Style.BackgroundColor := GxColor.FromName("Black");

	    Tab := TabSheetBox1.Source.GetTabSheet;

	    Range := Tab.View.Selection.Range;

	    FormCond := Range.FormatConditions.Add;

	    FormCond.Type := TabConditionType.Duplicate;

	    ValFormat := FormCond.Details As ITabFormatDuplicate;

	    ValFormat.Style := Style;

	    ValFormat.Type := TabFormatDuplicateType.Duplicate;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку для выделенного диапазона
 ячеек будет добавлен условный формат, осуществляющий форматирование ячеек
 с уникальными/дублирующимися значениями. Ячейки, содержащие дублирующиеся
 значения, будут отображаться белым шрифтом на черном фоне.


См. также:


[ITabFormatDuplicate](ITabFormatDuplicate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
