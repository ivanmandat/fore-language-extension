# IChartSerieBase.Marker

IChartSerieBase.Marker
-


# IChartSerieBase.Marker


## Синтаксис


Marker: [IChartMarker](../IChartMarker/IChartMarker.htm);


## Описание


Свойство Marker позволяет работать
 с маркерами ряда диаграммы.


## Пример


В рассматриваемом примере предполагается, что существует объект Serie типа IChartSerie.


	Sub MarkerS;

	Var

	    Serie : IChartSerie;

	Begin

	    Serie.Marker.MarkerType := 1 As ChartMarkerType;

	End Sub MarkerS;


После выполнения примера маркеры у ряда примут вид ромба.


См. также:


[IChartSerieBase](IChartSerieBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
