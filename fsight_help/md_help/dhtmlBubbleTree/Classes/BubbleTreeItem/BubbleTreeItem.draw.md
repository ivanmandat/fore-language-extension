# BubbleTreeItem.draw

BubbleTreeItem.draw
-


**


# BubbleTreeItem.draw


## Синтаксис


draw();


## Описание


Метод draw** перерисовывает
 элемент пузырькового дерева.


## Пример


Для выполнения примера необходимо сначала выполнить пример на странице
 описания метода [BubbleTreeItem.getNeighbors](BubbleTreeItem.getNeighbors.htm).


// Рассчитаем кадр анимации
item.animationStep(1);
// Перерисуем элемент
item.draw();
// Отобразим и отрисуем всплывающую подсказку
item.switchTooltip(true);
item.drawTooltips();
// Обновим настройки всплывающей подсказки элемента
item.updateTooltipSettings();
// Обновим объект всплывающей подсказки
item.updateTooltip();
В результате выполнения примера была отображена всплывающая подсказка,
 перерисован элемент пузырькового дерева и рассчитан кадр анимации.


См. также:


[BubbleTreeItem](BubbleTreeItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
