# RatingChart.getSerie

RatingChart.getSerie
-


# RatingChart.getSerie


## Синтаксис


getSerie(index: Number): [PP.Ui.RatingChartSerie](../RatingChartSerie/RatingChartSerie.htm);


## Параметры


*index.* Индекс возвращаемого
 ряда данных.


## Описание


Метод getSerie возвращает ряд
 данных рейтинговой диаграммы по его индексу.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [RatingChart](../../Components/RatingChart/RatingChart.htm)
 с наименованием «ratingChart» (см. «[Пример
 создания компонента RatingChart](../../Components/RatingChart/RatingChart_Example.htm)»). Получим наименование первого ряда
 данных рейтинговой диаграммы:


// Получим первый ряд данных
serie = ratingChart.getSerie(0);
// Получим наименование первого ряда данных
serie.getName();

В результате выполнения примера в окно консоли будет выведено наименование
 первого ряда данных рейтинговой диаграммы.


См. также:


[RatingChart](RatingChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
