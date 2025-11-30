# MapLayer.updateLabelPositions3d

MapLayer.updateLabelPositions3d
-


# MapLayer.updateLabelPositions3d


## Синтаксис


updateLabelPositions3d();


## Описание


Метод updateLabelPosition3d обновляет расположение меток для областей текущего и дочернего слоёв трёхмерной карты.


## Пример


Выполним пример, приведённый на странице описания метода [MapShape.toggleLabel3d](../MapShape/MapShape.toggleLabel3d.htm), предварительно заменив строку сценария


shape.updateLabelPosition3d();

на следующую:


map.getLayer("Regions").updateLabelPositions3d();

Результат выполнения примера будет тем же самым.


См. также:


[MapLayer](MapLayer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
