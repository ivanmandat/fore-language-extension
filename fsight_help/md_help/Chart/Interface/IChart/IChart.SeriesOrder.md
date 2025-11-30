# IChart.SeriesOrder

IChart.SeriesOrder
-


# IChart.SeriesOrder


## Синтаксис


SeriesOrder: [ChartSeriesOrder](../../Enums/ChartSeriesOrder.htm);


## Описание


Свойство SeriesOrder определяет порядок рядов диаграммы.


## Комментарии


В случае необходимости тип диаграммы может быть преобразован к смешанному посредством выполнения команды: «Chart.Type := 3 As ChartType».


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


			Sub Order;
Var

    Chart : IChart;
Begin

    Chart.SeriesOrder := 1 As ChartSeriesOrder;
End Sub Order;


После выполнения примера порядок рядов смешанной диаграммы изменится на обратный.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
