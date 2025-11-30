# ITabFormatGrowth.Direction

ITabFormatGrowth.Direction
-


# ITabFormatGrowth.Direction


## Синтаксис


Direction: [TabFormatGrowthDirection](../../Enums/TabFormatGrowthDirection.htm);


## Описание


Свойство Direction определяет направление построения индикатора роста.


## Комментарии


По умолчанию индикатор роста строится по значениям в строках.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонента TabSheetBox с наименованием «TabSheetBox1» и какого-либо источника данных для «TabSheetBox1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Tab: ITabSheet;

    Range: ITabRange;

    FormCond: ITabFormatCondition;

    Growth: ITabFormatGrowth;

Begin

    Tab := TabSheetBox1.Source.GetTabSheet;

    Range := Tab.View.Selection.Range;

    FormCond := Range.FormatConditions.Add;

    FormCond.Type := TabConditionType.Growth;

    Growth := FormCond.Details As ITabFormatGrowth;

    Growth.Direction := TabFormatGrowthDirection.Columns;

    Growth.IconType := TabConditionIconType.Arrows2;

End Sub Button1OnClick;


При нажатии на кнопку для выделенного диапазона ячеек будет добавлен условный формат. Форматирование будет осуществляться в виде индикатора роста значений по столбцам.


См. также:


[ITabFormatGrowth](ITabFormatGrowth.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
