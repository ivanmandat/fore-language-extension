# IChartVolume3DInfo.LightContrast

IChartVolume3DInfo.LightContrast
-


# IChartVolume3DInfo.LightContrast


## Синтаксис


LightContrast: Double;


## Описание


Свойство LightContrast определяет
 контрастность освещения ( 0 - нет; 1- максимальное).


## Комментарии


По умолчанию свойство имеет значение «0». Свойство применимо только
 для диаграммы объемного типа.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub Contrast;

	Var

	    Chart : IChart;

	Begin

	    Chart.DisplayVolume3D := True; // преобразование диаграммы к объемному виду

	    Chart.Volume3DInfo.LightContrast := 0.6;

	End Sub Contrast;


После выполнения примера контрастность освещения изменится на заданную.


См. также:


[IChartVolume3DInfo](IChartVolume3DInfo.htm)
 | [IChart.Type](../IChart/IChart.Type.htm)
 | [IChart.Volume3DInfo](../IChart/IChart.Volume3DInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
