# IChartSerieBase.EmptyLinePen

IChartSerieBase.EmptyLinePen
-


# IChartSerieBase.EmptyLinePen


## Синтаксис


EmptyLinePen: [IGxPen](ModDrawing.chm::/Interface/IGxPen/IGxPen.htm);


## Описание


Свойство EmptyLinePen определяет
 параметры линии ряда данных c отсутствующими данными.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub Line;

	Var

	    Chart: IChart;

	    Serie: IChartSerie;

	    LPen : IGxPen;

	Begin

	    Serie := Chart.Series.Item(0);

	    LPen := New GxPen.CreateSolid( GxColor.FromName("Red"),0.52);

	    Serie.EmptyLinePen := LPen ;

	End Sub Line;


После выполнения примера линия ряда данных с отсутствующими данными
 будет красного цвета и толщиной 0,52 мм.


См. также:


[IChartSerieBase](IChartSerieBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
