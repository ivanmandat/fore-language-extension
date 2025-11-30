# ChartCanvasSerie.TrendLine

ChartCanvasSerie.TrendLine
-


# ChartCanvasSerie.TrendLine


## Синтаксис


TrendLine: Object;


getTrendLine() : [PP.Ui.ChartSplineSerie](../ChartSplineSerie/ChartSplineSerie.htm);


## Описание


Свойство TrendLine содержит
 настройки линии тренда.


## Комментарии


Значение свойства устанавливается из JSON.


Линия тренда является отдельным рядом данных, экземпляр линии тренда
 можно получить при помощи метода getTrendLine.


Тип линии тренда зависит от свойства «Type»
 объекта настроек и может принимать значения:


	- linear. Линейный тренд;


	- logarithmic. Логарифмический
	 тренд;


	- exponential. Экспоненциальный
	 тренд;


	- power. Степенной тренд;


	- mean. Среднее значение;


	- peaks. Пиковые значения.


## Пример


Пример объекта настроек линии тренда:


{
  BackwardForecast: 0,
  Color: "rgb(0,0,0)",
  Enabled: true,
  ForwardForecast: 0,
  LineDashStyle: "solid",
  LineWidth: 1,
  Name: "",
  PeakInterval: 12,
  ShowInLegend: true,
  Type: "Linear",
  UseAutomaticText: true,
}
Пример использования приведён на странице [ChartCanvasSerie.LineDashStyle](ChartCanvasSerie.LineDashStyle.htm).


См. также:


[ChartCanvasSerie](ChartCanvasSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
