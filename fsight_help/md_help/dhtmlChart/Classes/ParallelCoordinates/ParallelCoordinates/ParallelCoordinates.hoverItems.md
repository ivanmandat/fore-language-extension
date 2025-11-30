# ParallelCoordinates.hoverItems

ParallelCoordinates.hoverItems
-


# ParallelCoordinates.hoverItems


## Синтаксис


hoverItems(items: Object, timelineStep: Integer);


## Параметры


items. Линии диаграммы, которые
 будут подсвечены;


timelineStep. Индекс временного
 интервала, на котором будут подсвечены указанные линии диаграммы. Необязательный
 параметр.


## Описание


Метод hoverItems подсвечивает
 заданные линии диаграммы на указанном временном интервале.


## Пример


Для реализации примера необходимо наличие компонента [ParallelCoordinates](../../../Components/ParallelCoordinates/ParallelCoordinates.htm)
 с наименованием «coord» (см. «[Пример
 создания компонента ParallelCoordinates](../../../Components/ParallelCoordinates/Example_ParallelCoordinates.htm)»). Подсветим первую линию
 диаграммы с параллельными координатами на всём временном интервале:


var lines = {};
// Получаем первую линию диаграммы
var lineIndex = 0;
var line = coord.getLines()[lineIndex];
if(line) {
    lines[line.getId()] = line;
    // Подсвечиваем первую линию диаграммы
    coord.hoverItems(lines);
};
// Обновляем диаграмму
coord.refreshView(null, false);
В результате выполнения примера была подсвечена первая линия диаграммы.


См. также:


[ParallelCoordinates](ParallelCoordinates.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
