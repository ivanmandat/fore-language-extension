# IChartCircleInfo.StartAngle

IChartCircleInfo.StartAngle
-


# IChartCircleInfo.StartAngle


## Синтаксис


StartAngle: Double;


## Описание


Свойство StartAngle определяет угол поворота круговой диаграммы.


## Комментарии


По умолчанию значение данного свойства равно нулю.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart. Диаграмма должна быть кругового типа. В случае необходимости, диаграмма может быть преобразована к круговому типу посредством выполнения команды: «Chart.Type := 5 As ChartType».


Добавьте ссылку на системную сборку «Chart».


			Sub Angle;
Var

    Chart: IChart;
Begin

    Chart.CircleInfo.StartAngle := 30;
End Sub Angle;


После выполнения примера ось круговой диаграммы будет повернута на 30 градусов.


См. также:


[IChartCircleInfo](IChartCircleInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
