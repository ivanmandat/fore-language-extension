# PCArea.getPaper

PCArea.getPaper
-


# PCArea.getPaper


## Синтаксис


getPaper();


## Описание


Метод getPaper возвращает лист,
 на котором рисуются элементы диаграммы.


## Комментарии


Возвращаемое значение - SVGElement.


## Пример


Для реализации примера необходимо наличие компонента [ParallelCoordinates](../../../Components/ParallelCoordinates/ParallelCoordinates.htm)
 с наименованием «coord» (см. «[Пример
 создания компонента ParallelCoordinates](../../../Components/ParallelCoordinates/Example_ParallelCoordinates.htm)»). Получаем величины отступов
 листа слева и сверху и размеры листа:


// Получаем величину отступа листа слева
console.log("Величина отступа слева: " + coord.getChartArea().getPaper().style.left);
// Получаем величину отступа листа сверху
console.log("Величина отступа сверху: " + coord.getChartArea().getPaper().style.top);
// Получаем ширину листа
console.log("Ширина листа: " + coord.getChartArea().getPaper().style.width);
// Получаем высоту листа
console.log("Высота листа: " + coord.getChartArea().getPaper().style.height);
В результате в консоль будут выведены величины отступов листа слева
 и сверху и размеры листа:


Величина отступа слева: 10px


Величина отступа сверху: 24px


Ширина листа: 580px


Высота листа: 366px


См. также:


[PCArea](PCArea.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
