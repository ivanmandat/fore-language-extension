# IChartSelectedSeries.AtSecondaryAxis

IChartSelectedSeries.AtSecondaryAxis
-


# IChartSelectedSeries.AtSecondaryAxis


## Синтаксис


AtSecondaryAxis: Boolean;


## Описание


Свойство AtSecondaryAxis определяет, относится ли выделенный ряд к дополнительной оси. По умолчанию свойству установлено значение False (ряд не относится к дополнительной оси).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox и UiChart, являющегося источником данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    SelectedSeries: IChartSelectedSeries;

Begin

    SelectedSeries:= UiChart1.Chart.SelectedSeries;

    SelectedSeries.Add (2);

    SelectedSeries.AtSecondaryAxis:= True;

End Sub Button1OnClick;


После нажатия кнопки «Button1» для выделенного ряда будет использована дополнительная ось.


См. также:


[ChartSelectedSeries](IChartSelectedSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
