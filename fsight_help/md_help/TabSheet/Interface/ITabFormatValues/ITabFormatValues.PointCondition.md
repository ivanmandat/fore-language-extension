# ITabFormatValues.PointCondition

ITabFormatValues.PointCondition
-


# ITabFormatValues.PointCondition


## Синтаксис


PointCondition(Index: Integer): [TabConditionIconRangeCond](../../Enums/TabConditionIconRangeCond.htm);


## Параметры


Index - индекс правила, по
 которому осуществляется выбор отображаемой пиктограммы.


## Описание


Свойство PointCondition определяет
 соотношение, по которому осуществляется отбор значений, удовлетворяющих
 указанному правилу. Актуально, если свойству [Style](ITabFormatValues.Style.htm)
 установлено значение IconSets.


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

	    ValFormat: ITabFormatValues;

	Begin

	    Tab := TabSheetBox1.Source.GetTabSheet;

	    Range := Tab.View.Selection.Range;

	    FormCond := Range.FormatConditions.Add;

	    FormCond.Type := TabConditionType.Values;

	    ValFormat := FormCond.Details As ITabFormatValues;

	    //настройка формата отображения на основе значения ячеек

	    ValFormat.Style := TabFormatValuesStyle.IconSets;

	    ValFormat.IconType := TabConditionIconType.CircleFillC;

	    // 1 часть

	    ValFormat.PointType(0) := TabFormatValueType.Percent;

	    ValFormat.PointValue(0) := 15;

	    ValFormat.PointCondition(0) := TabConditionIconRangeCond.AboveEqual;

	    // 2 часть

	    ValFormat.PointType(1) := TabFormatValueType.Percent;

	    ValFormat.PointValue(1) := 35;

	    ValFormat.PointCondition(1) := TabConditionIconRangeCond.AboveEqual;

	    // 3 часть

	    ValFormat.PointType(2) := TabFormatValueType.Percent;

	    ValFormat.PointValue(2) := 55;

	    ValFormat.PointCondition(2) := TabConditionIconRangeCond.AboveEqual;

	    // 4 часть

	    ValFormat.PointType(3) := TabFormatValueType.Percent;

	    ValFormat.PointValue(3) := 75;

	    ValFormat.PointCondition(3) := TabConditionIconRangeCond.AboveEqual;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку для выделенного диапазона
 ячеек будет добавлен условный формат, осуществляющий форматирование ячеек
 на основе их значений. Стиль оформления - пиктограммы. В качестве пиктограмм
 используется цветная круговая заливка. Правила отображения пиктограмм
 будут установлены в процентном соотношении от максимального значения в
 выделенном диапазоне ячеек.


См. также:


[ITabFormatValues](ITabFormatValues.htm) |
 [ITabFormatValues.PointType](ITabFormatValues.PointType.htm)
 | [ITabFormatValues.PointValue](ITabFormatValues.PointValue.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
