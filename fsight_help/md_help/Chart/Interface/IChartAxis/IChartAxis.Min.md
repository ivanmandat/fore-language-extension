# IChartAxis.Min

IChartAxis.Min
-


# IChartAxis.Min


## Синтаксис


Min: Double;


## Описание


Свойство Min определяет минимум
 на оси.


## Пример


В рассматриваемом примере предполагается, что существует объект ChartAxis типа IChartAxis.


Для оси диаграммы не должен вычисляться автоматический минимум.


При необходимости, вычисление автоматического минимума можно отменить,
 присвоив свойству [IChartAxis.AutoMin](IChartAxis.AutoMin.htm)
 значение False.


	Sub Min;

	Var

	    ChartAxis : IChartAxis;

	Begin

	    ChartAxis.AutoMin := False;

	    ChartAxis.Min := 540;

	End Sub Min;


После выполнения примера минимальное число на оси будет 540.


См. также:


[IChartAxis](IChartAxis.htm) | [IChartAxis.AutoMin](IChartAxis.AutoMin.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
