# IChartSelectedSeries.Remove

IChartSelectedSeries.Remove
-


# IChartSelectedSeries.Remove


## Синтаксис


Remove (Index: Integer);


## Параметры


Index. Индекс ряда данных в коллекции выделенных рядов.


## Описание


Метод Remove снимает выделение рядя в коллекции выделенных рядов данных по указанному индексу.


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox и UiChart, являющегося источником данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    SelectedSeries: IChartSelectedSeries;

Begin

    SelectedSeries:= UiChart1.Chart.SelectedSeries;

    SelectedSeries.Remove(1);

End Sub Button1OnClick;


После нажатия кнопки «Button1» будет снято выделение со второго ряда данных.


См. также:


[ChartSelectedSeries](IChartSelectedSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
