# ISparkline.Color

ISparkline.Color
-


# ISparkline.Color


## Синтаксис


Color: [IGxColor](../IGxColor/IGxColor.htm);


## Описание


Свойство Color определяет цвет
 линии в спарклайне.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента TabSheetBox с наименованием
 TabSheetBox1 и какого-либо источника данных для TabSheetBox1.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    TSheet: ITabSheet;

	    Sparklines: ITabSparklines;

	    Sparkline: ITabSparkline;

	Begin

	    TSheet := TabSheetBox1.Source.GetTabSheet;

	    Sparklines := TSheet.Sparklines;

	    Sparklines.Add(TSheet.ParseRange("A0:A5"), TSheet.ParseRange("B0:F5"));

	    Sparkline := Sparklines.Item(0);

	    //Настройка параметров спарклайна

	    Sparkline.Color := GxColor.FromKnownColor(GxKnownColor.Red);

	    Sparkline.LineWidth := 0.5;

	    Sparkline.NullValueBehavior := GxSparkNullValueBehavior.DirectConnectionDotLine;

	End Sub Button1OnClick;


При нажатии на кнопку для первых ячеек столбца А будут добавлены спарклайны.
 Спарклайны будут строиться по данным, которые расположены по строкам в
 диапазоне «B0:F5». Для первого созданного спарклайна будут определены
 собственные параметры оформления.


См. также:


[ISparkline](ISparkline.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
