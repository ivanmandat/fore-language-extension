# IChartCommonItem.BorderPen

IChartCommonItem.BorderPen
-


# IChartCommonItem.BorderPen


## Синтаксис


BorderPen: [IGxPen](ModDrawing.chm::/Interface/IGxPen/IGxPen.htm);


## Описание


Свойство BorderPen определяет
 параметры обводки.


## Пример


В рассматриваемом примере предполагается существование объекта Chart типа IChart.


	Sub BorderPen;

	Var

	    Chart : IChart;

	    BPen : IGxPen;

	Begin

	    BPen := New GxPen.CreateSolid(New GxColor.CreateARGB(255,0,0,255),1.02);

	    Chart.ChartArea.BorderPen := BPen;

	End Sub BorderPen;


После выполнения примера вокруг области диаграммы появится синяя обводка
 заданной толщины.


См. также:


[IChartCommonItem](IChartCommonItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
