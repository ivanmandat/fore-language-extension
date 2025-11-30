# MapLayer.rebuildLabels

MapLayer.rebuildLabels
-


# MapLayer.rebuildLabels


## Синтаксис


rebuildLabels();


## Описание


Метод rebuildLabels перерисовывает метки для областей текущего и дочерних слоёв карты.


## Пример


Выполним пример, приведённый на странице [MapShape.rebuildLabel](../MapShape/MapShape.rebuildLabel.htm), предварительно заменив строки сценария


shape.rebuildLabel(label);

и


shape.updateLabelPosition();

на следующие фрагменты кода соответственно:


map.getLayer("Regions").rebuildLabels();

и


map.getLayer("Regions").updateLabelPositions(0.5);

Результат выполнения примера будет тем же самым.


См. также:


[MapLayer](MapLayer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
