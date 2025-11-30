# RatingChart.GraphColumn

RatingChart.GraphColumn
-


# RatingChart.GraphColumn


## Синтаксис


GraphColumn: [PP.Ui.RatingChartColumn](../RatingChartColumn/RatingChartColumn.htm);


## Описание


Свойство GraphColumn определяет
 столбец с графическим представлением рядов данных.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setGraphColumn,
 а возвращается с помощью метода getGraphColumn.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [RatingChart](../../Components/RatingChart/RatingChart.htm)
 с наименованием «ratingChart» (см. «[Пример
 создания компонента RatingChart](../../Components/RatingChart/RatingChart_Example.htm)»). Позволим пользователю с помощью
 мыши изменять ширину столбца с графическим представлением рядов данных
 рейтинговой диаграммы:


// Получим столбец с графическим представлением рядов данных
graphColumn = ratingChart.getGraphColumn();
// Разрешим изменение ширины столбца с графическим представлением рядов данных с помощью мыши
graphColumn.setIsResizable(true);

В результате выполнения примера ширину столбца с графическим представлением
 рядов данных можно будет изменять вручную.


См. также:


[RatingChart](RatingChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
