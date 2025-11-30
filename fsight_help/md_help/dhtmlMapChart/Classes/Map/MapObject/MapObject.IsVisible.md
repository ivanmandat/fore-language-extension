# MapObject.IsVisible

MapObject.IsVisible
-


# MapObject.IsVisible


## Синтаксис


IsVisible: Boolean;


## Описание


Свойство IsVisible определяет,
 отображается ли объект на карте.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setIsVisible,
 а возвращается с помощью метода getIsVisible.


Допустимые значения:


	- true.
	 Объект отображается на карте (по умолчанию);


	- false.
	 Объект не отображается на карте.


## Пример


Для выполнения примера необходимо наличие на html-странице объекта типа
 [PP.MapShape](../MapShape/MapShape.htm) (см. страницу описания
 свойства [MapShape.Visual](../MapShape/MapShape.Visual.htm))
 с наименованием «mapShape». Скроем область слоя карты и всплывающую подсказку
 для неё:


function setVisibleForMapShape(mapShape, isVisible) {
    // Скрываем область слоя карты
    mapShape.setIsVisible(isVisible);
    if (isVisible) {
        // Отображаем всплывающую подсказку
        mapShape.toggleTooltip();
    } else {
        // Скрываем всплывающую подсказку
        mapShape.getToolTip().setIsVisible(isVisible);
    }
}
setVisibleForMapShape(mapShape, false);
В результате выполнения примера область слоя карты с идентификатором
 «RU-KYA» и всплывающая подсказка для неё были скрыты:


![](../MapShape/MapShape_clear.png)


См. также:


[MapObject](MapObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
