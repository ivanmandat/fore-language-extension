# ChartCanvasAxis.handleClick

ChartCanvasAxis.handleClick
-


# ChartCanvasAxis.handleClick


## Синтаксис


handleClick(coords: Object, event: MouseEvent);


## Параметры


coords. Координаты, соответствующие
 текущему положению указателя мыши над диаграммой;


event. Событие мыши.


## Описание


Метод handleClick генерирует
 событие нажатия на подпись оси диаграммы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [Chart](../../../Components/Chart/Chart.htm) с наименованием
 «chart» (см. «[Пример
 создания точечной диаграммы](../../../Components/Chart/ChartScatter.htm)»). Обработаем событие щелчка на подпись
 оси и двойного щелчка на заголовок оси диаграммы:


// Получаем ось Y диаграммы
var yAxis = chart.getYAxis();
// Обрабатывает нажатие на подпись оси диаграммы
function onLabelClick(sender, args) {
    var coords = {
        X: args.Event.x,
        Y: args.Event.y
    };
    // Обработаем нажатие на подпись оси
    yAxis.handleClick(coords, args.Event);
};
// Обрабатывает двойное нажатие на заголовок диаграммы
function onTitleClick(sender, args) {
    var coords = {
        X: args.Event.x,
        Y: args.Event.y
    };
    // Обработаем двойное нажатие на заголовок оси
    yAxis.handleDblClick(coords, args.Event);
};
// Добавляем обработчик события нажатия кнопки мыши
chart.addEvent(chart.getDomNode(), "click", onLabelClick);
// Добавляем обработчик события двойного нажатия кнопки мыши
chart.addEvent(chart.getDomNode(), "dblclick", onTitleClick);
В результате выполнения примера после щелчка мышью подпись оси диаграммы
 подчёркивается:


![](ChartCanvasAxis_checkMouseCoords2.png)


После двойного щелчка мышью по заголовку оси диаграммы в консоли браузера
 выводится текст данного заголовка:


Заголовок оси: «Значение»


См. также:


[ChartCanvasAxis](ChartCanvasAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
