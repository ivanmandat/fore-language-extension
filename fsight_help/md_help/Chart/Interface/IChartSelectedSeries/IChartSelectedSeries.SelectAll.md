# IChartSelectedSeries.SelectAll

IChartSelectedSeries.SelectAll
-


# IChartSelectedSeries.SelectAll


## Синтаксис


SelectAll (IncludeFixed: Boolean; IncludeTrends: Boolean);


## Параметры


IncludeFixed. Ряды, включающие фиксированные измерения.


IncludeTrends. Ряды, включающие линии тренда.


## Описание


Метод SelectAll выделяет все ряды данных, соответствующие заданным параметрам.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox и UiChart, являющегося источником данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        SelectedSeries: IChartSelectedSeries;

    Begin

        SelectedSeries:= UiChart1.Chart.SelectedSeries;

        SelectedSeries.SelectAll(True, True);

    End Sub Button1OnClick;


После выполнения примера будут выделены ряды данных, соответствующие заданным параметрам.


См. также:


[ChartSelectedSeries](IChartSelectedSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
