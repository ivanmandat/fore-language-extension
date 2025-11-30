# ITabCellStyle.BackgroundBrush

ITabCellStyle.BackgroundBrush
-


# ITabCellStyle.BackgroundBrush


## Синтаксис


BackgroundBrush: [IGxBrush](ModDrawing.chm::/Interface/IGxBrush/IGxBrush.htm);


## Описание


Свойство BackgroundBrush определяет
 кисть, которая будет использоваться для заполнения фона ячейки.


## Комментарии


В качестве значения свойства указывается экземпляр одного из следующих
 классов:


	- [GxHatchBrush](ModDrawing.chm::/Class/GxHatchBrush/GxHatchBrush.htm).
	 Штриховая кисть с заданным узором;


	- [GxLinearGradientBrush](ModDrawing.chm::/Class/GxLinearGradientBrush/GxLinearGradientBrush.htm).
	 Линейно-градиентная кисть;


	- [GxSolidBrush](ModDrawing.chm::/Class/GxSolidBrush/GxSolidBrush.htm).
	 Кисть, осуществляющая заливку сплошным цветом.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox с наименованием
 «TabSheetBox1» и какого-либо источника данных для «TabSheetBox1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Selection: ITabRange;

    Style: ITabCellStyle;

Begin

    Selection := TabSheetBox1.Source.GetTabSheet.View.Selection.Range;

    Style := Selection.Style;

    Style.BackgroundBrush := New GxSolidBrush.Create(GxColor.FromName("Green"));

End Sub Button1OnClick;


При нажатии на кнопку для ячеек, которые выделены в «TabSheetBox1»,
 будет изменен стиль фонового изображения: фон будет закрашен зеленым цветом.


См. также:


[ITabCellStyle](ITabCellStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
