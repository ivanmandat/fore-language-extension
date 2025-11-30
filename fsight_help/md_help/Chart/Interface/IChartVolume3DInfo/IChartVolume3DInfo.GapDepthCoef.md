# IChartVolume3DInfo.GapDepthCoef

IChartVolume3DInfo.GapDepthCoef
-


# IChartVolume3DInfo.GapDepthCoef


## Синтаксис


GapDepthCoef: Double;


## Описание


Свойство GapDepthCoef определяет
 глубину зазора между рядами данных, расположенными перпендикулярно глубине
 диаграммы.


## Комментарии


Свойство может принимать значения из диапазона [0,0; 5]. По умолчанию
 значение данного свойства 0,0.


Свойство применимо только для диаграммы объемного типа.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub GapDepth;

	Var

	    Chart : IChart;

	Begin

	    Chart.DisplayVolume3D := True; // преобразование диаграммы к объемному виду

	    Chart.Volume3DInfo.GapDepthCoef := 5;

	End Sub GapDepth;


После выполнения примера глубина зазора между рядами данных изменится
 на заданную.


См. также:


[IChartVolume3DInfo](IChartVolume3DInfo.htm)
 | [IChart.Type](../IChart/IChart.Type.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
