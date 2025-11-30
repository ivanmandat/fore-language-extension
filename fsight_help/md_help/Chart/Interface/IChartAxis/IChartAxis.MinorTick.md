# IChartAxis.MinorTick

IChartAxis.MinorTick
-


# IChartAxis.MinorTick


## Синтаксис


MinorTick: Boolean;


## Описание


Свойство MinorTick позволяет включить возможность работы с промежуточными делениями для каждой оси.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox, UiChart и компонента UiErAnalyzer с наименованием «UiErAnalyzer1», являющегося источником данных.


			Class TESTForm: Form

    Button1: Button;

    UiErAnalyzer1: UiErAnalyzer;

    UiChart1: UiChart;

    ChartBox1: ChartBox;


    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Begin

        ChartBox1.Chart.AxisY.MinorTick := True;

    End Sub Button1OnClick;

End Class TESTForm;


После нажатия кнопки «Button1» на оси Y будут отображены дополнительные деления.


См. также:


[IChartAxis](IChartAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
