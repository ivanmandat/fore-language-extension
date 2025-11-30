# IChartAxis.StepMode

IChartAxis.StepMode
-


# IChartAxis.StepMode


## Синтаксис


StepMode: [ChartAxisStepMode](../../Enums/ChartAxisStepMode.htm);


## Описание


Свойство StepMode определяет
 способ расчета делений.


## Комментарии


По умолчанию происходит автоматический расчет делений.


## Пример


В рассматриваемом примере предполагается, что существует объект ChartAxis типа IChartAxis.


	Sub StepMode;

	Var

	    ChartAxis : IChartAxis;

	Begin

	    ChartAxis.StepMode := ChartAxisStepMode.FixedIntervals;

	    ChartAxis.IntervalsCount := 2;

	End Sub StepMode;


После выполнения примера на оси будет всего два интервала.


См. также:


[IChartAxis](IChartAxis.htm) | [IChartAxis.StepValue](IChartAxis.StepValue.htm)
 | [ChartAxis.IntervalsCount](IChartAxis.IntervalsCount.htm)
 | [IChartAxis.StepDistance](IChartAxis.StepDistance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
