# PCArea.PaperArea

PCArea.PaperArea
-


# PCArea.PaperArea


## Синтаксис


PaperArea: PP.[Rect](dhtmlCommon.chm::/Classes/PP/Rect/Rect.htm);


## Описание


Свойство PaperArea определяет
 прямоугольник, ограничивающий область рисования.


## Комментарии


Значение свойства устанавливается из JSON, а возвращается с помощью
 метода getPaperArea.


## Пример


Для реализации примера необходимо наличие компонента [ParallelCoordinates](../../../Components/ParallelCoordinates/ParallelCoordinates.htm)
 с наименованием «coord» (см. «[Пример
 создания компонента ParallelCoordinates](../../../Components/ParallelCoordinates/Example_ParallelCoordinates.htm)»). Получим размеры области
 рисования диаграммы:


// Получаем размер области диаграммы
console.log("Высота области диаграммы: " + coord.getChartArea().getPaperArea().getHeight());
console.log("Ширина области диаграммы: " + coord.getChartArea().getPaperArea().getWidth());
В результате в консоль будут выведены размеры области рисования диаграммы:


Высота области диаграммы: 366


Ширина области диаграммы: 580


См. также:


[PCArea](PCArea.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
