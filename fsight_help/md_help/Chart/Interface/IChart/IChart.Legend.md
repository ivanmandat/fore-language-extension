# IChart.Legend

IChart.Legend
-


# IChart.Legend


## Синтаксис


Legend: [IChartLegend](../IChartLegend/IChartLegend.htm);


## Описание


Свойство Legend позволяет определять
 параметры легенды.


## Комментарии


Работа с доступными параметрами осуществляется посредством интерфейса
 [IChartLegend](../IChartLegend/IChartLegend.htm).


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub Legend;

	Var

	    Chart : IChart;

	Begin

	    Chart.Legend.FontColor := GxColor.FromName("Green");

	End Sub Legend;


После выполнения примера цвет шрифта в легенде изменится на зеленый.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
