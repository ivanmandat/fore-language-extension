# RatingChart.showToolTip

RatingChart.showToolTip
-


# RatingChart.showToolTip


## Синтаксис


showToolTip(serie: Number, coords: Object, timeout:
 Number);


## Параметры


*serie.* Номер ряда данных;


*coords.* Координаты всплывающей
 подсказки;


*timeout.* Задержка.


## Описание


Метод showToolTip отображает
 всплывающую подсказку указанного ряда данных.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [RatingChart](../../Components/RatingChart/RatingChart.htm)
 с наименованием «ratingChart» (см. «[Пример
 создания компонента RatingChart](../../Components/RatingChart/RatingChart_Example.htm)»). Отобразим всплывающую подсказку
 с заданными параметрами:


// Укажем координаты, в которых появится подсказка
coords = {X: 100, Y: 100}
// Отобразим всплывающую подсказку первого ряда данных
ratingChart.showToolTip(1, coords, 1);

В результате выполнения примера будет отображена всплывающая подсказка
 первого ряда данных рейтинговой диаграммы.


См. также:


[RatingChart](RatingChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
