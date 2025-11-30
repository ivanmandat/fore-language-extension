# IChart.AxisY

IChart.AxisY
-


# IChart.AxisY


## Синтаксис


AxisY: [IChartAxis](../IChartAxis/IChartAxis.htm);


## Описание


Свойство AxisY позволяет определять различные параметры оси Y на диаграмме.


## Комментарии


Работа с доступными параметрами осуществляется посредством интерфейса IChartAxis.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


			Sub Axis;

Var

    Chart: IChart;

Begin

    Chart.AxisY.FontColor := GxColor.FromName("Red");

End Sub Axis;


После выполнения примера цвет шрифта по оси Y будет изменен на красный.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
