# IChart.HitTestSeries

IChart.HitTestSeries
-


# IChart.HitTestSeries


## Синтаксис


HitTestSeries(Point: [IGxPointF](ModDrawing.chm::/Interface/IGxPointF/IGxPointF.htm)): [IChartSerie](../IChartSerie/IChartSerie.htm);


## Параметры


Point . Точка, в которой необходимо получить ряд диаграммы.


## Описание


Метод HitTestSeries позволяет получить ряд диаграммы в заданной точке.


## Комментарии


При выполнении метода HitTestSeries осуществляется проверка наличия ряда, графическое представление которого находится в области точки Point. Если ряд существует, то метод вернет его параметры, иначе метод вернет значение Null.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
