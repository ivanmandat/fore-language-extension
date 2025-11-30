# IChartSelectedSeries.RemoveSerie

IChartSelectedSeries.RemoveSerie
-


# IChartSelectedSeries.RemoveSerie


## Синтаксис


RemoveSerie (Serie: [IChartSerie](../IChartSerie/IChartSerie.htm));


## Параметры


Serie. Ряды данных диаграммы.


## Описание


Метод RemoveSeries снимает выделение с указанных рядов в коллекции выделенных рядов данных диаграммы.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox и UiChart, являющегося источником данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    SelectedSeries: IChartSelectedSeries;

Begin

    SelectedSeries:= UiChart1.Chart.SelectedSeries;

    If SelectedSeries.Count > 0 Then

        SelectedSeries.RemoveSerie(SelectedSeries.Item(0));

    End If;

End Sub Button1OnClick;


После нажатия кнопки «Button1» будет снято выделение с указанных рядов в коллекции выделенных рядов данных диаграммы.


См. также:


[ChartSelectedSeries](IChartSelectedSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
