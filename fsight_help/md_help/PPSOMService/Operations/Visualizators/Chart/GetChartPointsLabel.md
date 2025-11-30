# GetChartPointsLabel: Операция

GetChartPointsLabel: Операция
-


# GetChartPointsLabel


## Синтаксис


ChartLabel GetChartPointsLabel(ChartPointsId mon,
 ChartPointsIndexes arg)


## Параметры


mon. Моникёр
 для работы с точками ряда диаграммы.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetChartPointsLabel
 получает настройки подписи данных для точек ряда диаграммы.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр для работы с точками ряда, а в поле arg.pidxs
 индексы точек ряда. Моникёр может быть сформирован на основании моникёра
 диаграммы, указываемого в операциях [GetChart](../GetChart.htm),
 [SetChart](../SetChart.htm), [GetChartSeries](../GetChartSeries.htm).
 Моникёр формируется в следующем формате: «Моникёр
 диаграммы»!Series!«Индекс ряда»!Points.


Результатом работы операции будут полученные настройки подписи данных
 для точек.


См. также:


[Работа
 с регламентными отчётами](../../RegularReport/RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
