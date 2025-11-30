# RatingChart.Series

RatingChart.Series
-


**


# RatingChart.Series


## Синтаксис


Series: Array of [PP.Ui.RatingChartSerie](../RatingChartSerie/RatingChartSerie.htm);


## Описание


Свойство Series** определяет
 массив рядов данных рейтинговой диаграммы.


## Комментарии


Значение свойства устанавливается из JSON, а возвращается с помощью
 метода get**Series**.


Порядок рядов данных в массиве соответствует отображаемому порядку.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [RatingChart](../../Components/RatingChart/RatingChart.htm)
 с наименованием «ratingChart» (см. «[Пример
 создания компонента RatingChart](../../Components/RatingChart/RatingChart_Example.htm)»). Получим наименование первого ряда
 данных:


// Получим массив рядов данных
series = ratingChart.getSeries();
// Получим первый ряд данных
serie = series[0];
// Получим наименование ряда данных
serie.getName();

В результате выполнения примера в окно консоли браузера будет выведено
 наименование первого ряда данных рейтинговой диаграммы.


См. также:


[RatingChart](RatingChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
