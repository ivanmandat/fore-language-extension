# RatingChart.IndexColumn

RatingChart.IndexColumn
-


# RatingChart.IndexColumn


## Синтаксис


IndexColumn: [PP.Ui.RatingChartColumn](../RatingChartColumn/RatingChartColumn.htm);


## Описание


Свойство IndexColumn определяет
 столбец с номерами рядов данных.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setIndexColumn,
 а возвращается с помощью метода getIndexColumn.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [RatingChart](../../Components/RatingChart/RatingChart.htm)
 с наименованием «ratingChart» (см. «[Пример
 создания компонента RatingChart](../../Components/RatingChart/RatingChart_Example.htm)»). Переименуем заголовок столбца с
 номерами рядов данных рейтинговой диаграммы и изменим ширину столбца:


// Получим и переименуем заголовок столбца с номерами рядов данных
indexColumn = ratingChart.getIndexColumn();
indexColumn.setTitle("Номер ряда");
// Изменим ширину столбца
indexColumn.setWidth(20);
// Обновим диаграмму
indexColumn.getChart().update(true,true,true);

В результате выполнения примера будет переименован заголовок столбца
 с номерами рядов данных рейтинговой диаграммы, также будет изменена ширина
 столбца.


См. также:


[RatingChart](RatingChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
