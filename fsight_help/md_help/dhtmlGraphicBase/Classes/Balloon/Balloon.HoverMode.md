# Balloon.HoverMode

Balloon.HoverMode
-


**


# Balloon.HoverMode


## Синтаксис


HoverMode: [PP.HoverMode](dhtmlBubbleChart.chm::/Enums/PP.HoverMode.htm);


## Описание


Свойство HoverMode определяет
 метод отображения подсказки.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setHoverMode,
 а возвращается с помощью метода getHoverMode.**


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [BubbleChart](../../../dhtmlBubbleChart/Components/BubbleChart/BubbleChart.htm)
 с наименованием «bubbleChart» (см. «[Пример
 создания компонента BubbleChart](../../../dhtmlBubbleChart/Components/BubbleChart/BubbleChart_Example.htm)»). Наведем мышь на первую точку третьего
 ряда и получим настройки статичной подсказки прицела элемента пузырьковой
 диаграммы и поменяем положение подсказки:


// Получим третий ряд данных
series = bubbleChart.getSeries()[2];
// Получим первую точку ряда данных
seriePoint = series.getPoints()[0];
// Получим прицел пузырька
cross = seriePoint.getCrosshair();
// Получим подпись оси Х прицела пузырька
bloon = cross.getXLabel();
// Получим настройки подсказки
console.debug("Длина хвоста: " + bloon.getTailLength());
console.debug("Положение хвоста: " + bloon.getTailPosition());
console.debug("Метод отображения: " + bloon.getHoverMode());
console.debug("Отступ: " + bloon.getOffset());
console.debug("Сторона: " + bloon.getSide());
console.debug("Минимальный отступ: " + bloon.getMinTailOffset());
console.debug("Координата Х: " + bloon.getTargetX());
console.debug("Координата Y: " + bloon.getTargetY());
console.debug("Подсказка выходит за свободную область: " + bloon.getIsTargetOut());
// Установим новое положение подсказки
bloon.setPosition(bloon.getTargetX(),bloon.getTargetY()-50);
В результате выполнения примера в консоль были выведены текущие настройки
 подсказки прицела пузырьковой диаграммы, подсказка была отрисована в новом
 положении.


См. также:


[Balloon](Balloon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
