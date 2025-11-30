# ChartPoint.State

ChartPoint.State
-


# ChartPoint.State


## Синтаксис


State: String;


## Описание


Свойство State определяет состояние
 точки ряда данных диаграммы.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setState,
 а возвращается с помощью метода getState.


Допустимые значения:


	- Normal.
	 Точка ряда данных в обычном состоянии (по умолчанию);


	- Hover.
	 Точка ряда данных, на которую был наведён курсор мыши.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [Chart](../../../Components/Chart/Chart.htm)
 с наименованием «chart» (см. «[Пример
 создания гистограммы с накоплением](../../../Components/Chart/ChartPoint.htm)»). Свяжем первую точку второго
 ряда данных диаграммы с остальными точками данного ряда и изменим её состояние:


// Выводит точки ряда, на которые был наведён курсор мыши
function printHoveredElements() {
    console.log("Точки ряда данных в состоянии наведения курсором мыши:");
    for (var i in chart.getSeries()) {
        var serie = chart.getSeries()[i];
        for (var j in serie.getPoints()) {
            var point = serie.getPoints()[j];
            if (point.getState() == "Hover") {
                console.log(point.getId());
            }
        }
    }
}
// Получаем второй ряд данных
var serie = chart.getSeries()[1];
// Получаем первую точку ряда
var point = serie.getPoints()[0];
// Получаем остальные точки ряда
var linkedPoints = serie.getPoints().slice(1, serie.getPoints().length);
// Связываем данные точки с первой точкой ряда данных
point.setLinkedPoints(linkedPoints);
// Изменяем состояние первой точки ряда и связынных с нею точек
point.setState("Hover", true);
// Выводим все точки, находящиеся в состоянии наведения курсором мыши
printHoveredElements();
В результате выполнения примера в состоянии наведения курсором мыши
 стала находится не только первая точка второго ряда, но и все связанные
 с ней точки. Соответствующая информация была выведена в консоли браузера:


Точки ряда данных в состоянии наведения курсором
 мыши:


point0


point1


point2


point3


point4


См. также:


[ChartPoint](ChartPoint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
