# IChartAxis.AxisPen

IChartAxis.AxisPen
-


# IChartAxis.AxisPen


## Синтаксис


AxisPen: [IGxPen](ModDrawing.chm::/Interface/IGxPen/IGxPen.htm);


## Описание


Свойство AxisPen задает параметры пера для рисования линии оси.


Примечание. Значение по умолчанию для AxisPen должно совпадать с текущим значением по умолчанию для TickPen.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox, UiChart и компонента UiErAnalyzer с наименованием «UiErAnalyzer1», являющегося источником данных.


			Class TESTForm: Form

    UiErAnalyzer1: UiErAnalyzer;

    UiChart1: UiChart;

    ChartBox1: ChartBox;

    Button1: Button;


    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        APen: IGxPen;

    Begin

        APen := New GxPen.CreateSolid(New GxColor.CreateRGB(36, 255, 0));

        ChartBox1.Chart.AxisX.AxisPen := APen;

    End Sub Button1OnClick;

End Class TESTForm;


После выполнения примера для заливки оси X будет использовано перо зеленого цвета.


См. также:


[IChartAxis](IChartAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
