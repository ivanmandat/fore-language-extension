# IChart.AxisYSec

IChart.AxisYSec
-


# IChart.AxisYSec


## Синтаксис


AxisYSec: [IChartAxis](../IChartAxis/IChartAxis.htm);


## Описание


Свойство AxisYSec позволяет определять параметры дополнительной оси Y на диаграмме.


## Комментарии


Работа с доступными параметрами осуществляется посредством интерфейса IChartAxis.


На диаграмме должна быть определена дополнительная ось для какого-либо ряда. Для определения дополнительной оси на диаграмме следует выполнить команду: «Chart.Series.Item(0).AtSecondaryAxis := True;»


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


			Sub AxisYS;

Var

    Chart: IChart;

Begin

    Chart.AxisYSec.FontColor := GxColor.FromName("Blue");

End Sub AxisYS;


После выполнения примера цвет шрифта по дополнительной оси Y будет изменен на синий.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
