# IChartSelectedSeries.AddSerie

IChartSelectedSeries.AddSerie
-


# IChartSelectedSeries.AddSerie


## Синтаксис


AddSerie (Serie: [IChartSerie](../IChartSerie/IChartSerie.htm));


## Параметры


Serie. Параметры ряда данных.


## Описание


Метод AddSerie добавляет ряд в коллекцию выделенных рядов данных диаграммы по указанному параметру.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox и UiChart, являющегося источником данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    SelectedSeries: IChartSelectedSeries;

Begin

    SelectedSeries:= UiChart1.Chart.SelectedSeries;

    SelectedSeries.AddSerie(UiChart1.Chart.Series.Item(0));

End Sub Button1OnClick;


После нажатия кнопки «Button1» первый ряд будет добавлен в коллекцию выделенных рядов.


См. также:


[ChartSelectedSeries](IChartSelectedSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
