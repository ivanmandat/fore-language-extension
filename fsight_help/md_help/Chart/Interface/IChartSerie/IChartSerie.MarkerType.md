# IChartSerie.MarkerType

IChartSerie.MarkerType
-


# IChartSerie.MarkerType


## Синтаксис


MarkerType: [ChartMarkerType](../../Enums/ChartMarkerType.htm);


## Описание


Свойство MarkerType определяет
 тип маркеров у ряда данных.


## Пример


В рассматриваемом примере предполагается, что существует объект Serie типа IChartSerie.


	Sub MarkerS;

	Var

	    Serie : IChartSerie;

	Begin

	    Serie.MarkerType := 1 As ChartMarkerType;

	End Sub MarkerS;


После выполнения примера тип маркеров ряда данных на графике изменится
 на ромб.


См. также:


[IChartSerie](IChartSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
