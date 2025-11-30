# IChartSelectedSeries.DisplayShadow

IChartSelectedSeries.DisplayShadow
-


# IChartSelectedSeries.DisplayShadow


## Синтаксис


DisplayShadow: Boolean;


## Описание


Свойство DisplayShadow определяет признак отображения тени у рядов данных.


## Комментарии


Если значение данного свойства True, то на диаграмме отображается тень для рядов данных, при значении False - нет.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox и UiChart, являющегося источником данных.


Пример является обработчиком события OnCliсk для кнопки.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    SelectedSeries: IChartSelectedSeries;

Begin

    SelectedSeries:= UiChart1.Chart.SelectedSeries;

    SelectedSeries.DisplayShadow:= True;

End Sub Button1OnClick;


После выполнения примера на диаграмме будет отображаться тень для рядов данных.


См. также:


[ChartSelectedSeries](IChartSelectedSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
