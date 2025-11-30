# PCAxis.getWidth

PCAxis.getWidth
-


# PCAxis.getWidth


## Синтаксис


getWidth();


## Описание


Метод getWidth возвращает ширину
 оси диаграммы.


## Пример


Для реализации примера необходимо наличие компонента [ParallelCoordinates](../../../Components/ParallelCoordinates/ParallelCoordinates.htm)
 с наименованием «coord» (см. «[Пример
 создания компонента ParallelCoordinates](../../../Components/ParallelCoordinates/Example_ParallelCoordinates.htm)»). Получим ширину первой оси
 диаграммы:


// Получаем ширину первой оси диаграммы
console.log("Ширина первой оси диаграммы: " + coord.getAxes()[0].getWidth());
В результате в консоль будет выведена ширина первой оси диаграммы:


Ширина первой оси диаграммы: 4


См. также:


[PCAxis](PCAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
