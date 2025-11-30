# IChartSelectedSeries.Marker

IChartSelectedSeries.Marker
-


# IChartSelectedSeries.Marker


## Синтаксис


Marker: [IChartMarker](../IChartMarker/IChartMarker.htm);


## Описание


Свойство Marker возвращает параметры маркера выделенных рядов данных диаграммы.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox и UiChart, являющегося источником данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    SelectedSeries: IChartSelectedSeries;

   Mark: IChartMarker;

Begin

    SelectedSeries:= UiChart1.Chart.SelectedSeries;

    SelectedSeries.DisplayMarkers := True;

    SelectedSeries.MarkerSize := 5;

    SelectedSeries.MarkerType := ChartMarkerType.Rhombus;

    Mark := SelectedSeries.Marker;

    Mark.DisplayShadow := True;

    Mark.Shadow.Color := GxColor.FromName("Blue");

End Sub Button1OnClick;


После выполнения примера для выделенного ряда данных будут отображаться маркеры с синей тенью.


См. также:


[ChartSelectedSeries](IChartSelectedSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
