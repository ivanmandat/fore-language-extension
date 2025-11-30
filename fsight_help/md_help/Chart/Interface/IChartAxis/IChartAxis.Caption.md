# IChartAxis.Caption

IChartAxis.Caption
-


# IChartAxis.Caption


## Синтаксис


Caption: [IChartCaption](../IChartCaption/IChartCaption.htm);


## Описание


Свойство Caption позволяет определить
 параметры и содержание заголовка оси.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart
 типа IChart.


	Sub CapY;

	Var

	    Chart : IChart;

	    YAxis : IChartAxis;

	Begin

	    YAxis:= Chart.AxisY;

	    YAxis.Caption.Text := "Ось Y";

	End Sub CapY;


После выполнения примера заголовок оси Y будет содержать заданный текст.


См. также:


[IChartAxis](IChartAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
