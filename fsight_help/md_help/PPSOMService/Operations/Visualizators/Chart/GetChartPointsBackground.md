# GetChartPointsBackground: Операция

GetChartPointsBackground: Операция
-


# GetChartPointsBackground


## Синтаксис


ChartBackgroundSettings GetChartPointsBackground(ChartPointsId
 mon, ChartPointsIndexes arg)


## Параметры


mon. Моникёр
 для работы с точками ряда диаграммы.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetChartPointsBackground
 получает параметры заливки для точек ряда диаграммы.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр для работы с точками ряда, а в поле arg.pidxs
 индексы точек ряда. Моникёр может быть сформирован на основании моникёра
 диаграммы, указываемого в операциях [GetChart](../GetChart.htm),
 [SetChart](../SetChart.htm), [GetChartSeries](../GetChartSeries.htm).
 Моникёр формируется в следующем формате: «Моникёр
 диаграммы»!Series!«Индекс ряда»!Points.


Результатом работы операции будут полученные параметров заливки для
 точек.


См. также:


[Диаграмма:
 Операции](chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
