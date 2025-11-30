# MapShape.rebuildToolTip

MapShape.rebuildToolTip
-


# MapShape.rebuildToolTip


## Синтаксис


rebuildToolTip();


## Описание


Метод rebuildToolTip перерисовывает всплывающую подсказку для области слоя карты.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием «map» (см. «[Пример создания компонента MapChart](../../../Components/MapChart/MapChart_Example.htm)»). Нарисуем для области слоя карты с идентификатором «RU-KYA» всплывающую подсказку. Затем уменьшим масштаб карты, обновив расположение созданной подсказки:


// Получим область слоя карты с идентификатором «RU»
var shape = map.getShape("RU-KYA");
// Разрешим отображение всплывающей подсказки
shape._tooltipOn = true;
// Получим прямоугольную область, ограничивающую область слоя карты
var bounds = shape.getBoundsRect();
// Определим отступы метки от левого и верхнего края карты
var targetX = bounds.getLeft() + bounds.getWidth() / 2 +
    (map.getWidth() - map.getTopobaseSize().width) / 2;
var targetY = bounds.getTop() + bounds.getHeight() / 2 +
    (map.getHeight() - map.getTopobaseSize().height) / 2;
// Создадим всплывающую подсказку
shape._ToolTip = new PP.MapToolTip({
    Chart: map,
    MaskText: "{%Name} \n {%AreaTitle}: {%AreaValue:#,##.00}",
    TargetX: targetX,
    TargetY: targetY
});
// Перерисуем всплывающую подсказку
shape.rebuildToolTip();
// Определим центр карты
var pointZoom = new PP.Point(map.getWidth() / 2, map.getHeight() / 2);
// Уменьшим масштаб карты в 2 раза
map.setScale(0.5, pointZoom, 0, 0);
// Установим первоначальный центр области слоя карты для обновления расположения подсказки
shape._tooltipRelX = bounds.getLeft() + bounds.getWidth() / 2;
shape._tooltipRelY = bounds.getTop() + bounds.getHeight() / 2;
// Обновим расположение метки
shape.updateTooltipPosition();

В результате выполнения примера для области слоя карты с идентификатором «RU-KYA» была нарисована всплывающая подсказка. После уменьшения масштаба карты в 2 раза расположение подсказки было обновлено:


![](MapShape_rebuildToolTip.png)


См. также:


[MapShape](MapShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
