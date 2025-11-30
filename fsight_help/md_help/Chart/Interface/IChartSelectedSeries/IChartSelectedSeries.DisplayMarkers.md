# IChartSelectedSeries.DisplayMarkers

IChartSelectedSeries.DisplayMarkers
-


# IChartSelectedSeries.DisplayMarkers


## Синтаксис


DisplayMarkers: Boolean;


## Описание


Свойство DisplayMarkers определяет признак отображения маркеров у рядов данных. Если значение данного свойства True, то у ряда на диаграмме будут отображаться маркеры, при значение False - маркеры не отображаются.


По умолчанию установлено значение True.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox и UiChart, являющегося источником данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    SelectedSeries: IChartSelectedSeries;

Begin

    SelectedSeries:= UiChart1.Chart.SelectedSeries;

    SelectedSeries.DisplayMarkers:= False;

End Sub Button1OnClick;


После выполнения примера маркеры рядов данных не будут отображаться.


См. также:


[ChartSelectedSeries](IChartSelectedSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
