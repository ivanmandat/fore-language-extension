# PCArea.Chart

PCArea.Chart
-


# PCArea.Chart


## Синтаксис


Chart: [PP.Ui.ParallelCoordinates](../ParallelCoordinates/ParallelCoordinates.htm);


## Описание


Свойство Chart устанавливает
 диаграмму, данные которой будут отрисовываться на области.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setChart,
 а возвращается с помощью метода getChart.


## Пример


Для реализации примера необходимо наличие компонента [ParallelCoordinates](../../../Components/ParallelCoordinates/ParallelCoordinates.htm)
 с наименованием «coord» (см. «[Пример
 создания компонента ParallelCoordinates](../../../Components/ParallelCoordinates/Example_ParallelCoordinates.htm)»). Получим область отрисовки
 и выведем идентификатор ее диаграммы:


// Получаем область отрисовки
var chart = coord.getChartArea();
// Получаем идентификатор диаграммы области отрисовки
console.log("Идентификатор диаграммы области отрисовки: " + chart.getChart().getId());
В результате в консоль будет выведен идентификатор диаграммы области
 отрисовки:


Идентификатор диаграммы области отрисовки: ParallelCoordinates684


См. также:


[PCArea](PCArea.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
