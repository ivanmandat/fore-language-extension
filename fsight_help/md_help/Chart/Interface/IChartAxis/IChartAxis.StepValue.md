# IChartAxis.StepValue

IChartAxis.StepValue
-


# IChartAxis.StepValue


## Синтаксис


StepValue: Double;


## Описание


Свойство StepValue определяет
 шаг (цену) деления оси Y.


## Комментарии


Свойство IntervalsCount применимо
 только для оси значений.


При задании шага деления на оси необходимо задать соответствующее значение
 свойству StepMode.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с идентификатором «Button1», компонент ChartBox с идентификатором
 «ChartBox1» и компонент UiErAnalyzer с идентификатором «UiErAnalyzer1»,
 являющийся источником данных для компонента ChartBox1. В качестве источника
 данных для компонента UiErAnalyzer1 укажите экспресс-отчет, сохраненный
 на странице с диаграммой.


Пример является обработчиком события OnClick для компонента Button1.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Chart: IChart;

    ChartAxis: IChartAxis;

Begin

    Chart := ChartBox1.Chart;

    ChartAxis := Chart.AxisY;

    ChartAxis.StepMode := ChartAxisStepMode.FixedStep;

    ChartAxis.StepValue := 10000;

End Sub Button1OnClick;


В результате выполнения примера ось Y будет размечена с шагом в 10000.


См. также:


[IChartAxis](IChartAxis.htm)|[IChartAxis.StepMode](IChartAxis.StepMode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
