# IChartLabel.CapLength

IChartLabel.CapLength
-


# IChartLabel.CapLength


## Синтаксис


CapLength: Double;


## Описание


Свойство CapLength определяет
 длину наконечника линии подписи данных.


## Пример


В рассматриваемом примере предполагается, что существует объект Label типа IChartLabel.


	Sub Custom;

	Var

	    Label : IChartLabel;

	Begin

	    Label.Type := 1 As ChartLabelType;

	    Label.Cap := 1 As ChartLineCapType;

	    Label.CapLength := 4.5;

	End Sub Custom;


После выполнения примера линия подписи данных будет оканчиваться на
 стрелку длиной 4,5 мм.:


![](IChartLabel.CapLength.gif)


См. также:


[IChartLabel](IChartLabel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
