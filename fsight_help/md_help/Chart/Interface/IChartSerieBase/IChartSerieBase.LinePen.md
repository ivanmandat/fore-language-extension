# IChartSerieBase.LinePen

IChartSerieBase.LinePen
-


# IChartSerieBase.LinePen


## Синтаксис


LinePen: [IGxPen](ModDrawing.chm::/Interface/IGxPen/IGxPen.htm);


## Описание


Свойство LinePen определяет
 параметры (цвет, толщина) линии графика ряда данных.


## Комментарии


Изменения линии ряда отображается только на следующих диаграммах: линейной,
 лепестковой,точечной, биржевой и смешанной.


## Пример


В рассматриваемом примере предполагается, что существует объект Serie
 типа IChartSerie.


	Sub LinePS;

	Var

	    Series: IChartSerie;

	    LPen : IGxPen;

	Begin

	    LPen := New GxPen.CreateSolid(New GxColor.CreateARGB(255,0,0,255),1.00);

	    Series.LinePen := LPen;

	End Sub LineS;


После выполнения примера линия ряда на графике будет изображена синим
 цветом с толщиной в 1 пункт.


См. также:


[IChartSerieBase](IChartSerieBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
