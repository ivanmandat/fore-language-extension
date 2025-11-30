# ParallelCoordinates.RenderToCanvas

ParallelCoordinates.RenderToCanvas
-


# ParallelCoordinates.RenderToCanvas


## Синтаксис


RenderToCanvas: Boolean;


## Описание


Свойство RenderToCanvas определяет,
 куда будет выводиться диаграмма.


## Комментарии


Допустимые значения:


	- true.
	 Диаграмма выводится на SVGElement (по умолчанию);


	- false.
	 Диаграмма выводится на Canvas.


Значение свойства устанавливается из JSON, а возвращается с помощью
 метода getRenderToCanvas.


## Пример


Для реализации примера необходимо наличие компонента [ParallelCoordinates](../../../Components/ParallelCoordinates/ParallelCoordinates.htm)
 с наименованием «coord» (см. «[Пример
 создания компонента ParallelCoordinates](../../../Components/ParallelCoordinates/Example_ParallelCoordinates.htm)»). Проверим, куда выводится
 диаграмма:


// Проверяем, куда выводится диаграмма
if (coord.getRenderToCanvas()) {
    console.log("Диаграмма выводится на SVGElement");
} else {
    console.log("Диаграмма выводится на Canvas");
}
В результате в консоль будет выведен результат проверки:


Диаграмма выводится на SVGElement


См. также:


[ParallelCoordinates](ParallelCoordinates.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
