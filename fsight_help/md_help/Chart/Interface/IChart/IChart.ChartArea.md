# IChart.ChartArea

IChart.ChartArea
-


# IChart.ChartArea


## Синтаксис


ChartArea: [IChartArea](../IChartArea/IChartArea.htm);


## Описание


Свойство ChartArea позволяет определять параметры области диаграммы.


## Комментарии


Работа с доступными параметрами осуществляется посредством интерфейса IChartArea.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


			Sub Area;

Var

    Chart: IChart;

Begin

    Chart.ChartArea.BackgroundInfo.Type := ChartBackgroundType.Color;

    Chart.ChartArea.BackgroundInfo.Color := GXColor.FromName("Blue");

End Sub Area;


После выполнения примера область диаграммы будет залита сплошным синим цветом.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
