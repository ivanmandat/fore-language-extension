# IChartAxis.DisplayMinorGrid

IChartAxis.DisplayMinorGrid
-


# IChartAxis.DisplayMinorGrid


## Синтаксис


DisplayMinorGrid: Boolean;


## Описание


Свойство DisplayMinorGrid определяет,
 отображаются ли промежуточные линии сетки.


## Комментарии


Допустимые значения:


	- True. Промежуточные
	 линии сетки отображаются;


	- False. Промежуточные
	 линии сетки не отображаются.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с идентификатором «Button1», компонент ChartBox с идентификатором
 «ChartBox1» и компонент UiErAnalyzer с идентификатором «UiErAnalyzer1».
 Для компонента «ChartBox1» укажите источник данных «UiErAnalyzer1».


Пример является обработчиком события OnClick для компонента «Button1».


Добавьте ссылку на системную сборку «Drawing».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Chart: IChart;

    ChartAxis: IChartAxis;

    MinorLinePen, MinorTickPen: IGxPen;

Begin

    Chart := ChartBox1.Chart;

    ChartAxis := Chart.AxisY;

    ChartAxis.DisplayMinorGrid := True;

    ChartAxis.MinorLinePen := New GxPen.CreateSolid(GxColor.FromName("Red"),0.1);

    ChartAxis.MinorTick:= True;

    ChartAxis.MinorTickPen := New GxPen.CreateSolid(GxColor.FromName("Green"),2.1);

End Sub Button1OnClick;


При нажатии на кнопку включится отображение промежуточных линий и делений
 сетки с заданными настройками цвета и толщины линий.


См. также:


[IChartAxis](IChartAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
