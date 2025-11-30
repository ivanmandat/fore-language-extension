# IChartAxis.LinePen

IChartAxis.LinePen
-


# IChartAxis.LinePen


## Синтаксис


LinePen: [IGxPen](ModDrawing.chm::/Interface/IGxPen/IGxPen.htm);


## Описание


Свойство LinePen определяет
 параметры линий сетки, перпендикулярных оси.


## Пример


В рассматриваемом примере предполагается, что существует объект ChartAxis типа IChartAxis.


	Sub LinePen;

	Var

	    ChartAxis: IChartAxis;

	    LPen: IGxPen;

	Begin

	    LPen := New GxPen.CreateSolid(New GxColor.CreateARGB(255,0,0,255), 0.5);

	    ChartAxis.LinePen := LPen;

	End Sub LinePen;


После выполнения примера линии сетки будут отражены синим цветом и толщиной
 в 0,5 мм.


См. также:


[IChartAxis](IChartAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
