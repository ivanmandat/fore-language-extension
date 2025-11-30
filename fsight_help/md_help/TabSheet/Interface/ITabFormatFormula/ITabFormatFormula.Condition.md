# ITabFormatFormula.Condition

ITabFormatFormula.Condition
-


# ITabFormatFormula.Condition


## Синтаксис


Condition: String;


## Описание


Свойство Condition определяет
 формулу, по которой будут выбираться ячейки, подлежащие форматированию.


## Комментарии


Результатом вычисления формулы должно быть логическое значение. Для
 составления формул предусмотрено использование ключевого слова «Value», вместо которого при вычислении
 будет подставляться значение конкретной ячейки, также доступно использование
 [статических методов](../../Static/Static_Elements.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1»,
 компонента TabSheetBox с наименованием
 «TabSheetBox1» и какого-либо источника
 данных для TabSheetBox.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Tab: ITabSheet;

	    Range: ITabRange;

	    FormCond: ITabFormatCondition;

	    ValFormat: ITabFormatFormula;

	    Style: ITabCellStyle;

	Begin

	    Style := New TabCellStyle.Create;

	    Style.Font.Color := GxColor.FromName("White");

	    Style.BackgroundColor := GxColor.FromName("Black");

	    Tab := TabSheetBox1.Source.GetTabSheet;

	    Range := Tab.View.Selection.Range;

	    FormCond := Range.FormatConditions.Add;

	    FormCond.Type := TabConditionType.Formula;

	    ValFormat := FormCond.Details As ITabFormatFormula;

	    ValFormat.Condition := "Value>Max(" + Range.Address + ")/10*4";

	    ValFormat.Style := Style;

	End Sub Button1OnClick;


После выполнения примера при нажатии кнопки для выделенного диапазона
 ячеек будет добавлен условный формат, осуществляющий форматирование ячеек,
 удовлетворяющих формуле. Ячейки, значения которых больше «Max/10*4», будут
 отображаться белым шрифтом на черном фоне.


См. также:


[ITabFormatFormula](ITabFormatFormula.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
