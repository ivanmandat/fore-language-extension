# IChartLegend.IsMultiline

IChartLegend.IsMultiline
-


# IChartLegend.IsMultiline


## Синтаксис


IsMultiline: Boolean;


## Описание


Свойство IsMultiline определяет признак переноса текста по словам в легенде. Если значение данного свойства True, то текст в легенде будет располагаться в несколько строк при условии, что он не может быть размещен в одну строку, при значении False - текст в легенде располагается в одну строку.


## Комментарии


По умолчанию свойство имеет значение False.


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

    ChartLegend.ItemPlacement := ChartLegPlacement.CustomColumns;

    ChartLegend.ColCount := 2;

    ChartLegend.IsMultiline := True;

End Sub Button1OnClick;


После выполнения примера при нажатии на компонент «Button1» изменится расстояние между столбцами легенды диаграммы, а также количество этих столбцов. Также будет включён перенос текста по словам в легенде.


См. также:


[IChartLegend](IChartLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
