# IChartAxis.TickPen

IChartAxis.TickPen
-


# IChartAxis.TickPen


## Синтаксис


TickPen: [IGxPen](ModDrawing.chm::/Interface/IGxPen/IGxPen.htm);


## Описание


Свойство TickPen определяет
 параметры пера, устанавливаемого только для линий делений на оси.


## Пример


В рассматриваемом примере предполагается, что существует объект ChartAxis типа IChartAxis.


	Sub TickPen;

	Var

	    ChartAxis : IChartAxis;

	    TPen : IGxPen;

	Begin

	    TPen := New GxPen.CreateSolid(New GxColor.CreateARGB(255,0,0,255),1.00);

	    ChartAxis.TickPen := TPen;

	End Sub TickPen;


После выполнения примера деления по оси будут отражены синим цветом
 и заданной толщиной.


См. также:


[IChartAxis](IChartAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
