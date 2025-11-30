# IChartSelectedSeries.Add

IChartSelectedSeries.Add
-


# IChartSelectedSeries.Add


## Синтаксис


Add (Index: Integer);


## Параметры


Index. Индекс ряда данных.


## Описание


Метод Add добавляет ряд в коллекцию выделенных рядов данных диаграммы по указанному индексу.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox и UiChart, являющегося источником данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    SelectedSeries: IChartSelectedSeries;

Begin

    SelectedSeries:= UiChart1.Chart.SelectedSeries;

    SelectedSeries.Add (2);

End Sub Button1OnClick;


После нажатия кнопки «Button1» в коллекцию выделенных рядов будет добавлен ряд с индексом «2» .


См. также:


[ChartSelectedSeries](IChartSelectedSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
