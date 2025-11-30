# IChartSerieBase.SerieType

IChartSerieBase.SerieType
-


# IChartSerieBase.SerieType


## Синтаксис


SerieType: [ChartSerieType](../../Enums/ChartSerieType.htm);


## Описание


Свойство SerieType определяет
 тип ряда.


## Комментарии


Данное свойство используется только для ряда смешанных(MultiPle) или
 лепестковых(Petals) типов диаграмм, причем для ряда лепестковой диаграммы
 нельзя использовать столбиковый тип ряда (Bars).


Для изменения типа диаграммы можно воспользоваться свойством [IChart.Type](../IChart/IChart.Type.htm).


## Пример


В рассматриваемом примере предполагается существование объекта Chart типа IChart.


	Sub UserProc;

	Var

	    Chart: IChart;

	    Series: IChartSerie;

	Begin

	    Chart.Type := ChartType.Multiple; // Смешанная диаграмма

	    Series := Chart.Series.Item(0);

	    Series.SerieType := ChartSerieType.Areas;

	End Sub UserProc;


После выполнения примера тип ряда будет представлен на диаграмме в виде
 области.


См. также:


[IChartSerieBase](IChartSerieBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
