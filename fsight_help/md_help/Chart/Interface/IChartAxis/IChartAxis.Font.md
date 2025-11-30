# IChartAxis.Font

IChartAxis.Font
-


# IChartAxis.Font


## Синтаксис


Font: [IGxFont](ModDrawing.chm::/Interface/IGxFont/IGxFont.htm);


## Описание


Свойство Font определяет параметры
 шрифта текста на осях.


## Пример


В рассматриваемом примере предполагается, что существует объект ChartAxis типа IChartAxis.


	Sub SetFont;

	Var

	    Font: IGxFont;

	    ChartAxis: IChartAxis;

	Begin

	    Font := New GxFont.Create("Arial Black", 10, 3 As GxFontStyle, 3 As GxUnit);

	    ChartAxis.Font := Font;

	End Sub SetFont;


После выполнения примера на графике для оси будут изменены параметры
 шрифта на «Arial Black» с размером 10, стилем Bold Italic (полужирный
 курсив) и с единицами измерения Point (в качестве единицы измерения используется
 пункт (1/72 дюйма)).


См. также:


[IChartAxis](IChartAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
