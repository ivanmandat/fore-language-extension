# IChartLegend.RowCount

IChartLegend.RowCount
-


# IChartLegend.RowCount


## Синтаксис


RowCount: Integer;


## Описание


Свойство RowCount определяет количество строк в легенде.


## Комментарии


Работа свойства зависит от значения [ItemPlacement](IChartLegend.ItemPlacement.htm).


## Пример


Для выполнения примера понадобится форма с размещёнными на ней компонентами Button, ChartBox и UiChart с идентификаторами «Button1», «ChartBox1» и «UiChart1» соответственно.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);
Var

    Chart: IChart;

    ChartLegend: IChartLegend;
Begin

    Chart := ChartBox1.Chart;

    ChartLegend := Chart.Legend;

    ChartLegend.ItemPlacement := ChartLegPlacement.CustomRows;

    ChartLegend.RowCount := 7;
End Sub Button2OnClick;


После выполнения примера при нажатии на компонент «Button1» изменится количество столбцов в легенде диаграммы.


См. также:


[IChartLegend](IChartLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
