# RatingChart.getVisibleSeriesHeight

RatingChart.getVisibleSeriesHeight
-


# RatingChart.getVisibleSeriesHeight


## Синтаксис


getVisibleSeriesHeight(): Number;


## Описание


Метод getVisibleSeriesHeight
 возвращает суммарную высоту отображаемых рядов данных.


## Комментарии


Для получения количества отображаемых рядов данных используйте метод
 [RatingChart.getVisibleSeriesCount](RatingChart.getVisibleSeriesCount.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [RatingChart](../../Components/RatingChart/RatingChart.htm)
 с наименованием «ratingChart» (см. «[Пример
 создания компонента RatingChart](../../Components/RatingChart/RatingChart_Example.htm)»). Получим количество и суммарную
 высоту отображаемых рядов данных:


// Получим количество отображаемых рядов данных
ratingChart.getVisibleSeriesCount();
// Получим суммарную высоту
ratingChart.getVisibleSeriesHeight();

В результате выполнения примера в окно консоли будут выведены количество
 и суммарная высота отображаемых рядов данных рейтинговой диаграммы.


См. также:


[RatingChart](RatingChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
