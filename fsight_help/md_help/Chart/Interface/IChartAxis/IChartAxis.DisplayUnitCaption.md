# IChartAxis.DisplayUnitCaption

IChartAxis.DisplayUnitCaption
-


# IChartAxis.DisplayUnitCaption


## Синтаксис


DisplayUnitCaption: [IChartCaption](../IChartCaption/IChartCaption.htm);


## Описание


Свойство DisplayUnitCaption
 позволяет определить параметры заголовка цены деления.


## Комментарии


Работа с доступными параметрами осуществляется посредством интерфейса
 [.


## Пример


В рассматриваемом примере предполагается наличие объекта Chart типа
 IChart.


	Sub DisUnCap;

	Var

	    Chart : IChart;

	Begin

	    Chart.AxisY.DisplayUnitCaption.FontColor := GxColor.FromName("Red");

	End Sub DisUnCap;


После выполнения примера цвет текста заголовка цены деления будет изменен
 на красный.


См. также:


IChartAxis](../IChartCaption/IChartCaption.htm) | [IChartAxis.DisplayUnit](IChartAxis.DisplayUnit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
