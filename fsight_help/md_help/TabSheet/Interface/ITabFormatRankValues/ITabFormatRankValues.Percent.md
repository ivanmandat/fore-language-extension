# ITabFormatRankValues.Percent

ITabFormatRankValues.Percent
-


# ITabFormatRankValues.Percent


## Синтаксис


Percent: Double;


## Описание


Свойство Percent определяет
 процент ячеек от выделенной области, которые будут форматироваться. Свойство
 актуально, если свойству [PercentUsed](ITabFormatRankValues.PercentUsed.htm)
 установлено значение True.


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

	    ValFormat: ITabFormatRankValues;

	    Style: ITabCellStyle;

	Begin

	    Style := New TabCellStyle.Create;

	    Style.Font.Color := GxColor.FromName("White");

	    Style.BackgroundColor := GxColor.FromName("Black");

	    Tab := TabSheetBox1.Source.GetTabSheet;

	    Range := Tab.View.Selection.Range;

	    FormCond := Range.FormatConditions.Add;

	    FormCond.Type := TabConditionType.MinMax;

	    ValFormat := FormCond.Details As ITabFormatRankValues;

	    ValFormat.Percent := 15;

	    ValFormat.PercentUsed := True;

	    ValFormat.Style := Style;

	    ValFormat.Type := TabFormatRankType.Top;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку для выделенного диапазона
 ячеек будет добавлен условный формат, осуществляющий форматирование ячеек
 с наибольшими/наименьшими значениями. Пятнадцать процентов ячеек, содержащие
 максимальные значения, будут отображаться белым шрифтом на черном фоне.


См. также:


[ITabFormatRankValues](ITabFormatRankValues.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
