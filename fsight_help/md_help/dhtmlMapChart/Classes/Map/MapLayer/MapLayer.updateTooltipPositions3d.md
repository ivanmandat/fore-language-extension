# MapLayer.updateTooltipPositions3d

MapLayer.updateTooltipPositions3d
-


# MapLayer.updateTooltipPositions3d


## Синтаксис


updateTooltipPositions3d();


## Описание


Метод updateTooltipPositions3d обновляет расположение всплывающей подсказки для областей текущей и дочерних слоёв трёхмерной карты.


## Пример


Выполним пример, приведённый на странице описания метода [MapShape.updateTooltipPosition3d](../MapShape/MapShape.updateTooltipPosition3d.htm), предварительно заменив строку сценария


shape.updateTooltipPosition3d();

на следующую:


map.getLayer("Regions").updateTooltipPositions3d();

Результат выполнения примера будет тем же самым.


См. также:


[MapLayer](MapLayer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
