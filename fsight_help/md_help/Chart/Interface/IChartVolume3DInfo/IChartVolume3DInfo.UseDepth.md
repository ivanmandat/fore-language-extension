# IChartVolume3DInfo.UseDepth

IChartVolume3DInfo.UseDepth
-


# IChartVolume3DInfo.UseDepth


## Синтаксис


UseDepth: Boolean;


## Описание


Свойство UseDepth определяет
 принудительное использование глубины (для гистограммы и смешанной диаграммы).


## Комментарии


Если значение данного свойства True,
 то происходит принудительное использование глубины, при значение False - не используется.


По умолчанию значение данного свойства False.


Свойство применимо только для диаграммы столбикового или смешанного
 типа, а также объемного вида.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub UseDepth;

	Var

	    Chart : IChart;

	Begin

	    Chart.DisplayVolume3D := True; //преобразование к объемному виду

	    Chart.Type := ChartType.Bars; //преобразование к столбиковому типу

	    Chart.Volume3DInfo.UseDepth := True;

	End Sub UseDepth;


После выполнения примера произойдет принудительное использование глубины
 столбиков ряда.


См. также:


[IChartVolume3DInfo](IChartVolume3DInfo.htm)
 | [IChart.Type](../IChart/IChart.Type.htm)
 | [IChart.Volume3DInfo](../IChart/IChart.Volume3DInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
