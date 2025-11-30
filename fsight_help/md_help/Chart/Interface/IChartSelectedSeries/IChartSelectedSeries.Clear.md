# IChartSelectedSeries.Clear

IChartSelectedSeries.Clear
-


# IChartSelectedSeries.Clear


## Синтаксис


Clear;


## Описание


Метод Clear снимает выделение со всех выделенных рядов диаграммы.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox и UiChart, являющегося источником данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    SelectedSeries: IChartSelectedSeries;

Begin

    SelectedSeries:= UiChart1.Chart.SelectedSeries;

    SelectedSeries.Clear;

End Sub Button1OnClick;


После нажатия кнопки «Button1» со всех выделенных рядов будет снято выделение.


См. также:


[ChartSelectedSeries](IChartSelectedSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
