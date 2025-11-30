# RatingChart.AggregatedSerie

RatingChart.AggregatedSerie
-


# RatingChart.AggregatedSerie


## Синтаксис


AggregatedSerie: [PP.Ui.RatingChartSerie](../RatingChartSerie/RatingChartSerie.htm);


## Описание


Свойство AggregatedSerie определяет
 строку агрегации значений рядов данных.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setAggregatedSerie,
 а возвращается с помощью метода getAggregatedSerie.


Наименование строки агрегации по умолчанию - «Остальные».


Для определения индекса строки, после которой значения рядов данных
 будут агрегированы, используйте свойство [RatingChart.AggregationAfter](RatingChart.AggregationAfter.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [RatingChart](../../Components/RatingChart/RatingChart.htm)
 с наименованием «ratingChart» (см. «[Пример
 создания компонента RatingChart](../../Components/RatingChart/RatingChart_Example.htm)»). Получим строку агрегации и переименуем
 её:


// Выполним агрегацию элементов рейтинговой диаграммы, начиная с третьего
ratingChart.setAggregationAfter(2);
// Получим строку агрегации и переименуем ее
if (ratingChart.isAggregatedSerieVisible)
{aggr = ratingChart.getAggregatedSerie();
aggr.setName("Сумма оставшихся значений")}

В результате выполнения примера будет выполнена агрегация элементов
 рейтинговой диаграммы, строке агрегации будет присвоено новое наименование.


См. также:


[RatingChart](RatingChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
