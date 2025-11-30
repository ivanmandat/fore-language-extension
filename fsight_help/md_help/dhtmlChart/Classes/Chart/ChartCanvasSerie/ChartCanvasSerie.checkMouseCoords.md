# ChartCanvasSerie.checkMouseCoords

ChartCanvasSerie.checkMouseCoords
-


# ChartCanvasSerie.checkMouseCoords


## Синтаксис


checkMouseCoords(coords: Object);


## Параметры


coords. Координаты указателя
 мыши.


## Описание


Метод checkMouseCoords проверяет,
 соответствует ли указанным координатам какая-либо точка из ряда данных
 диаграммы.


## Комментарии


Метод возвращает значение типа [PP.Ui.ChartPoint](../ChartPoint/ChartPoint.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [Chart](../../../Components/Chart/Chart.htm) с наименованием
 «chart» (см. «[Пример
 создания линейной диаграммы](../../../Components/Chart/ChartLine.htm)»). Обработаем события [Click](ChartCanvasSerie.Click.htm)
 и [OnContextMenu](ChartCanvasSerie.OnContextMenu.htm) ряда
 данных диаграммы:


// Возвращает точку по её расположению
function getPointByPosition(args) {
    var coords = {
        X: args.Event.x,
        Y: args.Event.y
    };
    for (var i in chart.getSeries()) {
        var serie = chart.getSeries()[i];
        var point = serie.checkMouseCoords(coords, args.Event);
        if (point) {
            return point;
        }
    }
    return null;
}
// Обработаем событие Click
function onChartClick(sender, args) {
    var point = getPointByPosition(args);
    if (point) {
        var serie = point.getParent();
        serie.Click.fire(serie, {
            Point: point
        });
    }
};
// Обработаем событие contextmenu
function onContextMenu(sender, args) {
    // Получаем точку ряда данных
    var point = getPointByPosition(args);
    if (point) {
        var serie = point.getParent();
        serie.OnContextMenu.fire(this, {
            Point: point,
            Serie: serie
        });
    }
};
// Добавляем обработчик события нажатия кнопки мыши
chart.addEvent(chart.getDomNode(), "click", onChartClick);
chart.addEvent(chart.getDomNode(), "contextmenu", onContextMenu);
Далее выделим произвольный ряд данных. В результате выполнения примера
 при нажатии на точку ряда данных диаграммы будет выведено её значение:


Выбрана точка со значением 55 в пределах области
 построения диаграммы


При вызове контекстного меню для точки будет выводиться информация о ряде
 данных, к которому точка принадлежит:


Ряд данных является прогнозным и имеет индекс 0


Ряд данных выделен


Ряд данных не подсвечен


На ряд данных не наведён курсор мыши


См. также:


[ChartCanvasSerie](ChartCanvasSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
