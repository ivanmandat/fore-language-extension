# MapLayer.rebuildToolTips

MapLayer.rebuildToolTips
-


# MapLayer.rebuildToolTips


## Синтаксис


rebuildToolTips();


## Описание


Метод rebuildToolTip перерисовывает всплывающую подсказку для областей текущего и дочерних слоёв карты.


## Пример


Выполним пример, приведённый на странице [MapShape.rebuildToolTip](../MapShape/MapShape.rebuildToolTip.htm), предварительно заменив строки сценария


shape.rebuildToolTip();

и


shape.updateTooltipPosition();

на следующие фрагменты кода соответственно:


map.getLayer("Regions").rebuildToolTips();

и


map.getLayer("Regions").updateTooltipPositions();

Результат выполнения примера будет тем же самым.


См. также:


[MapLayer](MapLayer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
