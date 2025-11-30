# IChart.HistogrammInfo

IChart.HistogrammInfo
-


# IChart.HistogrammInfo


## Синтаксис


HistogrammInfo: [IChartHistogrammInfo](../IChartHistogrammInfo/IChartHistogrammInfo.htm);


## Описание


Свойство HistogrammInfo позволяет определять параметры частотной диаграммы.


## Комментарии


Работа с доступными параметрами осуществляется посредством интерфейса IChartHistogrammInfo.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


			Sub Main;
Var

    Chart : IChart;
Begin

    Chart.DisplayHistogramm := True;

    Chart.HistogrammInfo.AutoIntervals := False;

    Chart.HistogrammInfo.Intervals := 5 As Integer;
End Sub Main;


Свойству DisplayHistogramm присваивается значение True, для того чтобы диаграмма приняла вид частотной диаграммы.


После выполнения примера на гистограмме будет отражено 5 интервалов.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
