# IChartVolume3DInfo.SceneDepthCoef

IChartVolume3DInfo.SceneDepthCoef
-


# IChartVolume3DInfo.SceneDepthCoef


## Синтаксис


SceneDepthCoef: Double;


## Описание


Свойство SceneDepthCoef определяет
 глубину диаграммы.


## Комментарии


Свойство может принимать значения из диапазона [0,2; 20]. По умолчанию
 значение данного свойства 0,2.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub Scene;

	Var

	    Chart : IChart;

	Begin

	    Chart.DisplayVolume3D := True; // преобразование диаграммы к объемному виду

	    Chart.Volume3DInfo.SceneDepthCoef := 10;

	End Sub Scene;


После выполнения примера глубина диаграммы будет изменена на заданную.


См. также:


[IChartVolume3DInfo](IChartVolume3DInfo.htm)
 | [IChart.Volume3DInfo](../IChart/IChart.Volume3DInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
