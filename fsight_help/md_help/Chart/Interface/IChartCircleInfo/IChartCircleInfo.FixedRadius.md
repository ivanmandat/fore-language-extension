# IChartCircleInfo.FixedRadius

IChartCircleInfo.FixedRadius
-


# IChartCircleInfo.FixedRadius


## Синтаксис


FixedRadius: Double;


## Описание


Свойство FixedRadius определяет
 радиус круговой диаграммы.


## Комментарии


По умолчанию радиус определяется автоматически.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.
 Диаграмма должна быть кругового типа. В случае необходимости, диаграмма
 может быть преобразована к круговому типу посредством выполнения команды:
 «Chart.Type := 5 As ChartType».


Добавьте ссылку на системную сборку «Chart».


			Sub Circle;

Var

    Chart: IChart;

Begin

    Chart.CircleInfo.FixedRadius := 30;

End Sub Circle;


После выполнения примера радиус круговой диаграммы будет равен 30 мм.


См. также:


[IChartCircleInfo](IChartCircleInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
