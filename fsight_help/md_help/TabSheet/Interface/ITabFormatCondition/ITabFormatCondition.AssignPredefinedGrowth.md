# ITabFormatCondition.AssignPredefinedGrowth

ITabFormatCondition.AssignPredefinedGrowth
-


# ITabFormatCondition.AssignPredefinedGrowth


## Синтаксис


AssignPredefinedGrowth(IconType: [TabConditionIconType](../../Enums/TabConditionIconType.htm); [Direction: [TabFormatGrowthDirection](../../Enums/TabFormatGrowthDirection.htm) = 0]);


## Параметры


IconType. Тип пиктограмм, используемых при форматирования ячеек.


Direction. Направление построения индикатора роста.


## Описание


Метод AssignPredefinedGradient загружает в текущий условный формат настройки индикатора роста.


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
    Condition.AssignPredefinedGrowth(TabConditionIconType.Arrows2, TabFormatGrowthDirection.Columns);

End Sub Button1OnClick;


При нажатии на кнопку для выделенного диапазона ячеек будет создан новый условный формат. Для условного формата будут установлены настройки индикатора роста.


См. также:


[ITabFormatCondition](ITabFormatCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
