# ITabFormatAverage.Type

ITabFormatAverage.Type
-


# ITabFormatAverage.Type


## Синтаксис


Type: [TabFormatAverageType](../../Enums/TabFormatAverageType.htm);


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

	    ValFormat: ITabFormatAverage;

	    Style: ITabCellStyle;

	Begin

	    Style := New TabCellStyle.Create;

	    Style.Font.Color := GxColor.FromName("White");

	    Style.BackgroundColor := GxColor.FromName("Black");

	    Tab := TabSheetBox1.Source.GetTabSheet;

	    Range := Tab.View.Selection.Range;

	    FormCond := Range.FormatConditions.Add;

	    FormCond.Type := TabConditionType.Average;

	    ValFormat := FormCond.Details As ITabFormatAverage;

	    ValFormat.Style := Style;

	    ValFormat.Type := TabFormatAverageType.EqualAbove;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку для выделенного диапазона
 ячеек будет добавлен условный формат, осуществляющий форматирование ячеек
 со значениями больше/меньше среднего. Ячейки, значения которых больше
 либо равны среднему, будут отображаться белым шрифтом на черном фоне.


См. также:


[ITabFormatAverage](ITabFormatAverage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
