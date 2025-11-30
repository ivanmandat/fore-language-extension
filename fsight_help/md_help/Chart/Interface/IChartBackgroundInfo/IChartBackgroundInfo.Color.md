# IChartBackgroundInfo.Color

IChartBackgroundInfo.Color
-


# IChartBackgroundInfo.Color


## Синтаксис


Color: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Описание


Свойство Color позволяет определять
 базовый цвет заливки.


## Комментарии


Работа с доступными цветами осуществляется посредством интерфейса IGxColor.


## Пример


В качестве примера рассмотрим создание заливки для области диаграммы.
 Предполагается существование объекта Chart
 типа IChart.


	Sub Color;

	Var

	    Chart : IChart;

	Begin

	    Chart.ChartArea.BackgroundInfo.Type := ChartBackgroundType.Color; //определяем сплошной тип заливки

	    Chart.ChartArea.BackgroundInfo.Color := New GxColor.CreateARGB( 255, 245, 120, 255);

	End Sub Color;


После выполнения примера область диаграммы будет залита сплошным сиреневым
 цветом.


См. также:


[IChartBackgroundInfo](IChartBackgroundInfo.htm)
 | [IChartBackgroundInfo.Type](IChartBackgroundInfo.Type.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
