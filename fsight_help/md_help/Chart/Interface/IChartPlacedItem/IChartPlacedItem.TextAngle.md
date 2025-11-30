# IChartPlacedItem.TextAngle

IChartPlacedItem.TextAngle
-


# IChartPlacedItem.TextAngle


## Синтаксис


TextAngle: Double;


## Описание


Свойство TextAngle определяет
 угол поворота надписи.


## Пример


В рассматриваемом примере предполагается, что существует объект UiChart1 типа UiChart.


	Sub TextAngle;

	Var

	    UiChart1: UiChart;

	    Cap : IChartCaption;

	Begin

	    Cap := UiChart1.Chart.AxisY.Caption;

	    Cap.Text := "Рубли";

	    Cap.TextAngle := -10;

	    UiChart1.Chart.Refresh;

	End Sub TextAngle;


После выполнения примера заголовок по оси Y будет повернут на заданный
 угол.


См. также:


[IChartPlacedItem](IChartPlacedItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
