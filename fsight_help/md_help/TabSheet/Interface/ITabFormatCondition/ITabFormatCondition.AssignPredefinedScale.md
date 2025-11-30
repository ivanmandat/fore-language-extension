# ITabFormatCondition.AssignPredefinedScale

ITabFormatCondition.AssignPredefinedScale
-


# ITabFormatCondition.AssignPredefinedScale


## Синтаксис


AssignPredefinedScale(ScaleType: [TabConditionPredefinedScaleStyle](../../Enums/TabConditionPredefinedScaleStyle.htm));


## Параметры


ScaleType. Стиль цветовой шкалы.


## Описание


Метод AssignPredefinedScale загружает в текущий условный формат параметры стандартной цветовой шкалы.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонента TabSheetBox с наименованием «TabSheetBox1» и какого-либо источника данных для «TabSheetBox1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    TSheet: ITabSheet;

    Range: ITabRange;

    Condition: ITabFormatCondition;

Begin

    TSheet := TabSheetBox1.Source.GetTabSheet;

    Range := TSheet.View.Selection.Range;

    Condition := Range.FormatConditions.Add;

    Condition.AssignPredefinedScale(TabConditionPredefinedScaleStyle.GreenGradient);

End Sub Button1OnClick;


При нажатии на кнопку для выделенного диапазона ячеек будет создан новый условный формат. Настройки условного формата будут загружены из стандартной цветовой шкалы на базе зеленого градиента.


См. также:


[ITabFormatCondition](ITabFormatCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
