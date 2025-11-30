# IChart.CircleInfoEx

IChart.CircleInfoEx
-


# IChart.CircleInfoEx


## Синтаксис


CircleInfoEx: [IChartCircleExInfo](../IChartCircleExInfo/IChartCircleExInfo.htm);


## Описание


Свойство CircleInfoEx определяет параметры круговой диаграммы с вторичной круговой диаграммой или гистограммой.


## Комментарии


Работа с доступными параметрами осуществляется посредством интерфейса IChartCircleExInfo.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart. Диаграмма должна быть кругового типа с вторичными круговой или столбиковой. В случае необходимости диаграмма может быть преобразована к круговому типу посредством выполнения команды: «Chart.Type := 10 As ChartType;».


			Sub Circle;

Var

    Chart : IChart;

Begin

    Chart.CircleInfoEx.ShowMode:= ChartSecondaryShowMode.OnlySecondary;

End Sub Circle;


После выполнения примера будет отображаться только вторичная диаграмма.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
