# IChart.AxisX

IChart.AxisX
-


# IChart.AxisX


## Синтаксис


AxisX: [IChartAxis](../IChartAxis/IChartAxis.htm);


## Описание


Свойство AxisX позволяет определять различные параметры оси X на диаграмме.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart. Работа с доступными параметрами осуществляется посредством интерфейса IChartAxis.


			Sub Axis;

Var

    Chart: IChart;

Begin

    Chart.AxisX.FontColor := GxColor.FromName("Red");

End Sub Axis;


После выполнения примера цвет шрифта по оси Х будет изменен на красный.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
