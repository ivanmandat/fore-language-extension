# MapLayer.removeSubLayer

MapLayer.removeSubLayer
-


# MapLayer.removeSubLayer


## Синтаксис


removeSubLayer(id: String);


## Параметры


id. Идентификатор дочернего
 слоя карты.


## Описание


Метод removeSubLayer удаляет
 дочерний слой карты.


## Пример


Для выполнения примера необходимо наличие на html-странице объекта типа
 [PP.MapLayer](../MapShape/MapShape.htm) (см. страницу описания
 свойства [MapLayer.addSubLayer](MapLayer.addSubLayer.htm))
 с наименованием «layer». Удалим дочерний слой карты с идентификатором
 «Visuals»:


var parentLayer = getParentLayer();
parentLayer.removeSubLayer("Visuals");
map.draw();
В результате выполнения примера дочерний слой карты «Visuals» вместе
 со столбиковым, круговым и пузырьковым показателями был удалён.


См. также:


[MapLayer](MapLayer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
