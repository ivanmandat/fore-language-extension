# IChartDateAxisSettings.Min

IChartDateAxisSettings.Min
-


# IChartDateAxisSettings.Min


## Синтаксис


Min: DateTime;


## Описание


Свойство Min определяет
 минимальное значение на оси дат.


## Комментарии


Свойство доступно и может быть сохранено только для оси Х. Свойство
 Min учитывается, если выполняются
 условия:


	- свойство [IChartAxis.AxisType](../IChartAxis/IChartAxis.AxisType.htm)
	 должно принимать значение [ChartAxisType.DateAxis](../../Enums/ChartDateAxisUnit.htm);


	- свойство [IChartAxis.AutoMax](../IChartAxis/IChartAxis.AutoMax.htm)
	 должно принимать значение False.


## Пример


Использование свойства приведено в примере для [IChartDateAxisSettings.Max](IChartDateAxisSettings.Max.htm).


См. также:


[IChartDateAxisSettings](IChartDateAxisSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
