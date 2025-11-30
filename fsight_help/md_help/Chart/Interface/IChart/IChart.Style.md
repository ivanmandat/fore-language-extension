# IChart.Style

IChart.Style
-


# IChart.Style


## Синтаксис


Style: [ChartStyle](../../Enums/ChartStyle.htm);


## Описание


Свойство Style определяет тип
 шкалы диаграммы.


## Комментарии


По умолчанию используется абсолютная шкала.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub Scale;

	Var

	    Chart : IChart;

	Begin

	    Chart.Style := 1 As ChartStyle;

	End Sub Scale;


После выполнения примера на диаграмме будет относительная шкала.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
