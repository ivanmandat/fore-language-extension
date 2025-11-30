# IChartSeries.Item

IChartSeries.Item
-


# IChartSeries.Item


## Синтаксис


Item(Index: Integer): [IChartSerie](../IChartSerie/IChartSerie.htm);


## Параметры


Index - номер ряда на графике.
 Нумерация начинается с нуля.


## Описание


Свойство Item позволяет определять
 настройки конкретного ряда диаграммы.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub SetLabel;

	Var

	    Chart: IChart;

	Begin

	    Chart.Series.Item(0).EnableLabel(1,True);

	End Sub SetLabel;


После выполнения примера будет отображена вторая подпись данных для
 первого ряда данных.


См. также:


[IChartSeries](IChartSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
