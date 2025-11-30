# IChartAxis.FontColor

IChartAxis.FontColor
-


# IChartAxis.FontColor


## Синтаксис


FontColor: [IGxColor](moddrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Описание


Свойство FontColor определяет
 цвет шрифта на осях диаграммы.


## Пример


В рассматриваемом примере предполагается, что существует объект ChartAxis
 типа IChartAxis.


	Sub SetFontColor;

	Var

	    FontColor : IGxColor;

	    ChartAxis : IChartAxis;

	Begin

	    FontColor := New GxColor.CreateARGB( 255, 0, 0, 255);

	    ChartAxis.FontColor := FontColor;

	End Sub SetFontColor;


После выполнения примера на графике будет изменен цвет шрифта по оси
 на синий.


См. также:


[IChartAxis](IChartAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
