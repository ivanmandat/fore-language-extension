# IChart.CircleInfo

IChart.CircleInfo
-


# IChart.CircleInfo


## Синтаксис


CircleInfo: [IChartCircleInfo](../IChartCircleInfo/IChartCircleInfo.htm);


## Описание


Свойство CircleInfo позволяет определять параметры круговой диаграммы.


## Комментарии


Работа с доступными параметрами осуществляется посредством интерфейса IChartCircleInfo.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart. Диаграмма должна быть кругового типа. В случае необходимости диаграмма может быть преобразована к круговому типу посредством выполнения команды: «Chart.Type := 5 As ChartType;».


			Sub Circle;

Var

    Chart: IChart;

Begin

    Chart.CircleInfo.FixedRadius:= 30;

End Sub Circle;


После выполнения примера радиус круговой диаграммы будет равен 30 мм.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
