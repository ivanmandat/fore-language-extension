# RatingChart.NameColumn

RatingChart.NameColumn
-


# RatingChart.NameColumn


## Синтаксис


NameColumn: [PP.Ui.RatingChartColumn](../RatingChartColumn/RatingChartColumn.htm);


## Описание


Свойство NameColumn определяет
 столбец наименований рядов данных.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setNameColumn,
 а возвращается с помощью метода getNameColumn.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [RatingChart](../../Components/RatingChart/RatingChart.htm)
 с наименованием «ratingChart» (см. «[Пример
 создания компонента RatingChart](../../Components/RatingChart/RatingChart_Example.htm)»). Получим расстояние до левой границы
 столбца наименований, затем скроем заголовок столбца наименований рядов
 данных рейтинговой диаграммы:


// Получим заголовок столбца наименований рядов данных
nameColumn = ratingChart.getNameColumn();
// Выведем расстояние от левого края диаграммы до левой границы столбца
console.log("Расстояние до левой границы столбца наименований: " + nameColumn.getLeft())
// Скроем заголовок столбца
nameColumn.setIsHeaderVisible(false);

В результате выполнения примера в окно консоли браузера будет выведено
 расстояние от левого края диаграммы до левой границы столбца наименований
 рядов данных. Заголовок столбца наименований будет скрыт.


См. также:


[RatingChart](RatingChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
