# IChartSelectedSeries.MarkerSize

IChartSelectedSeries.MarkerSize
-


# IChartSelectedSeries.MarkerSize


## Синтаксис


MarkerSize: Double;


## Описание


Свойство MarkerSize определяет размеры маркеров выделенных рядов данных диаграммы.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox и UiChart, являющегося источником данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        SelectedSeries: IChartSelectedSeries;

    Begin

        SelectedSeries:= UiChart1.Chart.SelectedSeries;

        SelectedSeries.DisplayMarkers := True;

        SelectedSeries.MarkerSize := 2;

        SelectedSeries.MarkerType := ChartMarkerType.Rhombus;

    End Sub Button1OnClick;


После выполнения примера маркеры для рядов данных будут отображаться в форме ромбов величиной 2 мм.


См. также:


[ChartSelectedSeries](IChartSelectedSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
