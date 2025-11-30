# IChartCorridor.Background

IChartCorridor.Background
-


# IChartCorridor.Background


## Синтаксис


IChartCorridor.Background: [IChartBackgroundInfo](../IChartBackgroundInfo/IChartBackgroundInfo.htm);


## Описание


Свойство Background определяет параметры заливки коридора диаграммы.


## Комментарии


Свойство позволяет определить изображение или штриховку в качестве способа заливки коридора диаграммы.


Способ заливки коридора диаграммы также определяется свойствами [IChartCorridor.GradientFill](IChartCorridor.GradientFill.htm) и [IChartCorridor.Color](IChartCorridor.Color.htm), обладающие большим приоритетом, чем свойство Background.


## Пример


Для выполнения примера создайте форму, добавьте на нее кнопку с наименованием «Button1», компонент ChartBox с наименованием «ChartBox1», компонент UiChart с наименованием «UiChart1», укажите «UiChart1» в качестве источника компонента ChartBox, у компонента UiChart укажите значения свойств PointCount и SerieCount, в инспекторе сборок модуля добавьте ссылки на системные сборки Chart, MathFin и Drawing.


			Class OBJ761Form: Form

    Button1: Button;

    ChartBox1: ChartBox;

    UiChart1: UiChart;


    Sub OBJ761FormOnShow(Sender: Object; Args: IEventArgs);

        Var

            Chart: IChart;

    Begin

        Chart := UiChart1.Chart;

        Chart.Type := ChartType.Lines;

    End Sub OBJ761FormOnShow;


    Sub UiChart1OnGetDataValue(Sender: Object; Args: IUiChartGetDataValueEventArgs);

    Begin

        Args.Result := True;

        Args.Value := Math.Rand;

    End Sub UiChart1OnGetDataValue;


    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        Corridor: IChartCorridor;

        BackgroundInfo: IChartBackgroundInfo;

        i: Integer;

    Begin

        i := UiChart1.Chart.Corridors.Add(0, 2);

        Corridor := UiChart1.Chart.Corridors.Item(i);

        BackgroundInfo := New ChartBackgroundInfo.Create;

        BackgroundInfo.Type := ChartBackgroundType.Gradient;

        BackgroundInfo.Color := New GxColor.CreateARGB(255, 245, 120, 255);

        Corridor.Background := BackgroundInfo;

    End Sub Button1OnClick;


End Class OBJ761Form;


При нажатии на кнопку «Button1» заливка коридора станет градиентной с использованием сиреневого цвета.


См. также:


[IChart](../IChart/IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
