# IChartMarker.MarkerType

IChartMarker.MarkerType
-


# IChartMarker.MarkerType


## Синтаксис


MarkerType: [ChartMarkerType](../../Enums/ChartMarkerType.htm);


## Описание


Свойство MarkerType определяет
 тип маркера (квадрат, окружность, ромб и т.д.).


## Пример


В рассматриваемом примере предполагается, что существует объект Marker типа IChartMarker.


	Sub Type;

	Var

	    Marker : IChartMarker;

	Begin

	    Marker.MarkerType := 1 As ChartMarkerType;

	End Sub Type;


После выполнения примера тип маркера на графике изменится на ромб.


См. также:


[IChartMarker](IChartMarker.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
