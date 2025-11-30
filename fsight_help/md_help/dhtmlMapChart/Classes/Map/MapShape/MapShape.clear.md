# MapShape.clear

MapShape.clear
-


# MapShape.clear


## Синтаксис


clear();


## Описание


Метод clear очищает область
 слоя карты.


## Пример


Для выполнения примера необходимо наличие на html-странице объекта типа
 [PP.MapShape](MapShape.htm) (см. страницу описания свойства
 [MapShape.Visual](MapShape.Visual.htm)) с наименованием «mapShape».
 Очистим область слоя карты и удалим всплывающую подсказку для неё:


function showMapShape(mapShape) {
    mapShape.getToolTip().show();
    mapShape.show();
}
showMapShape(mapShape);
После выполнения примера область слоя карты была очищена, а всплывающая
 подсказка удалена:


![](MapShape_clear.png)


См. также:


[MapShape](MapShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
