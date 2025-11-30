# IChartSelectedSeries.MarkerType

IChartSelectedSeries.MarkerType
-


# IChartSelectedSeries.MarkerType


## Синтаксис


MarkerType: [ChartMarkerType](../../Enums/ChartMarkerType.htm);


## Описание


Свойство MarkerType определяет типы маркеров у выделенных рядов данных диаграммы.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox и UiChart, являющегося источником данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        SelectedSeries: IChartSelectedSeries;

    Begin

        SelectedSeries:= UiChart1.Chart.SelectedSeries;

        SelectedSeries.DisplayMarkers: = True;

        SelectedSeries.MarkerSize: = 2;

        SelectedSeries.MarkerType: = ChartMarkerType.Rhombus;

    End Sub Button1OnClick;


После выполнения примера маркеры для выделенных рядов данных будут отображаться в форме ромбов.


См. также:


[ChartSelectedSeries](IChartSelectedSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
