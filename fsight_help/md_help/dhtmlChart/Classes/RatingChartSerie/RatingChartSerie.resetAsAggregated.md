# RatingChartSerie.resetAsAggregated

RatingChartSerie.resetAsAggregated
-


# RatingChartSerie.resetAsAggregated


## Синтаксис


resetAsAggregated();


## Описание


Метод resetAsAggregated обнуляет
 значения ряда данных.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [RatingChart](../../Components/RatingChart/RatingChart.htm)
 с наименованием «ratingChart» (см. «[Пример
 создания компонента RatingChart](../../Components/RatingChart/RatingChart_Example.htm)»). Обнулим значение первого ряда данных:


// Получим первый ряд данных
serie = ratingChart.getSerie(0);
// Обнулим значение
serie.resetAsAggregated();
// Выведем значение ряда данных
serie.getValue();
// -> null

В результате выполнения примера значение первого ряда данных будет «null».


См. также:


[RatingChartSerie](RatingChartSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
