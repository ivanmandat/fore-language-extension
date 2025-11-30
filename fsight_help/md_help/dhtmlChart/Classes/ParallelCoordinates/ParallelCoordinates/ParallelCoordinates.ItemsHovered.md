# ParallelCoordinates.ItemsHovered

ParallelCoordinates.ItemsHovered
-


# ParallelCoordinates.ItemsHovered


## Синтаксис


ItemsHovered: function (sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии. Аргументы: Items
 - линии, на которые наведен курсор.


## Описание


Событие ItemsHovered наступает
 после наведения курсора на линию диаграммы.


## Пример


Для реализации примера необходимо наличие компонента [ParallelCoordinates](../../../Components/ParallelCoordinates/ParallelCoordinates.htm)
 с наименованием «coord» (см. «[Пример
 создания компонента ParallelCoordinates](../../../Components/ParallelCoordinates/Example_ParallelCoordinates.htm)»). Обработаем событие ItemsHovered:


// Обработаем событие ItemsHovered
coord.ItemsHovered.add(function(sender, args) {
    console.log("Курсор находится над линией диаграммы");
});
В результате выполнения примера после наведения курсора на линию диаграммы
 в консоли браузера будет выведено соответствующее сообщение.


См. также:


[ParallelCoordinates](ParallelCoordinates.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
