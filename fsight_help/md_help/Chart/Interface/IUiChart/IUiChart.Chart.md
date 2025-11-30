# IUiChart.Chart

IUiChart.Chart
-


# IUiChart.Chart


## Синтаксис


Chart: [IChart](../IChart/IChart.htm);


## Описание


Свойство Chart возвращает объект типа IChart, которому принадлежит элемент диаграммы.


## Пример


Для выполнения примера на форме расположите кнопку с наименованием «Button1», компонент UiChart с наименованием «UiChart1» и компонент ChartBox с наименованием «ChartBox1». Добавьте ссылку на системную сборку Chart.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    ChartProp: IChart;

Begin

    ChartProp := UiChart1.Chart;

    ChartProp.DisplayLegend := True;

    ChartProp.Orientation := ChartOrientation.LeftToRight;

    ChartProp.DisplayVolume3D := True;

End Sub Button1OnClick;


После выполнения примера будет отображена, ориентированная слева направо, трехмерная диаграмма с легендой.


См. также:


[IUiChart](IUiChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
