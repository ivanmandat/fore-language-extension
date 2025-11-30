# ITabFormatCondition.AssignPredefinedDataBar

ITabFormatCondition.AssignPredefinedDataBar
-


# ITabFormatCondition.AssignPredefinedDataBar


## Синтаксис


AssignPredefinedDataBar(Style: [TabConditionPredefinedDataBarStyle](../../Enums/TabConditionPredefinedDataBarStyle.htm));


## Параметры


Style - стиль гистограммы.


## Описание


Метод AssignPredefinedDataBar
 загружает в текущий условный формат настройки стандартного условного формата
 с гистограммой.


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

	    Condition.AssignPredefinedDataBar(TabConditionPredefinedDataBarStyle.Blue);

	End Sub Button1OnClick;


При нажатии на кнопку для выделенного диапазона ячеек будет создан новый
 условный формат. Настройки условного формата будут загружены из стандартного
 условного формата с синей гистограммой.


См. также:


[ITabFormatCondition](ITabFormatCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
