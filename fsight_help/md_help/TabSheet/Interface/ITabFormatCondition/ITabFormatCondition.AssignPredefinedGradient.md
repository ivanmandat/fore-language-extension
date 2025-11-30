# ITabFormatCondition.AssignPredefinedGradient

ITabFormatCondition.AssignPredefinedGradient
-


# ITabFormatCondition.AssignPredefinedGradient


## Синтаксис


AssignPredefinedGradient(Style: [TabConditionPredefinedGradientStyle](../../Enums/TabConditionPredefinedGradientStyle.htm));


## Параметры


Style - стиль градиентной заливки.


## Описание


Метод AssignPredefinedGradient
 загружает в текущий условный формат настройки стандартного условного формата
 с градиентной заливкой.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox с наименованием
 «TabSheetBox1» и какого-либо источника данных для «TabSheetBox1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    TSheet: ITabSheet;

	    Rng: ITabRange;

	    Condition: ITabFormatCondition;

	Begin

	    TSheet := TabSheetBox1.Source.GetTabSheet;

	    Rng := TSheet.View.Selection.Range;

	    Condition := Rng.FormatConditions.Add;

	    Condition.AssignPredefinedGradient(TabConditionPredefinedGradientStyle.GreenYellowRed);

	End Sub Button1OnClick;


При нажатии на кнопку для выделенного диапазона ячеек будет создан новый
 условный формат. Настройки условного формата будут загружены из стандартного
 условного формата с указанной градиентной заливкой.


См. также:


[ITabFormatCondition](ITabFormatCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
