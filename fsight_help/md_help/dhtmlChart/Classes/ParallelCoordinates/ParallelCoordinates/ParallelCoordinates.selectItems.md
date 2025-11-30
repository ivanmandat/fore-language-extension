# ParallelCoordinates.selectItems

ParallelCoordinates.selectItems
-


# ParallelCoordinates.selectItems


## Синтаксис


selectItems(items: Object, reset: Boolean);


## Параметры


items. Линии диаграммы, которые
 будут выделены;


reset. Признак сброса предыдущих
 выделенных линий диаграммы. Допустимые значения:


	- true.
	 Выделение предыдущих линий диаграммы будет сброшено;


	- false.
	 Будут учтены предыдущие выделенные линии диаграммы (по умолчанию).


## Описание


Метод selectItems устанавливает
 выделение заданным линиям диаграммы.


## Пример


Для реализации примера необходимо наличие компонента [ParallelCoordinates](../../../Components/ParallelCoordinates/ParallelCoordinates.htm)
 с наименованием «coord» (см. «[Пример
 создания компонента ParallelCoordinates](../../../Components/ParallelCoordinates/Example_ParallelCoordinates.htm)»). Выделим вторую линию диаграммы
 с параллельными координатами на всём временном интервале:


var lines = {};
// Получаем вторую линию диаграммы
var lineIndex = 1;
var line = coord.getLines()[lineIndex];
if(line) {
    lines[line.getId()] = line;
    // Выделим вторую линию диаграммы
    coord.selectItems(lines);
};
В результате выполнения примера была выделена вторая линия диаграммы.


См. также:


[ParallelCoordinates](ParallelCoordinates.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
