# IChartCircleInfo.HoleSize

IChartCircleInfo.HoleSize
-


# IChartCircleInfo.HoleSize


## Синтаксис


HoleSize: Double;


## Описание


Свойство HoleSize определяет
 радиус центрального отверстия (в долях) от максимального радиуса диаграммы.


## Комментарии


Свойство актуально, если [IChart.Type](../IChart/IChart.Type.htm) = ChartType.Doughnut.


Значение по умолчанию - «0.5». Минимальная возможная величина радиуса
 - «0.1», максимальная - «0.9».


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с идентификатором «Button1», компонент ChartBox с идентификатором
 «ChartBox1», компонент UiErAnalyzer с идентификатором «UiErAnalyzer1»,
 являющийся источником данных для компонента «ChartBox1». В качестве источника
 данных для компонента «UiErAnalyzer1» укажите экспресс-отчет, сохраненный
 на листе с диаграммой.


Пример является обработчиком события OnClick для компонента «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Chart: IChart;

    CircleInfo: IChartCircleInfo;

Begin

    Chart := ChartBox1.Chart;

    // преобразование диаграммы к кольцевому типу

    Chart.Type := ChartType.Doughnut;

    CircleInfo := Chart.CircleInfo;

    // радиус центрального отверстия

    CircleInfo.HoleSize := 0.3;

End Sub Button1OnClick;


После выполнения примера диаграмма будет преобразована к кольцевому
 типу с заданным радиусом центрального отверстия.


См. также:


[IChartCircleInfo](IChartCircleInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
