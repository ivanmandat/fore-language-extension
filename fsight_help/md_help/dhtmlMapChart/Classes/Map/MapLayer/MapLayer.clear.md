# MapLayer.clear

MapLayer.clear
-


# MapLayer.clear


## Синтаксис


clear();


## Описание


Метод clear очищает слой карты.


## Пример


Для выполнения примера необходимо наличие на html-странице объекта типа
 [PP.MapLayer](../MapShape/MapShape.htm) (см. страницу описания
 свойства [MapLayer.addSubLayer](MapLayer.addSubLayer.htm))
 с наименованием «layer». Очистим все дочерние слои:


var parentLayer = getParentLayer();
for (var i in parentLayer.getSubLayers()) {
    var layer = parentLayer.getSubLayers()[i];
    // Очищаем слой
    layer.clear();
}
// Обновляем карту
map.refresh();
В результате выполнения примера слой карты вместе со столбиковым,
 круговым и пузырьковым показателями был удалён.


См. также:


[MapLayer](MapLayer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
