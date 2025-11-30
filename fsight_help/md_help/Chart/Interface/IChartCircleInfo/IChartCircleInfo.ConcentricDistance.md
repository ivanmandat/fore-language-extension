# IChartCircleInfo.ConcentricDistance

IChartCircleInfo.ConcentricDistance
-


# IChartCircleInfo.ConcentricDistance


## Синтаксис


ConcentricDistance: Double;


## Описание


Свойство ConcentricDistance определяет расстояние между концентрическими окружностями.


## Комментарии


По умолчанию расстояние между концентрическими окружностями равно нулю.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart. Диаграмма должна быть кругового типа. В случае необходимости, диаграмма может быть преобразована к круговому типу посредством выполнения команды: «Chart.Type := 5 As ChartType»


Добавьте ссылку на системную сборку «Chart».


			Sub Concentric;
Var

    Chart: IChart;
Begin

    Chart.CircleInfo.ConcentricDistance := 3;
End Sub Concentric;


После выполнения примера будет установлено заданное расстояние между концентрическими окружностями.


См. также:


[IChartCircleInfo](IChartCircleInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
