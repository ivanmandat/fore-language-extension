# ITabFormatValues.MidValue

ITabFormatValues.MidValue
-


# ITabFormatValues.MidValue


## Синтаксис


MidValue: Variant;


## Описание


Свойство MidValue определяет
 условие, по которому устанавливается среднее значение для ячеек, попадающих
 под форматирование.


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

	    //трехцветный градиент для форматирования ячеек

	    ValFormat.Style := TabFormatValuesStyle.ThreeColorScale;

	    //настройка минимального значения

	    ValFormat.MinValueType := TabFormatValueType.Percent;

	    ValFormat.MinValue := 10;

	    ValFormat.MinValueColor := GxColor.FromName("Red");

	    //настройка среднего значения

	    ValFormat.MidValueType := TabFormatValueType.Percent;

	    ValFormat.MidValue := 50;

	    ValFormat.MidValueColor := GxColor.FromName("Blue");

	    //настройка максимального значения

	    ValFormat.MaxValueType := TabFormatValueType.Percent;

	    ValFormat.MaxValue := 90;

	    ValFormat.MaxValueColor := GxColor.FromName("Green");

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку для выделенного диапазона
 ячеек будет добавлен условный формат, осуществляющий форматирование ячеек
 на основе их значений. Стиль оформления - трехцветный градиент, в выделенном
 диапазоне будут форматироваться ячейки, значения которых больше минимального
 и меньше максимального на 10 процентов.


См. также:


[ITabFormatValues](ITabFormatValues.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
