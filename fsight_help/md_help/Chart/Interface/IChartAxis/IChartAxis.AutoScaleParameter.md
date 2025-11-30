# IChartAxis.AutoScaleParameter

IChartAxis.AutoScaleParameter
-


# IChartAxis.AutoScaleParameter


## Синтаксис


AutoScaleParameter: Double;


## Описание


Свойство AutoScaleParameter
 определяет параметр автомасштабирования.


## Комментарии


По умолчанию значение параметра «ноль».


При задании параметра автомасштабирования необходимо задать соответствующее
 значение свойству [IChartAxis.AutoScale](IChartAxis.AutoScale.htm).


## Пример


В рассматриваемом примере предполагается, что существует объект ChartAxis типа IChartAxis.


Для выполнения примера добавьте ссылку на системную сборку «Chart».


			Sub Scale;

Var

    ChartAxis: IChartAxis;

Begin

    ChartAxis.AutoScale := 1 As ChartAutoScaleMode;

    ChartAxis.AutoScaleParameter := 5;

End Sub Scale;


После выполнения примера к оси будет применена кластеризация с заданным
 параметром.


См. также:


[IChartAxis](IChartAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
