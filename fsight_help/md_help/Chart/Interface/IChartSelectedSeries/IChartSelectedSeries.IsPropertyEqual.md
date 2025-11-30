# IChartSelectedSeries.IsPropertyEqual

IChartSelectedSeries.IsPropertyEqual
-


# IChartSelectedSeries.IsPropertyEqual


## Синтаксис


IsPropertyEqual (SerieProperty: ChartSerieProperty): Boolean;


## Параметры


SerieProperty. Свойства ряда.


## Описание


Свойство IsPropertyEqual возвращает результат проверки на идентичность значения свойства всех выделенных рядов.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox и UiChart, являющегося источником данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    SelectedSeries: IChartSelectedSeries;

Begin

    SelectedSeries:= UiChart1.Chart.SelectedSeries;
    Debug.WriteLine(SelectedSeries.IsPropertyEqual(ChartSerieProperty.DisplayMarker));

End Sub Button1OnClick;


После выполнения примера в консоли будет находиться результат проверки.


См. также:


[ChartSelectedSeries](IChartSelectedSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
