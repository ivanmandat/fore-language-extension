# IChartCommonItem.BackgroundInfo

IChartCommonItem.BackgroundInfo
-


# IChartCommonItem.BackgroundInfo


## Синтаксис


BackgroundInfo: [IChartBackgroundInfo](../IChartBackgroundInfo/IChartBackgroundInfo.htm);


## Описание


Свойство BackgroundInfo определяет
 свойства заливки.


## Пример


В качестве примера рассмотрим создание заливки для области диаграммы.
 Предполагается существование объекта Chart
 типа IChart.


	Sub Color;

	Var

	    Chart: IChart;

	Begin

	    Chart.ChartArea.BackgroundInfo.Type := ChartBackgroundType.Color;

	    Chart.ChartArea.BackgroundInfo.Color := New GxColor.CreateARGB( 255, 245, 120, 255);

	End Sub Color;


После выполнения примера область диаграммы будет залита сплошным сиреневым
 цветом.


См. также:


[IChartCommonItem](IChartCommonItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
