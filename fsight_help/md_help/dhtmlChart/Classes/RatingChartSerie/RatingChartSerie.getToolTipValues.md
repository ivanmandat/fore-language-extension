# RatingChartSerie.getToolTipValues

RatingChartSerie.getToolTipValues
-


# RatingChartSerie.getToolTipValues


## Синтаксис


getToolTipValues(): Object;


## Описание


Метод getToolTipValues возвращает
 всплывающую подсказку ряда данных.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [RatingChart](../../Components/RatingChart/RatingChart.htm)
 с наименованием «ratingChart» (см. «[Пример
 создания компонента RatingChart](../../Components/RatingChart/RatingChart_Example.htm)»). Получим всплывающую подсказку первого
 ряда данных:


serie = ratingChart.getSerie(0);
serie.getToolTipValues();
// -> Object {Index: 1, Name: "Аргентина", Value: 8609.72, PrevIndex: NaN, ValueAttributeName: "FACT"}

В результате выполнения примера в окно консоли браузера будет выведена
 информация, содержащаяся во всплывающей подсказке первого ряда данных.


См. также:


[RatingChartSerie](RatingChartSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
