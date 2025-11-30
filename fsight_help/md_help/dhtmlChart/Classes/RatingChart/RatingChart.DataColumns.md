# RatingChart.DataColumns

RatingChart.DataColumns
-


# RatingChart.DataColumns


## Синтаксис


DataColumns: Array of [PP.Ui.RatingChartDataColumn](../RatingChartDataColumn/RatingChartDataColumn.htm);


## Описание


Свойство DataColumns определяет
 массив столбцов значений рейтинговой диаграммы.


## Комментарии


Значение свойства устанавливается из JSON, а возвращается с помощью
 метода getDataColumns.


Свойство определяет порядок отображения столбцов значений.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [RatingChart](../../Components/RatingChart/RatingChart.htm)
 с наименованием «ratingChart» (см. «[Пример
 создания компонента RatingChart](../../Components/RatingChart/RatingChart_Example.htm)»). Получим массив столбцов значений,
 сделаем первый столбец массива активным:


// Получим массив столбцов значений
dataColumns = ratingChart.getDataColumns();
// Получим первый столбец из массива
column = dataColumns[0];
// Сделаем столбец активным
column.setIsActive(true);

В результате выполнения примера первый столбец значений рейтинговой
 диаграммы будет активным.


См. также:


[RatingChart](RatingChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
