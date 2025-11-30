# RatingChartSerie.Index

RatingChartSerie.Index
-


# RatingChartSerie.Index


## Синтаксис


Index: Number;


## Описание


Свойство Index возвращает текущий
 номер ряда данных.


## Комментарии


Свойство доступно только для чтения. Значение свойства возвращается
 с помощью метода getIndex.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [RatingChart](../../Components/RatingChart/RatingChart.htm)
 с наименованием «ratingChart» (см. «[Пример
 создания компонента RatingChart](../../Components/RatingChart/RatingChart_Example.htm)»). Получим номер ряда данных, изменение
 поцизии в рейтинге по отношению к прерыдущему шагу временной шкалы и информацию
 о том, выделен ли ряд данных в настоящий момент или нет:


serie = ratingChart.getSerie(0);
console.log("Номер ряда: " + serie.getIndex());
console.log("Изменение позиции с предыдущего шага: " + serie.getMove());
if (serie.getIsSelected()) console.log("Ряд выделен"); else console.log("Ряд не выделен");

В результате выполнения примера в окно консоли браузера будет выведена
 информация о ряде данных.


См. также:


[RatingChartSerie](RatingChartSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
