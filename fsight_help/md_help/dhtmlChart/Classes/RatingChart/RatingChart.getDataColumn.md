# RatingChart.getDataColumn

RatingChart.getDataColumn
-


# RatingChart.getDataColumn


## Синтаксис


getDataColumn(index: Number): [PP.Ui.RatingChartDataColumn](../RatingChartDataColumn/RatingChartDataColumn.htm);


## Параметры


*index.* Индекс возвращаемого
 столбца значений.


## Описание


Метод getDataColumn возвращает
 столбец значений рейтинговой диаграммы по его индексу.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [RatingChart](../../Components/RatingChart/RatingChart.htm)
 с наименованием «ratingChart» (см. «[Пример
 создания компонента RatingChart](../../Components/RatingChart/RatingChart_Example.htm)»). Получим текст заголовка первого
 столбца значений рейтинговой диаграммы:


// Получим первый столбец значений
dataColumn = ratingChart.getDataColumn(0);
// Получим текст заголовка первого столбца значений
dataColumn.getTitle();

В результате выполнения примера в окно консоли будет выведен текст заголовка
 первого столбца значений рейтинговой диаграммы.


См. также:


[RatingChart](RatingChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
