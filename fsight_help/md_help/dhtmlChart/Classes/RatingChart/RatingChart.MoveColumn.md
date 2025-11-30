# RatingChart.MoveColumn

RatingChart.MoveColumn
-


# RatingChart.MoveColumn


## Синтаксис


MoveColumn: [PP.Ui.RatingChartColumn](../RatingChartColumn/RatingChartColumn.htm);


## Описание


Свойство MoveColumn определяет
 столбец изменения позиций рядов данных.


## Комментарии


Даннай столбец отображает изменение позиции ряда данных в рейтинге по
 отношению к предыдущему шагу временной шкалы.


Значение свойства устанавливается из JSON и с помощью метода setMoveColumn,
 а возвращается с помощью метода getMoveColumn.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [RatingChart](../../Components/RatingChart/RatingChart.htm)
 с наименованием «ratingChart» (см. «[Пример
 создания компонента RatingChart](../../Components/RatingChart/RatingChart_Example.htm)»). Скроем столбец изменения позиций
 рядов данных:


// Получим и скроем столбец изменения позиций рядов данных
moveColumn = ratingChart.getMoveColumn();
moveColumn.setIsVisible(false);

В результате выполнения примера столбец изменения позиций рядов данных
 будет скрыт.


См. также:


[RatingChart](RatingChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
