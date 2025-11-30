# IChart.Orientation

IChart.Orientation
-


# IChart.Orientation


## Синтаксис


Orientation: [ChartOrientation](../../Enums/ChartOrientation.htm);


## Описание


Свойство Orientation определяет
 ориентацию диаграммы.


## Комментарии


По умолчанию используется ориентация слева направо.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub Orient;

	Var

	    Chart : IChart;

	Begin

	    Chart.Orientation := 1 As ChartOrientation;

	End Sub Orient;


После выполнения примера ориентация диаграммы будет изменена на ориентацию
 снизу вверх.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
