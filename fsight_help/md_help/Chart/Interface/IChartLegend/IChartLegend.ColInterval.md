# IChartLegend.ColInterval

IChartLegend.ColInterval
-


# IChartLegend.ColInterval


## Синтаксис


ColInterval: Double


## Описание


Свойство ColInterval определяет расстояние между столбцами в легенде.


## Пример


Для выполнения примера понадобится форма с размещёнными на ней компонентами Button, ChartBox и UiChart с идентификаторами «Button1», «ChartBox1» и «UiChart1» соответственно.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Chart: IChart;

    ChartLegend: IChartLegend;

Begin

    Chart := ChartBox1.Chart;

    ChartLegend := Chart.Legend;

    ChartLegend.ColIntervalAuto := False;

    ChartLegend.ColInterval := 10;

    ChartLegend.RowIntervalAuto := False;

    ChartLegend.RowInterval := 5;

    ChartLegend.SymbolSpaceAuto := False;

    ChartLegend.SymbolSpace := 10;

End Sub Button1OnClick;


После выполнения примера при нажатии на компонент «Button1» изменится расстояние между строками и столбцами легенды диаграммы, а также расстояние между значком легенды и его описанием.


См. также:


[IChartLegend](IChartLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
