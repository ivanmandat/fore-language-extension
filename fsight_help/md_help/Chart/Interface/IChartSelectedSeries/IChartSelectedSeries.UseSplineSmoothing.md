# IChartSelectedSeries.UseSplineSmoothing

IChartSelectedSeries.UseSplineSmoothing
-


# IChartSelectedSeries.UseSplineSmoothing


## Синтаксис


UseSplineSmoothing: Boolean;


## Описание


Свойство UseSplineSmoothing определяет признак сглаживания ряда данных. Если значение данного свойства True, то ряд на диаграмме будет сглаживаться, при значении False - этого не происходит.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox и UiChart, являющегося источником данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    SelectedSeries: IChartSelectedSeries;

Begin

    SelectedSeries:= UiChart1.Chart.SelectedSeries;

   SelectedSeries.Add (2);

   SelectedSeries.UseSplineSmoothing:= True;

End Sub Button1OnClick;


После нажатия кнопки «Button1» выделенный ряд на диаграмме будет сглаживаться.


См. также:


[ChartSelectedSeries](IChartSelectedSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
