# IChartSelectedSeries.IsEmpty

IChartSelectedSeries.IsEmpty
-


# IChartSelectedSeries.IsEmpty


## Синтаксис


IsEmpty: Boolean;


## Описание


Свойство IsEmpty возвращает признак наличия элементов в коллекции.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox и UiChart, являющегося источником данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    SelectedSeries: IChartSelectedSeries;

Begin

    SelectedSeries:= UiChart1.Chart.SelectedSeries;
    Debug.WriteLine(SelectedSeries.IsEmpty);

End Sub Button1OnClick;


После выполнения примера в консоль будет выведен результат о наличии или отсутствии элементов в коллекции.


См. также:


[ChartSelectedSeries](IChartSelectedSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
