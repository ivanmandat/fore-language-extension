# RatingChart.getSerieByVerticalOffset

RatingChart.getSerieByVerticalOffset
-


# RatingChart.getSerieByVerticalOffset


## Синтаксис


getSerieByVerticalOffset(Y: Number): [PP.Ui.RatingChartSerie](../RatingChartSerie/RatingChartSerie.htm);


## Параметры


*Y.* Смещение относительно
 начала верхней строки в пикселях.


## Описание


Метод getSerieByVerticalOffset
 возвращает ряд данных рейтинговой диаграммы по вертикальной координате.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [RatingChart](../../Components/RatingChart/RatingChart.htm)
 с наименованием «ratingChart» (см. «[Пример
 создания компонента RatingChart](../../Components/RatingChart/RatingChart_Example.htm)»). Получим ряд данных по его вертикальной
 координате, выведем наименование полученного ряда данных в окно консоли
 браузера:


// Получим ряд данных
serie = ratingChart.getSerieByVerticalOffset(50);
// Выведем наименование ряда данных
serie.getName();

В результате выполнения примера в окно консоли браузера будет выведено
 наименование полученного ряда данных рейтинговой диаграммы.


См. также:


[RatingChart](RatingChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
