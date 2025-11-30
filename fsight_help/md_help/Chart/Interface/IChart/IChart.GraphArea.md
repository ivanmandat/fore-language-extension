# IChart.GraphArea

IChart.GraphArea
-


# IChart.GraphArea


## Синтаксис


GraphArea: [IChartGraphArea](../IChartGraphArea/IChartGraphArea.htm);


## Описание


Свойство GraphArea позволяет
 определять параметры области построения диаграммы.


## Комментарии


Работа с доступными параметрами осуществляется посредством интерфейса
 IChartGraphArea.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub Area;

	Var

	    Chart : IChart;

	Begin

	    Chart.GraphArea.BackgroundInfo.Type := ChartBackgroundType.Color;

	    Chart.GraphArea.BackgroundInfo.Color := New GxColor.CreateARGB(255,255,0,0);

	End Sub Area;


После выполнения примера область построения диаграммы будет залита сплошным
 красным цветом.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
